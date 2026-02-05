import type {
  Element,
  IQuestionnaireItemAdapter,
  QuestionnaireItem,
} from "../generated-types.ts";
import type { QuestionnaireItem as R5QuestionnaireItem } from "fhir/r5";

export class QuestionnaireItemAdapter implements IQuestionnaireItemAdapter {
  getAnswerConstraintElement(item: QuestionnaireItem): Element | undefined {
    return (item as R5QuestionnaireItem)._answerConstraint as unknown as
      | Element
      | undefined;
  }

  setAnswerConstraintElement(
    item: QuestionnaireItem,
    value: Element | undefined,
  ): void {
    (item as R5QuestionnaireItem)._answerConstraint =
      value as unknown as R5QuestionnaireItem["_answerConstraint"];
  }

  getDisabledDisplayElement(item: QuestionnaireItem): Element | undefined {
    return (item as R5QuestionnaireItem)._disabledDisplay as unknown as
      | Element
      | undefined;
  }

  setDisabledDisplayElement(
    item: QuestionnaireItem,
    value: Element | undefined,
  ): void {
    (item as R5QuestionnaireItem)._disabledDisplay =
      value as unknown as R5QuestionnaireItem["_disabledDisplay"];
  }

  getAnswerConstraint(
    item: QuestionnaireItem,
  ): "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined {
    return (item as R5QuestionnaireItem).answerConstraint;
  }

  setAnswerConstraint(
    item: QuestionnaireItem,
    value: "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined,
  ): void {
    (item as R5QuestionnaireItem).answerConstraint = value;
  }

  getDisabledDisplay(
    item: QuestionnaireItem,
  ): "hidden" | "protected" | undefined {
    return (item as R5QuestionnaireItem).disabledDisplay;
  }

  setDisabledDisplay(
    item: QuestionnaireItem,
    value: "hidden" | "protected" | undefined,
  ): void {
    (item as R5QuestionnaireItem).disabledDisplay = value;
  }

  getType(
    item: QuestionnaireItem,
  ):
    | "string"
    | "boolean"
    | "url"
    | "group"
    | "display"
    | "question"
    | "decimal"
    | "integer"
    | "date"
    | "dateTime"
    | "time"
    | "text"
    | "attachment"
    | "reference"
    | "quantity"
    | "coding" {
    return (item as R5QuestionnaireItem).type as
      | "string"
      | "boolean"
      | "url"
      | "group"
      | "display"
      | "question"
      | "decimal"
      | "integer"
      | "date"
      | "dateTime"
      | "time"
      | "text"
      | "attachment"
      | "reference"
      | "quantity"
      | "coding";
  }

  setType(
    item: QuestionnaireItem,
    value:
      | "string"
      | "boolean"
      | "url"
      | "group"
      | "display"
      | "question"
      | "decimal"
      | "integer"
      | "date"
      | "dateTime"
      | "time"
      | "text"
      | "attachment"
      | "reference"
      | "quantity"
      | "coding",
  ): void {
    (item as R5QuestionnaireItem).type = value;
  }
}
