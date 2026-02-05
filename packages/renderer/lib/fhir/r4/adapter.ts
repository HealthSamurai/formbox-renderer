import type { FhirVersion } from "@formbox/renderer";
import type {
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
} from "@formbox/renderer/fhir/generated-types.ts";
import { ExtensionAdapter as R4ExtensionAdapter } from "@formbox/renderer/fhir/r4/extension-adapter.ts";
import { AttachmentAdapter as R4AttachmentAdapter } from "@formbox/renderer/fhir/r4/attachment-adapter.ts";
import { TimingAdapter as R4TimingAdapter } from "@formbox/renderer/fhir/r4/timing-adapter.ts";
import { RelatedArtifactAdapter as R4RelatedArtifactAdapter } from "@formbox/renderer/fhir/r4/related-artifact-adapter.ts";
import { DataRequirementAdapter as R4DataRequirementAdapter } from "@formbox/renderer/fhir/r4/data-requirement-adapter.ts";
import { SampledDataAdapter as R4SampledDataAdapter } from "@formbox/renderer/fhir/r4/sampled-data-adapter.ts";
import { SignatureAdapter as R4SignatureAdapter } from "@formbox/renderer/fhir/r4/signature-adapter.ts";
import { TriggerDefinitionAdapter as R4TriggerDefinitionAdapter } from "@formbox/renderer/fhir/r4/trigger-definition-adapter.ts";
import { ValueSetExpansionContainsAdapter as R4ValueSetExpansionContainsAdapter } from "@formbox/renderer/fhir/r4/value-set-expansion-contains-adapter.ts";
import { ValueSetExpansionAdapter as R4ValueSetExpansionAdapter } from "@formbox/renderer/fhir/r4/value-set-expansion-adapter.ts";
import { ValueSetAdapter as R4ValueSetAdapter } from "@formbox/renderer/fhir/r4/value-set-adapter.ts";
import { QuestionnaireItemAdapter as R4QuestionnaireItemAdapter } from "@formbox/renderer/fhir/r4/questionnaire-item-adapter.ts";
import { QuestionnaireAdapter as R4QuestionnaireAdapter } from "@formbox/renderer/fhir/r4/questionnaire-adapter.ts";
import { QuestionnaireResponseAdapter as R4QuestionnaireResponseAdapter } from "@formbox/renderer/fhir/r4/questionnaire-response-adapter.ts";
import type { Model } from "fhirpath";
import r4Model from "fhirpath/fhir-context/r4";
import { IFhirAdapter } from "@formbox/renderer/fhir/fhir-adapter.ts";

export class R4Adapter implements IFhirAdapter {
  readonly version: FhirVersion = "r4";
  readonly extension: IExtensionAdapter = new R4ExtensionAdapter();
  readonly attachment: IAttachmentAdapter = new R4AttachmentAdapter();
  readonly timing: ITimingAdapter = new R4TimingAdapter();
  readonly relatedArtifact: IRelatedArtifactAdapter =
    new R4RelatedArtifactAdapter();
  readonly dataRequirement: IDataRequirementAdapter =
    new R4DataRequirementAdapter();
  readonly sampledData: ISampledDataAdapter = new R4SampledDataAdapter();
  readonly signature: ISignatureAdapter = new R4SignatureAdapter();
  readonly triggerDefinition: ITriggerDefinitionAdapter =
    new R4TriggerDefinitionAdapter();
  readonly valueSetExpansionContains: IValueSetExpansionContainsAdapter =
    new R4ValueSetExpansionContainsAdapter();
  readonly valueSetExpansion: IValueSetExpansionAdapter =
    new R4ValueSetExpansionAdapter();
  readonly valueSet: IValueSetAdapter = new R4ValueSetAdapter();
  readonly questionnaireItem: IQuestionnaireItemAdapter =
    new R4QuestionnaireItemAdapter();
  readonly questionnaire: IQuestionnaireAdapter = new R4QuestionnaireAdapter();
  readonly questionnaireResponse: IQuestionnaireResponseAdapter =
    new R4QuestionnaireResponseAdapter();

  getFhirpathModel(): Model {
    return r4Model as Model;
  }

  getDefaultTerminologyServer(): string {
    return "https://tx.fhir.org/r4";
  }

  withQuestionnaireResponseItemMeta(
    item: QuestionnaireResponseItem,
  ): QuestionnaireResponseItem {
    if (!Object.hasOwn(item, "__path__")) {
      Object.defineProperty(item, "__path__", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: {
          model: this.getFhirpathModel(),
          fhirNodeDataType: "QuestionnaireResponse.item",
          propName: "item",
          path: "QuestionnaireResponse.item",
          parentResNode: undefined,
          index: undefined,
        },
      });
    }

    return item;
  }
}
