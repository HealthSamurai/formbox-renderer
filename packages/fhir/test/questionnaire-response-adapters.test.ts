import { describe, expect, it } from "vitest";

import {
  R4QuestionnaireResponseAdapter,
  R5QuestionnaireResponseAdapter,
} from "../lib/index.ts";

describe("QuestionnaireResponse adapters", () => {
  it("maps R4 singleton identifier and preserves R5 identifier arrays", () => {
    const r4Adapter = new R4QuestionnaireResponseAdapter();
    const r5Adapter = new R5QuestionnaireResponseAdapter();

    const r4Response = {} as Parameters<
      R4QuestionnaireResponseAdapter["setIdentifier"]
    >[0];
    const r5Response = {} as Parameters<
      R5QuestionnaireResponseAdapter["setIdentifier"]
    >[0];

    const identifiers = [
      {
        system: "urn:test",
        value: "id-1",
      } as NonNullable<
        Parameters<R4QuestionnaireResponseAdapter["setIdentifier"]>[1]
      >[number],
      {
        system: "urn:test",
        value: "id-2",
      } as NonNullable<
        Parameters<R5QuestionnaireResponseAdapter["setIdentifier"]>[1]
      >[number],
    ];

    r4Adapter.setIdentifier(r4Response, identifiers);
    r5Adapter.setIdentifier(r5Response, identifiers);

    expect((r4Response as { identifier?: unknown }).identifier).toEqual(
      identifiers[0],
    );
    expect((r5Response as { identifier?: unknown }).identifier).toEqual(
      identifiers,
    );
    expect(r4Adapter.getIdentifier(r4Response)).toEqual([identifiers[0]]);
    expect(r5Adapter.getIdentifier(r5Response)).toEqual(identifiers);
  });
});
