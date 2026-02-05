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
import { ExtensionAdapter as R5ExtensionAdapter } from "@formbox/renderer/fhir/r5/extension-adapter.ts";
import { AttachmentAdapter as R5AttachmentAdapter } from "@formbox/renderer/fhir/r5/attachment-adapter.ts";
import { TimingAdapter as R5TimingAdapter } from "@formbox/renderer/fhir/r5/timing-adapter.ts";
import { RelatedArtifactAdapter as R5RelatedArtifactAdapter } from "@formbox/renderer/fhir/r5/related-artifact-adapter.ts";
import { DataRequirementAdapter as R5DataRequirementAdapter } from "@formbox/renderer/fhir/r5/data-requirement-adapter.ts";
import { SampledDataAdapter as R5SampledDataAdapter } from "@formbox/renderer/fhir/r5/sampled-data-adapter.ts";
import { SignatureAdapter as R5SignatureAdapter } from "@formbox/renderer/fhir/r5/signature-adapter.ts";
import { TriggerDefinitionAdapter as R5TriggerDefinitionAdapter } from "@formbox/renderer/fhir/r5/trigger-definition-adapter.ts";
import { ValueSetExpansionContainsAdapter as R5ValueSetExpansionContainsAdapter } from "@formbox/renderer/fhir/r5/value-set-expansion-contains-adapter.ts";
import { ValueSetExpansionAdapter as R5ValueSetExpansionAdapter } from "@formbox/renderer/fhir/r5/value-set-expansion-adapter.ts";
import { ValueSetAdapter as R5ValueSetAdapter } from "@formbox/renderer/fhir/r5/value-set-adapter.ts";
import { QuestionnaireItemAdapter as R5QuestionnaireItemAdapter } from "@formbox/renderer/fhir/r5/questionnaire-item-adapter.ts";
import { QuestionnaireAdapter as R5QuestionnaireAdapter } from "@formbox/renderer/fhir/r5/questionnaire-adapter.ts";
import { QuestionnaireResponseAdapter as R5QuestionnaireResponseAdapter } from "@formbox/renderer/fhir/r5/questionnaire-response-adapter.ts";
import type { Model } from "fhirpath";
import r5Model from "fhirpath/fhir-context/r5";
import { IFhirAdapter } from "@formbox/renderer/fhir/fhir-adapter.ts";

export class R5Adapter implements IFhirAdapter {
  readonly version: FhirVersion = "r5";
  readonly extension: IExtensionAdapter = new R5ExtensionAdapter();
  readonly attachment: IAttachmentAdapter = new R5AttachmentAdapter();
  readonly timing: ITimingAdapter = new R5TimingAdapter();
  readonly relatedArtifact: IRelatedArtifactAdapter =
    new R5RelatedArtifactAdapter();
  readonly dataRequirement: IDataRequirementAdapter =
    new R5DataRequirementAdapter();
  readonly sampledData: ISampledDataAdapter = new R5SampledDataAdapter();
  readonly signature: ISignatureAdapter = new R5SignatureAdapter();
  readonly triggerDefinition: ITriggerDefinitionAdapter =
    new R5TriggerDefinitionAdapter();
  readonly valueSetExpansionContains: IValueSetExpansionContainsAdapter =
    new R5ValueSetExpansionContainsAdapter();
  readonly valueSetExpansion: IValueSetExpansionAdapter =
    new R5ValueSetExpansionAdapter();
  readonly valueSet: IValueSetAdapter = new R5ValueSetAdapter();
  readonly questionnaireItem: IQuestionnaireItemAdapter =
    new R5QuestionnaireItemAdapter();
  readonly questionnaire: IQuestionnaireAdapter = new R5QuestionnaireAdapter();
  readonly questionnaireResponse: IQuestionnaireResponseAdapter =
    new R5QuestionnaireResponseAdapter();

  getFhirpathModel(): Model {
    return r5Model as Model;
  }

  getDefaultTerminologyServer(): string {
    return "https://tx.fhir.org/r5";
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
