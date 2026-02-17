import type {
  Coding,
  Element,
  FhirResource,
  IQuestionnaireAdapter,
  Narrative,
  Questionnaire,
} from "../generated-types.ts";
import type { Questionnaire as R5Questionnaire } from "fhir/r5";

export class QuestionnaireAdapter implements IQuestionnaireAdapter {
  getCopyrightLabelElement(questionnaire: Questionnaire): Element | undefined {
    return (questionnaire as R5Questionnaire)._copyrightLabel as unknown as
      | Element
      | undefined;
  }

  setCopyrightLabelElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void {
    (questionnaire as R5Questionnaire)._copyrightLabel =
      value as unknown as R5Questionnaire["_copyrightLabel"];
  }

  getVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
  ): Element | undefined {
    return (questionnaire as R5Questionnaire)
      ._versionAlgorithmString as unknown as Element | undefined;
  }

  setVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void {
    (questionnaire as R5Questionnaire)._versionAlgorithmString =
      value as unknown as R5Questionnaire["_versionAlgorithmString"];
  }

  getContained(questionnaire: Questionnaire): FhirResource[] | undefined {
    return (questionnaire as R5Questionnaire).contained as unknown as
      | FhirResource[]
      | undefined;
  }

  setContained(
    questionnaire: Questionnaire,
    value: FhirResource[] | undefined,
  ): void {
    (questionnaire as R5Questionnaire).contained =
      value as unknown as R5Questionnaire["contained"];
  }

  getCopyrightLabel(questionnaire: Questionnaire): string | undefined {
    return (questionnaire as R5Questionnaire).copyrightLabel;
  }

  setCopyrightLabel(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void {
    (questionnaire as R5Questionnaire).copyrightLabel = value;
  }

  getText(questionnaire: Questionnaire): Narrative | undefined {
    return (questionnaire as R5Questionnaire).text as unknown as
      | Narrative
      | undefined;
  }

  setText(questionnaire: Questionnaire, value: Narrative | undefined): void {
    (questionnaire as R5Questionnaire).text =
      value as unknown as R5Questionnaire["text"];
  }

  getVersionAlgorithmCoding(questionnaire: Questionnaire): Coding | undefined {
    return (questionnaire as R5Questionnaire)
      .versionAlgorithmCoding as unknown as Coding | undefined;
  }

  setVersionAlgorithmCoding(
    questionnaire: Questionnaire,
    value: Coding | undefined,
  ): void {
    (questionnaire as R5Questionnaire).versionAlgorithmCoding =
      value as unknown as R5Questionnaire["versionAlgorithmCoding"];
  }

  getVersionAlgorithmString(questionnaire: Questionnaire): string | undefined {
    return (questionnaire as R5Questionnaire).versionAlgorithmString;
  }

  setVersionAlgorithmString(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void {
    (questionnaire as R5Questionnaire).versionAlgorithmString = value;
  }
}
