import type { FhirVersion } from "../generated-types.ts";
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
} from "../generated-types.ts";
import { ExtensionAdapter as R5ExtensionAdapter } from "./extension-adapter.ts";
import { AttachmentAdapter as R5AttachmentAdapter } from "./attachment-adapter.ts";
import { TimingAdapter as R5TimingAdapter } from "./timing-adapter.ts";
import { RelatedArtifactAdapter as R5RelatedArtifactAdapter } from "./related-artifact-adapter.ts";
import { DataRequirementAdapter as R5DataRequirementAdapter } from "./data-requirement-adapter.ts";
import { SampledDataAdapter as R5SampledDataAdapter } from "./sampled-data-adapter.ts";
import { SignatureAdapter as R5SignatureAdapter } from "./signature-adapter.ts";
import { TriggerDefinitionAdapter as R5TriggerDefinitionAdapter } from "./trigger-definition-adapter.ts";
import { ValueSetExpansionContainsAdapter as R5ValueSetExpansionContainsAdapter } from "./value-set-expansion-contains-adapter.ts";
import { ValueSetExpansionAdapter as R5ValueSetExpansionAdapter } from "./value-set-expansion-adapter.ts";
import { ValueSetAdapter as R5ValueSetAdapter } from "./value-set-adapter.ts";
import { QuestionnaireItemAdapter as R5QuestionnaireItemAdapter } from "./questionnaire-item-adapter.ts";
import { QuestionnaireAdapter as R5QuestionnaireAdapter } from "./questionnaire-adapter.ts";
import { QuestionnaireResponseAdapter as R5QuestionnaireResponseAdapter } from "./questionnaire-response-adapter.ts";
import type { Model } from "fhirpath";
import r5Model from "fhirpath/fhir-context/r5";
import type { IFhirAdapter } from "../fhir-adapter.ts";

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
