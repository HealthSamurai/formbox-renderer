import type {
  Element,
  IQuestionnaireItemAdapter,
  QuestionnaireItem,
} from "../generated-types.ts";
import type { QuestionnaireItem as R4QuestionnaireItem } from "fhir/r4";

export class QuestionnaireItemAdapter implements IQuestionnaireItemAdapter {
  getAnswerConstraintElement(item: QuestionnaireItem): Element | undefined {
    void item;
    return undefined;
  }

  setAnswerConstraintElement(
    item: QuestionnaireItem,
    value: Element | undefined,
  ): void {
    void item;
    void value;
  }

  getDisabledDisplayElement(item: QuestionnaireItem): Element | undefined {
    void item;
    return undefined;
  }

  setDisabledDisplayElement(
    item: QuestionnaireItem,
    value: Element | undefined,
  ): void {
    void item;
    void value;
  }

  getAnswerConstraint(
    item: QuestionnaireItem,
  ): "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined {
    const template = item as R4QuestionnaireItem;
    if (template.type === "open-choice") {
      return "optionsOrString";
    }
    return undefined;
  }

  setAnswerConstraint(
    item: QuestionnaireItem,
    value: "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined,
  ): void {
    void item;
    void value;
  }

  getDisabledDisplay(
    item: QuestionnaireItem,
  ): "hidden" | "protected" | undefined {
    void item;
    return undefined;
  }

  setDisabledDisplay(
    item: QuestionnaireItem,
    value: "hidden" | "protected" | undefined,
  ): void {
    void item;
    void value;
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
    const template = item as R4QuestionnaireItem;
    if (!template.type) {
      throw new Error("Questionnaire item type is missing.");
    }
    if (template.type === "choice" || template.type === "open-choice") {
      return "coding";
    }
    return template.type as
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
    const template = item as R4QuestionnaireItem;
    if (value === "coding") {
      template.type = "choice";
      return;
    }
    if (value === "question") {
      throw new Error(
        "Questionnaire item type 'question' is not supported in R4.",
      );
    }
    template.type = value as R4QuestionnaireItem["type"];
  }
}
