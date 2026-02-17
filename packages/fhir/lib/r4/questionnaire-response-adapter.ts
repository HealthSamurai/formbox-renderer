import type {
  FhirResource,
  Identifier,
  IQuestionnaireResponseAdapter,
  Narrative,
  QuestionnaireResponse,
} from "../generated-types.ts";
import type { QuestionnaireResponse as R4QuestionnaireResponse } from "fhir/r4";

export class QuestionnaireResponseAdapter implements IQuestionnaireResponseAdapter {
  getContained(response: QuestionnaireResponse): FhirResource[] | undefined {
    return (response as R4QuestionnaireResponse).contained as unknown as
      | FhirResource[]
      | undefined;
  }

  setContained(
    response: QuestionnaireResponse,
    value: FhirResource[] | undefined,
  ): void {
    (response as R4QuestionnaireResponse).contained =
      value as unknown as R4QuestionnaireResponse["contained"];
  }

  getIdentifier(response: QuestionnaireResponse): Identifier[] | undefined {
    const identifier = (response as R4QuestionnaireResponse).identifier;
    return identifier ? [identifier as unknown as Identifier] : undefined;
  }

  setIdentifier(
    response: QuestionnaireResponse,
    value: Identifier[] | undefined,
  ): void {
    const identifier = value?.[0];
    (response as R4QuestionnaireResponse).identifier =
      identifier as unknown as R4QuestionnaireResponse["identifier"];
  }

  getQuestionnaire(response: QuestionnaireResponse): string {
    const questionnaire = (response as R4QuestionnaireResponse).questionnaire;
    if (!questionnaire) {
      throw new Error("QuestionnaireResponse.questionnaire is missing.");
    }
    return questionnaire;
  }

  setQuestionnaire(response: QuestionnaireResponse, value: string): void {
    (response as R4QuestionnaireResponse).questionnaire = value as
      | string
      | undefined;
  }

  getText(response: QuestionnaireResponse): Narrative | undefined {
    return (response as R4QuestionnaireResponse).text as unknown as
      | Narrative
      | undefined;
  }

  setText(response: QuestionnaireResponse, value: Narrative | undefined): void {
    (response as R4QuestionnaireResponse).text =
      value as unknown as R4QuestionnaireResponse["text"];
  }
}
