import type {
  Coding,
  Element,
  FhirResource,
  IQuestionnaireAdapter,
  Narrative,
  Questionnaire,
} from "../generated-types.ts";
import type { Questionnaire as R4Questionnaire } from "fhir/r4";

export class QuestionnaireAdapter implements IQuestionnaireAdapter {
  getCopyrightLabelElement(questionnaire: Questionnaire): Element | undefined {
    void questionnaire;
    return undefined;
  }

  setCopyrightLabelElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void {
    void questionnaire;
    void value;
  }

  getVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
  ): Element | undefined {
    void questionnaire;
    return undefined;
  }

  setVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void {
    void questionnaire;
    void value;
  }

  getContained(questionnaire: Questionnaire): FhirResource[] | undefined {
    return (questionnaire as R4Questionnaire).contained as
      | FhirResource[]
      | undefined;
  }

  setContained(
    questionnaire: Questionnaire,
    value: FhirResource[] | undefined,
  ): void {
    (questionnaire as R4Questionnaire).contained =
      value as R4Questionnaire["contained"];
  }

  getCopyrightLabel(questionnaire: Questionnaire): string | undefined {
    void questionnaire;
    return undefined;
  }

  setCopyrightLabel(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void {
    void questionnaire;
    void value;
  }

  getText(questionnaire: Questionnaire): Narrative | undefined {
    return (questionnaire as R4Questionnaire).text as Narrative | undefined;
  }

  setText(questionnaire: Questionnaire, value: Narrative | undefined): void {
    (questionnaire as R4Questionnaire).text = value as R4Questionnaire["text"];
  }

  getVersionAlgorithmCoding(questionnaire: Questionnaire): Coding | undefined {
    void questionnaire;
    return undefined;
  }

  setVersionAlgorithmCoding(
    questionnaire: Questionnaire,
    value: Coding | undefined,
  ): void {
    void questionnaire;
    void value;
  }

  getVersionAlgorithmString(questionnaire: Questionnaire): string | undefined {
    void questionnaire;
    return undefined;
  }

  setVersionAlgorithmString(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void {
    void questionnaire;
    void value;
  }
}
