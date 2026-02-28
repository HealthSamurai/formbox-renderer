import { computed, makeObservable } from "mobx";
import { fromPromise, type IPromiseBasedObservable } from "mobx-utils";
import type { Coding, OperationOutcomeIssue } from "@formbox/fhir";

import type { IQuestionNode, IUnitOptions } from "../../types.ts";
import {
  EXT,
  extractExtensionValue,
  extractExtensionsValues,
  OPTIONS_ISSUE_EXPRESSION,
  tokenify,
} from "../../utilities.ts";

function getOptionsErrorMessage(
  error: unknown,
  unknownErrorMessage: string,
): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (error == undefined) {
    return unknownErrorMessage;
  }
  return String(error);
}

function toOptionsIssue(
  error: unknown,
  unknownErrorMessage: string,
): OperationOutcomeIssue {
  const message = getOptionsErrorMessage(error, unknownErrorMessage);
  return {
    severity: "error",
    code: "invalid",
    diagnostics: message,
    details: { text: message },
    expression: [OPTIONS_ISSUE_EXPRESSION],
  };
}

export class UnitOptionStore implements IUnitOptions {
  constructor(private readonly question: IQuestionNode) {
    makeObservable(this);
  }

  @computed
  private get explicitOptions(): readonly Coding[] {
    if (this.question.type !== "quantity") {
      return [];
    }

    return extractExtensionsValues(
      "Coding",
      this.question.template,
      EXT.QUESTIONNAIRE_UNIT_OPTION,
    );
  }

  @computed
  private get rawUnitValueSetCanonical(): string | undefined {
    if (this.question.type !== "quantity") {
      return undefined;
    }

    return extractExtensionValue(
      "canonical",
      this.question.template,
      EXT.QUESTIONNAIRE_UNIT_VALUE_SET,
    );
  }

  @computed
  private get unitValueSetCanonical(): string | undefined {
    const canonical = this.rawUnitValueSetCanonical;
    if (canonical == undefined) {
      return undefined;
    }

    const trimmed = canonical.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  @computed
  private get unitValueSetCanonicalIssue(): OperationOutcomeIssue | undefined {
    if (
      this.rawUnitValueSetCanonical == undefined ||
      this.unitValueSetCanonical != undefined
    ) {
      return undefined;
    }

    return toOptionsIssue(
      new Error("questionnaire-unitValueSet must be a canonical URL string."),
      this.question.form.strings.errors.unknownMessage,
    );
  }

  @computed({ keepAlive: true })
  private get expansion(): IPromiseBasedObservable<Coding[]> | undefined {
    const canonical = this.unitValueSetCanonical;
    if (!canonical) {
      return undefined;
    }

    return fromPromise(
      this.question.form.valueSetExpander.expand(
        canonical,
        this.question.preferredTerminologyServers,
      ),
    );
  }

  @computed
  private get expandedOptions(): readonly Coding[] {
    return (
      this.expansion?.case({
        fulfilled: (value) => value,
      }) ?? []
    );
  }

  @computed
  get hasConstraint(): boolean {
    return (
      this.explicitOptions.length > 0 ||
      this.rawUnitValueSetCanonical != undefined
    );
  }

  @computed
  get isLoading(): boolean {
    return this.expansion?.state === "pending";
  }

  @computed
  get options(): readonly Coding[] {
    const seen = new Set<string>();
    const result: Coding[] = [];

    for (const option of [...this.explicitOptions, ...this.expandedOptions]) {
      const token = tokenify("Coding", option);
      if (!seen.has(token)) {
        seen.add(token);
        result.push(option);
      }
    }

    return result;
  }

  @computed
  get issues(): readonly OperationOutcomeIssue[] {
    const issues = this.unitValueSetCanonicalIssue
      ? [this.unitValueSetCanonicalIssue]
      : [];

    return [
      ...issues,
      ...(this.expansion?.case({
        rejected: (error) => [
          toOptionsIssue(
            error,
            this.question.form.strings.errors.unknownMessage,
          ),
        ],
      }) ?? []),
    ];
  }
}
