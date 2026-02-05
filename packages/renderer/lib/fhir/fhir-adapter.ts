import type { Model } from "fhirpath";
import type {
  FhirVersion,
  IAttachmentAdapter,
  IDataRequirementAdapter,
  IExtensionAdapter,
  IQuestionnaireAdapter,
  IQuestionnaireItemAdapter,
  IQuestionnaireResponseAdapter,
  IRelatedArtifactAdapter,
  ISampledDataAdapter,
  ISignatureAdapter,
  ITimingAdapter,
  ITriggerDefinitionAdapter,
  IValueSetAdapter,
  IValueSetExpansionAdapter,
  IValueSetExpansionContainsAdapter,
  QuestionnaireResponseItem,
} from "./generated-types.ts";
import { R4Adapter } from "./r4/adapter.ts";
import { R5Adapter } from "./r5/adapter.ts";

export interface IFhirAdapter {
  readonly version: FhirVersion;
  readonly extension: IExtensionAdapter;
  readonly attachment: IAttachmentAdapter;
  readonly timing: ITimingAdapter;
  readonly relatedArtifact: IRelatedArtifactAdapter;
  readonly dataRequirement: IDataRequirementAdapter;
  readonly sampledData: ISampledDataAdapter;
  readonly signature: ISignatureAdapter;
  readonly triggerDefinition: ITriggerDefinitionAdapter;
  readonly valueSetExpansionContains: IValueSetExpansionContainsAdapter;
  readonly valueSetExpansion: IValueSetExpansionAdapter;
  readonly valueSet: IValueSetAdapter;
  readonly questionnaireItem: IQuestionnaireItemAdapter;
  readonly questionnaire: IQuestionnaireAdapter;
  readonly questionnaireResponse: IQuestionnaireResponseAdapter;
  getFhirpathModel(): Model;
  getDefaultTerminologyServer(): string;
  withQuestionnaireResponseItemMeta(
    item: QuestionnaireResponseItem,
  ): QuestionnaireResponseItem;
}

export function createFhirAdapter(version: FhirVersion): IFhirAdapter {
  return version === "r4" ? new R4Adapter() : new R5Adapter();
}
