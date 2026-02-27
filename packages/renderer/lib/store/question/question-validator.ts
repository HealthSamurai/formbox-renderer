import { computed, makeObservable } from "mobx";
import type { OperationOutcomeIssue } from "@formbox/fhir";

import { answerHasContent, formatString, makeIssue } from "../../utilities.ts";
import type { INodeValidator, IQuestionNode } from "../../types.ts";

export class QuestionValidator implements INodeValidator {
  private readonly question: IQuestionNode;

  constructor(question: IQuestionNode) {
    this.question = question;

    makeObservable(this);
  }

  @computed
  get issues(): OperationOutcomeIssue[] {
    const strings = this.question.form.strings;

    if (this.question.readOnly || !this.question.isEnabled) {
      return [];
    }

    if (!this.question.form.isSubmitAttempted) {
      return [];
    }

    const issues: OperationOutcomeIssue[] = [];
    const answers = this.question.repeats
      ? this.question.answers
      : this.question.answers.slice(0, 1);
    const populatedAnswers = answers.filter((answer) =>
      answerHasContent(answer),
    );

    if (
      this.question.minOccurs > 0 &&
      populatedAnswers.length < this.question.minOccurs
    ) {
      issues.push(
        makeIssue(
          "required",
          this.question.minOccurs === 1
            ? strings.validation.question.minOccursSingle
            : formatString(strings.validation.question.minOccursMultiple, {
                minOccurs: this.question.minOccurs,
              }),
        ),
      );
    }

    if (
      this.question.maxOccurs != undefined &&
      populatedAnswers.length > this.question.maxOccurs
    ) {
      issues.push(
        makeIssue(
          "structure",
          formatString(strings.validation.question.maxOccurs, {
            maxOccurs: this.question.maxOccurs,
          }),
        ),
      );
    }

    if (
      this.question.signatureRequired &&
      this.question.signature == undefined
    ) {
      issues.push(makeIssue("required", strings.validation.signature.required));
    }

    return issues;
  }
}
