import type {
  FhirResource,
  Identifier,
  IQuestionnaireResponseAdapter,
  Narrative,
  QuestionnaireResponse,
} from "../generated-types.ts";
import type { QuestionnaireResponse as R5QuestionnaireResponse } from "fhir/r5";

export class QuestionnaireResponseAdapter implements IQuestionnaireResponseAdapter {
  getContained(response: QuestionnaireResponse): FhirResource[] | undefined {
    return (response as R5QuestionnaireResponse).contained as unknown as
      | FhirResource[]
      | undefined;
  }

  setContained(
    response: QuestionnaireResponse,
    value: FhirResource[] | undefined,
  ): void {
    (response as R5QuestionnaireResponse).contained =
      value as unknown as R5QuestionnaireResponse["contained"];
  }

  getIdentifier(response: QuestionnaireResponse): Identifier[] | undefined {
    return (response as R5QuestionnaireResponse).identifier as unknown as
      | Identifier[]
      | undefined;
  }

  setIdentifier(
    response: QuestionnaireResponse,
    value: Identifier[] | undefined,
  ): void {
    (response as R5QuestionnaireResponse).identifier =
      value as unknown as R5QuestionnaireResponse["identifier"];
  }

  getQuestionnaire(response: QuestionnaireResponse): string {
    return (response as R5QuestionnaireResponse).questionnaire;
  }

  setQuestionnaire(response: QuestionnaireResponse, value: string): void {
    (response as R5QuestionnaireResponse).questionnaire = value as string;
  }

  getText(response: QuestionnaireResponse): Narrative | undefined {
    return (response as R5QuestionnaireResponse).text as unknown as
      | Narrative
      | undefined;
  }

  setText(response: QuestionnaireResponse, value: Narrative | undefined): void {
    (response as R5QuestionnaireResponse).text =
      value as unknown as R5QuestionnaireResponse["text"];
  }
}
