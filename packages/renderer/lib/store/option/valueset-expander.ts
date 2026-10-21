import type { Coding, ValueSet } from "@formbox/fhir";
import type { ExpansionCache, IValueSetExpander } from "../../types.ts";
import { dedupe, hasHttpStatus } from "../../utilities.ts";

export class ValueSetExpander implements IValueSetExpander {
  private readonly caches = new Map<string, ExpansionCache>();

  constructor(private readonly defaultServer?: string) {}

  async expand(
    canonical: string,
    preferredServers: ReadonlyArray<string>,
    properties: ReadonlyArray<string> = [],
  ): Promise<Coding[]> {
    // Property and designation names for choiceColumn paths.
    const parameters =
      properties.length > 0
        ? `&includeDesignations=true${properties
            .map((property) => `&property=${encodeURIComponent(property)}`)
            .join("")}`
        : "";
    const key = canonical + parameters;
    const attempts = dedupe(
      this.defaultServer
        ? [...preferredServers, this.defaultServer]
        : [...preferredServers],
    );

    if (attempts.length === 0) {
      throw new Error(
        `No terminology servers available to expand ValueSet (${canonical}).`,
      );
    }

    let lastError: unknown;

    for (const target of attempts) {
      try {
        let cache = this.caches.get(target);
        if (!cache) {
          cache = new Map();
          this.caches.set(target, cache);
        }

        let promise = cache.get(key);
        if (!promise) {
          promise = this.requestExpansion(target, canonical, parameters).catch(
            (error) => {
              if (
                !hasHttpStatus(error) ||
                error.status < 400 ||
                error.status >= 500
              ) {
                cache?.delete(key);
              }
              throw error;
            },
          );
          cache.set(key, promise);
        }

        return await promise;
      } catch (error) {
        lastError = error;
      }
    }

    throw (
      lastError ??
      new Error(
        `Failed to expand ValueSet (${canonical}) via preferred servers.`,
      )
    );
  }

  private async requestExpansion(
    server: string,
    canonical: string,
    parameters: string,
  ): Promise<Coding[]> {
    const base =
      server.endsWith("/") || server.endsWith("\\")
        ? server.replace(/[\\/]+$/, "")
        : server;
    const url = `${base}/ValueSet/$expand?url=${encodeURIComponent(canonical)}${parameters}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/fhir+json",
      },
    });

    if (!response.ok) {
      const error = new Error(
        `Failed to expand ValueSet (${canonical}) via ${server}: ${response.status} ${response.statusText}`,
      );
      (error as Error & { status?: number }).status = response.status;
      throw error;
    }

    const valueSet: ValueSet = await response.json();

    return valueSet.expansion?.contains ?? [];
  }
}
