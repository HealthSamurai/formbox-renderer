import { action, computed, makeObservable, observable } from "mobx";
import type {
  AnswerConstraint,
  IQuestionNode,
  IUnitOptions,
} from "../../types.ts";
import type { Coding, OperationOutcomeIssue } from "@formbox/fhir";
import {
  asOperationOutcomeIssue,
  EXT,
  extractExtensionsValues,
  extractExtensionValue,
  tokenify,
} from "../../utilities.ts";
import type { IPromiseBasedObservable } from "mobx-utils";
import { fromPromise } from "mobx-utils";

export class UnitOptionStore implements IUnitOptions {
  private readonly customOptionsByToken = observable.map<string, Coding>(
    {},
    { deep: false, name: "UnitOptionStore.customOptionsByToken" },
  );

  constructor(readonly question: IQuestionNode<"quantity">) {
    makeObservable(this);
  }

  @computed
  private get explicitOptions(): Coding[] {
    return extractExtensionsValues(
      "Coding",
      this.question.template,
      EXT.QUESTIONNAIRE_UNIT_OPTION,
    );
  }

  @computed
  private get canonical(): string | undefined {
    return extractExtensionValue(
      "canonical",
      this.question.template,
      EXT.QUESTIONNAIRE_UNIT_VALUE_SET,
    );
  }

  @computed
  get unitOpen(): AnswerConstraint | undefined {
    return extractExtensionValue(
      "code",
      this.question.template,
      EXT.SDC_UNIT_OPEN,
    ) as AnswerConstraint | undefined;
  }

  @computed
  get effectiveUnitOpen(): AnswerConstraint {
    return (
      this.unitOpen ?? (this.hasOptions ? "optionsOnly" : "optionsOrString")
    );
  }

  @computed
  get supplementalSystem(): string | undefined {
    return extractExtensionValue(
      "canonical",
      this.question.template,
      EXT.SDC_UNIT_SUPPLEMENTAL_SYSTEM,
    );
  }

  @computed
  private get inherentOptions(): Coding[] {
    return this.expansion
      ? this.expansion.case({
          fulfilled: (value) => value,
          pending: () => [],
          rejected: () => [],
        })
      : this.explicitOptions;
  }

  @computed({ keepAlive: true })
  private get expansion(): IPromiseBasedObservable<Coding[]> | undefined {
    if (this.canonical) {
      return fromPromise(
        this.question.form.valueSetExpander.expand(
          this.canonical,
          this.question.preferredTerminologyServers,
        ),
      );
    }
    return;
  }

  @computed
  get hasOptions(): boolean {
    return this.explicitOptions.length > 0 || this.canonical != undefined;
  }

  @computed
  get isLoading(): boolean {
    return this.expansion?.state === "pending";
  }

  @computed
  get options(): readonly Coding[] {
    const seen = new Set<string>();

    return [
      ...this.inherentOptions,
      ...this.customOptionsByToken.values(),
    ].filter((coding) => {
      const token = tokenify("Coding", coding);
      if (seen.has(token)) {
        return false;
      }
      seen.add(token);

      return true;
    });
  }

  @computed
  get issues(): readonly OperationOutcomeIssue[] {
    return (
      this.expansion?.case({
        rejected: (error) => [
          asOperationOutcomeIssue(
            error,
            this.question.form.strings.errors.unknownMessage,
          ),
        ],
      }) ?? []
    );
  }

  @action
  rememberCustomOption(coding: Coding): void {
    if (this.effectiveUnitOpen !== "optionsOnly") {
      const token = tokenify("Coding", coding);
      if (
        !this.customOptionsByToken.has(token) &&
        !this.inherentOptions.some(
          (option) => tokenify("Coding", option) === token,
        )
      ) {
        this.customOptionsByToken.set(token, { ...coding });
      }
    }
  }
}
