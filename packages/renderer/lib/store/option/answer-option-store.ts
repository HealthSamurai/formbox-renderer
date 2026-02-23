import { computed, makeObservable } from "mobx";
import type {
  AnswerConstraint,
  AnswerOption,
  AnswerType,
  AnswerTypeToDataType,
  DataTypeToType,
  IAnswerOptions,
  IOptionSelection,
  IQuestionNode,
  OptionToken,
} from "../../types.ts";
import type {
  Coding,
  OperationOutcomeIssue,
  QuestionnaireItemAnswerOption,
} from "@formbox/fhir";
import {
  answerify,
  areValuesEqual,
  booleanify,
  buildId,
  EXT,
  extractExtensionValue,
  findExtension,
  getTranslated,
  getValue,
  OPTIONS_ISSUE_EXPRESSION,
  tokenify,
} from "../../utilities.ts";
import type { IPromiseBasedObservable } from "mobx-utils";
import { fromPromise } from "mobx-utils";
import { OptionSelection } from "./view-model/option-selection.ts";

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

export class AnswerOptionStore<
  T extends AnswerType,
> implements IAnswerOptions<T> {
  constructor(readonly question: IQuestionNode<T>) {
    makeObservable(this);
  }

  @computed
  private get answerOptions(): QuestionnaireItemAnswerOption[] {
    const slot = this.question.expressionRegistry.answer;
    if (slot) {
      return answerify(this.question.type, slot.value);
    }

    if (this.expandedValueSetOptions) {
      return this.expandedValueSetOptions;
    }

    return this.question.template.answerOption ?? [];
  }

  @computed.struct
  private get expandedValueSetOptions():
    | QuestionnaireItemAnswerOption[]
    | undefined {
    return this.expansion?.case({
      fulfilled: (value) =>
        value.map((coding: Coding) => ({
          valueCoding: coding,
        })),
    });
  }

  @computed({ keepAlive: true })
  private get expansion(): IPromiseBasedObservable<Coding[]> | undefined {
    if (this.question.template.answerValueSet) {
      return fromPromise(
        this.question.form.valueSetExpander.expand(
          this.question.template.answerValueSet,
          this.question.preferredTerminologyServers,
        ),
      );
    }
    return;
  }

  @computed
  get issues() {
    return (
      this.expansion?.case({
        rejected: (error) => [
          toOptionsIssue(error, this.question.form.strings.errors.unknown),
        ],
      }) ?? []
    );
  }

  @computed
  get inherentOptions(): AnswerOption<T>[] {
    if (this.question.type === "boolean" && this.answerOptions.length === 0) {
      return [
        {
          token: buildId(this.question.token, "true"),
          value: true,
          disabled: false,
          answerType: "boolean",
          prefix: undefined,
        },
        {
          token: buildId(this.question.token, "false"),
          value: false,
          disabled: false,
          answerType: "boolean",
          prefix: undefined,
        },
        ...(this.question.repeats
          ? []
          : [
              {
                token: buildId(this.question.token, "null"),
                value: undefined,
                disabled: false,
                answerType: "boolean",
                prefix: undefined,
              },
            ]),
      ] as AnswerOption<T>[];
    }

    const seen = new Set<OptionToken>();
    return this.answerOptions.flatMap((option) => {
      const value = this.getTranslatedValue(option);
      if (value == undefined) {
        return [];
      }

      const token = tokenify(this.question.dataType, value) as OptionToken;
      if (seen.has(token)) {
        return [];
      }
      seen.add(token);

      const disabled = !this.isOptionEnabled(option);

      return [
        {
          token,
          value,
          disabled,
          answerType: this.question.type,
          prefix: getTranslated(
            findExtension(option, EXT.OPTION_PREFIX),
            "valueString",
            this.question.form.language,
          ),
          media: extractExtensionValue(
            "Attachment",
            option,
            EXT.SDC_ITEM_ANSWER_MEDIA,
          ),
        } satisfies AnswerOption<T>,
      ];
    });
  }

  private getTranslatedValue(
    option: QuestionnaireItemAnswerOption,
  ): DataTypeToType<AnswerTypeToDataType<T>> | undefined {
    const value = getValue(this.question.dataType, option);
    if (value == undefined) return undefined;

    const language = this.question.form.language;
    if (language == undefined) return value;

    if (this.question.dataType === "string") {
      const localized = getTranslated(option, "valueString", language);
      return (localized ?? value) as DataTypeToType<AnswerTypeToDataType<T>>;
    }

    if (this.question.dataType === "Coding") {
      const coding = value as Coding;
      const display = getTranslated(coding, "display", language);

      return display == undefined
        ? value
        : ({ ...coding, display } as DataTypeToType<AnswerTypeToDataType<T>>);
    }

    return value;
  }

  @computed
  get constraint(): AnswerConstraint {
    return (
      this.question.adapter.questionnaireItem.getAnswerConstraint(
        this.question.template,
      ) ?? "optionsOnly"
    );
  }

  @computed
  get isLoading(): boolean {
    return this.expansion?.state === "pending";
  }

  @computed({ keepAlive: true })
  get select(): IOptionSelection<T> {
    return new OptionSelection(this.question, this);
  }

  private isOptionEnabled(option: QuestionnaireItemAnswerOption): boolean {
    const toggles = this.question.expressionRegistry.answerOptionToggles;
    if (toggles.length === 0) {
      return true;
    }

    const optionValue = getValue(this.question.dataType, option);
    if (optionValue === undefined) {
      return true;
    }

    let matched = false;
    for (const toggle of toggles) {
      const toggleMatches = toggle.options.some((candidate) => {
        const candidateValue = getValue(this.question.dataType, candidate);
        return candidateValue === undefined
          ? false
          : areValuesEqual(this.question.dataType, candidateValue, optionValue);
      });

      if (toggleMatches) {
        matched = true;
        if (booleanify(toggle.slot.value)) {
          return true;
        }
      }
    }

    return !matched;
  }
}
