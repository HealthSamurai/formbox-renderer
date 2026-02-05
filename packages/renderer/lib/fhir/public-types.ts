import type { FhirVersion } from "./generated-types.ts";
export type { FhirVersion } from "./generated-types.ts";

export type FhirTypesByVersion = {
  r4: typeof import("fhir/r4");
  r5: typeof import("fhir/r5");
};

export type QuestionnaireOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Questionnaire
  : import("fhir/r5").Questionnaire;

export type QuestionnaireItemOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").QuestionnaireItem
  : import("fhir/r5").QuestionnaireItem;

export type AttachmentOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Attachment
  : import("fhir/r5").Attachment;

export type CodingOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Coding
  : import("fhir/r5").Coding;

export type ElementOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Element
  : import("fhir/r5").Element;

export type ExtensionOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Extension
  : import("fhir/r5").Extension;

export type QuantityOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Quantity
  : import("fhir/r5").Quantity;

export type ReferenceOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").Reference
  : import("fhir/r5").Reference;

export type QuestionnaireResponseOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").QuestionnaireResponse
  : import("fhir/r5").QuestionnaireResponse;

export type QuestionnaireResponseItemOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").QuestionnaireResponseItem
  : import("fhir/r5").QuestionnaireResponseItem;

export type QuestionnaireResponseItemAnswerOf<V extends FhirVersion> =
  V extends "r4"
    ? import("fhir/r4").QuestionnaireResponseItemAnswer
    : import("fhir/r5").QuestionnaireResponseItemAnswer;

export type QuestionnaireItemEnableWhenOf<V extends FhirVersion> =
  V extends "r4"
    ? import("fhir/r4").QuestionnaireItemEnableWhen
    : import("fhir/r5").QuestionnaireItemEnableWhen;

export type QuestionnaireItemAnswerOptionOf<V extends FhirVersion> =
  V extends "r4"
    ? import("fhir/r4").QuestionnaireItemAnswerOption
    : import("fhir/r5").QuestionnaireItemAnswerOption;

export type QuestionnaireItemInitialOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").QuestionnaireItemInitial
  : import("fhir/r5").QuestionnaireItemInitial;

export type OperationOutcomeIssueOf<V extends FhirVersion> = V extends "r4"
  ? import("fhir/r4").OperationOutcomeIssue
  : import("fhir/r5").OperationOutcomeIssue;
