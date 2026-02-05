// This file is auto-generated. Do not edit directly.
// Run: pnpm --filter @formbox/renderer gen:fhir-types

export type FhirVersion = "r4" | "r5";

export interface BackboneElement {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Element {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
}

export interface Extension {
  _id?: Element | undefined;
  _url?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  url: string;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}
export interface IExtensionAdapter {
  getValueInteger64Element(extension: Extension): Element | undefined; // r5-only-field
  setValueInteger64Element(
    extension: Extension,
    value: Element | undefined,
  ): void;
  getValueAvailability(extension: Extension): Availability | undefined; // r5-only-field
  setValueAvailability(
    extension: Extension,
    value: Availability | undefined,
  ): void;
  getValueCodeableReference(
    extension: Extension,
  ): CodeableReference | undefined; // r5-only-field
  setValueCodeableReference(
    extension: Extension,
    value: CodeableReference | undefined,
  ): void;
  getValueDosage(extension: Extension): Dosage | undefined; // r5-only-type
  setValueDosage(extension: Extension, value: Dosage | undefined): void;
  getValueExtendedContactDetail(
    extension: Extension,
  ): ExtendedContactDetail | undefined; // r5-only-field
  setValueExtendedContactDetail(
    extension: Extension,
    value: ExtendedContactDetail | undefined,
  ): void;
  getValueInteger64(extension: Extension): string | undefined; // r5-only-field
  setValueInteger64(extension: Extension, value: string | undefined): void;
  getValueRatioRange(extension: Extension): RatioRange | undefined; // r5-only-field
  setValueRatioRange(extension: Extension, value: RatioRange | undefined): void;
}

export interface Meta {
  _id?: Element | undefined;
  _lastUpdated?: Element | undefined;
  _profile?: Element[] | undefined;
  _source?: Element | undefined;
  _versionId?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  lastUpdated?: string | undefined;
  profile?: string[] | undefined;
  security?: Coding[] | undefined;
  source?: string | undefined;
  tag?: Coding[] | undefined;
  versionId?: string | undefined;
}

export interface Coding {
  _code?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _userSelected?: Element | undefined;
  _version?: Element | undefined;
  code?: string | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  userSelected?: boolean | undefined;
  version?: string | undefined;
}

export interface CodeableConcept {
  _id?: Element | undefined;
  _text?: Element | undefined;
  coding?: Coding[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  text?: string | undefined;
}

export interface Reference {
  _display?: Element | undefined;
  _id?: Element | undefined;
  _reference?: Element | undefined;
  _type?: Element | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  reference?: string | undefined;
  type?: string | undefined;
}

export interface Quantity {
  _code?: Element | undefined;
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _unit?: Element | undefined;
  code?: string | undefined;
  comparator?: "<" | "<=" | ">=" | ">" | "ad" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  unit?: string | undefined;
  value?: number | undefined;
}

export interface Attachment {
  _contentType?: Element | undefined;
  _creation?: Element | undefined;
  _data?: Element | undefined;
  _hash?: Element | undefined;
  _id?: Element | undefined;
  _language?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  contentType?: string | undefined;
  creation?: string | undefined;
  data?: string | undefined;
  extension?: Extension[] | undefined;
  hash?: string | undefined;
  id?: string | undefined;
  language?: string | undefined;
  title?: string | undefined;
  url?: string | undefined;
}
export interface IAttachmentAdapter {
  getSizeElement(attachment: Attachment): Element | undefined; // r5-only-field
  setSizeElement(attachment: Attachment, value: Element | undefined): void;
  getDuration(attachment: Attachment): number | undefined; // r5-only-field
  setDuration(attachment: Attachment, value: number | undefined): void;
  getFrames(attachment: Attachment): number | undefined; // r5-only-field
  setFrames(attachment: Attachment, value: number | undefined): void;
  getHeight(attachment: Attachment): number | undefined; // r5-only-field
  setHeight(attachment: Attachment, value: number | undefined): void;
  getPages(attachment: Attachment): number | undefined; // r5-only-field
  setPages(attachment: Attachment, value: number | undefined): void;
  getSize(attachment: Attachment): string | undefined; // type-not-assignable
  setSize(attachment: Attachment, value: string | undefined): void;
  getWidth(attachment: Attachment): number | undefined; // r5-only-field
  setWidth(attachment: Attachment, value: number | undefined): void;
}

export interface Period {
  _end?: Element | undefined;
  _id?: Element | undefined;
  _start?: Element | undefined;
  end?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  start?: string | undefined;
}

export interface Range {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  high?: Quantity | undefined;
  id?: string | undefined;
  low?: Quantity | undefined;
}

export interface Ratio {
  _id?: Element | undefined;
  denominator?: Quantity | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  numerator?: Quantity | undefined;
}

export interface Timing {
  _event?: Element[] | undefined;
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  event?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}
export interface ITimingAdapter {
  getRepeat(timing: Timing): TimingRepeat | undefined; // r5-only-type
  setRepeat(timing: Timing, value: TimingRepeat | undefined): void;
}

export interface UsageContext {
  _id?: Element | undefined;
  code: Coding;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface RelatedArtifact {
  _citation?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _label?: Element | undefined;
  _resource?: Element | undefined;
  _type?: Element | undefined;
  citation?: string | undefined;
  display?: string | undefined;
  document?: Attachment | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  label?: string | undefined;
  resource?: string | undefined;
  type:
    | "documentation"
    | "justification"
    | "citation"
    | "predecessor"
    | "successor"
    | "derived-from"
    | "depends-on"
    | "composed-of"
    | "part-of"
    | "amends"
    | "amended-with"
    | "appends"
    | "appended-with"
    | "cites"
    | "cited-by"
    | "comments-on"
    | "comment-in"
    | "contains"
    | "contained-in"
    | "corrects"
    | "correction-in"
    | "replaces"
    | "replaced-with"
    | "retracts"
    | "retracted-by"
    | "signs"
    | "similar-to"
    | "supports"
    | "supported-with"
    | "transforms"
    | "transformed-into"
    | "transformed-with"
    | "documents"
    | "specification-of"
    | "created-with"
    | "cite-as";
}
export interface IRelatedArtifactAdapter {
  getPublicationDateElement(
    relatedArtifact: RelatedArtifact,
  ): Element | undefined; // r5-only-field
  setPublicationDateElement(
    relatedArtifact: RelatedArtifact,
    value: Element | undefined,
  ): void;
  getPublicationStatusElement(
    relatedArtifact: RelatedArtifact,
  ): Element | undefined; // r5-only-field
  setPublicationStatusElement(
    relatedArtifact: RelatedArtifact,
    value: Element | undefined,
  ): void;
  getClassifier(
    relatedArtifact: RelatedArtifact,
  ): CodeableConcept[] | undefined; // r5-only-field
  setClassifier(
    relatedArtifact: RelatedArtifact,
    value: CodeableConcept[] | undefined,
  ): void;
  getPublicationDate(relatedArtifact: RelatedArtifact): string | undefined; // r5-only-field
  setPublicationDate(
    relatedArtifact: RelatedArtifact,
    value: string | undefined,
  ): void;
  getPublicationStatus(
    relatedArtifact: RelatedArtifact,
  ): "draft" | "active" | "retired" | "unknown" | undefined; // r5-only-field
  setPublicationStatus(
    relatedArtifact: RelatedArtifact,
    value: "draft" | "active" | "retired" | "unknown" | undefined,
  ): void;
  getResourceReference(relatedArtifact: RelatedArtifact): Reference | undefined; // r5-only-field
  setResourceReference(
    relatedArtifact: RelatedArtifact,
    value: Reference | undefined,
  ): void;
}

export interface DataRequirement {
  _id?: Element | undefined;
  _mustSupport?: Element[] | undefined;
  _profile?: Element[] | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  limit?: number | undefined;
  mustSupport?: string[] | undefined;
  profile?: string[] | undefined;
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  type: string;
}
export interface IDataRequirementAdapter {
  getCodeFilter(
    dataRequirement: DataRequirement,
  ): DataRequirementCodeFilter[] | undefined; // r5-only-type
  setCodeFilter(
    dataRequirement: DataRequirement,
    value: DataRequirementCodeFilter[] | undefined,
  ): void;
  getDateFilter(
    dataRequirement: DataRequirement,
  ): DataRequirementDateFilter[] | undefined; // r5-only-type
  setDateFilter(
    dataRequirement: DataRequirement,
    value: DataRequirementDateFilter[] | undefined,
  ): void;
  getSort(dataRequirement: DataRequirement): DataRequirementSort[] | undefined; // r5-only-type
  setSort(
    dataRequirement: DataRequirement,
    value: DataRequirementSort[] | undefined,
  ): void;
  getValueFilter(
    dataRequirement: DataRequirement,
  ): DataRequirementValueFilter[] | undefined; // r5-only-field
  setValueFilter(
    dataRequirement: DataRequirement,
    value: DataRequirementValueFilter[] | undefined,
  ): void;
}

export interface ParameterDefinition {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _max?: Element | undefined;
  _name?: Element | undefined;
  _profile?: Element | undefined;
  _type?: Element | undefined;
  _use?: Element | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  max?: string | undefined;
  min?: number | undefined;
  name?: string | undefined;
  profile?: string | undefined;
  type: string;
  use: "in" | "out";
}

export interface ContactDetail {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  name?: string | undefined;
  telecom?: ContactPoint[] | undefined;
}

export interface ContactPoint {
  _id?: Element | undefined;
  _system?: Element | undefined;
  _use?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  period?: Period | undefined;
  rank?: number | undefined;
  system?:
    | "phone"
    | "fax"
    | "email"
    | "pager"
    | "url"
    | "sms"
    | "other"
    | undefined;
  use?: "home" | "work" | "temp" | "old" | "mobile" | undefined;
  value?: string | undefined;
}

export interface Identifier {
  _id?: Element | undefined;
  _system?: Element | undefined;
  _use?: Element | undefined;
  _value?: Element | undefined;
  assigner?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  period?: Period | undefined;
  system?: string | undefined;
  type?: CodeableConcept | undefined;
  use?: "temp" | "old" | "usual" | "official" | "secondary" | undefined;
  value?: string | undefined;
}

export interface Annotation {
  _authorString?: Element | undefined;
  _id?: Element | undefined;
  _text?: Element | undefined;
  _time?: Element | undefined;
  authorReference?: Reference | undefined;
  authorString?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  text: string;
  time?: string | undefined;
}

export interface HumanName {
  _family?: Element | undefined;
  _given?: Element[] | undefined;
  _id?: Element | undefined;
  _prefix?: Element[] | undefined;
  _suffix?: Element[] | undefined;
  _text?: Element | undefined;
  _use?: Element | undefined;
  extension?: Extension[] | undefined;
  family?: string | undefined;
  given?: string[] | undefined;
  id?: string | undefined;
  period?: Period | undefined;
  prefix?: string[] | undefined;
  suffix?: string[] | undefined;
  text?: string | undefined;
  use?:
    | "temp"
    | "old"
    | "usual"
    | "official"
    | "nickname"
    | "anonymous"
    | "maiden"
    | undefined;
}

export interface Address {
  _city?: Element | undefined;
  _country?: Element | undefined;
  _district?: Element | undefined;
  _id?: Element | undefined;
  _line?: Element[] | undefined;
  _postalCode?: Element | undefined;
  _state?: Element | undefined;
  _text?: Element | undefined;
  _type?: Element | undefined;
  _use?: Element | undefined;
  city?: string | undefined;
  country?: string | undefined;
  district?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  line?: string[] | undefined;
  period?: Period | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
  text?: string | undefined;
  type?: "postal" | "physical" | "both" | undefined;
  use?: "home" | "work" | "temp" | "old" | "billing" | undefined;
}

export interface Age {
  _code?: Element | undefined;
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _unit?: Element | undefined;
  code?: string | undefined;
  comparator?: "<" | "<=" | ">=" | ">" | "ad" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  unit?: string | undefined;
  value?: number | undefined;
}

export interface Count {
  _code?: Element | undefined;
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _unit?: Element | undefined;
  code?: string | undefined;
  comparator?: "<" | "<=" | ">=" | ">" | "ad" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  unit?: string | undefined;
  value?: number | undefined;
}

export interface Distance {
  _code?: Element | undefined;
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _unit?: Element | undefined;
  code?: string | undefined;
  comparator?: "<" | "<=" | ">=" | ">" | "ad" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  unit?: string | undefined;
  value?: number | undefined;
}

export interface Duration {
  _code?: Element | undefined;
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _unit?: Element | undefined;
  code?: string | undefined;
  comparator?: "<" | "<=" | ">=" | ">" | "ad" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  system?: string | undefined;
  unit?: string | undefined;
  value?: number | undefined;
}

export interface Money {
  _currency?: Element | undefined;
  _id?: Element | undefined;
  currency?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  value?: number | undefined;
}

export interface SampledData {
  _data?: Element | undefined;
  _id?: Element | undefined;
  data?: string | undefined;
  dimensions: number;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  lowerLimit?: number | undefined;
  origin: Quantity;
  upperLimit?: number | undefined;
}
export interface ISampledDataAdapter {
  getCodeMapElement(sampledData: SampledData): Element | undefined; // r5-only-field
  setCodeMapElement(sampledData: SampledData, value: Element | undefined): void;
  getIntervalUnitElement(sampledData: SampledData): Element | undefined; // r5-only-field
  setIntervalUnitElement(
    sampledData: SampledData,
    value: Element | undefined,
  ): void;
  getOffsetsElement(sampledData: SampledData): Element | undefined; // r5-only-field
  setOffsetsElement(sampledData: SampledData, value: Element | undefined): void;
  getCodeMap(sampledData: SampledData): string | undefined; // r5-only-field
  setCodeMap(sampledData: SampledData, value: string | undefined): void;
  getInterval(sampledData: SampledData): number | undefined; // r5-only-field
  setInterval(sampledData: SampledData, value: number | undefined): void;
  getIntervalUnit(sampledData: SampledData): string; // r5-only-field
  setIntervalUnit(sampledData: SampledData, value: string): void;
  getOffsets(sampledData: SampledData): string | undefined; // r5-only-field
  setOffsets(sampledData: SampledData, value: string | undefined): void;
}

export interface Signature {
  _data?: Element | undefined;
  _id?: Element | undefined;
  _sigFormat?: Element | undefined;
  _targetFormat?: Element | undefined;
  _when?: Element | undefined;
  data?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  onBehalfOf?: Reference | undefined;
  sigFormat?: string | undefined;
  targetFormat?: string | undefined;
  when?: string | undefined;
}
export interface ISignatureAdapter {
  getType(signature: Signature): Coding[] | undefined; // type-not-assignable
  setType(signature: Signature, value: Coding[] | undefined): void;
  getWho(signature: Signature): Reference | undefined; // type-not-assignable
  setWho(signature: Signature, value: Reference | undefined): void;
}

export interface Expression {
  _description?: Element | undefined;
  _expression?: Element | undefined;
  _id?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _reference?: Element | undefined;
  description?: string | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: string | undefined;
  name?: string | undefined;
  reference?: string | undefined;
}

export interface TriggerDefinition {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _timingDate?: Element | undefined;
  _timingDateTime?: Element | undefined;
  _type?: Element | undefined;
  condition?: Expression | undefined;
  data?: DataRequirement[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  name?: string | undefined;
  timingDate?: string | undefined;
  timingDateTime?: string | undefined;
  timingReference?: Reference | undefined;
  timingTiming?: Timing | undefined;
  type:
    | "named-event"
    | "periodic"
    | "data-changed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "data-accessed"
    | "data-access-ended";
}
export interface ITriggerDefinitionAdapter {
  getSubscriptionTopicElement(
    triggerDefinition: TriggerDefinition,
  ): Element | undefined; // r5-only-field
  setSubscriptionTopicElement(
    triggerDefinition: TriggerDefinition,
    value: Element | undefined,
  ): void;
  getCode(triggerDefinition: TriggerDefinition): CodeableConcept | undefined; // r5-only-field
  setCode(
    triggerDefinition: TriggerDefinition,
    value: CodeableConcept | undefined,
  ): void;
  getSubscriptionTopic(
    triggerDefinition: TriggerDefinition,
  ): string | undefined; // r5-only-field
  setSubscriptionTopic(
    triggerDefinition: TriggerDefinition,
    value: string | undefined,
  ): void;
}

export interface ValueSetExpansionContains {
  _abstract?: Element | undefined;
  _code?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _inactive?: Element | undefined;
  _system?: Element | undefined;
  _version?: Element | undefined;
  abstract?: boolean | undefined;
  code?: string | undefined;
  contains?: ValueSetExpansionContains[] | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  inactive?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  system?: string | undefined;
  version?: string | undefined;
}
export interface IValueSetExpansionContainsAdapter {
  getDesignation(
    valueSetExpansionContains: ValueSetExpansionContains,
  ): ValueSetComposeIncludeConceptDesignation[] | undefined; // r5-only-type
  setDesignation(
    valueSetExpansionContains: ValueSetExpansionContains,
    value: ValueSetComposeIncludeConceptDesignation[] | undefined,
  ): void;
  getProperty(
    valueSetExpansionContains: ValueSetExpansionContains,
  ): ValueSetExpansionContainsProperty[] | undefined; // r5-only-field
  setProperty(
    valueSetExpansionContains: ValueSetExpansionContains,
    value: ValueSetExpansionContainsProperty[] | undefined,
  ): void;
}

export interface ValueSetExpansion {
  _id?: Element | undefined;
  _identifier?: Element | undefined;
  _timestamp?: Element | undefined;
  contains?: ValueSetExpansionContains[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  offset?: number | undefined;
  timestamp: string;
  total?: number | undefined;
}
export interface IValueSetExpansionAdapter {
  getNextElement(valueSetExpansion: ValueSetExpansion): Element | undefined; // r5-only-field
  setNextElement(
    valueSetExpansion: ValueSetExpansion,
    value: Element | undefined,
  ): void;
  getNext(valueSetExpansion: ValueSetExpansion): string | undefined; // r5-only-field
  setNext(
    valueSetExpansion: ValueSetExpansion,
    value: string | undefined,
  ): void;
  getParameter(
    valueSetExpansion: ValueSetExpansion,
  ): ValueSetExpansionParameter[] | undefined; // r5-only-type
  setParameter(
    valueSetExpansion: ValueSetExpansion,
    value: ValueSetExpansionParameter[] | undefined,
  ): void;
  getProperty(
    valueSetExpansion: ValueSetExpansion,
  ): ValueSetExpansionProperty[] | undefined; // r5-only-field
  setProperty(
    valueSetExpansion: ValueSetExpansion,
    value: ValueSetExpansionProperty[] | undefined,
  ): void;
}

export interface ValueSet {
  _copyright?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _immutable?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  contact?: ContactDetail[] | undefined;
  copyright?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  expansion?: ValueSetExpansion | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  immutable?: boolean | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "ValueSet";
  status: "draft" | "active" | "retired" | "unknown";
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
}
export interface IValueSetAdapter {
  getApprovalDateElement(valueSet: ValueSet): Element | undefined; // r5-only-field
  setApprovalDateElement(valueSet: ValueSet, value: Element | undefined): void;
  getCopyrightLabelElement(valueSet: ValueSet): Element | undefined; // r5-only-field
  setCopyrightLabelElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void;
  getLastReviewDateElement(valueSet: ValueSet): Element | undefined; // r5-only-field
  setLastReviewDateElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void;
  getVersionAlgorithmStringElement(valueSet: ValueSet): Element | undefined; // r5-only-field
  setVersionAlgorithmStringElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void;
  getApprovalDate(valueSet: ValueSet): string | undefined; // r5-only-field
  setApprovalDate(valueSet: ValueSet, value: string | undefined): void;
  getAuthor(valueSet: ValueSet): ContactDetail[] | undefined; // r5-only-field
  setAuthor(valueSet: ValueSet, value: ContactDetail[] | undefined): void;
  getCompose(valueSet: ValueSet): ValueSetCompose | undefined; // r5-only-type
  setCompose(valueSet: ValueSet, value: ValueSetCompose | undefined): void;
  getContained(valueSet: ValueSet): FhirResource[] | undefined; // r5-only-type
  setContained(valueSet: ValueSet, value: FhirResource[] | undefined): void;
  getCopyrightLabel(valueSet: ValueSet): string | undefined; // r5-only-field
  setCopyrightLabel(valueSet: ValueSet, value: string | undefined): void;
  getEditor(valueSet: ValueSet): ContactDetail[] | undefined; // r5-only-field
  setEditor(valueSet: ValueSet, value: ContactDetail[] | undefined): void;
  getEffectivePeriod(valueSet: ValueSet): Period | undefined; // r5-only-field
  setEffectivePeriod(valueSet: ValueSet, value: Period | undefined): void;
  getEndorser(valueSet: ValueSet): ContactDetail[] | undefined; // r5-only-field
  setEndorser(valueSet: ValueSet, value: ContactDetail[] | undefined): void;
  getLastReviewDate(valueSet: ValueSet): string | undefined; // r5-only-field
  setLastReviewDate(valueSet: ValueSet, value: string | undefined): void;
  getRelatedArtifact(valueSet: ValueSet): RelatedArtifact[] | undefined; // r5-only-field
  setRelatedArtifact(
    valueSet: ValueSet,
    value: RelatedArtifact[] | undefined,
  ): void;
  getReviewer(valueSet: ValueSet): ContactDetail[] | undefined; // r5-only-field
  setReviewer(valueSet: ValueSet, value: ContactDetail[] | undefined): void;
  getScope(valueSet: ValueSet): ValueSetScope | undefined; // r5-only-field
  setScope(valueSet: ValueSet, value: ValueSetScope | undefined): void;
  getText(valueSet: ValueSet): Narrative | undefined; // r5-only-type
  setText(valueSet: ValueSet, value: Narrative | undefined): void;
  getTopic(valueSet: ValueSet): CodeableConcept[] | undefined; // r5-only-field
  setTopic(valueSet: ValueSet, value: CodeableConcept[] | undefined): void;
  getVersionAlgorithmCoding(valueSet: ValueSet): Coding | undefined; // r5-only-field
  setVersionAlgorithmCoding(
    valueSet: ValueSet,
    value: Coding | undefined,
  ): void;
  getVersionAlgorithmString(valueSet: ValueSet): string | undefined; // r5-only-field
  setVersionAlgorithmString(
    valueSet: ValueSet,
    value: string | undefined,
  ): void;
}

export interface QuestionnaireItemEnableWhen {
  _answerBoolean?: Element | undefined;
  _answerDate?: Element | undefined;
  _answerDateTime?: Element | undefined;
  _answerString?: Element | undefined;
  _answerTime?: Element | undefined;
  _id?: Element | undefined;
  _operator?: Element | undefined;
  _question?: Element | undefined;
  answerBoolean?: boolean | undefined;
  answerCoding?: Coding | undefined;
  answerDate?: string | undefined;
  answerDateTime?: string | undefined;
  answerDecimal?: number | undefined;
  answerInteger?: number | undefined;
  answerQuantity?: Quantity | undefined;
  answerReference?: Reference | undefined;
  answerString?: string | undefined;
  answerTime?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operator: "<" | "<=" | ">=" | ">" | "exists" | "=" | "!=";
  question: string;
}

export interface QuestionnaireItemAnswerOption {
  _id?: Element | undefined;
  _initialSelected?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  initialSelected?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  valueCoding?: Coding | undefined;
  valueDate?: string | undefined;
  valueInteger?: number | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
}

export interface QuestionnaireItemInitial {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCoding?: Coding | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueUri?: string | undefined;
}

export interface QuestionnaireItem {
  _answerValueSet?: Element | undefined;
  _definition?: Element | undefined;
  _enableBehavior?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _prefix?: Element | undefined;
  _readOnly?: Element | undefined;
  _repeats?: Element | undefined;
  _required?: Element | undefined;
  _text?: Element | undefined;
  _type?: Element | undefined;
  answerOption?: QuestionnaireItemAnswerOption[] | undefined;
  answerValueSet?: string | undefined;
  code?: Coding[] | undefined;
  definition?: string | undefined;
  enableBehavior?: "all" | "any" | undefined;
  enableWhen?: QuestionnaireItemEnableWhen[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  initial?: QuestionnaireItemInitial[] | undefined;
  item?: QuestionnaireItem[] | undefined;
  linkId: string;
  maxLength?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  prefix?: string | undefined;
  readOnly?: boolean | undefined;
  repeats?: boolean | undefined;
  required?: boolean | undefined;
  text?: string | undefined;
}
export interface IQuestionnaireItemAdapter {
  getAnswerConstraintElement(
    questionnaireItem: QuestionnaireItem,
  ): Element | undefined; // r5-only-field
  setAnswerConstraintElement(
    questionnaireItem: QuestionnaireItem,
    value: Element | undefined,
  ): void;
  getDisabledDisplayElement(
    questionnaireItem: QuestionnaireItem,
  ): Element | undefined; // r5-only-field
  setDisabledDisplayElement(
    questionnaireItem: QuestionnaireItem,
    value: Element | undefined,
  ): void;
  getAnswerConstraint(
    questionnaireItem: QuestionnaireItem,
  ): "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined; // r5-only-field
  setAnswerConstraint(
    questionnaireItem: QuestionnaireItem,
    value: "optionsOnly" | "optionsOrType" | "optionsOrString" | undefined,
  ): void;
  getDisabledDisplay(
    questionnaireItem: QuestionnaireItem,
  ): "hidden" | "protected" | undefined; // r5-only-field
  setDisabledDisplay(
    questionnaireItem: QuestionnaireItem,
    value: "hidden" | "protected" | undefined,
  ): void;
  getType(
    questionnaireItem: QuestionnaireItem,
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
    | "coding"; // type-not-assignable
  setType(
    questionnaireItem: QuestionnaireItem,
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
  ): void;
}

export interface Questionnaire {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _date?: Element | undefined;
  _derivedFrom?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _subjectType?: Element[] | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  approvalDate?: string | undefined;
  code?: Coding[] | undefined;
  contact?: ContactDetail[] | undefined;
  copyright?: string | undefined;
  date?: string | undefined;
  derivedFrom?: string[] | undefined;
  description?: string | undefined;
  effectivePeriod?: Period | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  item?: QuestionnaireItem[] | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "Questionnaire";
  status: "draft" | "active" | "retired" | "unknown";
  subjectType?: string[] | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
}
export interface IQuestionnaireAdapter {
  getCopyrightLabelElement(questionnaire: Questionnaire): Element | undefined; // r5-only-field
  setCopyrightLabelElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void;
  getVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
  ): Element | undefined; // r5-only-field
  setVersionAlgorithmStringElement(
    questionnaire: Questionnaire,
    value: Element | undefined,
  ): void;
  getContained(questionnaire: Questionnaire): FhirResource[] | undefined; // r5-only-type
  setContained(
    questionnaire: Questionnaire,
    value: FhirResource[] | undefined,
  ): void;
  getCopyrightLabel(questionnaire: Questionnaire): string | undefined; // r5-only-field
  setCopyrightLabel(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void;
  getText(questionnaire: Questionnaire): Narrative | undefined; // r5-only-type
  setText(questionnaire: Questionnaire, value: Narrative | undefined): void;
  getVersionAlgorithmCoding(questionnaire: Questionnaire): Coding | undefined; // r5-only-field
  setVersionAlgorithmCoding(
    questionnaire: Questionnaire,
    value: Coding | undefined,
  ): void;
  getVersionAlgorithmString(questionnaire: Questionnaire): string | undefined; // r5-only-field
  setVersionAlgorithmString(
    questionnaire: Questionnaire,
    value: string | undefined,
  ): void;
}

export interface QuestionnaireResponseItemAnswer {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item?: QuestionnaireResponseItem[] | undefined;
  modifierExtension?: Extension[] | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCoding?: Coding | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueUri?: string | undefined;
}

export interface QuestionnaireResponseItem {
  _definition?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _text?: Element | undefined;
  answer?: QuestionnaireResponseItemAnswer[] | undefined;
  definition?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item?: QuestionnaireResponseItem[] | undefined;
  linkId: string;
  modifierExtension?: Extension[] | undefined;
  text?: string | undefined;
}

export interface QuestionnaireResponse {
  _authored?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _questionnaire?: Element | undefined;
  _status?: Element | undefined;
  author?: Reference | undefined;
  authored?: string | undefined;
  basedOn?: Reference[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  item?: QuestionnaireResponseItem[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  partOf?: Reference[] | undefined;
  resourceType: "QuestionnaireResponse";
  source?: Reference | undefined;
  status:
    | "in-progress"
    | "completed"
    | "amended"
    | "entered-in-error"
    | "stopped";
  subject?: Reference | undefined;
}
export interface IQuestionnaireResponseAdapter {
  getContained(
    questionnaireResponse: QuestionnaireResponse,
  ): FhirResource[] | undefined; // r5-only-type
  setContained(
    questionnaireResponse: QuestionnaireResponse,
    value: FhirResource[] | undefined,
  ): void;
  getIdentifier(
    questionnaireResponse: QuestionnaireResponse,
  ): Identifier[] | undefined; // type-not-assignable
  setIdentifier(
    questionnaireResponse: QuestionnaireResponse,
    value: Identifier[] | undefined,
  ): void;
  getQuestionnaire(questionnaireResponse: QuestionnaireResponse): string; // optional-mismatch
  setQuestionnaire(
    questionnaireResponse: QuestionnaireResponse,
    value: string,
  ): void;
  getText(questionnaireResponse: QuestionnaireResponse): Narrative | undefined; // r5-only-type
  setText(
    questionnaireResponse: QuestionnaireResponse,
    value: Narrative | undefined,
  ): void;
}

export interface OperationOutcomeIssue {
  _code?: Element | undefined;
  _diagnostics?: Element | undefined;
  _expression?: Element[] | undefined;
  _id?: Element | undefined;
  _location?: Element[] | undefined;
  _severity?: Element | undefined;
  code: string;
  details?: CodeableConcept | undefined;
  diagnostics?: string | undefined;
  expression?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  location?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  severity: "fatal" | "error" | "warning" | "information" | "success";
}

export interface Account {
  _calculatedAt?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  balance?: AccountBalance[] | undefined;
  billingStatus?: CodeableConcept | undefined;
  calculatedAt?: string | undefined;
  contained?: FhirResource[] | undefined;
  coverage?: AccountCoverage[] | undefined;
  currency?: CodeableConcept | undefined;
  description?: string | undefined;
  diagnosis?: AccountDiagnosis[] | undefined;
  extension?: Extension[] | undefined;
  guarantor?: AccountGuarantor[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  owner?: Reference | undefined;
  procedure?: AccountProcedure[] | undefined;
  relatedAccount?: AccountRelatedAccount[] | undefined;
  resourceType: "Account";
  servicePeriod?: Period | undefined;
  status: "active" | "unknown" | "entered-in-error" | "on-hold" | "inactive";
  subject?: Reference[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
}

export interface AccountBalance {
  _estimate?: Element | undefined;
  _id?: Element | undefined;
  aggregate?: CodeableConcept | undefined;
  amount: Money;
  estimate?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  term?: CodeableConcept | undefined;
}

export interface AccountCoverage {
  _id?: Element | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  priority?: number | undefined;
}

export interface AccountDiagnosis {
  _dateOfDiagnosis?: Element | undefined;
  _id?: Element | undefined;
  _onAdmission?: Element | undefined;
  condition: CodeableReference;
  dateOfDiagnosis?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onAdmission?: boolean | undefined;
  packageCode?: CodeableConcept[] | undefined;
  sequence?: number | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface AccountGuarantor {
  _id?: Element | undefined;
  _onHold?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onHold?: boolean | undefined;
  party: Reference;
  period?: Period | undefined;
}

export interface AccountProcedure {
  _dateOfService?: Element | undefined;
  _id?: Element | undefined;
  code: CodeableReference;
  dateOfService?: string | undefined;
  device?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  packageCode?: CodeableConcept[] | undefined;
  sequence?: number | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface AccountRelatedAccount {
  _id?: Element | undefined;
  account: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relationship?: CodeableConcept | undefined;
}

export interface ActivityDefinition {
  _approvalDate?: Element | undefined;
  _asNeededBoolean?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _intent?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _library?: Element[] | undefined;
  _name?: Element | undefined;
  _observationRequirement?: Element[] | undefined;
  _observationResultRequirement?: Element[] | undefined;
  _priority?: Element | undefined;
  _profile?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _specimenRequirement?: Element[] | undefined;
  _status?: Element | undefined;
  _subjectCanonical?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _transform?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  asNeededBoolean?: boolean | undefined;
  asNeededCodeableConcept?: CodeableConcept | undefined;
  author?: ContactDetail[] | undefined;
  bodySite?: CodeableConcept[] | undefined;
  code?: CodeableConcept | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  doNotPerform?: boolean | undefined;
  dosage?: Dosage[] | undefined;
  dynamicValue?: ActivityDefinitionDynamicValue[] | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  intent?:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive"
    | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  kind?: string | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  library?: string[] | undefined;
  location?: CodeableReference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  observationRequirement?: string[] | undefined;
  observationResultRequirement?: string[] | undefined;
  participant?: ActivityDefinitionParticipant[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  productCodeableConcept?: CodeableConcept | undefined;
  productReference?: Reference | undefined;
  profile?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  quantity?: Quantity | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "ActivityDefinition";
  reviewer?: ContactDetail[] | undefined;
  specimenRequirement?: string[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subjectCanonical?: string | undefined;
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  subtitle?: string | undefined;
  text?: Narrative | undefined;
  timingAge?: Age | undefined;
  timingDuration?: Duration | undefined;
  timingRange?: Range | undefined;
  timingTiming?: Timing | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  transform?: string | undefined;
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ActivityDefinitionDynamicValue {
  _id?: Element | undefined;
  _path?: Element | undefined;
  expression: Expression;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  path: string;
}

export interface ActivityDefinitionParticipant {
  _id?: Element | undefined;
  _type?: Element | undefined;
  _typeCanonical?: Element | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
  type?:
    | "group"
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson"
    | undefined;
  typeCanonical?: string | undefined;
  typeReference?: Reference | undefined;
}

export interface ActorDefinition {
  _capabilities?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFrom?: Element[] | undefined;
  _description?: Element | undefined;
  _documentation?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _reference?: Element[] | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _type?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  capabilities?: string | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFrom?: string[] | undefined;
  description?: string | undefined;
  documentation?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  reference?: string[] | undefined;
  resourceType: "ActorDefinition";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  type: "system" | "person";
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface AdministrableProductDefinition {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  administrableDoseForm?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  device?: Reference | undefined;
  extension?: Extension[] | undefined;
  formOf?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  ingredient?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  producedFrom?: Reference[] | undefined;
  property?: AdministrableProductDefinitionProperty[] | undefined;
  resourceType: "AdministrableProductDefinition";
  routeOfAdministration: AdministrableProductDefinitionRouteOfAdministration[];
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  unitOfPresentation?: CodeableConcept | undefined;
}

export interface AdministrableProductDefinitionProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  status?: CodeableConcept | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDate?: string | undefined;
  valueMarkdown?: string | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
}

export interface AdministrableProductDefinitionRouteOfAdministration {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  firstDose?: Quantity | undefined;
  id?: string | undefined;
  maxDosePerDay?: Quantity | undefined;
  maxDosePerTreatmentPeriod?: Ratio | undefined;
  maxSingleDose?: Quantity | undefined;
  maxTreatmentPeriod?: Duration | undefined;
  modifierExtension?: Extension[] | undefined;
  targetSpecies?:
    | AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[]
    | undefined;
}

export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  withdrawalPeriod?:
    | AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[]
    | undefined;
}

export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  _id?: Element | undefined;
  _supportingInformation?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  supportingInformation?: string | undefined;
  tissue: CodeableConcept;
  value: Quantity;
}

export interface AdverseEvent {
  _actuality?: Element | undefined;
  _detected?: Element | undefined;
  _expectedInResearchStudy?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _recordedDate?: Element | undefined;
  _status?: Element | undefined;
  actuality: "actual" | "potential";
  category?: CodeableConcept[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  contributingFactor?: AdverseEventContributingFactor[] | undefined;
  detected?: string | undefined;
  encounter?: Reference | undefined;
  expectedInResearchStudy?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  mitigatingAction?: AdverseEventMitigatingAction[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  outcome?: CodeableConcept[] | undefined;
  participant?: AdverseEventParticipant[] | undefined;
  preventiveAction?: AdverseEventPreventiveAction[] | undefined;
  recordedDate?: string | undefined;
  recorder?: Reference | undefined;
  resourceType: "AdverseEvent";
  resultingEffect?: Reference[] | undefined;
  seriousness?: CodeableConcept | undefined;
  status: "unknown" | "in-progress" | "completed" | "entered-in-error";
  study?: Reference[] | undefined;
  subject: Reference;
  supportingInfo?: AdverseEventSupportingInfo[] | undefined;
  suspectEntity?: AdverseEventSuspectEntity[] | undefined;
  text?: Narrative | undefined;
}

export interface AdverseEventContributingFactor {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventMitigatingAction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventParticipant {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventPreventiveAction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventSupportingInfo {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventSuspectEntity {
  _id?: Element | undefined;
  causality?: AdverseEventSuspectEntityCausality | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instanceCodeableConcept?: CodeableConcept | undefined;
  instanceReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AdverseEventSuspectEntityCausality {
  _id?: Element | undefined;
  assessmentMethod?: CodeableConcept | undefined;
  author?: Reference | undefined;
  entityRelatedness?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AllergyIntolerance {
  _category?: Element[] | undefined;
  _criticality?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastOccurrence?: Element | undefined;
  _onsetDateTime?: Element | undefined;
  _onsetString?: Element | undefined;
  _recordedDate?: Element | undefined;
  category?: ("food" | "medication" | "environment" | "biologic")[] | undefined;
  clinicalStatus?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  criticality?: "high" | "low" | "unable-to-assess" | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lastOccurrence?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  onsetAge?: Age | undefined;
  onsetDateTime?: string | undefined;
  onsetPeriod?: Period | undefined;
  onsetRange?: Range | undefined;
  onsetString?: string | undefined;
  participant?: AllergyIntoleranceParticipant[] | undefined;
  patient: Reference;
  reaction?: AllergyIntoleranceReaction[] | undefined;
  recordedDate?: string | undefined;
  resourceType: "AllergyIntolerance";
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  verificationStatus?: CodeableConcept | undefined;
}

export interface AllergyIntoleranceParticipant {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AllergyIntoleranceReaction {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _onset?: Element | undefined;
  _severity?: Element | undefined;
  description?: string | undefined;
  exposureRoute?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  manifestation: CodeableReference[];
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  onset?: string | undefined;
  severity?: "moderate" | "mild" | "severe" | undefined;
  substance?: CodeableConcept | undefined;
}

export interface Appointment {
  _cancellationDate?: Element | undefined;
  _created?: Element | undefined;
  _description?: Element | undefined;
  _end?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceChanged?: Element | undefined;
  _start?: Element | undefined;
  _status?: Element | undefined;
  account?: Reference[] | undefined;
  appointmentType?: CodeableConcept | undefined;
  basedOn?: Reference[] | undefined;
  cancellationDate?: string | undefined;
  cancellationReason?: CodeableConcept | undefined;
  class?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  created?: string | undefined;
  description?: string | undefined;
  end?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  minutesDuration?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceChanged?: boolean | undefined;
  originatingAppointment?: Reference | undefined;
  participant: AppointmentParticipant[];
  patientInstruction?: CodeableReference[] | undefined;
  previousAppointment?: Reference | undefined;
  priority?: CodeableConcept | undefined;
  reason?: CodeableReference[] | undefined;
  recurrenceId?: number | undefined;
  recurrenceTemplate?: AppointmentRecurrenceTemplate[] | undefined;
  replaces?: Reference[] | undefined;
  requestedPeriod?: Period[] | undefined;
  resourceType: "Appointment";
  serviceCategory?: CodeableConcept[] | undefined;
  serviceType?: CodeableReference[] | undefined;
  slot?: Reference[] | undefined;
  specialty?: CodeableConcept[] | undefined;
  start?: string | undefined;
  status:
    | "entered-in-error"
    | "cancelled"
    | "pending"
    | "proposed"
    | "waitlist"
    | "booked"
    | "arrived"
    | "fulfilled"
    | "noshow"
    | "checked-in";
  subject?: Reference | undefined;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
  virtualService?: VirtualServiceDetail[] | undefined;
}

export interface AppointmentParticipant {
  _id?: Element | undefined;
  _required?: Element | undefined;
  _status?: Element | undefined;
  actor?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  required?: boolean | undefined;
  status: "accepted" | "declined" | "tentative" | "needs-action";
  type?: CodeableConcept[] | undefined;
}

export interface AppointmentRecurrenceTemplate {
  _excludingDate?: Element[] | undefined;
  _id?: Element | undefined;
  _lastOccurrenceDate?: Element | undefined;
  _occurrenceDate?: Element[] | undefined;
  excludingDate?: string[] | undefined;
  excludingRecurrenceId?: number[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  lastOccurrenceDate?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  monthlyTemplate?: AppointmentRecurrenceTemplateMonthlyTemplate | undefined;
  occurrenceCount?: number | undefined;
  occurrenceDate?: string[] | undefined;
  recurrenceType: CodeableConcept;
  timezone?: CodeableConcept | undefined;
  weeklyTemplate?: AppointmentRecurrenceTemplateWeeklyTemplate | undefined;
  yearlyTemplate?: AppointmentRecurrenceTemplateYearlyTemplate | undefined;
}

export interface AppointmentRecurrenceTemplateMonthlyTemplate {
  _id?: Element | undefined;
  dayOfMonth?: number | undefined;
  dayOfWeek?: Coding | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  monthInterval: number;
  nthWeekOfMonth?: Coding | undefined;
}

export interface AppointmentRecurrenceTemplateWeeklyTemplate {
  _friday?: Element | undefined;
  _id?: Element | undefined;
  _monday?: Element | undefined;
  _saturday?: Element | undefined;
  _sunday?: Element | undefined;
  _thursday?: Element | undefined;
  _tuesday?: Element | undefined;
  _wednesday?: Element | undefined;
  extension?: Extension[] | undefined;
  friday?: boolean | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  monday?: boolean | undefined;
  saturday?: boolean | undefined;
  sunday?: boolean | undefined;
  thursday?: boolean | undefined;
  tuesday?: boolean | undefined;
  wednesday?: boolean | undefined;
  weekInterval?: number | undefined;
}

export interface AppointmentRecurrenceTemplateYearlyTemplate {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  yearInterval: number;
}

export interface AppointmentResponse {
  _comment?: Element | undefined;
  _end?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDate?: Element | undefined;
  _participantStatus?: Element | undefined;
  _proposedNewTime?: Element | undefined;
  _recurring?: Element | undefined;
  _start?: Element | undefined;
  actor?: Reference | undefined;
  appointment: Reference;
  comment?: string | undefined;
  contained?: FhirResource[] | undefined;
  end?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  occurrenceDate?: string | undefined;
  participantStatus:
    | "entered-in-error"
    | "accepted"
    | "declined"
    | "tentative"
    | "needs-action";
  participantType?: CodeableConcept[] | undefined;
  proposedNewTime?: boolean | undefined;
  recurrenceId?: number | undefined;
  recurring?: boolean | undefined;
  resourceType: "AppointmentResponse";
  start?: string | undefined;
  text?: Narrative | undefined;
}

export interface ArtifactAssessment {
  _approvalDate?: Element | undefined;
  _artifactCanonical?: Element | undefined;
  _artifactUri?: Element | undefined;
  _citeAsMarkdown?: Element | undefined;
  _copyright?: Element | undefined;
  _date?: Element | undefined;
  _disposition?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _title?: Element | undefined;
  _workflowStatus?: Element | undefined;
  approvalDate?: string | undefined;
  artifactCanonical?: string | undefined;
  artifactReference?: Reference | undefined;
  artifactUri?: string | undefined;
  citeAsMarkdown?: string | undefined;
  citeAsReference?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  content?: ArtifactAssessmentContent[] | undefined;
  copyright?: string | undefined;
  date?: string | undefined;
  disposition?:
    | "unresolved"
    | "not-persuasive"
    | "persuasive"
    | "persuasive-with-modification"
    | "not-persuasive-with-modification"
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "ArtifactAssessment";
  text?: Narrative | undefined;
  title?: string | undefined;
  workflowStatus?:
    | "entered-in-error"
    | "submitted"
    | "triaged"
    | "waiting-for-input"
    | "resolved-no-change"
    | "resolved-change-required"
    | "deferred"
    | "duplicate"
    | "applied"
    | "published"
    | undefined;
}

export interface ArtifactAssessmentContent {
  _freeToShare?: Element | undefined;
  _id?: Element | undefined;
  _informationType?: Element | undefined;
  _path?: Element[] | undefined;
  _summary?: Element | undefined;
  author?: Reference | undefined;
  classifier?: CodeableConcept[] | undefined;
  component?: ArtifactAssessmentContent[] | undefined;
  extension?: Extension[] | undefined;
  freeToShare?: boolean | undefined;
  id?: string | undefined;
  informationType?:
    | "response"
    | "comment"
    | "classifier"
    | "rating"
    | "container"
    | "change-request"
    | undefined;
  modifierExtension?: Extension[] | undefined;
  path?: string[] | undefined;
  quantity?: Quantity | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  summary?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface AuditEvent {
  _action?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurredDateTime?: Element | undefined;
  _recorded?: Element | undefined;
  _severity?: Element | undefined;
  action?: string | undefined;
  agent: AuditEventAgent[];
  authorization?: CodeableConcept[] | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  entity?: AuditEventEntity[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  occurredDateTime?: string | undefined;
  occurredPeriod?: Period | undefined;
  outcome?: AuditEventOutcome | undefined;
  patient?: Reference | undefined;
  recorded: string;
  resourceType: "AuditEvent";
  severity?:
    | "error"
    | "warning"
    | "critical"
    | "informational"
    | "emergency"
    | "alert"
    | "notice"
    | "debug"
    | undefined;
  source: AuditEventSource;
  text?: Narrative | undefined;
}

export interface AuditEventAgent {
  _id?: Element | undefined;
  _networkString?: Element | undefined;
  _networkUri?: Element | undefined;
  _policy?: Element[] | undefined;
  _requestor?: Element | undefined;
  authorization?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  location?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  networkReference?: Reference | undefined;
  networkString?: string | undefined;
  networkUri?: string | undefined;
  policy?: string[] | undefined;
  requestor?: boolean | undefined;
  role?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
  who: Reference;
}

export interface AuditEventEntity {
  _id?: Element | undefined;
  _query?: Element | undefined;
  agent?: AuditEventAgent[] | undefined;
  detail?: AuditEventEntityDetail[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  query?: string | undefined;
  role?: CodeableConcept | undefined;
  securityLabel?: CodeableConcept[] | undefined;
  what?: Reference | undefined;
}

export interface AuditEventEntityDetail {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDateTime?: string | undefined;
  valueInteger?: number | undefined;
  valuePeriod?: Period | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
}

export interface AuditEventOutcome {
  _id?: Element | undefined;
  code: Coding;
  detail?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface AuditEventSource {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  observer: Reference;
  site?: Reference | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface Availability {
  _id?: Element | undefined;
  availableTime?: AvailabilityAvailableTime[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  notAvailableTime?: AvailabilityNotAvailableTime[] | undefined;
}

export interface AvailabilityAvailableTime {
  _allDay?: Element | undefined;
  _availableEndTime?: Element | undefined;
  _availableStartTime?: Element | undefined;
  _daysOfWeek?: Element[] | undefined;
  _id?: Element | undefined;
  allDay?: boolean | undefined;
  availableEndTime?: string | undefined;
  availableStartTime?: string | undefined;
  daysOfWeek?:
    | ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
}

export interface AvailabilityNotAvailableTime {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  during?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
}

export interface Basic {
  _created?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  author?: Reference | undefined;
  code: CodeableConcept;
  contained?: FhirResource[] | undefined;
  created?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "Basic";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface Binary {
  _contentType?: Element | undefined;
  _data?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  contentType: string;
  data?: string | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  resourceType: "Binary";
  securityContext?: Reference | undefined;
}

export interface BiologicallyDerivedProduct {
  _division?: Element | undefined;
  _expirationDate?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  biologicalSourceEvent?: Identifier | undefined;
  collection?: BiologicallyDerivedProductCollection | undefined;
  contained?: FhirResource[] | undefined;
  division?: string | undefined;
  expirationDate?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  parent?: Reference[] | undefined;
  processingFacility?: Reference[] | undefined;
  productCategory?: Coding | undefined;
  productCode?: CodeableConcept | undefined;
  productStatus?: Coding | undefined;
  property?: BiologicallyDerivedProductProperty[] | undefined;
  request?: Reference[] | undefined;
  resourceType: "BiologicallyDerivedProduct";
  storageTempRequirements?: Range | undefined;
  text?: Narrative | undefined;
}

export interface BiologicallyDerivedProductCollection {
  _collectedDateTime?: Element | undefined;
  _id?: Element | undefined;
  collectedDateTime?: string | undefined;
  collectedPeriod?: Period | undefined;
  collector?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: Reference | undefined;
}

export interface BiologicallyDerivedProductDispense {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _preparedDate?: Element | undefined;
  _status?: Element | undefined;
  _usageInstruction?: Element | undefined;
  _whenHandedOver?: Element | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  destination?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  matchStatus?: CodeableConcept | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  originRelationshipType?: CodeableConcept | undefined;
  partOf?: Reference[] | undefined;
  patient: Reference;
  performer?: BiologicallyDerivedProductDispensePerformer[] | undefined;
  preparedDate?: string | undefined;
  product: Reference;
  quantity?: Quantity | undefined;
  resourceType: "BiologicallyDerivedProductDispense";
  status:
    | "unknown"
    | "in-progress"
    | "entered-in-error"
    | "preparation"
    | "issued"
    | "allocated"
    | "unfulfilled"
    | "returned";
  text?: Narrative | undefined;
  usageInstruction?: string | undefined;
  whenHandedOver?: string | undefined;
}

export interface BiologicallyDerivedProductDispensePerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface BiologicallyDerivedProductProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueInteger?: number | undefined;
  valuePeriod?: Period | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueString?: string | undefined;
}

export interface BodyStructure {
  _active?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  excludedStructure?: BodyStructureIncludedStructure[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  image?: Attachment[] | undefined;
  implicitRules?: string | undefined;
  includedStructure: BodyStructureIncludedStructure[];
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  morphology?: CodeableConcept | undefined;
  patient: Reference;
  resourceType: "BodyStructure";
  text?: Narrative | undefined;
}

export interface BodyStructureIncludedStructure {
  _id?: Element | undefined;
  bodyLandmarkOrientation?:
    | BodyStructureIncludedStructureBodyLandmarkOrientation[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  laterality?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  qualifier?: CodeableConcept[] | undefined;
  spatialReference?: Reference[] | undefined;
  structure: CodeableConcept;
}

export interface BodyStructureIncludedStructureBodyLandmarkOrientation {
  _id?: Element | undefined;
  clockFacePosition?: CodeableConcept[] | undefined;
  distanceFromLandmark?:
    | BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  landmarkDescription?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  surfaceOrientation?: CodeableConcept[] | undefined;
}

export interface BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
  _id?: Element | undefined;
  device?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value?: Quantity[] | undefined;
}

export interface Bundle<BundleContentType = FhirResource> {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _timestamp?: Element | undefined;
  _type?: Element | undefined;
  entry?: BundleEntry<BundleContentType>[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  issues?: FhirResource | undefined;
  language?: string | undefined;
  link?: BundleLink[] | undefined;
  meta?: Meta | undefined;
  resourceType: "Bundle";
  signature?: Signature | undefined;
  timestamp?: string | undefined;
  total?: number | undefined;
  type:
    | "transaction"
    | "batch"
    | "document"
    | "message"
    | "transaction-response"
    | "batch-response"
    | "history"
    | "searchset"
    | "collection"
    | "subscription-notification";
}

export interface BundleEntry<BundleContentType = FhirResource> {
  _fullUrl?: Element | undefined;
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  fullUrl?: string | undefined;
  id?: string | undefined;
  link?: BundleLink[] | undefined;
  modifierExtension?: Extension[] | undefined;
  request?: BundleEntryRequest | undefined;
  resource?: BundleContentType | undefined;
  response?: BundleEntryResponse | undefined;
  search?: BundleEntrySearch | undefined;
}

export interface BundleEntryRequest {
  _id?: Element | undefined;
  _ifMatch?: Element | undefined;
  _ifModifiedSince?: Element | undefined;
  _ifNoneExist?: Element | undefined;
  _ifNoneMatch?: Element | undefined;
  _method?: Element | undefined;
  _url?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  ifMatch?: string | undefined;
  ifModifiedSince?: string | undefined;
  ifNoneExist?: string | undefined;
  ifNoneMatch?: string | undefined;
  method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
  modifierExtension?: Extension[] | undefined;
  url: string;
}

export interface BundleEntryResponse {
  _etag?: Element | undefined;
  _id?: Element | undefined;
  _lastModified?: Element | undefined;
  _location?: Element | undefined;
  _status?: Element | undefined;
  etag?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  lastModified?: string | undefined;
  location?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  outcome?: FhirResource | undefined;
  status: string;
}

export interface BundleEntrySearch {
  _id?: Element | undefined;
  _mode?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode?: "outcome" | "match" | "include" | undefined;
  modifierExtension?: Extension[] | undefined;
  score?: number | undefined;
}

export interface BundleLink {
  _id?: Element | undefined;
  _relation?: Element | undefined;
  _url?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relation: string;
  url: string;
}

export interface CapabilityStatement {
  _acceptLanguage?: Element[] | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _fhirVersion?: Element | undefined;
  _format?: Element[] | undefined;
  _id?: Element | undefined;
  _implementationGuide?: Element[] | undefined;
  _implicitRules?: Element | undefined;
  _imports?: Element[] | undefined;
  _instantiates?: Element[] | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _patchFormat?: Element[] | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  acceptLanguage?: string[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date: string;
  description?: string | undefined;
  document?: CapabilityStatementDocument[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  fhirVersion: string;
  format: string[];
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implementation?: CapabilityStatementImplementation | undefined;
  implementationGuide?: string[] | undefined;
  implicitRules?: string | undefined;
  imports?: string[] | undefined;
  instantiates?: string[] | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  kind: "instance" | "capability" | "requirements";
  language?: string | undefined;
  messaging?: CapabilityStatementMessaging[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  patchFormat?: string[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "CapabilityStatement";
  rest?: CapabilityStatementRest[] | undefined;
  software?: CapabilityStatementSoftware | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface CapabilityStatementDocument {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  _profile?: Element | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: "producer" | "consumer";
  modifierExtension?: Extension[] | undefined;
  profile: string;
}

export interface CapabilityStatementImplementation {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _url?: Element | undefined;
  custodian?: Reference | undefined;
  description: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  url?: string | undefined;
}

export interface CapabilityStatementMessaging {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  documentation?: string | undefined;
  endpoint?: CapabilityStatementMessagingEndpoint[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reliableCache?: number | undefined;
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[] | undefined;
}

export interface CapabilityStatementMessagingEndpoint {
  _address?: Element | undefined;
  _id?: Element | undefined;
  address: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  protocol: Coding;
}

export interface CapabilityStatementMessagingSupportedMessage {
  _definition?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  definition: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: "sender" | "receiver";
  modifierExtension?: Extension[] | undefined;
}

export interface CapabilityStatementRest {
  _compartment?: Element[] | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  compartment?: string[] | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  interaction?: CapabilityStatementRestInteraction[] | undefined;
  mode: "client" | "server";
  modifierExtension?: Extension[] | undefined;
  operation?: CapabilityStatementRestResourceOperation[] | undefined;
  resource?: CapabilityStatementRestResource[] | undefined;
  searchParam?: CapabilityStatementRestResourceSearchParam[] | undefined;
  security?: CapabilityStatementRestSecurity | undefined;
}

export interface CapabilityStatementRestInteraction {
  _code?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  code: "transaction" | "batch" | "search-system" | "history-system";
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CapabilityStatementRestResource {
  _conditionalCreate?: Element | undefined;
  _conditionalDelete?: Element | undefined;
  _conditionalPatch?: Element | undefined;
  _conditionalRead?: Element | undefined;
  _conditionalUpdate?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _profile?: Element | undefined;
  _readHistory?: Element | undefined;
  _referencePolicy?: Element[] | undefined;
  _searchInclude?: Element[] | undefined;
  _searchRevInclude?: Element[] | undefined;
  _supportedProfile?: Element[] | undefined;
  _type?: Element | undefined;
  _updateCreate?: Element | undefined;
  _versioning?: Element | undefined;
  conditionalCreate?: boolean | undefined;
  conditionalDelete?: "single" | "multiple" | "not-supported" | undefined;
  conditionalPatch?: boolean | undefined;
  conditionalRead?:
    | "not-supported"
    | "modified-since"
    | "not-match"
    | "full-support"
    | undefined;
  conditionalUpdate?: boolean | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  interaction?: CapabilityStatementRestResourceInteraction[] | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: CapabilityStatementRestResourceOperation[] | undefined;
  profile?: string | undefined;
  readHistory?: boolean | undefined;
  referencePolicy?:
    | ("logical" | "literal" | "resolves" | "enforced" | "local")[]
    | undefined;
  searchInclude?: string[] | undefined;
  searchParam?: CapabilityStatementRestResourceSearchParam[] | undefined;
  searchRevInclude?: string[] | undefined;
  supportedProfile?: string[] | undefined;
  type: string;
  updateCreate?: boolean | undefined;
  versioning?: "no-version" | "versioned" | "versioned-update" | undefined;
}

export interface CapabilityStatementRestResourceInteraction {
  _code?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  code:
    | "delete"
    | "patch"
    | "create"
    | "update"
    | "read"
    | "vread"
    | "history-instance"
    | "history-type"
    | "search-type";
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CapabilityStatementRestResourceOperation {
  _definition?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  definition: string;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
}

export interface CapabilityStatementRestResourceSearchParam {
  _definition?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _type?: Element | undefined;
  definition?: string | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  type:
    | "string"
    | "number"
    | "date"
    | "reference"
    | "quantity"
    | "token"
    | "composite"
    | "uri"
    | "special";
}

export interface CapabilityStatementRestSecurity {
  _cors?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  cors?: boolean | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  service?: CodeableConcept[] | undefined;
}

export interface CapabilityStatementSoftware {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _releaseDate?: Element | undefined;
  _version?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  releaseDate?: string | undefined;
  version?: string | undefined;
}

export interface CarePlan {
  _created?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  activity?: CarePlanActivity[] | undefined;
  addresses?: CodeableReference[] | undefined;
  basedOn?: Reference[] | undefined;
  careTeam?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  contributor?: Reference[] | undefined;
  created?: string | undefined;
  custodian?: Reference | undefined;
  description?: string | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  goal?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  intent: "proposal" | "plan" | "order" | "option" | "directive";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  period?: Period | undefined;
  replaces?: Reference[] | undefined;
  resourceType: "CarePlan";
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked";
  subject: Reference;
  supportingInfo?: Reference[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
}

export interface CarePlanActivity {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  performedActivity?: CodeableReference[] | undefined;
  plannedActivityReference?: Reference | undefined;
  progress?: Annotation[] | undefined;
}

export interface CareTeam {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingOrganization?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  participant?: CareTeamParticipant[] | undefined;
  period?: Period | undefined;
  reason?: CodeableReference[] | undefined;
  resourceType: "CareTeam";
  status?:
    | "active"
    | "entered-in-error"
    | "suspended"
    | "inactive"
    | "proposed"
    | undefined;
  subject?: Reference | undefined;
  telecom?: ContactPoint[] | undefined;
  text?: Narrative | undefined;
}

export interface CareTeamParticipant {
  _id?: Element | undefined;
  coveragePeriod?: Period | undefined;
  coverageTiming?: Timing | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  member?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  onBehalfOf?: Reference | undefined;
  role?: CodeableConcept | undefined;
}

export interface ChargeItem {
  _definitionCanonical?: Element[] | undefined;
  _definitionUri?: Element[] | undefined;
  _enteredDate?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _status?: Element | undefined;
  account?: Reference[] | undefined;
  bodysite?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  contained?: FhirResource[] | undefined;
  costCenter?: Reference | undefined;
  definitionCanonical?: string[] | undefined;
  definitionUri?: string[] | undefined;
  encounter?: Reference | undefined;
  enteredDate?: string | undefined;
  enterer?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  overrideReason?: CodeableConcept | undefined;
  partOf?: Reference[] | undefined;
  performer?: ChargeItemPerformer[] | undefined;
  performingOrganization?: Reference | undefined;
  product?: CodeableReference[] | undefined;
  quantity?: Quantity | undefined;
  reason?: CodeableConcept[] | undefined;
  requestingOrganization?: Reference | undefined;
  resourceType: "ChargeItem";
  service?: CodeableReference[] | undefined;
  status:
    | "unknown"
    | "entered-in-error"
    | "planned"
    | "billable"
    | "not-billable"
    | "aborted"
    | "billed";
  subject: Reference;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
  totalPriceComponent?: MonetaryComponent | undefined;
  unitPriceComponent?: MonetaryComponent | undefined;
}

export interface ChargeItemDefinition {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFromUri?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _partOf?: Element[] | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _replaces?: Element[] | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  applicability?: ChargeItemDefinitionApplicability[] | undefined;
  approvalDate?: string | undefined;
  code?: CodeableConcept | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFromUri?: string[] | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instance?: Reference[] | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  partOf?: string[] | undefined;
  propertyGroup?: ChargeItemDefinitionPropertyGroup[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  replaces?: string[] | undefined;
  resourceType: "ChargeItemDefinition";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ChargeItemDefinitionApplicability {
  _id?: Element | undefined;
  condition?: Expression | undefined;
  effectivePeriod?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedArtifact?: RelatedArtifact | undefined;
}

export interface ChargeItemDefinitionPropertyGroup {
  _id?: Element | undefined;
  applicability?: ChargeItemDefinitionApplicability[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  priceComponent?: MonetaryComponent[] | undefined;
}

export interface ChargeItemPerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Citation {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  citedArtifact?: CitationCitedArtifact | undefined;
  classification?: CitationClassification[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  currentState?: CodeableConcept[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "Citation";
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  statusDate?: CitationStatusDate[] | undefined;
  summary?: CitationSummary[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface CitationCitedArtifact {
  _dateAccessed?: Element | undefined;
  _id?: Element | undefined;
  abstract?: CitationCitedArtifactAbstract[] | undefined;
  classification?: CitationCitedArtifactClassification[] | undefined;
  contributorship?: CitationCitedArtifactContributorship | undefined;
  currentState?: CodeableConcept[] | undefined;
  dateAccessed?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  part?: CitationCitedArtifactPart | undefined;
  publicationForm?: CitationCitedArtifactPublicationForm[] | undefined;
  relatedIdentifier?: Identifier[] | undefined;
  relatesTo?: CitationCitedArtifactRelatesTo[] | undefined;
  statusDate?: CitationCitedArtifactStatusDate[] | undefined;
  title?: CitationCitedArtifactTitle[] | undefined;
  version?: CitationCitedArtifactVersion | undefined;
  webLocation?: CitationCitedArtifactWebLocation[] | undefined;
}

export interface CitationCitedArtifactAbstract {
  _copyright?: Element | undefined;
  _id?: Element | undefined;
  _text?: Element | undefined;
  copyright?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  text: string;
  type?: CodeableConcept | undefined;
}

export interface CitationCitedArtifactClassification {
  _id?: Element | undefined;
  artifactAssessment?: Reference[] | undefined;
  classifier?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface CitationCitedArtifactContributorship {
  _complete?: Element | undefined;
  _id?: Element | undefined;
  complete?: boolean | undefined;
  entry?: CitationCitedArtifactContributorshipEntry[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  summary?: CitationCitedArtifactContributorshipSummary[] | undefined;
}

export interface CitationCitedArtifactContributorshipEntry {
  _correspondingContact?: Element | undefined;
  _forenameInitials?: Element | undefined;
  _id?: Element | undefined;
  affiliation?: Reference[] | undefined;
  contributionInstance?:
    | CitationCitedArtifactContributorshipEntryContributionInstance[]
    | undefined;
  contributionType?: CodeableConcept[] | undefined;
  contributor: Reference;
  correspondingContact?: boolean | undefined;
  extension?: Extension[] | undefined;
  forenameInitials?: string | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  rankingOrder?: number | undefined;
  role?: CodeableConcept | undefined;
}

export interface CitationCitedArtifactContributorshipEntryContributionInstance {
  _id?: Element | undefined;
  _time?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  time?: string | undefined;
  type: CodeableConcept;
}

export interface CitationCitedArtifactContributorshipSummary {
  _id?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: CodeableConcept | undefined;
  style?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
  value: string;
}

export interface CitationCitedArtifactPart {
  _id?: Element | undefined;
  _value?: Element | undefined;
  baseCitation?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
  value?: string | undefined;
}

export interface CitationCitedArtifactPublicationForm {
  _accessionNumber?: Element | undefined;
  _articleDate?: Element | undefined;
  _copyright?: Element | undefined;
  _firstPage?: Element | undefined;
  _id?: Element | undefined;
  _issue?: Element | undefined;
  _lastPage?: Element | undefined;
  _lastRevisionDate?: Element | undefined;
  _pageCount?: Element | undefined;
  _pageString?: Element | undefined;
  _publicationDateSeason?: Element | undefined;
  _publicationDateText?: Element | undefined;
  _volume?: Element | undefined;
  accessionNumber?: string | undefined;
  articleDate?: string | undefined;
  citedMedium?: CodeableConcept | undefined;
  copyright?: string | undefined;
  extension?: Extension[] | undefined;
  firstPage?: string | undefined;
  id?: string | undefined;
  issue?: string | undefined;
  language?: CodeableConcept[] | undefined;
  lastPage?: string | undefined;
  lastRevisionDate?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  pageCount?: string | undefined;
  pageString?: string | undefined;
  publicationDateSeason?: string | undefined;
  publicationDateText?: string | undefined;
  publishedIn?: CitationCitedArtifactPublicationFormPublishedIn | undefined;
  volume?: string | undefined;
}

export interface CitationCitedArtifactPublicationFormPublishedIn {
  _id?: Element | undefined;
  _publisherLocation?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  modifierExtension?: Extension[] | undefined;
  publisher?: Reference | undefined;
  publisherLocation?: string | undefined;
  title?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface CitationCitedArtifactRelatesTo {
  _citation?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _label?: Element | undefined;
  _resource?: Element | undefined;
  _type?: Element | undefined;
  citation?: string | undefined;
  classifier?: CodeableConcept[] | undefined;
  display?: string | undefined;
  document?: Attachment | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  label?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  resource?: string | undefined;
  resourceReference?: Reference | undefined;
  type:
    | "documentation"
    | "justification"
    | "citation"
    | "predecessor"
    | "successor"
    | "derived-from"
    | "depends-on"
    | "composed-of"
    | "part-of"
    | "amends"
    | "amended-with"
    | "appends"
    | "appended-with"
    | "cites"
    | "cited-by"
    | "comments-on"
    | "comment-in"
    | "contains"
    | "contained-in"
    | "corrects"
    | "correction-in"
    | "replaces"
    | "replaced-with"
    | "retracts"
    | "retracted-by"
    | "signs"
    | "similar-to"
    | "supports"
    | "supported-with"
    | "transforms"
    | "transformed-into"
    | "transformed-with"
    | "documents"
    | "specification-of"
    | "created-with"
    | "cite-as"
    | "reprint"
    | "reprint-of";
}

export interface CitationCitedArtifactStatusDate {
  _actual?: Element | undefined;
  _id?: Element | undefined;
  activity: CodeableConcept;
  actual?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period: Period;
}

export interface CitationCitedArtifactTitle {
  _id?: Element | undefined;
  _text?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  text: string;
  type?: CodeableConcept[] | undefined;
}

export interface CitationCitedArtifactVersion {
  _id?: Element | undefined;
  _value?: Element | undefined;
  baseCitation?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value: string;
}

export interface CitationCitedArtifactWebLocation {
  _id?: Element | undefined;
  _url?: Element | undefined;
  classifier?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  url?: string | undefined;
}

export interface CitationClassification {
  _id?: Element | undefined;
  classifier?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface CitationStatusDate {
  _actual?: Element | undefined;
  _id?: Element | undefined;
  activity: CodeableConcept;
  actual?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period: Period;
}

export interface CitationSummary {
  _id?: Element | undefined;
  _text?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  style?: CodeableConcept | undefined;
  text: string;
}

export interface Claim {
  _created?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _use?: Element | undefined;
  accident?: ClaimAccident | undefined;
  billablePeriod?: Period | undefined;
  careTeam?: ClaimCareTeam[] | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  diagnosis?: ClaimDiagnosis[] | undefined;
  diagnosisRelatedGroup?: CodeableConcept | undefined;
  encounter?: Reference[] | undefined;
  enterer?: Reference | undefined;
  event?: ClaimEvent[] | undefined;
  extension?: Extension[] | undefined;
  facility?: Reference | undefined;
  fundsReserve?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurance?: ClaimInsurance[] | undefined;
  insurer?: Reference | undefined;
  item?: ClaimItem[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  originalPrescription?: Reference | undefined;
  patient: Reference;
  patientPaid?: Money | undefined;
  payee?: ClaimPayee | undefined;
  prescription?: Reference | undefined;
  priority?: CodeableConcept | undefined;
  procedure?: ClaimProcedure[] | undefined;
  provider?: Reference | undefined;
  referral?: Reference | undefined;
  related?: ClaimRelated[] | undefined;
  resourceType: "Claim";
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  subType?: CodeableConcept | undefined;
  supportingInfo?: ClaimSupportingInfo[] | undefined;
  text?: Narrative | undefined;
  total?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  type: CodeableConcept;
  use: "claim" | "preauthorization" | "predetermination";
}

export interface ClaimAccident {
  _date?: Element | undefined;
  _id?: Element | undefined;
  date: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  locationAddress?: Address | undefined;
  locationReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface ClaimCareTeam {
  _id?: Element | undefined;
  _responsible?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  provider: Reference;
  responsible?: boolean | undefined;
  role?: CodeableConcept | undefined;
  sequence: number;
  specialty?: CodeableConcept | undefined;
}

export interface ClaimDiagnosis {
  _id?: Element | undefined;
  diagnosisCodeableConcept?: CodeableConcept | undefined;
  diagnosisReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onAdmission?: CodeableConcept | undefined;
  sequence: number;
  type?: CodeableConcept[] | undefined;
}

export interface ClaimEvent {
  _id?: Element | undefined;
  _whenDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  whenDateTime?: string | undefined;
  whenPeriod?: Period | undefined;
}

export interface ClaimInsurance {
  _businessArrangement?: Element | undefined;
  _focal?: Element | undefined;
  _id?: Element | undefined;
  _preAuthRef?: Element[] | undefined;
  businessArrangement?: string | undefined;
  claimResponse?: Reference | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  focal: boolean;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  preAuthRef?: string[] | undefined;
  sequence: number;
}

export interface ClaimItem {
  _id?: Element | undefined;
  _servicedDate?: Element | undefined;
  bodySite?: ClaimItemBodySite[] | undefined;
  careTeamSequence?: number[] | undefined;
  category?: CodeableConcept | undefined;
  detail?: ClaimItemDetail[] | undefined;
  diagnosisSequence?: number[] | undefined;
  encounter?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  informationSequence?: number[] | undefined;
  locationAddress?: Address | undefined;
  locationCodeableConcept?: CodeableConcept | undefined;
  locationReference?: Reference | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  patientPaid?: Money | undefined;
  procedureSequence?: number[] | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  request?: Reference[] | undefined;
  revenue?: CodeableConcept | undefined;
  sequence: number;
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimItemBodySite {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  site: CodeableReference[];
  subSite?: CodeableConcept[] | undefined;
}

export interface ClaimItemDetail {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  sequence: number;
  subDetail?: ClaimItemDetailSubDetail[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimItemDetailSubDetail {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  sequence: number;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimPayee {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  party?: Reference | undefined;
  type: CodeableConcept;
}

export interface ClaimProcedure {
  _date?: Element | undefined;
  _id?: Element | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  procedureCodeableConcept?: CodeableConcept | undefined;
  procedureReference?: Reference | undefined;
  sequence: number;
  type?: CodeableConcept[] | undefined;
  udi?: Reference[] | undefined;
}

export interface ClaimRelated {
  _id?: Element | undefined;
  claim?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: Identifier | undefined;
  relationship?: CodeableConcept | undefined;
}

export interface ClaimResponse {
  _created?: Element | undefined;
  _disposition?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _outcome?: Element | undefined;
  _preAuthRef?: Element | undefined;
  _status?: Element | undefined;
  _use?: Element | undefined;
  addItem?: ClaimResponseAddItem[] | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  communicationRequest?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  decision?: CodeableConcept | undefined;
  diagnosisRelatedGroup?: CodeableConcept | undefined;
  disposition?: string | undefined;
  encounter?: Reference[] | undefined;
  error?: ClaimResponseError[] | undefined;
  event?: ClaimResponseEvent[] | undefined;
  extension?: Extension[] | undefined;
  form?: Attachment | undefined;
  formCode?: CodeableConcept | undefined;
  fundsReserve?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurance?: ClaimResponseInsurance[] | undefined;
  insurer?: Reference | undefined;
  item?: ClaimResponseItem[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  outcome: "error" | "complete" | "queued" | "partial";
  patient: Reference;
  payeeType?: CodeableConcept | undefined;
  payment?: ClaimResponsePayment | undefined;
  preAuthPeriod?: Period | undefined;
  preAuthRef?: string | undefined;
  processNote?: ClaimResponseProcessNote[] | undefined;
  request?: Reference | undefined;
  requestor?: Reference | undefined;
  resourceType: "ClaimResponse";
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  subType?: CodeableConcept | undefined;
  text?: Narrative | undefined;
  total?: ClaimResponseTotal[] | undefined;
  traceNumber?: Identifier[] | undefined;
  type: CodeableConcept;
  use: "claim" | "preauthorization" | "predetermination";
}

export interface ClaimResponseAddItem {
  _id?: Element | undefined;
  _servicedDate?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  bodySite?: ClaimResponseAddItemBodySite[] | undefined;
  detail?: ClaimResponseAddItemDetail[] | undefined;
  detailSequence?: number[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  itemSequence?: number[] | undefined;
  locationAddress?: Address | undefined;
  locationCodeableConcept?: CodeableConcept | undefined;
  locationReference?: Reference | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  provider?: Reference[] | undefined;
  quantity?: Quantity | undefined;
  request?: Reference[] | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  subdetailSequence?: number[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimResponseAddItemBodySite {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  site: CodeableReference[];
  subSite?: CodeableConcept[] | undefined;
}

export interface ClaimResponseAddItemDetail {
  _id?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  subDetail?: ClaimResponseAddItemDetailSubDetail[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimResponseAddItemDetailSubDetail {
  _id?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ClaimResponseError {
  _expression?: Element[] | undefined;
  _id?: Element | undefined;
  code: CodeableConcept;
  detailSequence?: number | undefined;
  expression?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemSequence?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  subDetailSequence?: number | undefined;
}

export interface ClaimResponseEvent {
  _id?: Element | undefined;
  _whenDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  whenDateTime?: string | undefined;
  whenPeriod?: Period | undefined;
}

export interface ClaimResponseInsurance {
  _businessArrangement?: Element | undefined;
  _focal?: Element | undefined;
  _id?: Element | undefined;
  businessArrangement?: string | undefined;
  claimResponse?: Reference | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  focal: boolean;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  sequence: number;
}

export interface ClaimResponseItem {
  _id?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  detail?: ClaimResponseItemDetail[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemSequence: number;
  modifierExtension?: Extension[] | undefined;
  noteNumber?: number[] | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  traceNumber?: Identifier[] | undefined;
}

export interface ClaimResponseItemAdjudication {
  _id?: Element | undefined;
  amount?: Money | undefined;
  category: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
  reason?: CodeableConcept | undefined;
}

export interface ClaimResponseItemDetail {
  _id?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  detailSequence: number;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  noteNumber?: number[] | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  subDetail?: ClaimResponseItemDetailSubDetail[] | undefined;
  traceNumber?: Identifier[] | undefined;
}

export interface ClaimResponseItemDetailSubDetail {
  _id?: Element | undefined;
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  noteNumber?: number[] | undefined;
  reviewOutcome?: ClaimResponseItemReviewOutcome | undefined;
  subDetailSequence: number;
  traceNumber?: Identifier[] | undefined;
}

export interface ClaimResponseItemReviewOutcome {
  _id?: Element | undefined;
  _preAuthRef?: Element | undefined;
  decision?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  preAuthPeriod?: Period | undefined;
  preAuthRef?: string | undefined;
  reason?: CodeableConcept[] | undefined;
}

export interface ClaimResponsePayment {
  _date?: Element | undefined;
  _id?: Element | undefined;
  adjustment?: Money | undefined;
  adjustmentReason?: CodeableConcept | undefined;
  amount: Money;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface ClaimResponseProcessNote {
  _id?: Element | undefined;
  _text?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: number | undefined;
  text: string;
  type?: CodeableConcept | undefined;
}

export interface ClaimResponseTotal {
  _id?: Element | undefined;
  amount: Money;
  category: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ClaimSupportingInfo {
  _id?: Element | undefined;
  _timingDate?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  category: CodeableConcept;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept | undefined;
  sequence: number;
  timingDate?: string | undefined;
  timingPeriod?: Period | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueIdentifier?: Identifier | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
}

export interface ClinicalImpression {
  _date?: Element | undefined;
  _description?: Element | undefined;
  _effectiveDateTime?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _protocol?: Element[] | undefined;
  _status?: Element | undefined;
  _summary?: Element | undefined;
  changePattern?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  effectiveDateTime?: string | undefined;
  effectivePeriod?: Period | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  finding?: ClinicalImpressionFinding[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  performer?: Reference | undefined;
  previous?: Reference | undefined;
  problem?: Reference[] | undefined;
  prognosisCodeableConcept?: CodeableConcept[] | undefined;
  prognosisReference?: Reference[] | undefined;
  protocol?: string[] | undefined;
  resourceType: "ClinicalImpression";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "preparation"
    | "not-done";
  statusReason?: CodeableConcept | undefined;
  subject: Reference;
  summary?: string | undefined;
  supportingInfo?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface ClinicalImpressionFinding {
  _basis?: Element | undefined;
  _id?: Element | undefined;
  basis?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ClinicalUseDefinition {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _library?: Element[] | undefined;
  _type?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  contraindication?: ClinicalUseDefinitionContraindication | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  indication?: ClinicalUseDefinitionIndication | undefined;
  interaction?: ClinicalUseDefinitionInteraction | undefined;
  language?: string | undefined;
  library?: string[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  population?: Reference[] | undefined;
  resourceType: "ClinicalUseDefinition";
  status?: CodeableConcept | undefined;
  subject?: Reference[] | undefined;
  text?: Narrative | undefined;
  type:
    | "warning"
    | "indication"
    | "contraindication"
    | "interaction"
    | "undesirable-effect";
  undesirableEffect?: ClinicalUseDefinitionUndesirableEffect | undefined;
  warning?: ClinicalUseDefinitionWarning | undefined;
}

export interface ClinicalUseDefinitionContraindication {
  _id?: Element | undefined;
  applicability?: Expression | undefined;
  comorbidity?: CodeableReference[] | undefined;
  diseaseStatus?: CodeableReference | undefined;
  diseaseSymptomProcedure?: CodeableReference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  indication?: Reference[] | undefined;
  modifierExtension?: Extension[] | undefined;
  otherTherapy?:
    | ClinicalUseDefinitionContraindicationOtherTherapy[]
    | undefined;
}

export interface ClinicalUseDefinitionContraindicationOtherTherapy {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relationshipType: CodeableConcept;
  treatment: CodeableReference;
}

export interface ClinicalUseDefinitionIndication {
  _durationString?: Element | undefined;
  _id?: Element | undefined;
  applicability?: Expression | undefined;
  comorbidity?: CodeableReference[] | undefined;
  diseaseStatus?: CodeableReference | undefined;
  diseaseSymptomProcedure?: CodeableReference | undefined;
  durationRange?: Range | undefined;
  durationString?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  intendedEffect?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
  otherTherapy?:
    | ClinicalUseDefinitionContraindicationOtherTherapy[]
    | undefined;
  undesirableEffect?: Reference[] | undefined;
}

export interface ClinicalUseDefinitionInteraction {
  _id?: Element | undefined;
  effect?: CodeableReference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  incidence?: CodeableConcept | undefined;
  interactant?: ClinicalUseDefinitionInteractionInteractant[] | undefined;
  management?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface ClinicalUseDefinitionInteractionInteractant {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ClinicalUseDefinitionUndesirableEffect {
  _id?: Element | undefined;
  classification?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  frequencyOfOccurrence?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  symptomConditionEffect?: CodeableReference | undefined;
}

export interface ClinicalUseDefinitionWarning {
  _description?: Element | undefined;
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CodeSystem {
  _approvalDate?: Element | undefined;
  _caseSensitive?: Element | undefined;
  _compositional?: Element | undefined;
  _content?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _hierarchyMeaning?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _supplements?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _valueSet?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  _versionNeeded?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  caseSensitive?: boolean | undefined;
  compositional?: boolean | undefined;
  concept?: CodeSystemConcept[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  content: "not-present" | "example" | "fragment" | "complete" | "supplement";
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  count?: number | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  filter?: CodeSystemFilter[] | undefined;
  hierarchyMeaning?:
    | "part-of"
    | "grouped-by"
    | "is-a"
    | "classified-with"
    | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  property?: CodeSystemProperty[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "CodeSystem";
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  supplements?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  valueSet?: string | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
  versionNeeded?: boolean | undefined;
}

export interface CodeSystemConcept {
  _code?: Element | undefined;
  _definition?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  code: string;
  concept?: CodeSystemConcept[] | undefined;
  definition?: string | undefined;
  designation?: CodeSystemConceptDesignation[] | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  property?: CodeSystemConceptProperty[] | undefined;
}

export interface CodeSystemConceptDesignation {
  _id?: Element | undefined;
  _language?: Element | undefined;
  _value?: Element | undefined;
  additionalUse?: Coding[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: Coding | undefined;
  value: string;
}

export interface CodeSystemConceptProperty {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueCoding?: Coding | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
}

export interface CodeSystemFilter {
  _code?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _operator?: Element[] | undefined;
  _value?: Element | undefined;
  code: string;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operator: (
    | "in"
    | "exists"
    | "="
    | "not-in"
    | "is-a"
    | "descendent-of"
    | "is-not-a"
    | "regex"
    | "generalizes"
    | "child-of"
    | "descendent-leaf"
  )[];
  value: string;
}

export interface CodeSystemProperty {
  _code?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _uri?: Element | undefined;
  code: string;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type:
    | "string"
    | "boolean"
    | "decimal"
    | "integer"
    | "dateTime"
    | "Coding"
    | "code";
  uri?: string | undefined;
}

export interface CodeableReference {
  _id?: Element | undefined;
  concept?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  reference?: Reference | undefined;
}

export interface Communication {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _language?: Element | undefined;
  _priority?: Element | undefined;
  _received?: Element | undefined;
  _sent?: Element | undefined;
  _status?: Element | undefined;
  about?: Reference[] | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  inResponseTo?: Reference[] | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  language?: string | undefined;
  medium?: CodeableConcept[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  payload?: CommunicationPayload[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference[] | undefined;
  received?: string | undefined;
  recipient?: Reference[] | undefined;
  resourceType: "Communication";
  sender?: Reference | undefined;
  sent?: string | undefined;
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "preparation"
    | "not-done";
  statusReason?: CodeableConcept | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  topic?: CodeableConcept | undefined;
}

export interface CommunicationPayload {
  _id?: Element | undefined;
  contentAttachment?: Attachment | undefined;
  contentCodeableConcept?: CodeableConcept | undefined;
  contentReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CommunicationRequest {
  _authoredOn?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  about?: Reference[] | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  doNotPerform?: boolean | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationProvider?: Reference[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive";
  language?: string | undefined;
  medium?: CodeableConcept[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  payload?: CommunicationRequestPayload[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference[] | undefined;
  recipient?: Reference[] | undefined;
  replaces?: Reference[] | undefined;
  requester?: Reference | undefined;
  resourceType: "CommunicationRequest";
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked";
  statusReason?: CodeableConcept | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface CommunicationRequestPayload {
  _id?: Element | undefined;
  contentAttachment?: Attachment | undefined;
  contentCodeableConcept?: CodeableConcept | undefined;
  contentReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CompartmentDefinition {
  _code?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _search?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  code:
    | "RelatedPerson"
    | "Practitioner"
    | "Patient"
    | "Encounter"
    | "Device"
    | "EpisodeOfCare";
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resource?: CompartmentDefinitionResource[] | undefined;
  resourceType: "CompartmentDefinition";
  search: boolean;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface CompartmentDefinitionResource {
  _code?: Element | undefined;
  _documentation?: Element | undefined;
  _endParam?: Element | undefined;
  _id?: Element | undefined;
  _param?: Element[] | undefined;
  _startParam?: Element | undefined;
  code: string;
  documentation?: string | undefined;
  endParam?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  param?: string[] | undefined;
  startParam?: string | undefined;
}

export interface Composition {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  attester?: CompositionAttester[] | undefined;
  author: Reference[];
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  custodian?: Reference | undefined;
  date: string;
  encounter?: Reference | undefined;
  event?: CompositionEvent[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  relatesTo?: RelatedArtifact[] | undefined;
  resourceType: "Composition";
  section?: CompositionSection[] | undefined;
  status:
    | "unknown"
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "registered"
    | "preliminary"
    | "final"
    | "corrected"
    | "partial"
    | "appended"
    | "deprecated";
  subject?: Reference[] | undefined;
  text?: Narrative | undefined;
  title: string;
  type: CodeableConcept;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
}

export interface CompositionAttester {
  _id?: Element | undefined;
  _time?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  party?: Reference | undefined;
  time?: string | undefined;
}

export interface CompositionEvent {
  _id?: Element | undefined;
  detail?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
}

export interface CompositionSection {
  _id?: Element | undefined;
  _title?: Element | undefined;
  author?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  emptyReason?: CodeableConcept | undefined;
  entry?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  orderedBy?: CodeableConcept | undefined;
  section?: CompositionSection[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
}

export interface ConceptMap {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _sourceScopeCanonical?: Element | undefined;
  _sourceScopeUri?: Element | undefined;
  _status?: Element | undefined;
  _targetScopeCanonical?: Element | undefined;
  _targetScopeUri?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  additionalAttribute?: ConceptMapAdditionalAttribute[] | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  group?: ConceptMapGroup[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  property?: ConceptMapProperty[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "ConceptMap";
  reviewer?: ContactDetail[] | undefined;
  sourceScopeCanonical?: string | undefined;
  sourceScopeUri?: string | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  targetScopeCanonical?: string | undefined;
  targetScopeUri?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ConceptMapAdditionalAttribute {
  _code?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _uri?: Element | undefined;
  code: string;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: "string" | "boolean" | "Quantity" | "Coding" | "code";
  uri?: string | undefined;
}

export interface ConceptMapGroup {
  _id?: Element | undefined;
  _source?: Element | undefined;
  _target?: Element | undefined;
  element: ConceptMapGroupElement[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: string | undefined;
  target?: string | undefined;
  unmapped?: ConceptMapGroupUnmapped | undefined;
}

export interface ConceptMapGroupElement {
  _code?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _noMap?: Element | undefined;
  _valueSet?: Element | undefined;
  code?: string | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  noMap?: boolean | undefined;
  target?: ConceptMapGroupElementTarget[] | undefined;
  valueSet?: string | undefined;
}

export interface ConceptMapGroupElementTarget {
  _code?: Element | undefined;
  _comment?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _relationship?: Element | undefined;
  _valueSet?: Element | undefined;
  code?: string | undefined;
  comment?: string | undefined;
  dependsOn?: ConceptMapGroupElementTargetDependsOn[] | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  product?: ConceptMapGroupElementTargetDependsOn[] | undefined;
  property?: ConceptMapGroupElementTargetProperty[] | undefined;
  relationship:
    | "related-to"
    | "equivalent"
    | "source-is-narrower-than-target"
    | "source-is-broader-than-target"
    | "not-related-to";
  valueSet?: string | undefined;
}

export interface ConceptMapGroupElementTargetDependsOn {
  _attribute?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueSet?: Element | undefined;
  _valueString?: Element | undefined;
  attribute: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueCoding?: Coding | undefined;
  valueQuantity?: Quantity | undefined;
  valueSet?: string | undefined;
  valueString?: string | undefined;
}

export interface ConceptMapGroupElementTargetProperty {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueCoding?: Coding | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
}

export interface ConceptMapGroupUnmapped {
  _code?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  _otherMap?: Element | undefined;
  _relationship?: Element | undefined;
  _valueSet?: Element | undefined;
  code?: string | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: "use-source-code" | "fixed" | "other-map";
  modifierExtension?: Extension[] | undefined;
  otherMap?: string | undefined;
  relationship?:
    | "related-to"
    | "equivalent"
    | "source-is-narrower-than-target"
    | "source-is-broader-than-target"
    | "not-related-to"
    | undefined;
  valueSet?: string | undefined;
}

export interface ConceptMapProperty {
  _code?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _type?: Element | undefined;
  _uri?: Element | undefined;
  code: string;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  system?: string | undefined;
  type:
    | "string"
    | "boolean"
    | "decimal"
    | "integer"
    | "dateTime"
    | "Coding"
    | "code";
  uri?: string | undefined;
}

export interface Condition {
  _abatementDateTime?: Element | undefined;
  _abatementString?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _onsetDateTime?: Element | undefined;
  _onsetString?: Element | undefined;
  _recordedDate?: Element | undefined;
  abatementAge?: Age | undefined;
  abatementDateTime?: string | undefined;
  abatementPeriod?: Period | undefined;
  abatementRange?: Range | undefined;
  abatementString?: string | undefined;
  bodySite?: CodeableConcept[] | undefined;
  category?: CodeableConcept[] | undefined;
  clinicalStatus: CodeableConcept;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  evidence?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  onsetAge?: Age | undefined;
  onsetDateTime?: string | undefined;
  onsetPeriod?: Period | undefined;
  onsetRange?: Range | undefined;
  onsetString?: string | undefined;
  participant?: ConditionParticipant[] | undefined;
  recordedDate?: string | undefined;
  resourceType: "Condition";
  severity?: CodeableConcept | undefined;
  stage?: ConditionStage[] | undefined;
  subject: Reference;
  text?: Narrative | undefined;
  verificationStatus?: CodeableConcept | undefined;
}

export interface ConditionDefinition {
  _date?: Element | undefined;
  _definition?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _hasBodySite?: Element | undefined;
  _hasSeverity?: Element | undefined;
  _hasStage?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _status?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  bodySite?: CodeableConcept | undefined;
  code: CodeableConcept;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  definition?: string[] | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  hasBodySite?: boolean | undefined;
  hasSeverity?: boolean | undefined;
  hasStage?: boolean | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  medication?: ConditionDefinitionMedication[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  observation?: ConditionDefinitionObservation[] | undefined;
  plan?: ConditionDefinitionPlan[] | undefined;
  precondition?: ConditionDefinitionPrecondition[] | undefined;
  publisher?: string | undefined;
  questionnaire?: ConditionDefinitionQuestionnaire[] | undefined;
  resourceType: "ConditionDefinition";
  severity?: CodeableConcept | undefined;
  stage?: CodeableConcept | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subtitle?: string | undefined;
  team?: Reference[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ConditionDefinitionMedication {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ConditionDefinitionObservation {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ConditionDefinitionPlan {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference;
  role?: CodeableConcept | undefined;
}

export interface ConditionDefinitionPrecondition {
  _id?: Element | undefined;
  _type?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: "specific" | "sensitive";
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
}

export interface ConditionDefinitionQuestionnaire {
  _id?: Element | undefined;
  _purpose?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  purpose: "preadmit" | "diff-diagnosis" | "outcome";
  reference: Reference;
}

export interface ConditionParticipant {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ConditionStage {
  _id?: Element | undefined;
  assessment?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  summary?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
}

export interface Consent {
  _date?: Element | undefined;
  _decision?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  controller?: Reference[] | undefined;
  date?: string | undefined;
  decision?: "deny" | "permit" | undefined;
  extension?: Extension[] | undefined;
  grantee?: Reference[] | undefined;
  grantor?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  manager?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  policyBasis?: ConsentPolicyBasis | undefined;
  policyText?: Reference[] | undefined;
  provision?: ConsentProvision[] | undefined;
  regulatoryBasis?: CodeableConcept[] | undefined;
  resourceType: "Consent";
  sourceAttachment?: Attachment[] | undefined;
  sourceReference?: Reference[] | undefined;
  status:
    | "draft"
    | "active"
    | "unknown"
    | "entered-in-error"
    | "inactive"
    | "not-done";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  verification?: ConsentVerification[] | undefined;
}

export interface ConsentPolicyBasis {
  _id?: Element | undefined;
  _url?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: Reference | undefined;
  url?: string | undefined;
}

export interface ConsentProvision {
  _id?: Element | undefined;
  action?: CodeableConcept[] | undefined;
  actor?: ConsentProvisionActor[] | undefined;
  code?: CodeableConcept[] | undefined;
  data?: ConsentProvisionData[] | undefined;
  dataPeriod?: Period | undefined;
  documentType?: Coding[] | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  provision?: ConsentProvision[] | undefined;
  purpose?: Coding[] | undefined;
  resourceType?: Coding[] | undefined;
  securityLabel?: Coding[] | undefined;
}

export interface ConsentProvisionActor {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: Reference | undefined;
  role?: CodeableConcept | undefined;
}

export interface ConsentProvisionData {
  _id?: Element | undefined;
  _meaning?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  meaning: "instance" | "related" | "dependents" | "authoredby";
  modifierExtension?: Extension[] | undefined;
  reference: Reference;
}

export interface ConsentVerification {
  _id?: Element | undefined;
  _verificationDate?: Element[] | undefined;
  _verified?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  verificationDate?: string[] | undefined;
  verificationType?: CodeableConcept | undefined;
  verified: boolean;
  verifiedBy?: Reference | undefined;
  verifiedWith?: Reference | undefined;
}

export interface Contract {
  _alias?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesUri?: Element | undefined;
  _issued?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  alias?: string[] | undefined;
  applies?: Period | undefined;
  author?: Reference | undefined;
  authority?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  contentDefinition?: ContractContentDefinition | undefined;
  contentDerivative?: CodeableConcept | undefined;
  domain?: Reference[] | undefined;
  expirationType?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  friendly?: ContractFriendly[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: Reference | undefined;
  instantiatesUri?: string | undefined;
  issued?: string | undefined;
  language?: string | undefined;
  legal?: ContractLegal[] | undefined;
  legalState?: CodeableConcept | undefined;
  legallyBindingAttachment?: Attachment | undefined;
  legallyBindingReference?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  relevantHistory?: Reference[] | undefined;
  resourceType: "Contract";
  rule?: ContractRule[] | undefined;
  scope?: CodeableConcept | undefined;
  signer?: ContractSigner[] | undefined;
  site?: Reference[] | undefined;
  status?:
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "rejected"
    | "revoked"
    | "appended"
    | "disputed"
    | "executable"
    | "executed"
    | "negotiable"
    | "offered"
    | "policy"
    | "renewed"
    | "resolved"
    | "terminated"
    | undefined;
  subType?: CodeableConcept[] | undefined;
  subject?: Reference[] | undefined;
  subtitle?: string | undefined;
  supportingInfo?: Reference[] | undefined;
  term?: ContractTerm[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topicCodeableConcept?: CodeableConcept | undefined;
  topicReference?: Reference | undefined;
  type?: CodeableConcept | undefined;
  url?: string | undefined;
  version?: string | undefined;
}

export interface ContractContentDefinition {
  _copyright?: Element | undefined;
  _id?: Element | undefined;
  _publicationDate?: Element | undefined;
  _publicationStatus?: Element | undefined;
  copyright?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  publicationDate?: string | undefined;
  publicationStatus:
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "rejected"
    | "revoked"
    | "appended"
    | "disputed"
    | "executable"
    | "executed"
    | "negotiable"
    | "offered"
    | "policy"
    | "renewed"
    | "resolved"
    | "terminated";
  publisher?: Reference | undefined;
  subType?: CodeableConcept | undefined;
  type: CodeableConcept;
}

export interface ContractFriendly {
  _id?: Element | undefined;
  contentAttachment?: Attachment | undefined;
  contentReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ContractLegal {
  _id?: Element | undefined;
  contentAttachment?: Attachment | undefined;
  contentReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ContractRule {
  _id?: Element | undefined;
  contentAttachment?: Attachment | undefined;
  contentReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ContractSigner {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  party: Reference;
  signature: Signature[];
  type: Coding;
}

export interface ContractTerm {
  _id?: Element | undefined;
  _issued?: Element | undefined;
  _text?: Element | undefined;
  action?: ContractTermAction[] | undefined;
  applies?: Period | undefined;
  asset?: ContractTermAsset[] | undefined;
  extension?: Extension[] | undefined;
  group?: ContractTerm[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  issued?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  offer: ContractTermOffer;
  securityLabel?: ContractTermSecurityLabel[] | undefined;
  subType?: CodeableConcept | undefined;
  text?: string | undefined;
  topicCodeableConcept?: CodeableConcept | undefined;
  topicReference?: Reference | undefined;
  type?: CodeableConcept | undefined;
}

export interface ContractTermAction {
  _contextLinkId?: Element[] | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element[] | undefined;
  _occurrenceDateTime?: Element | undefined;
  _performerLinkId?: Element[] | undefined;
  _reasonLinkId?: Element[] | undefined;
  _requesterLinkId?: Element[] | undefined;
  context?: Reference | undefined;
  contextLinkId?: string[] | undefined;
  doNotPerform?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  intent: CodeableConcept;
  linkId?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  performer?: Reference | undefined;
  performerLinkId?: string[] | undefined;
  performerRole?: CodeableConcept | undefined;
  performerType?: CodeableConcept[] | undefined;
  reason?: CodeableReference[] | undefined;
  reasonLinkId?: string[] | undefined;
  requester?: Reference[] | undefined;
  requesterLinkId?: string[] | undefined;
  securityLabelNumber?: number[] | undefined;
  status: CodeableConcept;
  subject?: ContractTermActionSubject[] | undefined;
  type: CodeableConcept;
}

export interface ContractTermActionSubject {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference[];
  role?: CodeableConcept | undefined;
}

export interface ContractTermAsset {
  _condition?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element[] | undefined;
  _text?: Element | undefined;
  answer?: ContractTermOfferAnswer[] | undefined;
  condition?: string | undefined;
  context?: ContractTermAssetContext[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period[] | undefined;
  periodType?: CodeableConcept[] | undefined;
  relationship?: Coding | undefined;
  scope?: CodeableConcept | undefined;
  securityLabelNumber?: number[] | undefined;
  subtype?: CodeableConcept[] | undefined;
  text?: string | undefined;
  type?: CodeableConcept[] | undefined;
  typeReference?: Reference[] | undefined;
  usePeriod?: Period[] | undefined;
  valuedItem?: ContractTermAssetValuedItem[] | undefined;
}

export interface ContractTermAssetContext {
  _id?: Element | undefined;
  _text?: Element | undefined;
  code?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: Reference | undefined;
  text?: string | undefined;
}

export interface ContractTermAssetValuedItem {
  _effectiveTime?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element[] | undefined;
  _payment?: Element | undefined;
  _paymentDate?: Element | undefined;
  effectiveTime?: string | undefined;
  entityCodeableConcept?: CodeableConcept | undefined;
  entityReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  linkId?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  payment?: string | undefined;
  paymentDate?: string | undefined;
  points?: number | undefined;
  quantity?: Quantity | undefined;
  recipient?: Reference | undefined;
  responsible?: Reference | undefined;
  securityLabelNumber?: number[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ContractTermOffer {
  _id?: Element | undefined;
  _linkId?: Element[] | undefined;
  _text?: Element | undefined;
  answer?: ContractTermOfferAnswer[] | undefined;
  decision?: CodeableConcept | undefined;
  decisionMode?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  linkId?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  party?: ContractTermOfferParty[] | undefined;
  securityLabelNumber?: number[] | undefined;
  text?: string | undefined;
  topic?: Reference | undefined;
  type?: CodeableConcept | undefined;
}

export interface ContractTermOfferAnswer {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCoding?: Coding | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueUri?: string | undefined;
}

export interface ContractTermOfferParty {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference[];
  role: CodeableConcept;
}

export interface ContractTermSecurityLabel {
  _id?: Element | undefined;
  category?: Coding[] | undefined;
  classification: Coding;
  control?: Coding[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: number[] | undefined;
}

export interface Coverage {
  _dependent?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _network?: Element | undefined;
  _status?: Element | undefined;
  _subrogation?: Element | undefined;
  beneficiary: Reference;
  class?: CoverageClass[] | undefined;
  contained?: FhirResource[] | undefined;
  contract?: Reference[] | undefined;
  costToBeneficiary?: CoverageCostToBeneficiary[] | undefined;
  dependent?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurancePlan?: Reference | undefined;
  insurer?: Reference | undefined;
  kind: "other" | "insurance" | "self-pay";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  network?: string | undefined;
  order?: number | undefined;
  paymentBy?: CoveragePaymentBy[] | undefined;
  period?: Period | undefined;
  policyHolder?: Reference | undefined;
  relationship?: CodeableConcept | undefined;
  resourceType: "Coverage";
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  subrogation?: boolean | undefined;
  subscriber?: Reference | undefined;
  subscriberId?: Identifier[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
}

export interface CoverageClass {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  type: CodeableConcept;
  value: Identifier;
}

export interface CoverageCostToBeneficiary {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  exception?: CoverageCostToBeneficiaryException[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  network?: CodeableConcept | undefined;
  term?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
  unit?: CodeableConcept | undefined;
  valueMoney?: Money | undefined;
  valueQuantity?: Quantity | undefined;
}

export interface CoverageCostToBeneficiaryException {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  type: CodeableConcept;
}

export interface CoverageEligibilityRequest {
  _created?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _purpose?: Element[] | undefined;
  _servicedDate?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  enterer?: Reference | undefined;
  event?: CoverageEligibilityRequestEvent[] | undefined;
  extension?: Extension[] | undefined;
  facility?: Reference | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurance?: CoverageEligibilityRequestInsurance[] | undefined;
  insurer: Reference;
  item?: CoverageEligibilityRequestItem[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  patient: Reference;
  priority?: CodeableConcept | undefined;
  provider?: Reference | undefined;
  purpose: ("auth-requirements" | "benefits" | "discovery" | "validation")[];
  resourceType: "CoverageEligibilityRequest";
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[] | undefined;
  text?: Narrative | undefined;
}

export interface CoverageEligibilityRequestEvent {
  _id?: Element | undefined;
  _whenDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  whenDateTime?: string | undefined;
  whenPeriod?: Period | undefined;
}

export interface CoverageEligibilityRequestInsurance {
  _businessArrangement?: Element | undefined;
  _focal?: Element | undefined;
  _id?: Element | undefined;
  businessArrangement?: string | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  focal?: boolean | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CoverageEligibilityRequestItem {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  detail?: Reference[] | undefined;
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[] | undefined;
  extension?: Extension[] | undefined;
  facility?: Reference | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  productOrService?: CodeableConcept | undefined;
  provider?: Reference | undefined;
  quantity?: Quantity | undefined;
  supportingInfoSequence?: number[] | undefined;
  unitPrice?: Money | undefined;
}

export interface CoverageEligibilityRequestItemDiagnosis {
  _id?: Element | undefined;
  diagnosisCodeableConcept?: CodeableConcept | undefined;
  diagnosisReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CoverageEligibilityRequestSupportingInfo {
  _appliesToAll?: Element | undefined;
  _id?: Element | undefined;
  appliesToAll?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  information: Reference;
  modifierExtension?: Extension[] | undefined;
  sequence: number;
}

export interface CoverageEligibilityResponse {
  _created?: Element | undefined;
  _disposition?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _outcome?: Element | undefined;
  _preAuthRef?: Element | undefined;
  _purpose?: Element[] | undefined;
  _servicedDate?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  disposition?: string | undefined;
  error?: CoverageEligibilityResponseError[] | undefined;
  event?: CoverageEligibilityResponseEvent[] | undefined;
  extension?: Extension[] | undefined;
  form?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurance?: CoverageEligibilityResponseInsurance[] | undefined;
  insurer: Reference;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  outcome: "error" | "complete" | "queued" | "partial";
  patient: Reference;
  preAuthRef?: string | undefined;
  purpose: ("auth-requirements" | "benefits" | "discovery" | "validation")[];
  request: Reference;
  requestor?: Reference | undefined;
  resourceType: "CoverageEligibilityResponse";
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  text?: Narrative | undefined;
}

export interface CoverageEligibilityResponseError {
  _expression?: Element[] | undefined;
  _id?: Element | undefined;
  code: CodeableConcept;
  expression?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CoverageEligibilityResponseEvent {
  _id?: Element | undefined;
  _whenDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  whenDateTime?: string | undefined;
  whenPeriod?: Period | undefined;
}

export interface CoverageEligibilityResponseInsurance {
  _id?: Element | undefined;
  _inforce?: Element | undefined;
  benefitPeriod?: Period | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  inforce?: boolean | undefined;
  item?: CoverageEligibilityResponseInsuranceItem[] | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface CoverageEligibilityResponseInsuranceItem {
  _authorizationRequired?: Element | undefined;
  _authorizationUrl?: Element | undefined;
  _description?: Element | undefined;
  _excluded?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  authorizationRequired?: boolean | undefined;
  authorizationSupporting?: CodeableConcept[] | undefined;
  authorizationUrl?: string | undefined;
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
  category?: CodeableConcept | undefined;
  description?: string | undefined;
  excluded?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  network?: CodeableConcept | undefined;
  productOrService?: CodeableConcept | undefined;
  provider?: Reference | undefined;
  term?: CodeableConcept | undefined;
  unit?: CodeableConcept | undefined;
}

export interface CoverageEligibilityResponseInsuranceItemBenefit {
  _allowedString?: Element | undefined;
  _id?: Element | undefined;
  _usedString?: Element | undefined;
  allowedMoney?: Money | undefined;
  allowedString?: string | undefined;
  allowedUnsignedInt?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  usedMoney?: Money | undefined;
  usedString?: string | undefined;
  usedUnsignedInt?: number | undefined;
}

export interface CoveragePaymentBy {
  _id?: Element | undefined;
  _responsibility?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  party: Reference;
  responsibility?: string | undefined;
}

export interface DataRequirementCodeFilter {
  _id?: Element | undefined;
  _path?: Element | undefined;
  _searchParam?: Element | undefined;
  _valueSet?: Element | undefined;
  code?: Coding[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  path?: string | undefined;
  searchParam?: string | undefined;
  valueSet?: string | undefined;
}

export interface DataRequirementDateFilter {
  _id?: Element | undefined;
  _path?: Element | undefined;
  _searchParam?: Element | undefined;
  _valueDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  path?: string | undefined;
  searchParam?: string | undefined;
  valueDateTime?: string | undefined;
  valueDuration?: Duration | undefined;
  valuePeriod?: Period | undefined;
}

export interface DataRequirementSort {
  _direction?: Element | undefined;
  _id?: Element | undefined;
  _path?: Element | undefined;
  direction: "ascending" | "descending";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  path: string;
}

export interface DataRequirementValueFilter {
  _comparator?: Element | undefined;
  _id?: Element | undefined;
  _path?: Element | undefined;
  _searchParam?: Element | undefined;
  _valueDateTime?: Element | undefined;
  comparator?: "eq" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  path?: string | undefined;
  searchParam?: string | undefined;
  valueDateTime?: string | undefined;
  valueDuration?: Duration | undefined;
  valuePeriod?: Period | undefined;
}

export interface DetectedIssue {
  _detail?: Element | undefined;
  _id?: Element | undefined;
  _identifiedDateTime?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _reference?: Element | undefined;
  _severity?: Element | undefined;
  _status?: Element | undefined;
  author?: Reference | undefined;
  category?: CodeableConcept[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  detail?: string | undefined;
  encounter?: Reference | undefined;
  evidence?: DetectedIssueEvidence[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifiedDateTime?: string | undefined;
  identifiedPeriod?: Period | undefined;
  identifier?: Identifier[] | undefined;
  implicated?: Reference[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  mitigation?: DetectedIssueMitigation[] | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: string | undefined;
  resourceType: "DetectedIssue";
  severity?: "high" | "moderate" | "low" | undefined;
  status: "entered-in-error" | "preliminary" | "final" | "mitigated";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface DetectedIssueEvidence {
  _id?: Element | undefined;
  code?: CodeableConcept[] | undefined;
  detail?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface DetectedIssueMitigation {
  _date?: Element | undefined;
  _id?: Element | undefined;
  action: CodeableConcept;
  author?: Reference | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
}

export interface Device {
  _displayName?: Element | undefined;
  _expirationDate?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lotNumber?: Element | undefined;
  _manufactureDate?: Element | undefined;
  _manufacturer?: Element | undefined;
  _modelNumber?: Element | undefined;
  _partNumber?: Element | undefined;
  _serialNumber?: Element | undefined;
  _status?: Element | undefined;
  _url?: Element | undefined;
  availabilityStatus?: CodeableConcept | undefined;
  biologicalSourceEvent?: Identifier | undefined;
  category?: CodeableConcept[] | undefined;
  conformsTo?: DeviceConformsTo[] | undefined;
  contact?: ContactPoint[] | undefined;
  contained?: FhirResource[] | undefined;
  cycle?: Count | undefined;
  definition?: CodeableReference | undefined;
  displayName?: string | undefined;
  duration?: Duration | undefined;
  endpoint?: Reference[] | undefined;
  expirationDate?: string | undefined;
  extension?: Extension[] | undefined;
  gateway?: CodeableReference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  lotNumber?: string | undefined;
  manufactureDate?: string | undefined;
  manufacturer?: string | undefined;
  meta?: Meta | undefined;
  mode?: CodeableConcept | undefined;
  modelNumber?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: DeviceName[] | undefined;
  note?: Annotation[] | undefined;
  owner?: Reference | undefined;
  parent?: Reference | undefined;
  partNumber?: string | undefined;
  property?: DeviceProperty[] | undefined;
  resourceType: "Device";
  safety?: CodeableConcept[] | undefined;
  serialNumber?: string | undefined;
  status?: "active" | "entered-in-error" | "inactive" | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
  udiCarrier?: DeviceUdiCarrier[] | undefined;
  url?: string | undefined;
  version?: DeviceVersion[] | undefined;
}

export interface DeviceAssociation {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  bodyStructure?: Reference | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  device: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: DeviceAssociationOperation[] | undefined;
  period?: Period | undefined;
  resourceType: "DeviceAssociation";
  status: CodeableConcept;
  statusReason?: CodeableConcept[] | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface DeviceAssociationOperation {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operator?: Reference[] | undefined;
  period?: Period | undefined;
  status: CodeableConcept;
}

export interface DeviceConformsTo {
  _id?: Element | undefined;
  _version?: Element | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  specification: CodeableConcept;
  version?: string | undefined;
}

export interface DeviceDefinition {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _modelNumber?: Element | undefined;
  _partNumber?: Element | undefined;
  _productionIdentifierInUDI?: Element[] | undefined;
  chargeItem?: DeviceDefinitionChargeItem[] | undefined;
  classification?: DeviceDefinitionClassification[] | undefined;
  conformsTo?: DeviceDefinitionConformsTo[] | undefined;
  contact?: ContactPoint[] | undefined;
  contained?: FhirResource[] | undefined;
  correctiveAction?: DeviceDefinitionCorrectiveAction | undefined;
  description?: string | undefined;
  deviceName?: DeviceDefinitionDeviceName[] | undefined;
  extension?: Extension[] | undefined;
  guideline?: DeviceDefinitionGuideline | undefined;
  hasPart?: DeviceDefinitionHasPart[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  languageCode?: CodeableConcept[] | undefined;
  link?: DeviceDefinitionLink[] | undefined;
  manufacturer?: Reference | undefined;
  material?: DeviceDefinitionMaterial[] | undefined;
  meta?: Meta | undefined;
  modelNumber?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  owner?: Reference | undefined;
  packaging?: DeviceDefinitionPackaging[] | undefined;
  partNumber?: string | undefined;
  productionIdentifierInUDI?:
    | (
        | "lot-number"
        | "manufactured-date"
        | "serial-number"
        | "expiration-date"
        | "biological-source"
        | "software-version"
      )[]
    | undefined;
  property?: DeviceDefinitionProperty[] | undefined;
  regulatoryIdentifier?: DeviceDefinitionRegulatoryIdentifier[] | undefined;
  resourceType: "DeviceDefinition";
  safety?: CodeableConcept[] | undefined;
  shelfLifeStorage?: ProductShelfLife[] | undefined;
  text?: Narrative | undefined;
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[] | undefined;
  version?: DeviceDefinitionVersion[] | undefined;
}

export interface DeviceDefinitionChargeItem {
  _id?: Element | undefined;
  chargeItemCode: CodeableReference;
  count: Quantity;
  effectivePeriod?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  useContext?: UsageContext[] | undefined;
}

export interface DeviceDefinitionClassification {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  justification?: RelatedArtifact[] | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface DeviceDefinitionConformsTo {
  _id?: Element | undefined;
  _version?: Element[] | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: RelatedArtifact[] | undefined;
  specification: CodeableConcept;
  version?: string[] | undefined;
}

export interface DeviceDefinitionCorrectiveAction {
  _id?: Element | undefined;
  _recall?: Element | undefined;
  _scope?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period: Period;
  recall: boolean;
  scope?: "model" | "lot-numbers" | "serial-numbers" | undefined;
}

export interface DeviceDefinitionDeviceName {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  type: "registered-name" | "user-friendly-name" | "patient-reported-name";
}

export interface DeviceDefinitionGuideline {
  _id?: Element | undefined;
  _intendedUse?: Element | undefined;
  _usageInstruction?: Element | undefined;
  contraindication?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  indication?: CodeableConcept[] | undefined;
  intendedUse?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  usageInstruction?: string | undefined;
  useContext?: UsageContext[] | undefined;
  warning?: CodeableConcept[] | undefined;
}

export interface DeviceDefinitionHasPart {
  _id?: Element | undefined;
  count?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference;
}

export interface DeviceDefinitionLink {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedDevice: CodeableReference;
  relation: Coding;
}

export interface DeviceDefinitionMaterial {
  _allergenicIndicator?: Element | undefined;
  _alternate?: Element | undefined;
  _id?: Element | undefined;
  allergenicIndicator?: boolean | undefined;
  alternate?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  substance: CodeableConcept;
}

export interface DeviceDefinitionPackaging {
  _id?: Element | undefined;
  count?: number | undefined;
  distributor?: DeviceDefinitionPackagingDistributor[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  packaging?: DeviceDefinitionPackaging[] | undefined;
  type?: CodeableConcept | undefined;
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[] | undefined;
}

export interface DeviceDefinitionPackagingDistributor {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  organizationReference?: Reference[] | undefined;
}

export interface DeviceDefinitionProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueString?: string | undefined;
}

export interface DeviceDefinitionRegulatoryIdentifier {
  _deviceIdentifier?: Element | undefined;
  _id?: Element | undefined;
  _issuer?: Element | undefined;
  _jurisdiction?: Element | undefined;
  _type?: Element | undefined;
  deviceIdentifier: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  issuer: string;
  jurisdiction: string;
  modifierExtension?: Extension[] | undefined;
  type: "basic" | "master" | "license";
}

export interface DeviceDefinitionUdiDeviceIdentifier {
  _deviceIdentifier?: Element | undefined;
  _id?: Element | undefined;
  _issuer?: Element | undefined;
  _jurisdiction?: Element | undefined;
  deviceIdentifier: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  issuer: string;
  jurisdiction: string;
  marketDistribution?:
    | DeviceDefinitionUdiDeviceIdentifierMarketDistribution[]
    | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
  _id?: Element | undefined;
  _subJurisdiction?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  marketPeriod: Period;
  modifierExtension?: Extension[] | undefined;
  subJurisdiction: string;
}

export interface DeviceDefinitionVersion {
  _id?: Element | undefined;
  _value?: Element | undefined;
  component?: Identifier | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
  value: string;
}

export interface DeviceDispense {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _preparedDate?: Element | undefined;
  _status?: Element | undefined;
  _usageInstruction?: Element | undefined;
  _whenHandedOver?: Element | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  destination?: Reference | undefined;
  device: CodeableReference;
  encounter?: Reference | undefined;
  eventHistory?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  performer?: DeviceDispensePerformer[] | undefined;
  preparedDate?: string | undefined;
  quantity?: Quantity | undefined;
  receiver?: Reference | undefined;
  resourceType: "DeviceDispense";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "cancelled"
    | "on-hold"
    | "preparation"
    | "declined";
  statusReason?: CodeableReference | undefined;
  subject: Reference;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  usageInstruction?: string | undefined;
  whenHandedOver?: string | undefined;
}

export interface DeviceDispensePerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface DeviceMetric {
  _category?: Element | undefined;
  _color?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _operationalStatus?: Element | undefined;
  calibration?: DeviceMetricCalibration[] | undefined;
  category: "measurement" | "setting" | "calculation" | "unspecified";
  color?: string | undefined;
  contained?: FhirResource[] | undefined;
  device: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  measurementFrequency?: Quantity | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  operationalStatus?: "entered-in-error" | "off" | "on" | "standby" | undefined;
  resourceType: "DeviceMetric";
  text?: Narrative | undefined;
  type: CodeableConcept;
  unit?: CodeableConcept | undefined;
}

export interface DeviceMetricCalibration {
  _id?: Element | undefined;
  _state?: Element | undefined;
  _time?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  state?:
    | "unspecified"
    | "not-calibrated"
    | "calibration-required"
    | "calibrated"
    | undefined;
  time?: string | undefined;
  type?: "unspecified" | "offset" | "gain" | "two-point" | undefined;
}

export interface DeviceName {
  _display?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _value?: Element | undefined;
  display?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: "registered-name" | "user-friendly-name" | "patient-reported-name";
  value: string;
}

export interface DeviceProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueString?: string | undefined;
}

export interface DeviceRequest {
  _asNeeded?: Element | undefined;
  _authoredOn?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  asNeeded?: boolean | undefined;
  asNeededFor?: CodeableConcept | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  code: CodeableReference;
  contained?: FhirResource[] | undefined;
  doNotPerform?: boolean | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  insurance?: Reference[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  parameter?: DeviceRequestParameter[] | undefined;
  performer?: CodeableReference | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  quantity?: number | undefined;
  reason?: CodeableReference[] | undefined;
  relevantHistory?: Reference[] | undefined;
  replaces?: Reference[] | undefined;
  requester?: Reference | undefined;
  resourceType: "DeviceRequest";
  status?:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked"
    | undefined;
  subject: Reference;
  supportingInfo?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface DeviceRequestParameter {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
}

export interface DeviceUdiCarrier {
  _carrierAIDC?: Element | undefined;
  _carrierHRF?: Element | undefined;
  _deviceIdentifier?: Element | undefined;
  _entryType?: Element | undefined;
  _id?: Element | undefined;
  _issuer?: Element | undefined;
  _jurisdiction?: Element | undefined;
  carrierAIDC?: string | undefined;
  carrierHRF?: string | undefined;
  deviceIdentifier: string;
  entryType?:
    | "unknown"
    | "barcode"
    | "rfid"
    | "manual"
    | "card"
    | "self-reported"
    | "electronic-transmission"
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  issuer: string;
  jurisdiction?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface DeviceUsage {
  _dateAsserted?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _timingDateTime?: Element | undefined;
  adherence?: DeviceUsageAdherence | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableReference | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  context?: Reference | undefined;
  dateAsserted?: string | undefined;
  derivedFrom?: Reference[] | undefined;
  device: CodeableReference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationSource?: Reference | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  patient: Reference;
  reason?: CodeableReference[] | undefined;
  resourceType: "DeviceUsage";
  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "not-done"
    | "intended";
  text?: Narrative | undefined;
  timingDateTime?: string | undefined;
  timingPeriod?: Period | undefined;
  timingTiming?: Timing | undefined;
  usageReason?: CodeableConcept[] | undefined;
  usageStatus?: CodeableConcept | undefined;
}

export interface DeviceUsageAdherence {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason: CodeableConcept[];
}

export interface DeviceVersion {
  _id?: Element | undefined;
  _installDate?: Element | undefined;
  _value?: Element | undefined;
  component?: Identifier | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  installDate?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
  value: string;
}

export interface DiagnosticReport {
  _conclusion?: Element | undefined;
  _effectiveDateTime?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _issued?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  composition?: Reference | undefined;
  conclusion?: string | undefined;
  conclusionCode?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  effectiveDateTime?: string | undefined;
  effectivePeriod?: Period | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  issued?: string | undefined;
  language?: string | undefined;
  media?: DiagnosticReportMedia[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  performer?: Reference[] | undefined;
  presentedForm?: Attachment[] | undefined;
  resourceType: "DiagnosticReport";
  result?: Reference[] | undefined;
  resultsInterpreter?: Reference[] | undefined;
  specimen?: Reference[] | undefined;
  status:
    | "unknown"
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "registered"
    | "preliminary"
    | "final"
    | "corrected"
    | "partial"
    | "appended"
    | "modified";
  study?: Reference[] | undefined;
  subject?: Reference | undefined;
  supportingInfo?: DiagnosticReportSupportingInfo[] | undefined;
  text?: Narrative | undefined;
}

export interface DiagnosticReportMedia {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  link: Reference;
  modifierExtension?: Extension[] | undefined;
}

export interface DiagnosticReportSupportingInfo {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference;
  type: CodeableConcept;
}

export interface DocumentReference {
  _date?: Element | undefined;
  _description?: Element | undefined;
  _docStatus?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _version?: Element | undefined;
  attester?: DocumentReferenceAttester[] | undefined;
  author?: Reference[] | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableReference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  content: DocumentReferenceContent[];
  context?: Reference[] | undefined;
  custodian?: Reference | undefined;
  date?: string | undefined;
  description?: string | undefined;
  docStatus?:
    | "unknown"
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "registered"
    | "preliminary"
    | "final"
    | "corrected"
    | "partial"
    | "appended"
    | "deprecated"
    | undefined;
  event?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  facilityType?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modality?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  practiceSetting?: CodeableConcept | undefined;
  relatesTo?: DocumentReferenceRelatesTo[] | undefined;
  resourceType: "DocumentReference";
  securityLabel?: CodeableConcept[] | undefined;
  status: "entered-in-error" | "current" | "superseded";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  version?: string | undefined;
}

export interface DocumentReferenceAttester {
  _id?: Element | undefined;
  _time?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  party?: Reference | undefined;
  time?: string | undefined;
}

export interface DocumentReferenceContent {
  _id?: Element | undefined;
  attachment: Attachment;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  profile?: DocumentReferenceContentProfile[] | undefined;
}

export interface DocumentReferenceContentProfile {
  _id?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueCanonical?: string | undefined;
  valueCoding?: Coding | undefined;
  valueUri?: string | undefined;
}

export interface DocumentReferenceRelatesTo {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  target: Reference;
}

export interface Dosage {
  _asNeeded?: Element | undefined;
  _id?: Element | undefined;
  _patientInstruction?: Element | undefined;
  _text?: Element | undefined;
  additionalInstruction?: CodeableConcept[] | undefined;
  asNeeded?: boolean | undefined;
  asNeededFor?: CodeableConcept[] | undefined;
  doseAndRate?: DosageDoseAndRate[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  maxDosePerAdministration?: Quantity | undefined;
  maxDosePerLifetime?: Quantity | undefined;
  maxDosePerPeriod?: Ratio[] | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  patientInstruction?: string | undefined;
  route?: CodeableConcept | undefined;
  sequence?: number | undefined;
  site?: CodeableConcept | undefined;
  text?: string | undefined;
  timing?: Timing | undefined;
}

export interface DosageDoseAndRate {
  _id?: Element | undefined;
  doseQuantity?: Quantity | undefined;
  doseRange?: Range | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  rateQuantity?: Quantity | undefined;
  rateRange?: Range | undefined;
  rateRatio?: Ratio | undefined;
  type?: CodeableConcept | undefined;
}

export interface ElementDefinition {
  _alias?: Element[] | undefined;
  _comment?: Element | undefined;
  _condition?: Element[] | undefined;
  _contentReference?: Element | undefined;
  _defaultValueBase64Binary?: Element | undefined;
  _defaultValueBoolean?: Element | undefined;
  _defaultValueCanonical?: Element | undefined;
  _defaultValueCode?: Element | undefined;
  _defaultValueDate?: Element | undefined;
  _defaultValueDateTime?: Element | undefined;
  _defaultValueId?: Element | undefined;
  _defaultValueInstant?: Element | undefined;
  _defaultValueInteger64?: Element | undefined;
  _defaultValueMarkdown?: Element | undefined;
  _defaultValueOid?: Element | undefined;
  _defaultValueString?: Element | undefined;
  _defaultValueTime?: Element | undefined;
  _defaultValueUri?: Element | undefined;
  _defaultValueUrl?: Element | undefined;
  _defaultValueUuid?: Element | undefined;
  _definition?: Element | undefined;
  _fixedBase64Binary?: Element | undefined;
  _fixedBoolean?: Element | undefined;
  _fixedCanonical?: Element | undefined;
  _fixedCode?: Element | undefined;
  _fixedDate?: Element | undefined;
  _fixedDateTime?: Element | undefined;
  _fixedId?: Element | undefined;
  _fixedInstant?: Element | undefined;
  _fixedInteger64?: Element | undefined;
  _fixedMarkdown?: Element | undefined;
  _fixedOid?: Element | undefined;
  _fixedString?: Element | undefined;
  _fixedTime?: Element | undefined;
  _fixedUri?: Element | undefined;
  _fixedUrl?: Element | undefined;
  _fixedUuid?: Element | undefined;
  _id?: Element | undefined;
  _isModifier?: Element | undefined;
  _isModifierReason?: Element | undefined;
  _isSummary?: Element | undefined;
  _label?: Element | undefined;
  _max?: Element | undefined;
  _maxValueDate?: Element | undefined;
  _maxValueDateTime?: Element | undefined;
  _maxValueInstant?: Element | undefined;
  _maxValueInteger64?: Element | undefined;
  _maxValueTime?: Element | undefined;
  _meaningWhenMissing?: Element | undefined;
  _minValueDate?: Element | undefined;
  _minValueDateTime?: Element | undefined;
  _minValueInstant?: Element | undefined;
  _minValueInteger64?: Element | undefined;
  _minValueTime?: Element | undefined;
  _mustHaveValue?: Element | undefined;
  _mustSupport?: Element | undefined;
  _orderMeaning?: Element | undefined;
  _path?: Element | undefined;
  _patternBase64Binary?: Element | undefined;
  _patternBoolean?: Element | undefined;
  _patternCanonical?: Element | undefined;
  _patternCode?: Element | undefined;
  _patternDate?: Element | undefined;
  _patternDateTime?: Element | undefined;
  _patternId?: Element | undefined;
  _patternInstant?: Element | undefined;
  _patternInteger64?: Element | undefined;
  _patternMarkdown?: Element | undefined;
  _patternOid?: Element | undefined;
  _patternString?: Element | undefined;
  _patternTime?: Element | undefined;
  _patternUri?: Element | undefined;
  _patternUrl?: Element | undefined;
  _patternUuid?: Element | undefined;
  _representation?: Element[] | undefined;
  _requirements?: Element | undefined;
  _short?: Element | undefined;
  _sliceIsConstraining?: Element | undefined;
  _sliceName?: Element | undefined;
  _valueAlternatives?: Element[] | undefined;
  alias?: string[] | undefined;
  base?: ElementDefinitionBase | undefined;
  binding?: ElementDefinitionBinding | undefined;
  code?: Coding[] | undefined;
  comment?: string | undefined;
  condition?: string[] | undefined;
  constraint?: ElementDefinitionConstraint[] | undefined;
  contentReference?: string | undefined;
  defaultValueAddress?: Address | undefined;
  defaultValueAge?: Age | undefined;
  defaultValueAnnotation?: Annotation | undefined;
  defaultValueAttachment?: Attachment | undefined;
  defaultValueAvailability?: Availability | undefined;
  defaultValueBase64Binary?: string | undefined;
  defaultValueBoolean?: boolean | undefined;
  defaultValueCanonical?: string | undefined;
  defaultValueCode?: string | undefined;
  defaultValueCodeableConcept?: CodeableConcept | undefined;
  defaultValueCodeableReference?: CodeableReference | undefined;
  defaultValueCoding?: Coding | undefined;
  defaultValueContactDetail?: ContactDetail | undefined;
  defaultValueContactPoint?: ContactPoint | undefined;
  defaultValueCount?: Count | undefined;
  defaultValueDataRequirement?: DataRequirement | undefined;
  defaultValueDate?: string | undefined;
  defaultValueDateTime?: string | undefined;
  defaultValueDecimal?: number | undefined;
  defaultValueDistance?: Distance | undefined;
  defaultValueDosage?: Dosage | undefined;
  defaultValueDuration?: Duration | undefined;
  defaultValueExpression?: Expression | undefined;
  defaultValueExtendedContactDetail?: ExtendedContactDetail | undefined;
  defaultValueHumanName?: HumanName | undefined;
  defaultValueId?: string | undefined;
  defaultValueIdentifier?: Identifier | undefined;
  defaultValueInstant?: string | undefined;
  defaultValueInteger?: number | undefined;
  defaultValueInteger64?: string | undefined;
  defaultValueMarkdown?: string | undefined;
  defaultValueMeta?: Meta | undefined;
  defaultValueMoney?: Money | undefined;
  defaultValueOid?: string | undefined;
  defaultValueParameterDefinition?: ParameterDefinition | undefined;
  defaultValuePeriod?: Period | undefined;
  defaultValuePositiveInt?: number | undefined;
  defaultValueQuantity?: Quantity | undefined;
  defaultValueRange?: Range | undefined;
  defaultValueRatio?: Ratio | undefined;
  defaultValueRatioRange?: RatioRange | undefined;
  defaultValueReference?: Reference | undefined;
  defaultValueRelatedArtifact?: RelatedArtifact | undefined;
  defaultValueSampledData?: SampledData | undefined;
  defaultValueSignature?: Signature | undefined;
  defaultValueString?: string | undefined;
  defaultValueTime?: string | undefined;
  defaultValueTiming?: Timing | undefined;
  defaultValueTriggerDefinition?: TriggerDefinition | undefined;
  defaultValueUnsignedInt?: number | undefined;
  defaultValueUri?: string | undefined;
  defaultValueUrl?: string | undefined;
  defaultValueUsageContext?: UsageContext | undefined;
  defaultValueUuid?: string | undefined;
  definition?: string | undefined;
  example?: ElementDefinitionExample[] | undefined;
  extension?: Extension[] | undefined;
  fixedAddress?: Address | undefined;
  fixedAge?: Age | undefined;
  fixedAnnotation?: Annotation | undefined;
  fixedAttachment?: Attachment | undefined;
  fixedAvailability?: Availability | undefined;
  fixedBase64Binary?: string | undefined;
  fixedBoolean?: boolean | undefined;
  fixedCanonical?: string | undefined;
  fixedCode?: string | undefined;
  fixedCodeableConcept?: CodeableConcept | undefined;
  fixedCodeableReference?: CodeableReference | undefined;
  fixedCoding?: Coding | undefined;
  fixedContactDetail?: ContactDetail | undefined;
  fixedContactPoint?: ContactPoint | undefined;
  fixedCount?: Count | undefined;
  fixedDataRequirement?: DataRequirement | undefined;
  fixedDate?: string | undefined;
  fixedDateTime?: string | undefined;
  fixedDecimal?: number | undefined;
  fixedDistance?: Distance | undefined;
  fixedDosage?: Dosage | undefined;
  fixedDuration?: Duration | undefined;
  fixedExpression?: Expression | undefined;
  fixedExtendedContactDetail?: ExtendedContactDetail | undefined;
  fixedHumanName?: HumanName | undefined;
  fixedId?: string | undefined;
  fixedIdentifier?: Identifier | undefined;
  fixedInstant?: string | undefined;
  fixedInteger?: number | undefined;
  fixedInteger64?: string | undefined;
  fixedMarkdown?: string | undefined;
  fixedMeta?: Meta | undefined;
  fixedMoney?: Money | undefined;
  fixedOid?: string | undefined;
  fixedParameterDefinition?: ParameterDefinition | undefined;
  fixedPeriod?: Period | undefined;
  fixedPositiveInt?: number | undefined;
  fixedQuantity?: Quantity | undefined;
  fixedRange?: Range | undefined;
  fixedRatio?: Ratio | undefined;
  fixedRatioRange?: RatioRange | undefined;
  fixedReference?: Reference | undefined;
  fixedRelatedArtifact?: RelatedArtifact | undefined;
  fixedSampledData?: SampledData | undefined;
  fixedSignature?: Signature | undefined;
  fixedString?: string | undefined;
  fixedTime?: string | undefined;
  fixedTiming?: Timing | undefined;
  fixedTriggerDefinition?: TriggerDefinition | undefined;
  fixedUnsignedInt?: number | undefined;
  fixedUri?: string | undefined;
  fixedUrl?: string | undefined;
  fixedUsageContext?: UsageContext | undefined;
  fixedUuid?: string | undefined;
  id?: string | undefined;
  isModifier?: boolean | undefined;
  isModifierReason?: string | undefined;
  isSummary?: boolean | undefined;
  label?: string | undefined;
  mapping?: ElementDefinitionMapping[] | undefined;
  max?: string | undefined;
  maxLength?: number | undefined;
  maxValueDate?: string | undefined;
  maxValueDateTime?: string | undefined;
  maxValueDecimal?: number | undefined;
  maxValueInstant?: string | undefined;
  maxValueInteger?: number | undefined;
  maxValueInteger64?: string | undefined;
  maxValuePositiveInt?: number | undefined;
  maxValueQuantity?: Quantity | undefined;
  maxValueTime?: string | undefined;
  maxValueUnsignedInt?: number | undefined;
  meaningWhenMissing?: string | undefined;
  min?: number | undefined;
  minValueDate?: string | undefined;
  minValueDateTime?: string | undefined;
  minValueDecimal?: number | undefined;
  minValueInstant?: string | undefined;
  minValueInteger?: number | undefined;
  minValueInteger64?: string | undefined;
  minValuePositiveInt?: number | undefined;
  minValueQuantity?: Quantity | undefined;
  minValueTime?: string | undefined;
  minValueUnsignedInt?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  mustHaveValue?: boolean | undefined;
  mustSupport?: boolean | undefined;
  orderMeaning?: string | undefined;
  path: string;
  patternAddress?: Address | undefined;
  patternAge?: Age | undefined;
  patternAnnotation?: Annotation | undefined;
  patternAttachment?: Attachment | undefined;
  patternAvailability?: Availability | undefined;
  patternBase64Binary?: string | undefined;
  patternBoolean?: boolean | undefined;
  patternCanonical?: string | undefined;
  patternCode?: string | undefined;
  patternCodeableConcept?: CodeableConcept | undefined;
  patternCodeableReference?: CodeableReference | undefined;
  patternCoding?: Coding | undefined;
  patternContactDetail?: ContactDetail | undefined;
  patternContactPoint?: ContactPoint | undefined;
  patternCount?: Count | undefined;
  patternDataRequirement?: DataRequirement | undefined;
  patternDate?: string | undefined;
  patternDateTime?: string | undefined;
  patternDecimal?: number | undefined;
  patternDistance?: Distance | undefined;
  patternDosage?: Dosage | undefined;
  patternDuration?: Duration | undefined;
  patternExpression?: Expression | undefined;
  patternExtendedContactDetail?: ExtendedContactDetail | undefined;
  patternHumanName?: HumanName | undefined;
  patternId?: string | undefined;
  patternIdentifier?: Identifier | undefined;
  patternInstant?: string | undefined;
  patternInteger?: number | undefined;
  patternInteger64?: string | undefined;
  patternMarkdown?: string | undefined;
  patternMeta?: Meta | undefined;
  patternMoney?: Money | undefined;
  patternOid?: string | undefined;
  patternParameterDefinition?: ParameterDefinition | undefined;
  patternPeriod?: Period | undefined;
  patternPositiveInt?: number | undefined;
  patternQuantity?: Quantity | undefined;
  patternRange?: Range | undefined;
  patternRatio?: Ratio | undefined;
  patternRatioRange?: RatioRange | undefined;
  patternReference?: Reference | undefined;
  patternRelatedArtifact?: RelatedArtifact | undefined;
  patternSampledData?: SampledData | undefined;
  patternSignature?: Signature | undefined;
  patternString?: string | undefined;
  patternTime?: string | undefined;
  patternTiming?: Timing | undefined;
  patternTriggerDefinition?: TriggerDefinition | undefined;
  patternUnsignedInt?: number | undefined;
  patternUri?: string | undefined;
  patternUrl?: string | undefined;
  patternUsageContext?: UsageContext | undefined;
  patternUuid?: string | undefined;
  representation?:
    | ("xmlAttr" | "xmlText" | "typeAttr" | "cdaText" | "xhtml")[]
    | undefined;
  requirements?: string | undefined;
  short?: string | undefined;
  sliceIsConstraining?: boolean | undefined;
  sliceName?: string | undefined;
  slicing?: ElementDefinitionSlicing | undefined;
  type?: ElementDefinitionType[] | undefined;
  valueAlternatives?: string[] | undefined;
}

export interface ElementDefinitionBase {
  _id?: Element | undefined;
  _max?: Element | undefined;
  _path?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  max: string;
  min: number;
  path: string;
}

export interface ElementDefinitionBinding {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _strength?: Element | undefined;
  _valueSet?: Element | undefined;
  additional?: ElementDefinitionBindingAdditional[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  strength: "example" | "required" | "extensible" | "preferred";
  valueSet?: string | undefined;
}

export interface ElementDefinitionBindingAdditional {
  _any?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _purpose?: Element | undefined;
  _shortDoco?: Element | undefined;
  _valueSet?: Element | undefined;
  any?: boolean | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  purpose:
    | "required"
    | "extensible"
    | "preferred"
    | "maximum"
    | "minimum"
    | "candidate"
    | "current"
    | "ui"
    | "starter"
    | "component";
  shortDoco?: string | undefined;
  usage?: UsageContext[] | undefined;
  valueSet: string;
}

export interface ElementDefinitionConstraint {
  _expression?: Element | undefined;
  _human?: Element | undefined;
  _id?: Element | undefined;
  _key?: Element | undefined;
  _requirements?: Element | undefined;
  _severity?: Element | undefined;
  _source?: Element | undefined;
  _suppress?: Element | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  human: string;
  id?: string | undefined;
  key: string;
  requirements?: string | undefined;
  severity: "error" | "warning";
  source?: string | undefined;
  suppress?: boolean | undefined;
}

export interface ElementDefinitionExample {
  _id?: Element | undefined;
  _label?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  label: string;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface ElementDefinitionMapping {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _identity?: Element | undefined;
  _language?: Element | undefined;
  _map?: Element | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identity: string;
  language?: string | undefined;
  map: string;
}

export interface ElementDefinitionSlicing {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _ordered?: Element | undefined;
  _rules?: Element | undefined;
  description?: string | undefined;
  discriminator?: ElementDefinitionSlicingDiscriminator[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  ordered?: boolean | undefined;
  rules: "closed" | "open" | "openAtEnd";
}

export interface ElementDefinitionSlicingDiscriminator {
  _id?: Element | undefined;
  _path?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  path: string;
  type: "exists" | "type" | "value" | "profile" | "position" | "pattern";
}

export interface ElementDefinitionType {
  _aggregation?: Element[] | undefined;
  _code?: Element | undefined;
  _id?: Element | undefined;
  _profile?: Element[] | undefined;
  _targetProfile?: Element[] | undefined;
  _versioning?: Element | undefined;
  aggregation?: ("contained" | "referenced" | "bundled")[] | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  profile?: string[] | undefined;
  targetProfile?: string[] | undefined;
  versioning?: "either" | "independent" | "specific" | undefined;
}

export interface Encounter {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _plannedEndDate?: Element | undefined;
  _plannedStartDate?: Element | undefined;
  _status?: Element | undefined;
  account?: Reference[] | undefined;
  actualPeriod?: Period | undefined;
  admission?: EncounterAdmission | undefined;
  appointment?: Reference[] | undefined;
  basedOn?: Reference[] | undefined;
  careTeam?: Reference[] | undefined;
  class?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  diagnosis?: EncounterDiagnosis[] | undefined;
  dietPreference?: CodeableConcept[] | undefined;
  episodeOfCare?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  length?: Duration | undefined;
  location?: EncounterLocation[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  partOf?: Reference | undefined;
  participant?: EncounterParticipant[] | undefined;
  plannedEndDate?: string | undefined;
  plannedStartDate?: string | undefined;
  priority?: CodeableConcept | undefined;
  reason?: EncounterReason[] | undefined;
  resourceType: "Encounter";
  serviceProvider?: Reference | undefined;
  serviceType?: CodeableReference[] | undefined;
  specialArrangement?: CodeableConcept[] | undefined;
  specialCourtesy?: CodeableConcept[] | undefined;
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "planned"
    | "on-hold"
    | "discharged"
    | "discontinued";
  subject?: Reference | undefined;
  subjectStatus?: CodeableConcept | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
  virtualService?: VirtualServiceDetail[] | undefined;
}

export interface EncounterAdmission {
  _id?: Element | undefined;
  admitSource?: CodeableConcept | undefined;
  destination?: Reference | undefined;
  dischargeDisposition?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  origin?: Reference | undefined;
  preAdmissionIdentifier?: Identifier | undefined;
  reAdmission?: CodeableConcept | undefined;
}

export interface EncounterDiagnosis {
  _id?: Element | undefined;
  condition?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: CodeableConcept[] | undefined;
}

export interface EncounterHistory {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _plannedEndDate?: Element | undefined;
  _plannedStartDate?: Element | undefined;
  _status?: Element | undefined;
  actualPeriod?: Period | undefined;
  class: CodeableConcept;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  length?: Duration | undefined;
  location?: EncounterHistoryLocation[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  plannedEndDate?: string | undefined;
  plannedStartDate?: string | undefined;
  resourceType: "EncounterHistory";
  serviceType?: CodeableReference[] | undefined;
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "planned"
    | "on-hold"
    | "discharged"
    | "discontinued";
  subject?: Reference | undefined;
  subjectStatus?: CodeableConcept | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface EncounterHistoryLocation {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  form?: CodeableConcept | undefined;
  id?: string | undefined;
  location: Reference;
  modifierExtension?: Extension[] | undefined;
}

export interface EncounterLocation {
  _id?: Element | undefined;
  _status?: Element | undefined;
  extension?: Extension[] | undefined;
  form?: CodeableConcept | undefined;
  id?: string | undefined;
  location: Reference;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  status?: "active" | "completed" | "planned" | "reserved" | undefined;
}

export interface EncounterParticipant {
  _id?: Element | undefined;
  actor?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface EncounterReason {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: CodeableConcept[] | undefined;
  value?: CodeableReference[] | undefined;
}

export interface Endpoint {
  _address?: Element | undefined;
  _description?: Element | undefined;
  _header?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  address: string;
  connectionType: CodeableConcept[];
  contact?: ContactPoint[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  environmentType?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  header?: string[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingOrganization?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  payload?: EndpointPayload[] | undefined;
  period?: Period | undefined;
  resourceType: "Endpoint";
  status: "active" | "entered-in-error" | "error" | "suspended" | "off";
  text?: Narrative | undefined;
}

export interface EndpointPayload {
  _id?: Element | undefined;
  _mimeType?: Element[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mimeType?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface EnrollmentRequest {
  _created?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  candidate?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  coverage?: Reference | undefined;
  created?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurer?: Reference | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  provider?: Reference | undefined;
  resourceType: "EnrollmentRequest";
  status?: "draft" | "active" | "entered-in-error" | "cancelled" | undefined;
  text?: Narrative | undefined;
}

export interface EnrollmentResponse {
  _created?: Element | undefined;
  _disposition?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _outcome?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  created?: string | undefined;
  disposition?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  organization?: Reference | undefined;
  outcome?: "error" | "complete" | "queued" | "partial" | undefined;
  request?: Reference | undefined;
  requestProvider?: Reference | undefined;
  resourceType: "EnrollmentResponse";
  status?: "draft" | "active" | "entered-in-error" | "cancelled" | undefined;
  text?: Narrative | undefined;
}

export interface EpisodeOfCare {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  account?: Reference[] | undefined;
  careManager?: Reference | undefined;
  careTeam?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  diagnosis?: EpisodeOfCareDiagnosis[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingOrganization?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  patient: Reference;
  period?: Period | undefined;
  reason?: EpisodeOfCareReason[] | undefined;
  referralRequest?: Reference[] | undefined;
  resourceType: "EpisodeOfCare";
  status:
    | "active"
    | "entered-in-error"
    | "cancelled"
    | "planned"
    | "waitlist"
    | "onhold"
    | "finished";
  statusHistory?: EpisodeOfCareStatusHistory[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface EpisodeOfCareDiagnosis {
  _id?: Element | undefined;
  condition?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: CodeableConcept | undefined;
}

export interface EpisodeOfCareReason {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: CodeableConcept | undefined;
  value?: CodeableReference[] | undefined;
}

export interface EpisodeOfCareStatusHistory {
  _id?: Element | undefined;
  _status?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period: Period;
  status:
    | "active"
    | "entered-in-error"
    | "cancelled"
    | "planned"
    | "waitlist"
    | "onhold"
    | "finished";
}

export interface EventDefinition {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "EventDefinition";
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  subtitle?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  trigger: TriggerDefinition[];
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface Evidence {
  _approvalDate?: Element | undefined;
  _assertion?: Element | undefined;
  _citeAsMarkdown?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  assertion?: string | undefined;
  author?: ContactDetail[] | undefined;
  certainty?: EvidenceCertainty[] | undefined;
  citeAsMarkdown?: string | undefined;
  citeAsReference?: Reference | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "Evidence";
  reviewer?: ContactDetail[] | undefined;
  statistic?: EvidenceStatistic[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  studyDesign?: CodeableConcept[] | undefined;
  synthesisType?: CodeableConcept | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  variableDefinition: EvidenceVariableDefinition[];
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface EvidenceCertainty {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _rater?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  rater?: string | undefined;
  rating?: CodeableConcept | undefined;
  subcomponent?: EvidenceCertainty[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface EvidenceReport {
  _citeAsMarkdown?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _publisher?: Element | undefined;
  _status?: Element | undefined;
  _url?: Element | undefined;
  author?: ContactDetail[] | undefined;
  citeAsMarkdown?: string | undefined;
  citeAsReference?: Reference | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  editor?: ContactDetail[] | undefined;
  endorser?: ContactDetail[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  publisher?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  relatedIdentifier?: Identifier[] | undefined;
  relatesTo?: EvidenceReportRelatesTo[] | undefined;
  resourceType: "EvidenceReport";
  reviewer?: ContactDetail[] | undefined;
  section?: EvidenceReportSection[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subject: EvidenceReportSubject;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
}

export interface EvidenceReportRelatesTo {
  _code?: Element | undefined;
  _id?: Element | undefined;
  code:
    | "amends"
    | "appends"
    | "replaces"
    | "transforms"
    | "replacedWith"
    | "amendedWith"
    | "appendedWith"
    | "transformedWith";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  target: EvidenceReportRelatesToTarget;
}

export interface EvidenceReportRelatesToTarget {
  _display?: Element | undefined;
  _id?: Element | undefined;
  _url?: Element | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  resource?: Reference | undefined;
  url?: string | undefined;
}

export interface EvidenceReportSection {
  _id?: Element | undefined;
  _mode?: Element | undefined;
  _title?: Element | undefined;
  author?: Reference[] | undefined;
  emptyReason?: CodeableConcept | undefined;
  entryClassifier?: CodeableConcept[] | undefined;
  entryQuantity?: Quantity[] | undefined;
  entryReference?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  focus?: CodeableConcept | undefined;
  focusReference?: Reference | undefined;
  id?: string | undefined;
  mode?: "snapshot" | "working" | "changes" | undefined;
  modifierExtension?: Extension[] | undefined;
  orderedBy?: CodeableConcept | undefined;
  section?: EvidenceReportSection[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
}

export interface EvidenceReportSubject {
  _id?: Element | undefined;
  characteristic?: EvidenceReportSubjectCharacteristic[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
}

export interface EvidenceReportSubjectCharacteristic {
  _exclude?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  code: CodeableConcept;
  exclude?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface EvidenceStatistic {
  _description?: Element | undefined;
  _id?: Element | undefined;
  attributeEstimate?: EvidenceStatisticAttributeEstimate[] | undefined;
  category?: CodeableConcept | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modelCharacteristic?: EvidenceStatisticModelCharacteristic[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  numberAffected?: number | undefined;
  numberOfEvents?: number | undefined;
  quantity?: Quantity | undefined;
  sampleSize?: EvidenceStatisticSampleSize | undefined;
  statisticType?: CodeableConcept | undefined;
}

export interface EvidenceStatisticAttributeEstimate {
  _description?: Element | undefined;
  _id?: Element | undefined;
  attributeEstimate?: EvidenceStatisticAttributeEstimate[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  level?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  quantity?: Quantity | undefined;
  range?: Range | undefined;
  type?: CodeableConcept | undefined;
}

export interface EvidenceStatisticModelCharacteristic {
  _id?: Element | undefined;
  attributeEstimate?: EvidenceStatisticAttributeEstimate[] | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value?: Quantity | undefined;
  variable?: EvidenceStatisticModelCharacteristicVariable[] | undefined;
}

export interface EvidenceStatisticModelCharacteristicVariable {
  _handling?: Element | undefined;
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  handling?:
    | "continuous"
    | "dichotomous"
    | "ordinal"
    | "polychotomous"
    | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueCategory?: CodeableConcept[] | undefined;
  valueQuantity?: Quantity[] | undefined;
  valueRange?: Range[] | undefined;
  variableDefinition: Reference;
}

export interface EvidenceStatisticSampleSize {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  knownDataCount?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  numberOfParticipants?: number | undefined;
  numberOfStudies?: number | undefined;
}

export interface EvidenceVariable {
  _actual?: Element | undefined;
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _handling?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _shortTitle?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  actual?: boolean | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  category?: EvidenceVariableCategory[] | undefined;
  characteristic?: EvidenceVariableCharacteristic[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  handling?:
    | "continuous"
    | "dichotomous"
    | "ordinal"
    | "polychotomous"
    | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "EvidenceVariable";
  reviewer?: ContactDetail[] | undefined;
  shortTitle?: string | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface EvidenceVariableCategory {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
}

export interface EvidenceVariableCharacteristic {
  _definitionCanonical?: Element | undefined;
  _definitionId?: Element | undefined;
  _description?: Element | undefined;
  _exclude?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  definitionByCombination?:
    | EvidenceVariableCharacteristicDefinitionByCombination
    | undefined;
  definitionByTypeAndValue?:
    | EvidenceVariableCharacteristicDefinitionByTypeAndValue
    | undefined;
  definitionCanonical?: string | undefined;
  definitionCodeableConcept?: CodeableConcept | undefined;
  definitionExpression?: Expression | undefined;
  definitionId?: string | undefined;
  definitionReference?: Reference | undefined;
  description?: string | undefined;
  durationQuantity?: Quantity | undefined;
  durationRange?: Range | undefined;
  exclude?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instancesQuantity?: Quantity | undefined;
  instancesRange?: Range | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  timeFromEvent?: EvidenceVariableCharacteristicTimeFromEvent[] | undefined;
}

export interface EvidenceVariableCharacteristicDefinitionByCombination {
  _code?: Element | undefined;
  _id?: Element | undefined;
  characteristic: EvidenceVariableCharacteristic[];
  code:
    | "all-of"
    | "any-of"
    | "at-least"
    | "at-most"
    | "statistical"
    | "net-effect"
    | "dataset";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  threshold?: number | undefined;
}

export interface EvidenceVariableCharacteristicDefinitionByTypeAndValue {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueId?: Element | undefined;
  device?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  method?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  offset?: CodeableConcept | undefined;
  type: CodeableConcept;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueId?: string | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface EvidenceVariableCharacteristicTimeFromEvent {
  _description?: Element | undefined;
  _eventDateTime?: Element | undefined;
  _eventId?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  eventCodeableConcept?: CodeableConcept | undefined;
  eventDateTime?: string | undefined;
  eventId?: string | undefined;
  eventReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  quantity?: Quantity | undefined;
  range?: Range | undefined;
}

export interface EvidenceVariableDefinition {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  directnessMatch?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  intended?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  observed?: Reference | undefined;
  variableRole: CodeableConcept;
}

export interface ExampleScenario {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  actor?: ExampleScenarioActor[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instance?: ExampleScenarioInstance[] | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  process?: ExampleScenarioProcess[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "ExampleScenario";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ExampleScenarioActor {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _key?: Element | undefined;
  _title?: Element | undefined;
  _type?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  key: string;
  modifierExtension?: Extension[] | undefined;
  title: string;
  type: "system" | "person";
}

export interface ExampleScenarioInstance {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _key?: Element | undefined;
  _structureProfileCanonical?: Element | undefined;
  _structureProfileUri?: Element | undefined;
  _structureVersion?: Element | undefined;
  _title?: Element | undefined;
  containedInstance?: ExampleScenarioInstanceContainedInstance[] | undefined;
  content?: Reference | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  key: string;
  modifierExtension?: Extension[] | undefined;
  structureProfileCanonical?: string | undefined;
  structureProfileUri?: string | undefined;
  structureType: Coding;
  structureVersion?: string | undefined;
  title: string;
  version?: ExampleScenarioInstanceVersion[] | undefined;
}

export interface ExampleScenarioInstanceContainedInstance {
  _id?: Element | undefined;
  _instanceReference?: Element | undefined;
  _versionReference?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instanceReference: string;
  modifierExtension?: Extension[] | undefined;
  versionReference?: string | undefined;
}

export interface ExampleScenarioInstanceVersion {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _key?: Element | undefined;
  _title?: Element | undefined;
  content?: Reference | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  key: string;
  modifierExtension?: Extension[] | undefined;
  title: string;
}

export interface ExampleScenarioProcess {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _postConditions?: Element | undefined;
  _preConditions?: Element | undefined;
  _title?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  postConditions?: string | undefined;
  preConditions?: string | undefined;
  step?: ExampleScenarioProcessStep[] | undefined;
  title: string;
}

export interface ExampleScenarioProcessStep {
  _id?: Element | undefined;
  _number?: Element | undefined;
  _pause?: Element | undefined;
  _workflow?: Element | undefined;
  alternative?: ExampleScenarioProcessStepAlternative[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: string | undefined;
  operation?: ExampleScenarioProcessStepOperation | undefined;
  pause?: boolean | undefined;
  process?: ExampleScenarioProcess | undefined;
  workflow?: string | undefined;
}

export interface ExampleScenarioProcessStepAlternative {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _title?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  step?: ExampleScenarioProcessStep[] | undefined;
  title: string;
}

export interface ExampleScenarioProcessStepOperation {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _initiator?: Element | undefined;
  _initiatorActive?: Element | undefined;
  _receiver?: Element | undefined;
  _receiverActive?: Element | undefined;
  _title?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  initiator?: string | undefined;
  initiatorActive?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  receiver?: string | undefined;
  receiverActive?: boolean | undefined;
  request?: ExampleScenarioInstanceContainedInstance | undefined;
  response?: ExampleScenarioInstanceContainedInstance | undefined;
  title: string;
  type?: Coding | undefined;
}

export interface ExplanationOfBenefit {
  _created?: Element | undefined;
  _disposition?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _outcome?: Element | undefined;
  _preAuthRef?: Element[] | undefined;
  _status?: Element | undefined;
  _use?: Element | undefined;
  accident?: ExplanationOfBenefitAccident | undefined;
  addItem?: ExplanationOfBenefitAddItem[] | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  benefitBalance?: ExplanationOfBenefitBenefitBalance[] | undefined;
  benefitPeriod?: Period | undefined;
  billablePeriod?: Period | undefined;
  careTeam?: ExplanationOfBenefitCareTeam[] | undefined;
  claim?: Reference | undefined;
  claimResponse?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  decision?: CodeableConcept | undefined;
  diagnosis?: ExplanationOfBenefitDiagnosis[] | undefined;
  diagnosisRelatedGroup?: CodeableConcept | undefined;
  disposition?: string | undefined;
  encounter?: Reference[] | undefined;
  enterer?: Reference | undefined;
  event?: ExplanationOfBenefitEvent[] | undefined;
  extension?: Extension[] | undefined;
  facility?: Reference | undefined;
  form?: Attachment | undefined;
  formCode?: CodeableConcept | undefined;
  fundsReserve?: CodeableConcept | undefined;
  fundsReserveRequested?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  insurance?: ExplanationOfBenefitInsurance[] | undefined;
  insurer?: Reference | undefined;
  item?: ExplanationOfBenefitItem[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  originalPrescription?: Reference | undefined;
  outcome: "error" | "complete" | "queued" | "partial";
  patient: Reference;
  patientPaid?: Money | undefined;
  payee?: ExplanationOfBenefitPayee | undefined;
  payment?: ExplanationOfBenefitPayment | undefined;
  preAuthRef?: string[] | undefined;
  preAuthRefPeriod?: Period[] | undefined;
  precedence?: number | undefined;
  prescription?: Reference | undefined;
  priority?: CodeableConcept | undefined;
  procedure?: ExplanationOfBenefitProcedure[] | undefined;
  processNote?: ExplanationOfBenefitProcessNote[] | undefined;
  provider?: Reference | undefined;
  referral?: Reference | undefined;
  related?: ExplanationOfBenefitRelated[] | undefined;
  resourceType: "ExplanationOfBenefit";
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  subType?: CodeableConcept | undefined;
  supportingInfo?: ExplanationOfBenefitSupportingInfo[] | undefined;
  text?: Narrative | undefined;
  total?: ExplanationOfBenefitTotal[] | undefined;
  traceNumber?: Identifier[] | undefined;
  type: CodeableConcept;
  use: "claim" | "preauthorization" | "predetermination";
}

export interface ExplanationOfBenefitAccident {
  _date?: Element | undefined;
  _id?: Element | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  locationAddress?: Address | undefined;
  locationReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitAddItem {
  _id?: Element | undefined;
  _servicedDate?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  bodySite?: ExplanationOfBenefitAddItemBodySite[] | undefined;
  detail?: ExplanationOfBenefitAddItemDetail[] | undefined;
  detailSequence?: number[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  itemSequence?: number[] | undefined;
  locationAddress?: Address | undefined;
  locationCodeableConcept?: CodeableConcept | undefined;
  locationReference?: Reference | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  provider?: Reference[] | undefined;
  quantity?: Quantity | undefined;
  request?: Reference[] | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  subDetailSequence?: number[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitAddItemBodySite {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  site: CodeableReference[];
  subSite?: CodeableConcept[] | undefined;
}

export interface ExplanationOfBenefitAddItemDetail {
  _id?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitAddItemDetailSubDetail {
  _id?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitBenefitBalance {
  _description?: Element | undefined;
  _excluded?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  category: CodeableConcept;
  description?: string | undefined;
  excluded?: boolean | undefined;
  extension?: Extension[] | undefined;
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  network?: CodeableConcept | undefined;
  term?: CodeableConcept | undefined;
  unit?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitBenefitBalanceFinancial {
  _allowedString?: Element | undefined;
  _id?: Element | undefined;
  allowedMoney?: Money | undefined;
  allowedString?: string | undefined;
  allowedUnsignedInt?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  usedMoney?: Money | undefined;
  usedUnsignedInt?: number | undefined;
}

export interface ExplanationOfBenefitCareTeam {
  _id?: Element | undefined;
  _responsible?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  provider: Reference;
  responsible?: boolean | undefined;
  role?: CodeableConcept | undefined;
  sequence: number;
  specialty?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitDiagnosis {
  _id?: Element | undefined;
  diagnosisCodeableConcept?: CodeableConcept | undefined;
  diagnosisReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onAdmission?: CodeableConcept | undefined;
  sequence: number;
  type?: CodeableConcept[] | undefined;
}

export interface ExplanationOfBenefitEvent {
  _id?: Element | undefined;
  _whenDateTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  whenDateTime?: string | undefined;
  whenPeriod?: Period | undefined;
}

export interface ExplanationOfBenefitInsurance {
  _focal?: Element | undefined;
  _id?: Element | undefined;
  _preAuthRef?: Element[] | undefined;
  coverage: Reference;
  extension?: Extension[] | undefined;
  focal: boolean;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  preAuthRef?: string[] | undefined;
}

export interface ExplanationOfBenefitItem {
  _id?: Element | undefined;
  _servicedDate?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  bodySite?: ExplanationOfBenefitItemBodySite[] | undefined;
  careTeamSequence?: number[] | undefined;
  category?: CodeableConcept | undefined;
  detail?: ExplanationOfBenefitItemDetail[] | undefined;
  diagnosisSequence?: number[] | undefined;
  encounter?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  informationSequence?: number[] | undefined;
  locationAddress?: Address | undefined;
  locationCodeableConcept?: CodeableConcept | undefined;
  locationReference?: Reference | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  procedureSequence?: number[] | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  request?: Reference[] | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  sequence: number;
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitItemAdjudication {
  _id?: Element | undefined;
  amount?: Money | undefined;
  category: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
  reason?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitItemBodySite {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  site: CodeableReference[];
  subSite?: CodeableConcept[] | undefined;
}

export interface ExplanationOfBenefitItemDetail {
  _id?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  sequence: number;
  subDetail?: ExplanationOfBenefitItemDetailSubDetail[] | undefined;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitItemDetailSubDetail {
  _id?: Element | undefined;
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  net?: Money | undefined;
  noteNumber?: number[] | undefined;
  patientPaid?: Money | undefined;
  productOrService?: CodeableConcept | undefined;
  productOrServiceEnd?: CodeableConcept | undefined;
  programCode?: CodeableConcept[] | undefined;
  quantity?: Quantity | undefined;
  revenue?: CodeableConcept | undefined;
  reviewOutcome?: ExplanationOfBenefitItemReviewOutcome | undefined;
  sequence: number;
  tax?: Money | undefined;
  traceNumber?: Identifier[] | undefined;
  udi?: Reference[] | undefined;
  unitPrice?: Money | undefined;
}

export interface ExplanationOfBenefitItemReviewOutcome {
  _id?: Element | undefined;
  _preAuthRef?: Element | undefined;
  decision?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  preAuthPeriod?: Period | undefined;
  preAuthRef?: string | undefined;
  reason?: CodeableConcept[] | undefined;
}

export interface ExplanationOfBenefitPayee {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  party?: Reference | undefined;
  type?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitPayment {
  _date?: Element | undefined;
  _id?: Element | undefined;
  adjustment?: Money | undefined;
  adjustmentReason?: CodeableConcept | undefined;
  amount?: Money | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitProcedure {
  _date?: Element | undefined;
  _id?: Element | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  procedureCodeableConcept?: CodeableConcept | undefined;
  procedureReference?: Reference | undefined;
  sequence: number;
  type?: CodeableConcept[] | undefined;
  udi?: Reference[] | undefined;
}

export interface ExplanationOfBenefitProcessNote {
  _id?: Element | undefined;
  _text?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: number | undefined;
  text?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitRelated {
  _id?: Element | undefined;
  claim?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference?: Identifier | undefined;
  relationship?: CodeableConcept | undefined;
}

export interface ExplanationOfBenefitSupportingInfo {
  _id?: Element | undefined;
  _timingDate?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  category: CodeableConcept;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: Coding | undefined;
  sequence: number;
  timingDate?: string | undefined;
  timingPeriod?: Period | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueIdentifier?: Identifier | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
  valueString?: string | undefined;
}

export interface ExplanationOfBenefitTotal {
  _id?: Element | undefined;
  amount: Money;
  category: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ExtendedContactDetail {
  _id?: Element | undefined;
  address?: Address | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  name?: HumanName[] | undefined;
  organization?: Reference | undefined;
  period?: Period | undefined;
  purpose?: CodeableConcept | undefined;
  telecom?: ContactPoint[] | undefined;
}

export interface FamilyMemberHistory {
  _ageString?: Element | undefined;
  _bornDate?: Element | undefined;
  _bornString?: Element | undefined;
  _date?: Element | undefined;
  _deceasedBoolean?: Element | undefined;
  _deceasedDate?: Element | undefined;
  _deceasedString?: Element | undefined;
  _estimatedAge?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  ageAge?: Age | undefined;
  ageRange?: Range | undefined;
  ageString?: string | undefined;
  bornDate?: string | undefined;
  bornPeriod?: Period | undefined;
  bornString?: string | undefined;
  condition?: FamilyMemberHistoryCondition[] | undefined;
  contained?: FhirResource[] | undefined;
  dataAbsentReason?: CodeableConcept | undefined;
  date?: string | undefined;
  deceasedAge?: Age | undefined;
  deceasedBoolean?: boolean | undefined;
  deceasedDate?: string | undefined;
  deceasedRange?: Range | undefined;
  deceasedString?: string | undefined;
  estimatedAge?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  participant?: FamilyMemberHistoryParticipant[] | undefined;
  patient: Reference;
  procedure?: FamilyMemberHistoryProcedure[] | undefined;
  reason?: CodeableReference[] | undefined;
  relationship: CodeableConcept;
  resourceType: "FamilyMemberHistory";
  sex?: CodeableConcept | undefined;
  status: "completed" | "entered-in-error" | "partial" | "health-unknown";
  text?: Narrative | undefined;
}

export interface FamilyMemberHistoryCondition {
  _contributedToDeath?: Element | undefined;
  _id?: Element | undefined;
  _onsetString?: Element | undefined;
  code: CodeableConcept;
  contributedToDeath?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  onsetAge?: Age | undefined;
  onsetPeriod?: Period | undefined;
  onsetRange?: Range | undefined;
  onsetString?: string | undefined;
  outcome?: CodeableConcept | undefined;
}

export interface FamilyMemberHistoryParticipant {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface FamilyMemberHistoryProcedure {
  _contributedToDeath?: Element | undefined;
  _id?: Element | undefined;
  _performedDateTime?: Element | undefined;
  _performedString?: Element | undefined;
  code: CodeableConcept;
  contributedToDeath?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  outcome?: CodeableConcept | undefined;
  performedAge?: Age | undefined;
  performedDateTime?: string | undefined;
  performedPeriod?: Period | undefined;
  performedRange?: Range | undefined;
  performedString?: string | undefined;
}

export type FhirResource =
  | Account
  | ActivityDefinition
  | ActorDefinition
  | AdministrableProductDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | ArtifactAssessment
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BiologicallyDerivedProductDispense
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | ChargeItem
  | ChargeItemDefinition
  | Citation
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | ClinicalUseDefinition
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | ConditionDefinition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceAssociation
  | DeviceDefinition
  | DeviceDispense
  | DeviceMetric
  | DeviceRequest
  | DeviceUsage
  | DiagnosticReport
  | DocumentReference
  | Encounter
  | EncounterHistory
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceReport
  | EvidenceVariable
  | ExampleScenario
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | FormularyItem
  | GenomicStudy
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingSelection
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | Ingredient
  | InsurancePlan
  | InventoryItem
  | InventoryReport
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | ManufacturedItemDefinition
  | Measure
  | MeasureReport
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProductDefinition
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionIntake
  | NutritionOrder
  | NutritionProduct
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | PackagedProductDefinition
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Permission
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RegulatedAuthorization
  | RelatedPerson
  | RequestOrchestration
  | Requirements
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | SubscriptionStatus
  | SubscriptionTopic
  | Substance
  | SubstanceDefinition
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestPlan
  | TestReport
  | TestScript
  | Transport
  | ValueSet
  | VerificationResult
  | VisionPrescription;

export interface Flag {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  author?: Reference | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  resourceType: "Flag";
  status: "active" | "entered-in-error" | "inactive";
  subject: Reference;
  text?: Narrative | undefined;
}

export interface FormularyItem {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "FormularyItem";
  status?: "active" | "entered-in-error" | "inactive" | undefined;
  text?: Narrative | undefined;
}

export interface GenomicStudy {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element | undefined;
  _instantiatesUri?: Element | undefined;
  _language?: Element | undefined;
  _startDate?: Element | undefined;
  _status?: Element | undefined;
  analysis?: GenomicStudyAnalysis[] | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string | undefined;
  instantiatesUri?: string | undefined;
  interpreter?: Reference[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  reason?: CodeableReference[] | undefined;
  referrer?: Reference | undefined;
  resourceType: "GenomicStudy";
  startDate?: string | undefined;
  status:
    | "unknown"
    | "entered-in-error"
    | "cancelled"
    | "available"
    | "registered";
  subject: Reference;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface GenomicStudyAnalysis {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _instantiatesCanonical?: Element | undefined;
  _instantiatesUri?: Element | undefined;
  _title?: Element | undefined;
  changeType?: CodeableConcept[] | undefined;
  date?: string | undefined;
  device?: GenomicStudyAnalysisDevice[] | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  genomeBuild?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  input?: GenomicStudyAnalysisInput[] | undefined;
  instantiatesCanonical?: string | undefined;
  instantiatesUri?: string | undefined;
  methodType?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  output?: GenomicStudyAnalysisOutput[] | undefined;
  performer?: GenomicStudyAnalysisPerformer[] | undefined;
  protocolPerformed?: Reference | undefined;
  regionsCalled?: Reference[] | undefined;
  regionsStudied?: Reference[] | undefined;
  specimen?: Reference[] | undefined;
  title?: string | undefined;
}

export interface GenomicStudyAnalysisDevice {
  _id?: Element | undefined;
  device?: Reference | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface GenomicStudyAnalysisInput {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  file?: Reference | undefined;
  generatedByIdentifier?: Identifier | undefined;
  generatedByReference?: Reference | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface GenomicStudyAnalysisOutput {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  file?: Reference | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface GenomicStudyAnalysisPerformer {
  _id?: Element | undefined;
  actor?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
}

export interface Goal {
  _continuous?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lifecycleStatus?: Element | undefined;
  _startDate?: Element | undefined;
  _statusDate?: Element | undefined;
  _statusReason?: Element | undefined;
  achievementStatus?: CodeableConcept | undefined;
  addresses?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  continuous?: boolean | undefined;
  description: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lifecycleStatus:
    | "active"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "planned"
    | "accepted"
    | "rejected"
    | "on-hold"
    | "proposed";
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  outcome?: CodeableReference[] | undefined;
  priority?: CodeableConcept | undefined;
  resourceType: "Goal";
  source?: Reference | undefined;
  startCodeableConcept?: CodeableConcept | undefined;
  startDate?: string | undefined;
  statusDate?: string | undefined;
  statusReason?: string | undefined;
  subject: Reference;
  target?: GoalTarget[] | undefined;
  text?: Narrative | undefined;
}

export interface GoalTarget {
  _detailBoolean?: Element | undefined;
  _detailString?: Element | undefined;
  _dueDate?: Element | undefined;
  _id?: Element | undefined;
  detailBoolean?: boolean | undefined;
  detailCodeableConcept?: CodeableConcept | undefined;
  detailInteger?: number | undefined;
  detailQuantity?: Quantity | undefined;
  detailRange?: Range | undefined;
  detailRatio?: Ratio | undefined;
  detailString?: string | undefined;
  dueDate?: string | undefined;
  dueDuration?: Duration | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  measure?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface GraphDefinition {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _start?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  link?: GraphDefinitionLink[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  node?: GraphDefinitionNode[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "GraphDefinition";
  start?: string | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface GraphDefinitionLink {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _max?: Element | undefined;
  _params?: Element | undefined;
  _path?: Element | undefined;
  _sliceName?: Element | undefined;
  _sourceId?: Element | undefined;
  _targetId?: Element | undefined;
  compartment?: GraphDefinitionLinkCompartment[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  max?: string | undefined;
  min?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  params?: string | undefined;
  path?: string | undefined;
  sliceName?: string | undefined;
  sourceId: string;
  targetId: string;
}

export interface GraphDefinitionLinkCompartment {
  _code?: Element | undefined;
  _description?: Element | undefined;
  _expression?: Element | undefined;
  _id?: Element | undefined;
  _rule?: Element | undefined;
  _use?: Element | undefined;
  code:
    | "RelatedPerson"
    | "Practitioner"
    | "Patient"
    | "Encounter"
    | "Device"
    | "EpisodeOfCare";
  description?: string | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  rule: "identical" | "matching" | "different" | "custom";
  use: "where" | "requires";
}

export interface GraphDefinitionNode {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _nodeId?: Element | undefined;
  _profile?: Element | undefined;
  _type?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  nodeId: string;
  profile?: string | undefined;
  type: string;
}

export interface Group {
  _active?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _membership?: Element | undefined;
  _name?: Element | undefined;
  _type?: Element | undefined;
  active?: boolean | undefined;
  characteristic?: GroupCharacteristic[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingEntity?: Reference | undefined;
  member?: GroupMember[] | undefined;
  membership: "definitional" | "enumerated";
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  quantity?: number | undefined;
  resourceType: "Group";
  text?: Narrative | undefined;
  type:
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "practitioner"
    | "relatedperson"
    | "person"
    | "animal"
    | "specimen";
}

export interface GroupCharacteristic {
  _exclude?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  code: CodeableConcept;
  exclude: boolean;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface GroupMember {
  _id?: Element | undefined;
  _inactive?: Element | undefined;
  entity: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  inactive?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
}

export interface GuidanceResponse {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _moduleCanonical?: Element | undefined;
  _moduleUri?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  dataRequirement?: DataRequirement[] | undefined;
  encounter?: Reference | undefined;
  evaluationMessage?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  moduleCanonical?: string | undefined;
  moduleCodeableConcept?: CodeableConcept | undefined;
  moduleUri?: string | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  outputParameters?: Reference | undefined;
  performer?: Reference | undefined;
  reason?: CodeableReference[] | undefined;
  requestIdentifier?: Identifier | undefined;
  resourceType: "GuidanceResponse";
  result?: Reference[] | undefined;
  status:
    | "in-progress"
    | "entered-in-error"
    | "success"
    | "data-requested"
    | "data-required"
    | "failure";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface HealthcareService {
  _active?: Element | undefined;
  _appointmentRequired?: Element | undefined;
  _comment?: Element | undefined;
  _extraDetails?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  active?: boolean | undefined;
  appointmentRequired?: boolean | undefined;
  availability?: Availability[] | undefined;
  category?: CodeableConcept[] | undefined;
  characteristic?: CodeableConcept[] | undefined;
  comment?: string | undefined;
  communication?: CodeableConcept[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  coverageArea?: Reference[] | undefined;
  eligibility?: HealthcareServiceEligibility[] | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  extraDetails?: string | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  offeredIn?: Reference[] | undefined;
  photo?: Attachment | undefined;
  program?: CodeableConcept[] | undefined;
  providedBy?: Reference | undefined;
  referralMethod?: CodeableConcept[] | undefined;
  resourceType: "HealthcareService";
  serviceProvisionCode?: CodeableConcept[] | undefined;
  specialty?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface HealthcareServiceEligibility {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ImagingSelection {
  _frameOfReferenceUid?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _issued?: Element | undefined;
  _language?: Element | undefined;
  _seriesUid?: Element | undefined;
  _status?: Element | undefined;
  _studyUid?: Element | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableReference | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  contained?: FhirResource[] | undefined;
  derivedFrom?: Reference[] | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  frameOfReferenceUid?: string | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instance?: ImagingSelectionInstance[] | undefined;
  issued?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  performer?: ImagingSelectionPerformer[] | undefined;
  resourceType: "ImagingSelection";
  seriesNumber?: number | undefined;
  seriesUid?: string | undefined;
  status: "unknown" | "entered-in-error" | "available";
  studyUid?: string | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface ImagingSelectionInstance {
  _id?: Element | undefined;
  _subset?: Element[] | undefined;
  _uid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  imageRegion2D?: ImagingSelectionInstanceImageRegion2D[] | undefined;
  imageRegion3D?: ImagingSelectionInstanceImageRegion3D[] | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: number | undefined;
  sopClass?: Coding | undefined;
  subset?: string[] | undefined;
  uid: string;
}

export interface ImagingSelectionInstanceImageRegion2D {
  _id?: Element | undefined;
  _regionType?: Element | undefined;
  coordinate: number[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  regionType: "point" | "polyline" | "ellipse" | "interpolated" | "circle";
}

export interface ImagingSelectionInstanceImageRegion3D {
  _id?: Element | undefined;
  _regionType?: Element | undefined;
  coordinate: number[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  regionType:
    | "point"
    | "multipoint"
    | "polyline"
    | "polygon"
    | "ellipse"
    | "ellipsoid";
}

export interface ImagingSelectionPerformer {
  _id?: Element | undefined;
  actor?: Reference | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ImagingStudy {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _started?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  encounter?: Reference | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modality?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  numberOfInstances?: number | undefined;
  numberOfSeries?: number | undefined;
  partOf?: Reference[] | undefined;
  procedure?: CodeableReference[] | undefined;
  reason?: CodeableReference[] | undefined;
  referrer?: Reference | undefined;
  resourceType: "ImagingStudy";
  series?: ImagingStudySeries[] | undefined;
  started?: string | undefined;
  status:
    | "unknown"
    | "entered-in-error"
    | "cancelled"
    | "available"
    | "registered";
  subject: Reference;
  text?: Narrative | undefined;
}

export interface ImagingStudySeries {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _started?: Element | undefined;
  _uid?: Element | undefined;
  bodySite?: CodeableReference | undefined;
  description?: string | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instance?: ImagingStudySeriesInstance[] | undefined;
  laterality?: CodeableConcept | undefined;
  modality: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  number?: number | undefined;
  numberOfInstances?: number | undefined;
  performer?: ImagingStudySeriesPerformer[] | undefined;
  specimen?: Reference[] | undefined;
  started?: string | undefined;
  uid: string;
}

export interface ImagingStudySeriesInstance {
  _id?: Element | undefined;
  _title?: Element | undefined;
  _uid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  number?: number | undefined;
  sopClass: Coding;
  title?: string | undefined;
  uid: string;
}

export interface ImagingStudySeriesPerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Immunization {
  _expirationDate?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _isSubpotent?: Element | undefined;
  _language?: Element | undefined;
  _lotNumber?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _occurrenceString?: Element | undefined;
  _primarySource?: Element | undefined;
  _status?: Element | undefined;
  administeredProduct?: CodeableReference | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  doseQuantity?: Quantity | undefined;
  encounter?: Reference | undefined;
  expirationDate?: string | undefined;
  extension?: Extension[] | undefined;
  fundingSource?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationSource?: CodeableReference | undefined;
  isSubpotent?: boolean | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  lotNumber?: string | undefined;
  manufacturer?: CodeableReference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrenceString?: string | undefined;
  patient: Reference;
  performer?: ImmunizationPerformer[] | undefined;
  primarySource?: boolean | undefined;
  programEligibility?: ImmunizationProgramEligibility[] | undefined;
  protocolApplied?: ImmunizationProtocolApplied[] | undefined;
  reaction?: ImmunizationReaction[] | undefined;
  reason?: CodeableReference[] | undefined;
  resourceType: "Immunization";
  route?: CodeableConcept | undefined;
  site?: CodeableConcept | undefined;
  status: "completed" | "entered-in-error" | "not-done";
  statusReason?: CodeableConcept | undefined;
  subpotentReason?: CodeableConcept[] | undefined;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
  vaccineCode: CodeableConcept;
}

export interface ImmunizationEvaluation {
  _date?: Element | undefined;
  _description?: Element | undefined;
  _doseNumber?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _series?: Element | undefined;
  _seriesDoses?: Element | undefined;
  _status?: Element | undefined;
  authority?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  doseNumber?: string | undefined;
  doseStatus: CodeableConcept;
  doseStatusReason?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  immunizationEvent: Reference;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  patient: Reference;
  resourceType: "ImmunizationEvaluation";
  series?: string | undefined;
  seriesDoses?: string | undefined;
  status: "completed" | "entered-in-error";
  targetDisease: CodeableConcept;
  text?: Narrative | undefined;
}

export interface ImmunizationPerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ImmunizationProgramEligibility {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  program: CodeableConcept;
  programStatus: CodeableConcept;
}

export interface ImmunizationProtocolApplied {
  _doseNumber?: Element | undefined;
  _id?: Element | undefined;
  _series?: Element | undefined;
  _seriesDoses?: Element | undefined;
  authority?: Reference | undefined;
  doseNumber: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  series?: string | undefined;
  seriesDoses?: string | undefined;
  targetDisease?: CodeableConcept[] | undefined;
}

export interface ImmunizationReaction {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _reported?: Element | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  manifestation?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
  reported?: boolean | undefined;
}

export interface ImmunizationRecommendation {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  authority?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  date: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  patient: Reference;
  recommendation: ImmunizationRecommendationRecommendation[];
  resourceType: "ImmunizationRecommendation";
  text?: Narrative | undefined;
}

export interface ImmunizationRecommendationRecommendation {
  _description?: Element | undefined;
  _doseNumber?: Element | undefined;
  _id?: Element | undefined;
  _series?: Element | undefined;
  _seriesDoses?: Element | undefined;
  contraindicatedVaccineCode?: CodeableConcept[] | undefined;
  dateCriterion?:
    | ImmunizationRecommendationRecommendationDateCriterion[]
    | undefined;
  description?: string | undefined;
  doseNumber?: string | undefined;
  extension?: Extension[] | undefined;
  forecastReason?: CodeableConcept[] | undefined;
  forecastStatus: CodeableConcept;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  series?: string | undefined;
  seriesDoses?: string | undefined;
  supportingImmunization?: Reference[] | undefined;
  supportingPatientInformation?: Reference[] | undefined;
  targetDisease?: CodeableConcept[] | undefined;
  vaccineCode?: CodeableConcept[] | undefined;
}

export interface ImmunizationRecommendationRecommendationDateCriterion {
  _id?: Element | undefined;
  _value?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value: string;
}

export interface ImplementationGuide {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _fhirVersion?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _license?: Element | undefined;
  _name?: Element | undefined;
  _packageId?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  definition?: ImplementationGuideDefinition | undefined;
  dependsOn?: ImplementationGuideDependsOn[] | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  fhirVersion: string[];
  global?: ImplementationGuideGlobal[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  license?: string | undefined;
  manifest?: ImplementationGuideManifest | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  packageId: string;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "ImplementationGuide";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ImplementationGuideDefinition {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  grouping?: ImplementationGuideDefinitionGrouping[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  page?: ImplementationGuideDefinitionPage | undefined;
  parameter?: ImplementationGuideDefinitionParameter[] | undefined;
  resource?: ImplementationGuideDefinitionResource[] | undefined;
  template?: ImplementationGuideDefinitionTemplate[] | undefined;
}

export interface ImplementationGuideDefinitionGrouping {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
}

export interface ImplementationGuideDefinitionPage {
  _generation?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _sourceMarkdown?: Element | undefined;
  _sourceString?: Element | undefined;
  _sourceUrl?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  generation: "generated" | "html" | "markdown" | "xml";
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  page?: ImplementationGuideDefinitionPage[] | undefined;
  sourceMarkdown?: string | undefined;
  sourceString?: string | undefined;
  sourceUrl?: string | undefined;
  title: string;
}

export interface ImplementationGuideDefinitionParameter {
  _id?: Element | undefined;
  _value?: Element | undefined;
  code: Coding;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value: string;
}

export interface ImplementationGuideDefinitionResource {
  _description?: Element | undefined;
  _fhirVersion?: Element[] | undefined;
  _groupingId?: Element | undefined;
  _id?: Element | undefined;
  _isExample?: Element | undefined;
  _name?: Element | undefined;
  _profile?: Element[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  fhirVersion?: string[] | undefined;
  groupingId?: string | undefined;
  id?: string | undefined;
  isExample?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  profile?: string[] | undefined;
  reference: Reference;
}

export interface ImplementationGuideDefinitionTemplate {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _scope?: Element | undefined;
  _source?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  scope?: string | undefined;
  source: string;
}

export interface ImplementationGuideDependsOn {
  _id?: Element | undefined;
  _packageId?: Element | undefined;
  _reason?: Element | undefined;
  _uri?: Element | undefined;
  _version?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  packageId?: string | undefined;
  reason?: string | undefined;
  uri: string;
  version?: string | undefined;
}

export interface ImplementationGuideGlobal {
  _id?: Element | undefined;
  _profile?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  profile: string;
  type: string;
}

export interface ImplementationGuideManifest {
  _id?: Element | undefined;
  _image?: Element[] | undefined;
  _other?: Element[] | undefined;
  _rendering?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  image?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  other?: string[] | undefined;
  page?: ImplementationGuideManifestPage[] | undefined;
  rendering?: string | undefined;
  resource: ImplementationGuideManifestResource[];
}

export interface ImplementationGuideManifestPage {
  _anchor?: Element[] | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _title?: Element | undefined;
  anchor?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  title?: string | undefined;
}

export interface ImplementationGuideManifestResource {
  _id?: Element | undefined;
  _isExample?: Element | undefined;
  _profile?: Element[] | undefined;
  _relativePath?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  isExample?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  profile?: string[] | undefined;
  reference: Reference;
  relativePath?: string | undefined;
}

export interface Ingredient {
  _allergenicIndicator?: Element | undefined;
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  allergenicIndicator?: boolean | undefined;
  comment?: string | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  for?: Reference[] | undefined;
  function?: CodeableConcept[] | undefined;
  group?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  manufacturer?: IngredientManufacturer[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "Ingredient";
  role: CodeableConcept;
  status: "draft" | "active" | "retired" | "unknown";
  substance: IngredientSubstance;
  text?: Narrative | undefined;
}

export interface IngredientManufacturer {
  _id?: Element | undefined;
  _role?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  manufacturer: Reference;
  modifierExtension?: Extension[] | undefined;
  role?: "allowed" | "possible" | "actual" | undefined;
}

export interface IngredientSubstance {
  _id?: Element | undefined;
  code: CodeableReference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  strength?: IngredientSubstanceStrength[] | undefined;
}

export interface IngredientSubstanceStrength {
  _id?: Element | undefined;
  _measurementPoint?: Element | undefined;
  _textConcentration?: Element | undefined;
  _textPresentation?: Element | undefined;
  basis?: CodeableConcept | undefined;
  concentrationCodeableConcept?: CodeableConcept | undefined;
  concentrationQuantity?: Quantity | undefined;
  concentrationRatio?: Ratio | undefined;
  concentrationRatioRange?: RatioRange | undefined;
  country?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  measurementPoint?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  presentationCodeableConcept?: CodeableConcept | undefined;
  presentationQuantity?: Quantity | undefined;
  presentationRatio?: Ratio | undefined;
  presentationRatioRange?: RatioRange | undefined;
  referenceStrength?:
    | IngredientSubstanceStrengthReferenceStrength[]
    | undefined;
  textConcentration?: string | undefined;
  textPresentation?: string | undefined;
}

export interface IngredientSubstanceStrengthReferenceStrength {
  _id?: Element | undefined;
  _measurementPoint?: Element | undefined;
  country?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  measurementPoint?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  strengthQuantity?: Quantity | undefined;
  strengthRatio?: Ratio | undefined;
  strengthRatioRange?: RatioRange | undefined;
  substance: CodeableReference;
}

export interface InsurancePlan {
  _alias?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  administeredBy?: Reference | undefined;
  alias?: string[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  coverage?: InsurancePlanCoverage[] | undefined;
  coverageArea?: Reference[] | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  network?: Reference[] | undefined;
  ownedBy?: Reference | undefined;
  period?: Period | undefined;
  plan?: InsurancePlanPlan[] | undefined;
  resourceType: "InsurancePlan";
  status?: "draft" | "active" | "retired" | "unknown" | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface InsurancePlanCoverage {
  _id?: Element | undefined;
  benefit: InsurancePlanCoverageBenefit[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  network?: Reference[] | undefined;
  type: CodeableConcept;
}

export interface InsurancePlanCoverageBenefit {
  _id?: Element | undefined;
  _requirement?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  limit?: InsurancePlanCoverageBenefitLimit[] | undefined;
  modifierExtension?: Extension[] | undefined;
  requirement?: string | undefined;
  type: CodeableConcept;
}

export interface InsurancePlanCoverageBenefitLimit {
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value?: Quantity | undefined;
}

export interface InsurancePlanPlan {
  _id?: Element | undefined;
  coverageArea?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  generalCost?: InsurancePlanPlanGeneralCost[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  modifierExtension?: Extension[] | undefined;
  network?: Reference[] | undefined;
  specificCost?: InsurancePlanPlanSpecificCost[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface InsurancePlanPlanGeneralCost {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  comment?: string | undefined;
  cost?: Money | undefined;
  extension?: Extension[] | undefined;
  groupSize?: number | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface InsurancePlanPlanSpecificCost {
  _id?: Element | undefined;
  benefit?: InsurancePlanPlanSpecificCostBenefit[] | undefined;
  category: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface InsurancePlanPlanSpecificCostBenefit {
  _id?: Element | undefined;
  cost?: InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface InsurancePlanPlanSpecificCostBenefitCost {
  _id?: Element | undefined;
  applicability?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  qualifiers?: CodeableConcept[] | undefined;
  type: CodeableConcept;
  value?: Quantity | undefined;
}

export interface InventoryItem {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  association?: InventoryItemAssociation[] | undefined;
  baseUnit?: CodeableConcept | undefined;
  category?: CodeableConcept[] | undefined;
  characteristic?: InventoryItemCharacteristic[] | undefined;
  code?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: InventoryItemDescription | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instance?: InventoryItemInstance | undefined;
  inventoryStatus?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: InventoryItemName[] | undefined;
  netContent?: Quantity | undefined;
  productReference?: Reference | undefined;
  resourceType: "InventoryItem";
  responsibleOrganization?: InventoryItemResponsibleOrganization[] | undefined;
  status: "active" | "unknown" | "entered-in-error" | "inactive";
  text?: Narrative | undefined;
}

export interface InventoryItemAssociation {
  _id?: Element | undefined;
  associationType: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity: Ratio;
  relatedItem: Reference;
}

export interface InventoryItemCharacteristic {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueUrl?: Element | undefined;
  characteristicType: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueAddress?: Address | undefined;
  valueAnnotation?: Annotation | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDuration?: Duration | undefined;
  valueInteger?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueString?: string | undefined;
  valueUrl?: string | undefined;
}

export interface InventoryItemDescription {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _language?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface InventoryItemInstance {
  _expiry?: Element | undefined;
  _id?: Element | undefined;
  _lotNumber?: Element | undefined;
  expiry?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  location?: Reference | undefined;
  lotNumber?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  subject?: Reference | undefined;
}

export interface InventoryItemName {
  _id?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language: string;
  modifierExtension?: Extension[] | undefined;
  name: string;
  nameType: Coding;
}

export interface InventoryItemResponsibleOrganization {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  organization: Reference;
  role: CodeableConcept;
}

export interface InventoryReport {
  _countType?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _reportedDateTime?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  countType: "snapshot" | "difference";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  inventoryListing?: InventoryReportInventoryListing[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  operationType?: CodeableConcept | undefined;
  operationTypeReason?: CodeableConcept | undefined;
  reportedDateTime: string;
  reporter?: Reference | undefined;
  reportingPeriod?: Period | undefined;
  resourceType: "InventoryReport";
  status: "draft" | "active" | "entered-in-error" | "requested";
  text?: Narrative | undefined;
}

export interface InventoryReportInventoryListing {
  _countingDateTime?: Element | undefined;
  _id?: Element | undefined;
  countingDateTime?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item?: InventoryReportInventoryListingItem[] | undefined;
  itemStatus?: CodeableConcept | undefined;
  location?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface InventoryReportInventoryListingItem {
  _id?: Element | undefined;
  category?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item: CodeableReference;
  modifierExtension?: Extension[] | undefined;
  quantity: Quantity;
}

export interface Invoice {
  _cancelledReason?: Element | undefined;
  _creation?: Element | undefined;
  _date?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _paymentTerms?: Element | undefined;
  _periodDate?: Element | undefined;
  _status?: Element | undefined;
  account?: Reference | undefined;
  cancelledReason?: string | undefined;
  contained?: FhirResource[] | undefined;
  creation?: string | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  issuer?: Reference | undefined;
  language?: string | undefined;
  lineItem?: InvoiceLineItem[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  participant?: InvoiceParticipant[] | undefined;
  paymentTerms?: string | undefined;
  periodDate?: string | undefined;
  periodPeriod?: Period | undefined;
  recipient?: Reference | undefined;
  resourceType: "Invoice";
  status: "draft" | "entered-in-error" | "cancelled" | "issued" | "balanced";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  totalGross?: Money | undefined;
  totalNet?: Money | undefined;
  totalPriceComponent?: MonetaryComponent[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface InvoiceLineItem {
  _id?: Element | undefined;
  _servicedDate?: Element | undefined;
  chargeItemCodeableConcept?: CodeableConcept | undefined;
  chargeItemReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  priceComponent?: MonetaryComponent[] | undefined;
  sequence?: number | undefined;
  servicedDate?: string | undefined;
  servicedPeriod?: Period | undefined;
}

export interface InvoiceParticipant {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
}

export interface Library {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  content?: Attachment[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  dataRequirement?: DataRequirement[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  parameter?: ParameterDefinition[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "Library";
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  subtitle?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  type: CodeableConcept;
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface Linkage {
  _active?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  author?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  item: LinkageItem[];
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "Linkage";
  text?: Narrative | undefined;
}

export interface LinkageItem {
  _id?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  resource: Reference;
  type: "source" | "alternate" | "historical";
}

export interface List {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _mode?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  emptyReason?: CodeableConcept | undefined;
  encounter?: Reference | undefined;
  entry?: ListEntry[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  mode: "snapshot" | "working" | "changes";
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  orderedBy?: CodeableConcept | undefined;
  resourceType: "List";
  source?: Reference | undefined;
  status: "retired" | "entered-in-error" | "current";
  subject?: Reference[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
}

export interface ListEntry {
  _date?: Element | undefined;
  _deleted?: Element | undefined;
  _id?: Element | undefined;
  date?: string | undefined;
  deleted?: boolean | undefined;
  extension?: Extension[] | undefined;
  flag?: CodeableConcept | undefined;
  id?: string | undefined;
  item: Reference;
  modifierExtension?: Extension[] | undefined;
}

export interface Location {
  _alias?: Element[] | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _mode?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  address?: Address | undefined;
  alias?: string[] | undefined;
  characteristic?: CodeableConcept[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  form?: CodeableConcept | undefined;
  hoursOfOperation?: Availability[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingOrganization?: Reference | undefined;
  meta?: Meta | undefined;
  mode?: "instance" | "kind" | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  operationalStatus?: Coding | undefined;
  partOf?: Reference | undefined;
  position?: LocationPosition | undefined;
  resourceType: "Location";
  status?: "active" | "suspended" | "inactive" | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
  virtualService?: VirtualServiceDetail[] | undefined;
}

export interface LocationPosition {
  _id?: Element | undefined;
  altitude?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  latitude: number;
  longitude: number;
  modifierExtension?: Extension[] | undefined;
}

export interface ManufacturedItemDefinition {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  component?: ManufacturedItemDefinitionComponent[] | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  ingredient?: CodeableConcept[] | undefined;
  language?: string | undefined;
  manufacturedDoseForm: CodeableConcept;
  manufacturer?: Reference[] | undefined;
  marketingStatus?: MarketingStatus[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  property?: ManufacturedItemDefinitionProperty[] | undefined;
  resourceType: "ManufacturedItemDefinition";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  unitOfPresentation?: CodeableConcept | undefined;
}

export interface ManufacturedItemDefinitionComponent {
  _id?: Element | undefined;
  amount?: Quantity[] | undefined;
  component?: ManufacturedItemDefinitionComponent[] | undefined;
  constituent?: ManufacturedItemDefinitionComponentConstituent[] | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  property?: ManufacturedItemDefinitionProperty[] | undefined;
  type: CodeableConcept;
}

export interface ManufacturedItemDefinitionComponentConstituent {
  _id?: Element | undefined;
  amount?: Quantity[] | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept[] | undefined;
  hasIngredient?: CodeableReference[] | undefined;
  id?: string | undefined;
  location?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ManufacturedItemDefinitionProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDate?: string | undefined;
  valueMarkdown?: string | undefined;
  valueQuantity?: Quantity | undefined;
  valueReference?: Reference | undefined;
}

export interface MarketingStatus {
  _id?: Element | undefined;
  _restoreDate?: Element | undefined;
  country?: CodeableConcept | undefined;
  dateRange?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  jurisdiction?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  restoreDate?: string | undefined;
  status: CodeableConcept;
}

export interface Measure {
  _approvalDate?: Element | undefined;
  _basis?: Element | undefined;
  _clinicalRecommendationStatement?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _disclaimer?: Element | undefined;
  _experimental?: Element | undefined;
  _guidance?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _library?: Element[] | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _rateAggregation?: Element | undefined;
  _rationale?: Element | undefined;
  _riskAdjustment?: Element | undefined;
  _status?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  basis?: string | undefined;
  clinicalRecommendationStatement?: string | undefined;
  compositeScoring?: CodeableConcept | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  disclaimer?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  group?: MeasureGroup[] | undefined;
  guidance?: string | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  improvementNotation?: CodeableConcept | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  library?: string[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  rateAggregation?: string | undefined;
  rationale?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "Measure";
  reviewer?: ContactDetail[] | undefined;
  riskAdjustment?: string | undefined;
  scoring?: CodeableConcept | undefined;
  scoringUnit?: CodeableConcept | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  subtitle?: string | undefined;
  supplementalData?: MeasureSupplementalData[] | undefined;
  term?: MeasureTerm[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  type?: CodeableConcept[] | undefined;
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface MeasureGroup {
  _basis?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _library?: Element[] | undefined;
  _linkId?: Element | undefined;
  _rateAggregation?: Element | undefined;
  basis?: string | undefined;
  code?: CodeableConcept | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  improvementNotation?: CodeableConcept | undefined;
  library?: string[] | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  population?: MeasureGroupPopulation[] | undefined;
  rateAggregation?: string | undefined;
  scoring?: CodeableConcept | undefined;
  scoringUnit?: CodeableConcept | undefined;
  stratifier?: MeasureGroupStratifier[] | undefined;
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface MeasureGroupPopulation {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _inputPopulationId?: Element | undefined;
  _linkId?: Element | undefined;
  aggregateMethod?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  criteria?: Expression | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  groupDefinition?: Reference | undefined;
  id?: string | undefined;
  inputPopulationId?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MeasureGroupStratifier {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  component?: MeasureGroupStratifierComponent[] | undefined;
  criteria?: Expression | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  groupDefinition?: Reference | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MeasureGroupStratifierComponent {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  criteria?: Expression | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  groupDefinition?: Reference | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MeasureReport {
  _dataUpdateType?: Element | undefined;
  _date?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _measure?: Element | undefined;
  _status?: Element | undefined;
  _type?: Element | undefined;
  contained?: FhirResource[] | undefined;
  dataUpdateType?: "incremental" | "snapshot" | undefined;
  date?: string | undefined;
  evaluatedResource?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  group?: MeasureReportGroup[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  improvementNotation?: CodeableConcept | undefined;
  inputParameters?: Reference | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  measure?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  period: Period;
  reporter?: Reference | undefined;
  reportingVendor?: Reference | undefined;
  resourceType: "MeasureReport";
  scoring?: CodeableConcept | undefined;
  status: "error" | "pending" | "complete";
  subject?: Reference | undefined;
  supplementalData?: Reference[] | undefined;
  text?: Narrative | undefined;
  type: "individual" | "subject-list" | "summary" | "data-exchange";
}

export interface MeasureReportGroup {
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _measureScoreDateTime?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  measureScoreCodeableConcept?: CodeableConcept | undefined;
  measureScoreDateTime?: string | undefined;
  measureScoreDuration?: Duration | undefined;
  measureScorePeriod?: Period | undefined;
  measureScoreQuantity?: Quantity | undefined;
  measureScoreRange?: Range | undefined;
  modifierExtension?: Extension[] | undefined;
  population?: MeasureReportGroupPopulation[] | undefined;
  stratifier?: MeasureReportGroupStratifier[] | undefined;
  subject?: Reference | undefined;
}

export interface MeasureReportGroupPopulation {
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  count?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  subjectReport?: Reference[] | undefined;
  subjectResults?: Reference | undefined;
  subjects?: Reference | undefined;
}

export interface MeasureReportGroupStratifier {
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  stratum?: MeasureReportGroupStratifierStratum[] | undefined;
}

export interface MeasureReportGroupStratifierStratum {
  _id?: Element | undefined;
  _measureScoreDateTime?: Element | undefined;
  _valueBoolean?: Element | undefined;
  component?: MeasureReportGroupStratifierStratumComponent[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  measureScoreCodeableConcept?: CodeableConcept | undefined;
  measureScoreDateTime?: string | undefined;
  measureScoreDuration?: Duration | undefined;
  measureScorePeriod?: Period | undefined;
  measureScoreQuantity?: Quantity | undefined;
  measureScoreRange?: Range | undefined;
  modifierExtension?: Extension[] | undefined;
  population?: MeasureReportGroupStratifierStratumPopulation[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface MeasureReportGroupStratifierStratumComponent {
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _valueBoolean?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueReference?: Reference | undefined;
}

export interface MeasureReportGroupStratifierStratumPopulation {
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  count?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  subjectReport?: Reference[] | undefined;
  subjectResults?: Reference | undefined;
  subjects?: Reference | undefined;
}

export interface MeasureSupplementalData {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  code?: CodeableConcept | undefined;
  criteria: Expression;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  usage?: CodeableConcept[] | undefined;
}

export interface MeasureTerm {
  _definition?: Element | undefined;
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  definition?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Medication {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  batch?: MedicationBatch | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  definition?: Reference | undefined;
  doseForm?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  ingredient?: MedicationIngredient[] | undefined;
  language?: string | undefined;
  marketingAuthorizationHolder?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "Medication";
  status?: "active" | "entered-in-error" | "inactive" | undefined;
  text?: Narrative | undefined;
  totalVolume?: Quantity | undefined;
}

export interface MedicationAdministration {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _isSubPotent?: Element | undefined;
  _language?: Element | undefined;
  _occurenceDateTime?: Element | undefined;
  _recorded?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  device?: CodeableReference[] | undefined;
  dosage?: MedicationAdministrationDosage | undefined;
  encounter?: Reference | undefined;
  eventHistory?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  isSubPotent?: boolean | undefined;
  language?: string | undefined;
  medication: CodeableReference;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurenceDateTime?: string | undefined;
  occurencePeriod?: Period | undefined;
  occurenceTiming?: Timing | undefined;
  partOf?: Reference[] | undefined;
  performer?: MedicationAdministrationPerformer[] | undefined;
  reason?: CodeableReference[] | undefined;
  recorded?: string | undefined;
  request?: Reference | undefined;
  resourceType: "MedicationAdministration";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "not-done";
  statusReason?: CodeableConcept[] | undefined;
  subPotentReason?: CodeableConcept[] | undefined;
  subject: Reference;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface MedicationAdministrationDosage {
  _id?: Element | undefined;
  _text?: Element | undefined;
  dose?: Quantity | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  rateQuantity?: Quantity | undefined;
  rateRatio?: Ratio | undefined;
  route?: CodeableConcept | undefined;
  site?: CodeableConcept | undefined;
  text?: string | undefined;
}

export interface MedicationAdministrationPerformer {
  _id?: Element | undefined;
  actor: CodeableReference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicationBatch {
  _expirationDate?: Element | undefined;
  _id?: Element | undefined;
  _lotNumber?: Element | undefined;
  expirationDate?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  lotNumber?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicationDispense {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _recorded?: Element | undefined;
  _renderedDosageInstruction?: Element | undefined;
  _status?: Element | undefined;
  _statusChanged?: Element | undefined;
  _whenHandedOver?: Element | undefined;
  _whenPrepared?: Element | undefined;
  authorizingPrescription?: Reference[] | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  daysSupply?: Quantity | undefined;
  destination?: Reference | undefined;
  dosageInstruction?: Dosage[] | undefined;
  encounter?: Reference | undefined;
  eventHistory?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  medication: CodeableReference;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  notPerformedReason?: CodeableReference | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  performer?: MedicationDispensePerformer[] | undefined;
  quantity?: Quantity | undefined;
  receiver?: Reference[] | undefined;
  recorded?: string | undefined;
  renderedDosageInstruction?: string | undefined;
  resourceType: "MedicationDispense";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "cancelled"
    | "on-hold"
    | "preparation"
    | "declined";
  statusChanged?: string | undefined;
  subject: Reference;
  substitution?: MedicationDispenseSubstitution | undefined;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  whenHandedOver?: string | undefined;
  whenPrepared?: string | undefined;
}

export interface MedicationDispensePerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicationDispenseSubstitution {
  _id?: Element | undefined;
  _wasSubstituted?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept[] | undefined;
  responsibleParty?: Reference | undefined;
  type?: CodeableConcept | undefined;
  wasSubstituted: boolean;
}

export interface MedicationIngredient {
  _id?: Element | undefined;
  _isActive?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  item: CodeableReference;
  modifierExtension?: Extension[] | undefined;
  strengthCodeableConcept?: CodeableConcept | undefined;
  strengthQuantity?: Quantity | undefined;
  strengthRatio?: Ratio | undefined;
}

export interface MedicationKnowledge {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element[] | undefined;
  _preparationInstruction?: Element | undefined;
  _status?: Element | undefined;
  associatedMedication?: Reference[] | undefined;
  author?: Reference | undefined;
  clinicalUseIssue?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  cost?: MedicationKnowledgeCost[] | undefined;
  definitional?: MedicationKnowledgeDefinitional | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  indicationGuideline?: MedicationKnowledgeIndicationGuideline[] | undefined;
  intendedJurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  medicineClassification?:
    | MedicationKnowledgeMedicineClassification[]
    | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[] | undefined;
  monograph?: MedicationKnowledgeMonograph[] | undefined;
  name?: string[] | undefined;
  packaging?: MedicationKnowledgePackaging[] | undefined;
  preparationInstruction?: string | undefined;
  productType?: CodeableConcept[] | undefined;
  regulatory?: MedicationKnowledgeRegulatory[] | undefined;
  relatedMedicationKnowledge?:
    | MedicationKnowledgeRelatedMedicationKnowledge[]
    | undefined;
  resourceType: "MedicationKnowledge";
  status?: "active" | "entered-in-error" | "inactive" | undefined;
  storageGuideline?: MedicationKnowledgeStorageGuideline[] | undefined;
  text?: Narrative | undefined;
}

export interface MedicationKnowledgeCost {
  _id?: Element | undefined;
  _source?: Element | undefined;
  costCodeableConcept?: CodeableConcept | undefined;
  costMoney?: Money | undefined;
  effectiveDate?: Period[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: string | undefined;
  type: CodeableConcept;
}

export interface MedicationKnowledgeDefinitional {
  _id?: Element | undefined;
  definition?: Reference[] | undefined;
  doseForm?: CodeableConcept | undefined;
  drugCharacteristic?:
    | MedicationKnowledgeDefinitionalDrugCharacteristic[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  ingredient?: MedicationKnowledgeDefinitionalIngredient[] | undefined;
  intendedRoute?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicationKnowledgeDefinitionalDrugCharacteristic {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
  valueAttachment?: Attachment | undefined;
  valueBase64Binary?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueString?: string | undefined;
}

export interface MedicationKnowledgeDefinitionalIngredient {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item: CodeableReference;
  modifierExtension?: Extension[] | undefined;
  strengthCodeableConcept?: CodeableConcept | undefined;
  strengthQuantity?: Quantity | undefined;
  strengthRatio?: Ratio | undefined;
  type?: CodeableConcept | undefined;
}

export interface MedicationKnowledgeIndicationGuideline {
  _id?: Element | undefined;
  dosingGuideline?:
    | MedicationKnowledgeIndicationGuidelineDosingGuideline[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  indication?: CodeableReference[] | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicationKnowledgeIndicationGuidelineDosingGuideline {
  _id?: Element | undefined;
  administrationTreatment?: CodeableConcept | undefined;
  dosage?:
    | MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  patientCharacteristic?:
    | MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[]
    | undefined;
  treatmentIntent?: CodeableConcept | undefined;
}

export interface MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
  _id?: Element | undefined;
  dosage: Dosage[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
}

export interface MedicationKnowledgeMedicineClassification {
  _id?: Element | undefined;
  _sourceString?: Element | undefined;
  _sourceUri?: Element | undefined;
  classification?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  sourceString?: string | undefined;
  sourceUri?: string | undefined;
  type: CodeableConcept;
}

export interface MedicationKnowledgeMonitoringProgram {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface MedicationKnowledgeMonograph {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: Reference | undefined;
  type?: CodeableConcept | undefined;
}

export interface MedicationKnowledgePackaging {
  _id?: Element | undefined;
  cost?: MedicationKnowledgeCost[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  packagedProduct?: Reference | undefined;
}

export interface MedicationKnowledgeRegulatory {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense | undefined;
  modifierExtension?: Extension[] | undefined;
  regulatoryAuthority: Reference;
  schedule?: CodeableConcept[] | undefined;
  substitution?: MedicationKnowledgeRegulatorySubstitution[] | undefined;
}

export interface MedicationKnowledgeRegulatoryMaxDispense {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Duration | undefined;
  quantity: Quantity;
}

export interface MedicationKnowledgeRegulatorySubstitution {
  _allowed?: Element | undefined;
  _id?: Element | undefined;
  allowed: boolean;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface MedicationKnowledgeRelatedMedicationKnowledge {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reference: Reference[];
  type: CodeableConcept;
}

export interface MedicationKnowledgeStorageGuideline {
  _id?: Element | undefined;
  _reference?: Element | undefined;
  environmentalSetting?:
    | MedicationKnowledgeStorageGuidelineEnvironmentalSetting[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  reference?: string | undefined;
  stabilityDuration?: Duration | undefined;
}

export interface MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
}

export interface MedicationRequest {
  _authoredOn?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _priority?: Element | undefined;
  _renderedDosageInstruction?: Element | undefined;
  _reported?: Element | undefined;
  _status?: Element | undefined;
  _statusChanged?: Element | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  courseOfTherapyType?: CodeableConcept | undefined;
  device?: CodeableReference[] | undefined;
  dispenseRequest?: MedicationRequestDispenseRequest | undefined;
  doNotPerform?: boolean | undefined;
  dosageInstruction?: Dosage[] | undefined;
  effectiveDosePeriod?: Period | undefined;
  encounter?: Reference | undefined;
  eventHistory?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationSource?: Reference[] | undefined;
  insurance?: Reference[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  language?: string | undefined;
  medication: CodeableReference;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  performer?: Reference[] | undefined;
  performerType?: CodeableConcept | undefined;
  priorPrescription?: Reference | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference[] | undefined;
  recorder?: Reference | undefined;
  renderedDosageInstruction?: string | undefined;
  reported?: boolean | undefined;
  requester?: Reference | undefined;
  resourceType: "MedicationRequest";
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "cancelled"
    | "on-hold"
    | "ended";
  statusChanged?: string | undefined;
  statusReason?: CodeableConcept | undefined;
  subject: Reference;
  substitution?: MedicationRequestSubstitution | undefined;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface MedicationRequestDispenseRequest {
  _id?: Element | undefined;
  dispenseInterval?: Duration | undefined;
  dispenser?: Reference | undefined;
  dispenserInstruction?: Annotation[] | undefined;
  doseAdministrationAid?: CodeableConcept | undefined;
  expectedSupplyDuration?: Duration | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  initialFill?: MedicationRequestDispenseRequestInitialFill | undefined;
  modifierExtension?: Extension[] | undefined;
  numberOfRepeatsAllowed?: number | undefined;
  quantity?: Quantity | undefined;
  validityPeriod?: Period | undefined;
}

export interface MedicationRequestDispenseRequestInitialFill {
  _id?: Element | undefined;
  duration?: Duration | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
}

export interface MedicationRequestSubstitution {
  _allowedBoolean?: Element | undefined;
  _id?: Element | undefined;
  allowedBoolean?: boolean | undefined;
  allowedCodeableConcept?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept | undefined;
}

export interface MedicationStatement {
  _dateAsserted?: Element | undefined;
  _effectiveDateTime?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _renderedDosageInstruction?: Element | undefined;
  _status?: Element | undefined;
  adherence?: MedicationStatementAdherence | undefined;
  category?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  dateAsserted?: string | undefined;
  derivedFrom?: Reference[] | undefined;
  dosage?: Dosage[] | undefined;
  effectiveDateTime?: string | undefined;
  effectivePeriod?: Period | undefined;
  effectiveTiming?: Timing | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationSource?: Reference[] | undefined;
  language?: string | undefined;
  medication: CodeableReference;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  reason?: CodeableReference[] | undefined;
  relatedClinicalInformation?: Reference[] | undefined;
  renderedDosageInstruction?: string | undefined;
  resourceType: "MedicationStatement";
  status: "draft" | "entered-in-error" | "recorded";
  subject: Reference;
  text?: Narrative | undefined;
}

export interface MedicationStatementAdherence {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept | undefined;
}

export interface MedicinalProductDefinition {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _indication?: Element | undefined;
  _language?: Element | undefined;
  _statusDate?: Element | undefined;
  _version?: Element | undefined;
  additionalMonitoringIndicator?: CodeableConcept | undefined;
  attachedDocument?: Reference[] | undefined;
  characteristic?: MedicinalProductDefinitionCharacteristic[] | undefined;
  classification?: CodeableConcept[] | undefined;
  clinicalTrial?: Reference[] | undefined;
  code?: Coding[] | undefined;
  combinedPharmaceuticalDoseForm?: CodeableConcept | undefined;
  comprisedOf?: Reference[] | undefined;
  contact?: MedicinalProductDefinitionContact[] | undefined;
  contained?: FhirResource[] | undefined;
  crossReference?: MedicinalProductDefinitionCrossReference[] | undefined;
  description?: string | undefined;
  domain?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  impurity?: CodeableReference[] | undefined;
  indication?: string | undefined;
  ingredient?: CodeableConcept[] | undefined;
  language?: string | undefined;
  legalStatusOfSupply?: CodeableConcept | undefined;
  marketingStatus?: MarketingStatus[] | undefined;
  masterFile?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: MedicinalProductDefinitionName[];
  operation?: MedicinalProductDefinitionOperation[] | undefined;
  packagedMedicinalProduct?: CodeableConcept[] | undefined;
  pediatricUseIndicator?: CodeableConcept | undefined;
  resourceType: "MedicinalProductDefinition";
  route?: CodeableConcept[] | undefined;
  specialMeasures?: CodeableConcept[] | undefined;
  status?: CodeableConcept | undefined;
  statusDate?: string | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  version?: string | undefined;
}

export interface MedicinalProductDefinitionCharacteristic {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDate?: string | undefined;
  valueInteger?: number | undefined;
  valueMarkdown?: string | undefined;
  valueQuantity?: Quantity | undefined;
}

export interface MedicinalProductDefinitionContact {
  _id?: Element | undefined;
  contact: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface MedicinalProductDefinitionCrossReference {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  product: CodeableReference;
  type?: CodeableConcept | undefined;
}

export interface MedicinalProductDefinitionName {
  _id?: Element | undefined;
  _productName?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  part?: MedicinalProductDefinitionNamePart[] | undefined;
  productName: string;
  type?: CodeableConcept | undefined;
  usage?: MedicinalProductDefinitionNameUsage[] | undefined;
}

export interface MedicinalProductDefinitionNamePart {
  _id?: Element | undefined;
  _part?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  part: string;
  type: CodeableConcept;
}

export interface MedicinalProductDefinitionNameUsage {
  _id?: Element | undefined;
  country: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  jurisdiction?: CodeableConcept | undefined;
  language: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
}

export interface MedicinalProductDefinitionOperation {
  _id?: Element | undefined;
  confidentialityIndicator?: CodeableConcept | undefined;
  effectiveDate?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  organization?: Reference[] | undefined;
  type?: CodeableReference | undefined;
}

export interface MessageDefinition {
  _base?: Element | undefined;
  _category?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _eventUri?: Element | undefined;
  _experimental?: Element | undefined;
  _graph?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _parent?: Element[] | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _replaces?: Element[] | undefined;
  _responseRequired?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  allowedResponse?: MessageDefinitionAllowedResponse[] | undefined;
  base?: string | undefined;
  category?: "consequence" | "currency" | "notification" | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date: string;
  description?: string | undefined;
  eventCoding?: Coding | undefined;
  eventUri?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  focus?: MessageDefinitionFocus[] | undefined;
  graph?: string | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  parent?: string[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  replaces?: string[] | undefined;
  resourceType: "MessageDefinition";
  responseRequired?: "always" | "on-error" | "never" | "on-success" | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface MessageDefinitionAllowedResponse {
  _id?: Element | undefined;
  _message?: Element | undefined;
  _situation?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  message: string;
  modifierExtension?: Extension[] | undefined;
  situation?: string | undefined;
}

export interface MessageDefinitionFocus {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _max?: Element | undefined;
  _profile?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  max?: string | undefined;
  min: number;
  modifierExtension?: Extension[] | undefined;
  profile?: string | undefined;
}

export interface MessageHeader {
  _definition?: Element | undefined;
  _eventCanonical?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  author?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  definition?: string | undefined;
  destination?: MessageHeaderDestination[] | undefined;
  eventCanonical?: string | undefined;
  eventCoding?: Coding | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept | undefined;
  resourceType: "MessageHeader";
  response?: MessageHeaderResponse | undefined;
  responsible?: Reference | undefined;
  sender?: Reference | undefined;
  source: MessageHeaderSource;
  text?: Narrative | undefined;
}

export interface MessageHeaderDestination {
  _endpointUrl?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  endpointReference?: Reference | undefined;
  endpointUrl?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  receiver?: Reference | undefined;
  target?: Reference | undefined;
}

export interface MessageHeaderResponse {
  _code?: Element | undefined;
  _id?: Element | undefined;
  code: "ok" | "transient-error" | "fatal-error";
  details?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier: Identifier;
  modifierExtension?: Extension[] | undefined;
}

export interface MessageHeaderSource {
  _endpointUrl?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _software?: Element | undefined;
  _version?: Element | undefined;
  contact?: ContactPoint | undefined;
  endpointReference?: Reference | undefined;
  endpointUrl?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  software?: string | undefined;
  version?: string | undefined;
}

export interface MolecularSequence {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _literal?: Element | undefined;
  _type?: Element | undefined;
  contained?: FhirResource[] | undefined;
  device?: Reference | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  formatted?: Attachment[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  literal?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  performer?: Reference | undefined;
  relative?: MolecularSequenceRelative[] | undefined;
  resourceType: "MolecularSequence";
  specimen?: Reference | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  type?: "aa" | "dna" | "rna" | undefined;
}

export interface MolecularSequenceRelative {
  _id?: Element | undefined;
  coordinateSystem: CodeableConcept;
  edit?: MolecularSequenceRelativeEdit[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  ordinalPosition?: number | undefined;
  sequenceRange?: Range | undefined;
  startingSequence?: MolecularSequenceRelativeStartingSequence | undefined;
}

export interface MolecularSequenceRelativeEdit {
  _id?: Element | undefined;
  _replacedSequence?: Element | undefined;
  _replacementSequence?: Element | undefined;
  end?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  replacedSequence?: string | undefined;
  replacementSequence?: string | undefined;
  start?: number | undefined;
}

export interface MolecularSequenceRelativeStartingSequence {
  _id?: Element | undefined;
  _orientation?: Element | undefined;
  _sequenceString?: Element | undefined;
  _strand?: Element | undefined;
  chromosome?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  genomeAssembly?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  orientation?: "sense" | "antisense" | undefined;
  sequenceCodeableConcept?: CodeableConcept | undefined;
  sequenceReference?: Reference | undefined;
  sequenceString?: string | undefined;
  strand?: "watson" | "crick" | undefined;
  windowEnd?: number | undefined;
  windowStart?: number | undefined;
}

export interface MonetaryComponent {
  _id?: Element | undefined;
  _type?: Element | undefined;
  amount?: Money | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  factor?: number | undefined;
  id?: string | undefined;
  type:
    | "base"
    | "surcharge"
    | "deduction"
    | "discount"
    | "tax"
    | "informational";
}

export interface NamingSystem {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _responsible?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  author?: ContactDetail[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date: string;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  kind: "identifier" | "codesystem" | "root";
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "NamingSystem";
  responsible?: string | undefined;
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
  uniqueId: NamingSystemUniqueId[];
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface NamingSystemUniqueId {
  _authoritative?: Element | undefined;
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _preferred?: Element | undefined;
  _type?: Element | undefined;
  _value?: Element | undefined;
  authoritative?: boolean | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  preferred?: boolean | undefined;
  type: "other" | "uuid" | "uri" | "oid" | "iri-stem" | "v2csmnemonic";
  value: string;
}

export interface Narrative {
  _div?: Element | undefined;
  _id?: Element | undefined;
  _status?: Element | undefined;
  div: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  status: "generated" | "extensions" | "additional" | "empty";
}

export interface NutritionIntake {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _recorded?: Element | undefined;
  _reportedBoolean?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  consumedItem: NutritionIntakeConsumedItem[];
  contained?: FhirResource[] | undefined;
  derivedFrom?: Reference[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  ingredientLabel?: NutritionIntakeIngredientLabel[] | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  partOf?: Reference[] | undefined;
  performer?: NutritionIntakePerformer[] | undefined;
  reason?: CodeableReference[] | undefined;
  recorded?: string | undefined;
  reportedBoolean?: boolean | undefined;
  reportedReference?: Reference | undefined;
  resourceType: "NutritionIntake";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "preparation"
    | "not-done";
  statusReason?: CodeableConcept[] | undefined;
  subject: Reference;
  text?: Narrative | undefined;
}

export interface NutritionIntakeConsumedItem {
  _id?: Element | undefined;
  _notConsumed?: Element | undefined;
  amount?: Quantity | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  notConsumed?: boolean | undefined;
  notConsumedReason?: CodeableConcept | undefined;
  nutritionProduct: CodeableReference;
  rate?: Quantity | undefined;
  schedule?: Timing | undefined;
  type: CodeableConcept;
}

export interface NutritionIntakeIngredientLabel {
  _id?: Element | undefined;
  amount: Quantity;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  nutrient: CodeableReference;
}

export interface NutritionIntakePerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface NutritionOrder {
  _dateTime?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiates?: Element[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _outsideFoodAllowed?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  allergyIntolerance?: Reference[] | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  dateTime: string;
  encounter?: Reference | undefined;
  enteralFormula?: NutritionOrderEnteralFormula | undefined;
  excludeFoodModifier?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  foodPreferenceModifier?: CodeableConcept[] | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiates?: string[] | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  oralDiet?: NutritionOrderOralDiet | undefined;
  orderer?: Reference | undefined;
  outsideFoodAllowed?: boolean | undefined;
  performer?: CodeableReference[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  resourceType: "NutritionOrder";
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked";
  subject: Reference;
  supplement?: NutritionOrderSupplement[] | undefined;
  supportingInformation?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface NutritionOrderEnteralFormula {
  _administrationInstruction?: Element | undefined;
  _baseFormulaProductName?: Element | undefined;
  _id?: Element | undefined;
  additive?: NutritionOrderEnteralFormulaAdditive[] | undefined;
  administration?: NutritionOrderEnteralFormulaAdministration[] | undefined;
  administrationInstruction?: string | undefined;
  baseFormulaProductName?: string | undefined;
  baseFormulaType?: CodeableReference | undefined;
  caloricDensity?: Quantity | undefined;
  deliveryDevice?: CodeableReference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  maxVolumeToDeliver?: Quantity | undefined;
  modifierExtension?: Extension[] | undefined;
  routeOfAdministration?: CodeableConcept | undefined;
}

export interface NutritionOrderEnteralFormulaAdditive {
  _id?: Element | undefined;
  _productName?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  productName?: string | undefined;
  quantity?: Quantity | undefined;
  type?: CodeableReference | undefined;
}

export interface NutritionOrderEnteralFormulaAdministration {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
  rateQuantity?: Quantity | undefined;
  rateRatio?: Ratio | undefined;
  schedule?: NutritionOrderEnteralFormulaAdministrationSchedule | undefined;
}

export interface NutritionOrderEnteralFormulaAdministrationSchedule {
  _asNeeded?: Element | undefined;
  _id?: Element | undefined;
  asNeeded?: boolean | undefined;
  asNeededFor?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  timing?: Timing[] | undefined;
}

export interface NutritionOrderOralDiet {
  _id?: Element | undefined;
  _instruction?: Element | undefined;
  extension?: Extension[] | undefined;
  fluidConsistencyType?: CodeableConcept[] | undefined;
  id?: string | undefined;
  instruction?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  nutrient?: NutritionOrderOralDietNutrient[] | undefined;
  schedule?: NutritionOrderOralDietSchedule | undefined;
  texture?: NutritionOrderOralDietTexture[] | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface NutritionOrderOralDietNutrient {
  _id?: Element | undefined;
  amount?: Quantity | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface NutritionOrderOralDietSchedule {
  _asNeeded?: Element | undefined;
  _id?: Element | undefined;
  asNeeded?: boolean | undefined;
  asNeededFor?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  timing?: Timing[] | undefined;
}

export interface NutritionOrderOralDietTexture {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  foodType?: CodeableConcept | undefined;
  id?: string | undefined;
  modifier?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface NutritionOrderSupplement {
  _id?: Element | undefined;
  _instruction?: Element | undefined;
  _productName?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instruction?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  productName?: string | undefined;
  quantity?: Quantity | undefined;
  schedule?: NutritionOrderSupplementSchedule | undefined;
  type?: CodeableReference | undefined;
}

export interface NutritionOrderSupplementSchedule {
  _asNeeded?: Element | undefined;
  _id?: Element | undefined;
  asNeeded?: boolean | undefined;
  asNeededFor?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  timing?: Timing[] | undefined;
}

export interface NutritionProduct {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  characteristic?: NutritionProductCharacteristic[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  ingredient?: NutritionProductIngredient[] | undefined;
  instance?: NutritionProductInstance[] | undefined;
  knownAllergen?: CodeableReference[] | undefined;
  language?: string | undefined;
  manufacturer?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  nutrient?: NutritionProductNutrient[] | undefined;
  resourceType: "NutritionProduct";
  status: "active" | "entered-in-error" | "inactive";
  text?: Narrative | undefined;
}

export interface NutritionProductCharacteristic {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueString?: string | undefined;
}

export interface NutritionProductIngredient {
  _id?: Element | undefined;
  amount?: Ratio[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item: CodeableReference;
  modifierExtension?: Extension[] | undefined;
}

export interface NutritionProductInstance {
  _expiry?: Element | undefined;
  _id?: Element | undefined;
  _lotNumber?: Element | undefined;
  _name?: Element | undefined;
  _useBy?: Element | undefined;
  biologicalSourceEvent?: Identifier | undefined;
  expiry?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  lotNumber?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  quantity?: Quantity | undefined;
  useBy?: string | undefined;
}

export interface NutritionProductNutrient {
  _id?: Element | undefined;
  amount?: Ratio[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Observation {
  _effectiveDateTime?: Element | undefined;
  _effectiveInstant?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element | undefined;
  _issued?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableConcept | undefined;
  bodyStructure?: Reference | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  component?: ObservationComponent[] | undefined;
  contained?: FhirResource[] | undefined;
  dataAbsentReason?: CodeableConcept | undefined;
  derivedFrom?: Reference[] | undefined;
  device?: Reference | undefined;
  effectiveDateTime?: string | undefined;
  effectiveInstant?: string | undefined;
  effectivePeriod?: Period | undefined;
  effectiveTiming?: Timing | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  hasMember?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string | undefined;
  instantiatesReference?: Reference | undefined;
  interpretation?: CodeableConcept[] | undefined;
  issued?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  partOf?: Reference[] | undefined;
  performer?: Reference[] | undefined;
  referenceRange?: ObservationReferenceRange[] | undefined;
  resourceType: "Observation";
  specimen?: Reference | undefined;
  status:
    | "unknown"
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "registered"
    | "preliminary"
    | "final"
    | "corrected";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  triggeredBy?: ObservationTriggeredBy[] | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDateTime?: string | undefined;
  valueInteger?: number | undefined;
  valuePeriod?: Period | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueReference?: Reference | undefined;
  valueSampledData?: SampledData | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
}

export interface ObservationComponent {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  code: CodeableConcept;
  dataAbsentReason?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  interpretation?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  referenceRange?: ObservationReferenceRange[] | undefined;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDateTime?: string | undefined;
  valueInteger?: number | undefined;
  valuePeriod?: Period | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueReference?: Reference | undefined;
  valueSampledData?: SampledData | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
}

export interface ObservationDefinition {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFromCanonical?: Element[] | undefined;
  _derivedFromUri?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _multipleResultsAllowed?: Element | undefined;
  _name?: Element | undefined;
  _permittedDataType?: Element[] | undefined;
  _preferredReportName?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  bodySite?: CodeableConcept | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableConcept;
  component?: ObservationDefinitionComponent[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFromCanonical?: string[] | undefined;
  derivedFromUri?: string[] | undefined;
  description?: string | undefined;
  device?: Reference[] | undefined;
  effectivePeriod?: Period | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  hasMember?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  multipleResultsAllowed?: boolean | undefined;
  name?: string | undefined;
  performerType?: CodeableConcept | undefined;
  permittedDataType?:
    | (
        | "string"
        | "boolean"
        | "integer"
        | "dateTime"
        | "time"
        | "Quantity"
        | "CodeableConcept"
        | "Range"
        | "Ratio"
        | "SampledData"
        | "Period"
      )[]
    | undefined;
  permittedUnit?: Coding[] | undefined;
  preferredReportName?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  qualifiedValue?: ObservationDefinitionQualifiedValue[] | undefined;
  resourceType: "ObservationDefinition";
  specimen?: Reference[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subject?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface ObservationDefinitionComponent {
  _id?: Element | undefined;
  _permittedDataType?: Element[] | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  permittedDataType?:
    | (
        | "string"
        | "boolean"
        | "integer"
        | "dateTime"
        | "time"
        | "Quantity"
        | "CodeableConcept"
        | "Range"
        | "Ratio"
        | "SampledData"
        | "Period"
      )[]
    | undefined;
  permittedUnit?: Coding[] | undefined;
  qualifiedValue?: ObservationDefinitionQualifiedValue[] | undefined;
}

export interface ObservationDefinitionQualifiedValue {
  _abnormalCodedValueSet?: Element | undefined;
  _condition?: Element | undefined;
  _criticalCodedValueSet?: Element | undefined;
  _gender?: Element | undefined;
  _id?: Element | undefined;
  _normalCodedValueSet?: Element | undefined;
  _rangeCategory?: Element | undefined;
  _validCodedValueSet?: Element | undefined;
  abnormalCodedValueSet?: string | undefined;
  age?: Range | undefined;
  appliesTo?: CodeableConcept[] | undefined;
  condition?: string | undefined;
  context?: CodeableConcept | undefined;
  criticalCodedValueSet?: string | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  gestationalAge?: Range | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  normalCodedValueSet?: string | undefined;
  range?: Range | undefined;
  rangeCategory?: "reference" | "critical" | "absolute" | undefined;
  validCodedValueSet?: string | undefined;
}

export interface ObservationReferenceRange {
  _id?: Element | undefined;
  _text?: Element | undefined;
  age?: Range | undefined;
  appliesTo?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  high?: Quantity | undefined;
  id?: string | undefined;
  low?: Quantity | undefined;
  modifierExtension?: Extension[] | undefined;
  normalValue?: CodeableConcept | undefined;
  text?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface ObservationTriggeredBy {
  _id?: Element | undefined;
  _reason?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  observation: Reference;
  reason?: string | undefined;
  type: "reflex" | "repeat" | "re-run";
}

export interface OperationDefinition {
  _affectsState?: Element | undefined;
  _base?: Element | undefined;
  _code?: Element | undefined;
  _comment?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _inputProfile?: Element | undefined;
  _instance?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _outputProfile?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _resource?: Element[] | undefined;
  _status?: Element | undefined;
  _system?: Element | undefined;
  _title?: Element | undefined;
  _type?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  affectsState?: boolean | undefined;
  base?: string | undefined;
  code: string;
  comment?: string | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  inputProfile?: string | undefined;
  instance: boolean;
  jurisdiction?: CodeableConcept[] | undefined;
  kind: "operation" | "query";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  outputProfile?: string | undefined;
  overload?: OperationDefinitionOverload[] | undefined;
  parameter?: OperationDefinitionParameter[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resource?: string[] | undefined;
  resourceType: "OperationDefinition";
  status: "draft" | "active" | "retired" | "unknown";
  system: boolean;
  text?: Narrative | undefined;
  title?: string | undefined;
  type: boolean;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface OperationDefinitionOverload {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _parameterName?: Element[] | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  parameterName?: string[] | undefined;
}

export interface OperationDefinitionParameter {
  _allowedType?: Element[] | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _max?: Element | undefined;
  _name?: Element | undefined;
  _scope?: Element[] | undefined;
  _searchType?: Element | undefined;
  _targetProfile?: Element[] | undefined;
  _type?: Element | undefined;
  _use?: Element | undefined;
  allowedType?: string[] | undefined;
  binding?: OperationDefinitionParameterBinding | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  max: string;
  min: number;
  modifierExtension?: Extension[] | undefined;
  name: string;
  part?: OperationDefinitionParameter[] | undefined;
  referencedFrom?: OperationDefinitionParameterReferencedFrom[] | undefined;
  scope?: ("instance" | "type" | "system")[] | undefined;
  searchType?:
    | "string"
    | "number"
    | "date"
    | "reference"
    | "quantity"
    | "token"
    | "composite"
    | "uri"
    | "special"
    | undefined;
  targetProfile?: string[] | undefined;
  type?: string | undefined;
  use: "in" | "out";
}

export interface OperationDefinitionParameterBinding {
  _id?: Element | undefined;
  _strength?: Element | undefined;
  _valueSet?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  strength: "example" | "required" | "extensible" | "preferred";
  valueSet: string;
}

export interface OperationDefinitionParameterReferencedFrom {
  _id?: Element | undefined;
  _source?: Element | undefined;
  _sourceId?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source: string;
  sourceId?: string | undefined;
}

export interface OperationOutcome {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  issue: OperationOutcomeIssue[];
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "OperationOutcome";
  text?: Narrative | undefined;
}

export interface Organization {
  _active?: Element | undefined;
  _alias?: Element[] | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  active?: boolean | undefined;
  alias?: string[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  partOf?: Reference | undefined;
  qualification?: OrganizationQualification[] | undefined;
  resourceType: "Organization";
  text?: Narrative | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface OrganizationAffiliation {
  _active?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  code?: CodeableConcept[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  healthcareService?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  network?: Reference[] | undefined;
  organization?: Reference | undefined;
  participatingOrganization?: Reference | undefined;
  period?: Period | undefined;
  resourceType: "OrganizationAffiliation";
  specialty?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
}

export interface OrganizationQualification {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  issuer?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
}

export interface PackagedProductDefinition {
  _copackagedIndicator?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _statusDate?: Element | undefined;
  attachedDocument?: Reference[] | undefined;
  characteristic?: PackagedProductDefinitionPackagingProperty[] | undefined;
  contained?: FhirResource[] | undefined;
  containedItemQuantity?: Quantity[] | undefined;
  copackagedIndicator?: boolean | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  legalStatusOfSupply?:
    | PackagedProductDefinitionLegalStatusOfSupply[]
    | undefined;
  manufacturer?: Reference[] | undefined;
  marketingStatus?: MarketingStatus[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  packageFor?: Reference[] | undefined;
  packaging?: PackagedProductDefinitionPackaging | undefined;
  resourceType: "PackagedProductDefinition";
  status?: CodeableConcept | undefined;
  statusDate?: string | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
}

export interface PackagedProductDefinitionLegalStatusOfSupply {
  _id?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  jurisdiction?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface PackagedProductDefinitionPackaging {
  _componentPart?: Element | undefined;
  _id?: Element | undefined;
  alternateMaterial?: CodeableConcept[] | undefined;
  componentPart?: boolean | undefined;
  containedItem?: PackagedProductDefinitionPackagingContainedItem[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  manufacturer?: Reference[] | undefined;
  material?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  packaging?: PackagedProductDefinitionPackaging[] | undefined;
  property?: PackagedProductDefinitionPackagingProperty[] | undefined;
  quantity?: number | undefined;
  shelfLifeStorage?: ProductShelfLife[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface PackagedProductDefinitionPackagingContainedItem {
  _id?: Element | undefined;
  amount?: Quantity | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  item: CodeableReference;
  modifierExtension?: Extension[] | undefined;
}

export interface PackagedProductDefinitionPackagingProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDate?: string | undefined;
  valueQuantity?: Quantity | undefined;
}

export interface Parameters {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  parameter?: ParametersParameter[] | undefined;
  resourceType: "Parameters";
}

export interface ParametersParameter {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  part?: ParametersParameter[] | undefined;
  resource?: FhirResource | undefined;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface Patient {
  _active?: Element | undefined;
  _birthDate?: Element | undefined;
  _deceasedBoolean?: Element | undefined;
  _deceasedDateTime?: Element | undefined;
  _gender?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _multipleBirthBoolean?: Element | undefined;
  active?: boolean | undefined;
  address?: Address[] | undefined;
  birthDate?: string | undefined;
  communication?: PatientCommunication[] | undefined;
  contact?: PatientContact[] | undefined;
  contained?: FhirResource[] | undefined;
  deceasedBoolean?: boolean | undefined;
  deceasedDateTime?: string | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  generalPractitioner?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  link?: PatientLink[] | undefined;
  managingOrganization?: Reference | undefined;
  maritalStatus?: CodeableConcept | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  multipleBirthBoolean?: boolean | undefined;
  multipleBirthInteger?: number | undefined;
  name?: HumanName[] | undefined;
  photo?: Attachment[] | undefined;
  resourceType: "Patient";
  telecom?: ContactPoint[] | undefined;
  text?: Narrative | undefined;
}

export interface PatientCommunication {
  _id?: Element | undefined;
  _preferred?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  preferred?: boolean | undefined;
}

export interface PatientContact {
  _gender?: Element | undefined;
  _id?: Element | undefined;
  address?: Address | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: HumanName | undefined;
  organization?: Reference | undefined;
  period?: Period | undefined;
  relationship?: CodeableConcept[] | undefined;
  telecom?: ContactPoint[] | undefined;
}

export interface PatientLink {
  _id?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  other: Reference;
  type: "replaces" | "replaced-by" | "refer" | "seealso";
}

export interface PaymentNotice {
  _created?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _paymentDate?: Element | undefined;
  _status?: Element | undefined;
  amount: Money;
  contained?: FhirResource[] | undefined;
  created: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  payee?: Reference | undefined;
  payment?: Reference | undefined;
  paymentDate?: string | undefined;
  paymentStatus?: CodeableConcept | undefined;
  recipient: Reference;
  reporter?: Reference | undefined;
  request?: Reference | undefined;
  resourceType: "PaymentNotice";
  response?: Reference | undefined;
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  text?: Narrative | undefined;
}

export interface PaymentReconciliation {
  _accountNumber?: Element | undefined;
  _authorization?: Element | undefined;
  _cardBrand?: Element | undefined;
  _created?: Element | undefined;
  _date?: Element | undefined;
  _disposition?: Element | undefined;
  _expirationDate?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _outcome?: Element | undefined;
  _processor?: Element | undefined;
  _referenceNumber?: Element | undefined;
  _status?: Element | undefined;
  accountNumber?: string | undefined;
  allocation?: PaymentReconciliationAllocation[] | undefined;
  amount: Money;
  authorization?: string | undefined;
  cardBrand?: string | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  date: string;
  disposition?: string | undefined;
  enterer?: Reference | undefined;
  expirationDate?: string | undefined;
  extension?: Extension[] | undefined;
  formCode?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  issuerType?: CodeableConcept | undefined;
  kind?: CodeableConcept | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  outcome?: "error" | "complete" | "queued" | "partial" | undefined;
  paymentIdentifier?: Identifier | undefined;
  paymentIssuer?: Reference | undefined;
  period?: Period | undefined;
  processNote?: PaymentReconciliationProcessNote[] | undefined;
  processor?: string | undefined;
  referenceNumber?: string | undefined;
  request?: Reference | undefined;
  requestor?: Reference | undefined;
  resourceType: "PaymentReconciliation";
  returnedAmount?: Money | undefined;
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  tenderedAmount?: Money | undefined;
  text?: Narrative | undefined;
  type: CodeableConcept;
}

export interface PaymentReconciliationAllocation {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _targetItemString?: Element | undefined;
  account?: Reference | undefined;
  amount?: Money | undefined;
  date?: string | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  payee?: Reference | undefined;
  predecessor?: Identifier | undefined;
  response?: Reference | undefined;
  responsible?: Reference | undefined;
  submitter?: Reference | undefined;
  target?: Reference | undefined;
  targetItemIdentifier?: Identifier | undefined;
  targetItemPositiveInt?: number | undefined;
  targetItemString?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface PaymentReconciliationProcessNote {
  _id?: Element | undefined;
  _text?: Element | undefined;
  _type?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  text?: string | undefined;
  type?: "display" | "print" | "printoper" | undefined;
}

export interface Permission {
  _combining?: Element | undefined;
  _date?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  asserter?: Reference | undefined;
  combining:
    | "deny-overrides"
    | "permit-overrides"
    | "ordered-deny-overrides"
    | "ordered-permit-overrides"
    | "deny-unless-permit"
    | "permit-unless-deny";
  contained?: FhirResource[] | undefined;
  date?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  justification?: PermissionJustification | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "Permission";
  rule?: PermissionRule[] | undefined;
  status: "draft" | "active" | "entered-in-error" | "rejected";
  text?: Narrative | undefined;
  validity?: Period | undefined;
}

export interface PermissionJustification {
  _id?: Element | undefined;
  basis?: CodeableConcept[] | undefined;
  evidence?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface PermissionRule {
  _id?: Element | undefined;
  _type?: Element | undefined;
  activity?: PermissionRuleActivity[] | undefined;
  data?: PermissionRuleData[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  limit?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: "deny" | "permit" | undefined;
}

export interface PermissionRuleActivity {
  _id?: Element | undefined;
  action?: CodeableConcept[] | undefined;
  actor?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  purpose?: CodeableConcept[] | undefined;
}

export interface PermissionRuleData {
  _id?: Element | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period[] | undefined;
  resource?: PermissionRuleDataResource[] | undefined;
  security?: Coding[] | undefined;
}

export interface PermissionRuleDataResource {
  _id?: Element | undefined;
  _meaning?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  meaning: "instance" | "related" | "dependents" | "authoredby";
  modifierExtension?: Extension[] | undefined;
  reference: Reference;
}

export interface Person {
  _active?: Element | undefined;
  _birthDate?: Element | undefined;
  _deceasedBoolean?: Element | undefined;
  _deceasedDateTime?: Element | undefined;
  _gender?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  address?: Address[] | undefined;
  birthDate?: string | undefined;
  communication?: PersonCommunication[] | undefined;
  contained?: FhirResource[] | undefined;
  deceasedBoolean?: boolean | undefined;
  deceasedDateTime?: string | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  link?: PersonLink[] | undefined;
  managingOrganization?: Reference | undefined;
  maritalStatus?: CodeableConcept | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: HumanName[] | undefined;
  photo?: Attachment[] | undefined;
  resourceType: "Person";
  telecom?: ContactPoint[] | undefined;
  text?: Narrative | undefined;
}

export interface PersonCommunication {
  _id?: Element | undefined;
  _preferred?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  preferred?: boolean | undefined;
}

export interface PersonLink {
  _assurance?: Element | undefined;
  _id?: Element | undefined;
  assurance?: "level1" | "level2" | "level3" | "level4" | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  target: Reference;
}

export interface PlanDefinition {
  _approvalDate?: Element | undefined;
  _asNeededBoolean?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _library?: Element[] | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _subjectCanonical?: Element | undefined;
  _subtitle?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _usage?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  action?: PlanDefinitionAction[] | undefined;
  actor?: PlanDefinitionActor[] | undefined;
  approvalDate?: string | undefined;
  asNeededBoolean?: boolean | undefined;
  asNeededCodeableConcept?: CodeableConcept | undefined;
  author?: ContactDetail[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  editor?: ContactDetail[] | undefined;
  effectivePeriod?: Period | undefined;
  endorser?: ContactDetail[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  goal?: PlanDefinitionGoal[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  library?: string[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "PlanDefinition";
  reviewer?: ContactDetail[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  subjectCanonical?: string | undefined;
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  subtitle?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  topic?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
  url?: string | undefined;
  usage?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface PlanDefinitionAction {
  _cardinalityBehavior?: Element | undefined;
  _definitionCanonical?: Element | undefined;
  _definitionUri?: Element | undefined;
  _description?: Element | undefined;
  _goalId?: Element[] | undefined;
  _groupingBehavior?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _precheckBehavior?: Element | undefined;
  _prefix?: Element | undefined;
  _priority?: Element | undefined;
  _requiredBehavior?: Element | undefined;
  _selectionBehavior?: Element | undefined;
  _subjectCanonical?: Element | undefined;
  _textEquivalent?: Element | undefined;
  _title?: Element | undefined;
  _transform?: Element | undefined;
  action?: PlanDefinitionAction[] | undefined;
  cardinalityBehavior?: "single" | "multiple" | undefined;
  code?: CodeableConcept | undefined;
  condition?: PlanDefinitionActionCondition[] | undefined;
  definitionCanonical?: string | undefined;
  definitionUri?: string | undefined;
  description?: string | undefined;
  documentation?: RelatedArtifact[] | undefined;
  dynamicValue?: PlanDefinitionActionDynamicValue[] | undefined;
  extension?: Extension[] | undefined;
  goalId?: string[] | undefined;
  groupingBehavior?:
    | "visual-group"
    | "logical-group"
    | "sentence-group"
    | undefined;
  id?: string | undefined;
  input?: PlanDefinitionActionInput[] | undefined;
  linkId?: string | undefined;
  location?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
  output?: PlanDefinitionActionOutput[] | undefined;
  participant?: PlanDefinitionActionParticipant[] | undefined;
  precheckBehavior?: "yes" | "no" | undefined;
  prefix?: string | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableConcept[] | undefined;
  relatedAction?: PlanDefinitionActionRelatedAction[] | undefined;
  requiredBehavior?: "must" | "could" | "must-unless-documented" | undefined;
  selectionBehavior?:
    | "all"
    | "any"
    | "all-or-none"
    | "exactly-one"
    | "at-most-one"
    | "one-or-more"
    | undefined;
  subjectCanonical?: string | undefined;
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  textEquivalent?: string | undefined;
  timingAge?: Age | undefined;
  timingDuration?: Duration | undefined;
  timingRange?: Range | undefined;
  timingTiming?: Timing | undefined;
  title?: string | undefined;
  transform?: string | undefined;
  trigger?: TriggerDefinition[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface PlanDefinitionActionCondition {
  _id?: Element | undefined;
  _kind?: Element | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  kind: "stop" | "applicability" | "start";
  modifierExtension?: Extension[] | undefined;
}

export interface PlanDefinitionActionDynamicValue {
  _id?: Element | undefined;
  _path?: Element | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  path?: string | undefined;
}

export interface PlanDefinitionActionInput {
  _id?: Element | undefined;
  _relatedData?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedData?: string | undefined;
  requirement?: DataRequirement | undefined;
  title?: string | undefined;
}

export interface PlanDefinitionActionOutput {
  _id?: Element | undefined;
  _relatedData?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedData?: string | undefined;
  requirement?: DataRequirement | undefined;
  title?: string | undefined;
}

export interface PlanDefinitionActionParticipant {
  _actorId?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _typeCanonical?: Element | undefined;
  actorId?: string | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
  type?:
    | "group"
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson"
    | undefined;
  typeCanonical?: string | undefined;
  typeReference?: Reference | undefined;
}

export interface PlanDefinitionActionRelatedAction {
  _endRelationship?: Element | undefined;
  _id?: Element | undefined;
  _relationship?: Element | undefined;
  _targetId?: Element | undefined;
  endRelationship?:
    | "before"
    | "before-start"
    | "before-end"
    | "concurrent"
    | "concurrent-with-start"
    | "concurrent-with-end"
    | "after"
    | "after-start"
    | "after-end"
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  offsetDuration?: Duration | undefined;
  offsetRange?: Range | undefined;
  relationship:
    | "before"
    | "before-start"
    | "before-end"
    | "concurrent"
    | "concurrent-with-start"
    | "concurrent-with-end"
    | "after"
    | "after-start"
    | "after-end";
  targetId: string;
}

export interface PlanDefinitionActor {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _title?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  option: PlanDefinitionActorOption[];
  title?: string | undefined;
}

export interface PlanDefinitionActorOption {
  _id?: Element | undefined;
  _type?: Element | undefined;
  _typeCanonical?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
  type?:
    | "group"
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson"
    | undefined;
  typeCanonical?: string | undefined;
  typeReference?: Reference | undefined;
}

export interface PlanDefinitionGoal {
  _id?: Element | undefined;
  addresses?: CodeableConcept[] | undefined;
  category?: CodeableConcept | undefined;
  description: CodeableConcept;
  documentation?: RelatedArtifact[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  priority?: CodeableConcept | undefined;
  start?: CodeableConcept | undefined;
  target?: PlanDefinitionGoalTarget[] | undefined;
}

export interface PlanDefinitionGoalTarget {
  _detailBoolean?: Element | undefined;
  _detailString?: Element | undefined;
  _id?: Element | undefined;
  detailBoolean?: boolean | undefined;
  detailCodeableConcept?: CodeableConcept | undefined;
  detailInteger?: number | undefined;
  detailQuantity?: Quantity | undefined;
  detailRange?: Range | undefined;
  detailRatio?: Ratio | undefined;
  detailString?: string | undefined;
  due?: Duration | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  measure?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Practitioner {
  _active?: Element | undefined;
  _birthDate?: Element | undefined;
  _deceasedBoolean?: Element | undefined;
  _deceasedDateTime?: Element | undefined;
  _gender?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  address?: Address[] | undefined;
  birthDate?: string | undefined;
  communication?: PractitionerCommunication[] | undefined;
  contained?: FhirResource[] | undefined;
  deceasedBoolean?: boolean | undefined;
  deceasedDateTime?: string | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: HumanName[] | undefined;
  photo?: Attachment[] | undefined;
  qualification?: PractitionerQualification[] | undefined;
  resourceType: "Practitioner";
  telecom?: ContactPoint[] | undefined;
  text?: Narrative | undefined;
}

export interface PractitionerCommunication {
  _id?: Element | undefined;
  _preferred?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  preferred?: boolean | undefined;
}

export interface PractitionerQualification {
  _id?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  issuer?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
}

export interface PractitionerRole {
  _active?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  availability?: Availability[] | undefined;
  characteristic?: CodeableConcept[] | undefined;
  code?: CodeableConcept[] | undefined;
  communication?: CodeableConcept[] | undefined;
  contact?: ExtendedContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  endpoint?: Reference[] | undefined;
  extension?: Extension[] | undefined;
  healthcareService?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  organization?: Reference | undefined;
  period?: Period | undefined;
  practitioner?: Reference | undefined;
  resourceType: "PractitionerRole";
  specialty?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
}

export interface Procedure {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _occurrenceString?: Element | undefined;
  _recorded?: Element | undefined;
  _reportedBoolean?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableConcept[] | undefined;
  category?: CodeableConcept[] | undefined;
  code?: CodeableConcept | undefined;
  complication?: CodeableReference[] | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  focalDevice?: ProcedureFocalDevice[] | undefined;
  focus?: Reference | undefined;
  followUp?: CodeableConcept[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceAge?: Age | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceRange?: Range | undefined;
  occurrenceString?: string | undefined;
  occurrenceTiming?: Timing | undefined;
  outcome?: CodeableConcept | undefined;
  partOf?: Reference[] | undefined;
  performer?: ProcedurePerformer[] | undefined;
  reason?: CodeableReference[] | undefined;
  recorded?: string | undefined;
  recorder?: Reference | undefined;
  report?: Reference[] | undefined;
  reportedBoolean?: boolean | undefined;
  reportedReference?: Reference | undefined;
  resourceType: "Procedure";
  status:
    | "unknown"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "on-hold"
    | "preparation"
    | "not-done";
  statusReason?: CodeableConcept | undefined;
  subject: Reference;
  supportingInfo?: Reference[] | undefined;
  text?: Narrative | undefined;
  used?: CodeableReference[] | undefined;
}

export interface ProcedureFocalDevice {
  _id?: Element | undefined;
  action?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  manipulated: Reference;
  modifierExtension?: Extension[] | undefined;
}

export interface ProcedurePerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onBehalfOf?: Reference | undefined;
  period?: Period | undefined;
}

export interface ProductShelfLife {
  _id?: Element | undefined;
  _periodString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  periodDuration?: Duration | undefined;
  periodString?: string | undefined;
  specialPrecautionsForStorage?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface Provenance {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurredDateTime?: Element | undefined;
  _policy?: Element[] | undefined;
  _recorded?: Element | undefined;
  activity?: CodeableConcept | undefined;
  agent: ProvenanceAgent[];
  authorization?: CodeableReference[] | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  entity?: ProvenanceEntity[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  occurredDateTime?: string | undefined;
  occurredPeriod?: Period | undefined;
  patient?: Reference | undefined;
  policy?: string[] | undefined;
  recorded?: string | undefined;
  resourceType: "Provenance";
  signature?: Signature[] | undefined;
  target: Reference[];
  text?: Narrative | undefined;
}

export interface ProvenanceAgent {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onBehalfOf?: Reference | undefined;
  role?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
  who: Reference;
}

export interface ProvenanceEntity {
  _id?: Element | undefined;
  _role?: Element | undefined;
  agent?: ProvenanceAgent[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role: "source" | "revision" | "quotation" | "instantiates" | "removal";
  what: Reference;
}

export interface RatioRange {
  _id?: Element | undefined;
  denominator?: Quantity | undefined;
  extension?: Extension[] | undefined;
  highNumerator?: Quantity | undefined;
  id?: string | undefined;
  lowNumerator?: Quantity | undefined;
}

export interface RegulatedAuthorization {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _statusDate?: Element | undefined;
  attachedDocument?: Reference[] | undefined;
  basis?: CodeableConcept[] | undefined;
  case?: RegulatedAuthorizationCase | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  holder?: Reference | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  indication?: CodeableReference[] | undefined;
  intendedUse?: CodeableConcept | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  region?: CodeableConcept[] | undefined;
  regulator?: Reference | undefined;
  resourceType: "RegulatedAuthorization";
  status?: CodeableConcept | undefined;
  statusDate?: string | undefined;
  subject?: Reference[] | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
  validityPeriod?: Period | undefined;
}

export interface RegulatedAuthorizationCase {
  _dateDateTime?: Element | undefined;
  _id?: Element | undefined;
  application?: RegulatedAuthorizationCase[] | undefined;
  dateDateTime?: string | undefined;
  datePeriod?: Period | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  status?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
}

export interface RelatedPerson {
  _active?: Element | undefined;
  _birthDate?: Element | undefined;
  _gender?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  active?: boolean | undefined;
  address?: Address[] | undefined;
  birthDate?: string | undefined;
  communication?: RelatedPersonCommunication[] | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  gender?: "unknown" | "other" | "male" | "female" | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: HumanName[] | undefined;
  patient: Reference;
  period?: Period | undefined;
  photo?: Attachment[] | undefined;
  relationship?: CodeableConcept[] | undefined;
  resourceType: "RelatedPerson";
  telecom?: ContactPoint[] | undefined;
  text?: Narrative | undefined;
}

export interface RelatedPersonCommunication {
  _id?: Element | undefined;
  _preferred?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language: CodeableConcept;
  modifierExtension?: Extension[] | undefined;
  preferred?: boolean | undefined;
}

export interface RequestOrchestration {
  _authoredOn?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  action?: RequestOrchestrationAction[] | undefined;
  author?: Reference | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  goal?: Reference[] | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive";
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference[] | undefined;
  replaces?: Reference[] | undefined;
  resourceType: "RequestOrchestration";
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked";
  subject?: Reference | undefined;
  text?: Narrative | undefined;
}

export interface RequestOrchestrationAction {
  _cardinalityBehavior?: Element | undefined;
  _definitionCanonical?: Element | undefined;
  _definitionUri?: Element | undefined;
  _description?: Element | undefined;
  _groupingBehavior?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _precheckBehavior?: Element | undefined;
  _prefix?: Element | undefined;
  _priority?: Element | undefined;
  _requiredBehavior?: Element | undefined;
  _selectionBehavior?: Element | undefined;
  _textEquivalent?: Element | undefined;
  _timingDateTime?: Element | undefined;
  _title?: Element | undefined;
  _transform?: Element | undefined;
  action?: RequestOrchestrationAction[] | undefined;
  cardinalityBehavior?: "single" | "multiple" | undefined;
  code?: CodeableConcept[] | undefined;
  condition?: RequestOrchestrationActionCondition[] | undefined;
  definitionCanonical?: string | undefined;
  definitionUri?: string | undefined;
  description?: string | undefined;
  documentation?: RelatedArtifact[] | undefined;
  dynamicValue?: RequestOrchestrationActionDynamicValue[] | undefined;
  extension?: Extension[] | undefined;
  goal?: Reference[] | undefined;
  groupingBehavior?:
    | "visual-group"
    | "logical-group"
    | "sentence-group"
    | undefined;
  id?: string | undefined;
  input?: RequestOrchestrationActionInput[] | undefined;
  linkId?: string | undefined;
  location?: CodeableReference | undefined;
  modifierExtension?: Extension[] | undefined;
  output?: RequestOrchestrationActionOutput[] | undefined;
  participant?: RequestOrchestrationActionParticipant[] | undefined;
  precheckBehavior?: "yes" | "no" | undefined;
  prefix?: string | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  relatedAction?: RequestOrchestrationActionRelatedAction[] | undefined;
  requiredBehavior?: "must" | "could" | "must-unless-documented" | undefined;
  resource?: Reference | undefined;
  selectionBehavior?:
    | "all"
    | "any"
    | "all-or-none"
    | "exactly-one"
    | "at-most-one"
    | "one-or-more"
    | undefined;
  textEquivalent?: string | undefined;
  timingAge?: Age | undefined;
  timingDateTime?: string | undefined;
  timingDuration?: Duration | undefined;
  timingPeriod?: Period | undefined;
  timingRange?: Range | undefined;
  timingTiming?: Timing | undefined;
  title?: string | undefined;
  transform?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface RequestOrchestrationActionCondition {
  _id?: Element | undefined;
  _kind?: Element | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  kind: "stop" | "applicability" | "start";
  modifierExtension?: Extension[] | undefined;
}

export interface RequestOrchestrationActionDynamicValue {
  _id?: Element | undefined;
  _path?: Element | undefined;
  expression?: Expression | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  path?: string | undefined;
}

export interface RequestOrchestrationActionInput {
  _id?: Element | undefined;
  _relatedData?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedData?: string | undefined;
  requirement?: DataRequirement | undefined;
  title?: string | undefined;
}

export interface RequestOrchestrationActionOutput {
  _id?: Element | undefined;
  _relatedData?: Element | undefined;
  _title?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  relatedData?: string | undefined;
  requirement?: DataRequirement | undefined;
  title?: string | undefined;
}

export interface RequestOrchestrationActionParticipant {
  _actorCanonical?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _typeCanonical?: Element | undefined;
  actorCanonical?: string | undefined;
  actorReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  role?: CodeableConcept | undefined;
  type?:
    | "group"
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson"
    | undefined;
  typeCanonical?: string | undefined;
  typeReference?: Reference | undefined;
}

export interface RequestOrchestrationActionRelatedAction {
  _endRelationship?: Element | undefined;
  _id?: Element | undefined;
  _relationship?: Element | undefined;
  _targetId?: Element | undefined;
  endRelationship?:
    | "before"
    | "before-start"
    | "before-end"
    | "concurrent"
    | "concurrent-with-start"
    | "concurrent-with-end"
    | "after"
    | "after-start"
    | "after-end"
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  offsetDuration?: Duration | undefined;
  offsetRange?: Range | undefined;
  relationship:
    | "before"
    | "before-start"
    | "before-end"
    | "concurrent"
    | "concurrent-with-start"
    | "concurrent-with-end"
    | "after"
    | "after-start"
    | "after-end";
  targetId: string;
}

export interface Requirements {
  _actor?: Element[] | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFrom?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _reference?: Element[] | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  actor?: string[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFrom?: string[] | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  reference?: string[] | undefined;
  resourceType: "Requirements";
  statement?: RequirementsStatement[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface RequirementsStatement {
  _conditionality?: Element | undefined;
  _conformance?: Element[] | undefined;
  _derivedFrom?: Element | undefined;
  _id?: Element | undefined;
  _key?: Element | undefined;
  _label?: Element | undefined;
  _parent?: Element | undefined;
  _reference?: Element[] | undefined;
  _requirement?: Element | undefined;
  _satisfiedBy?: Element[] | undefined;
  conditionality?: boolean | undefined;
  conformance?: ("SHALL" | "SHOULD" | "MAY" | "SHOULD-NOT")[] | undefined;
  derivedFrom?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  key: string;
  label?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  parent?: string | undefined;
  reference?: string[] | undefined;
  requirement: string;
  satisfiedBy?: string[] | undefined;
  source?: Reference[] | undefined;
}

export interface ResearchStudy {
  _date?: Element | undefined;
  _description?: Element | undefined;
  _descriptionSummary?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  associatedParty?: ResearchStudyAssociatedParty[] | undefined;
  classifier?: CodeableConcept[] | undefined;
  comparisonGroup?: ResearchStudyComparisonGroup[] | undefined;
  condition?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  date?: string | undefined;
  description?: string | undefined;
  descriptionSummary?: string | undefined;
  extension?: Extension[] | undefined;
  focus?: CodeableReference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  keyword?: CodeableConcept[] | undefined;
  label?: ResearchStudyLabel[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  note?: Annotation[] | undefined;
  objective?: ResearchStudyObjective[] | undefined;
  outcomeMeasure?: ResearchStudyOutcomeMeasure[] | undefined;
  partOf?: Reference[] | undefined;
  period?: Period | undefined;
  phase?: CodeableConcept | undefined;
  primaryPurposeType?: CodeableConcept | undefined;
  progressStatus?: ResearchStudyProgressStatus[] | undefined;
  protocol?: Reference[] | undefined;
  recruitment?: ResearchStudyRecruitment | undefined;
  region?: CodeableConcept[] | undefined;
  relatedArtifact?: RelatedArtifact[] | undefined;
  resourceType: "ResearchStudy";
  result?: Reference[] | undefined;
  site?: Reference[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  studyDesign?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  version?: string | undefined;
  whyStopped?: CodeableConcept | undefined;
}

export interface ResearchStudyAssociatedParty {
  _id?: Element | undefined;
  _name?: Element | undefined;
  classifier?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  party?: Reference | undefined;
  period?: Period[] | undefined;
  role: CodeableConcept;
}

export interface ResearchStudyComparisonGroup {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _linkId?: Element | undefined;
  _name?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  intendedExposure?: Reference[] | undefined;
  linkId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  observedGroup?: Reference | undefined;
  type?: CodeableConcept | undefined;
}

export interface ResearchStudyLabel {
  _id?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
  value?: string | undefined;
}

export interface ResearchStudyObjective {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface ResearchStudyOutcomeMeasure {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  reference?: Reference | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface ResearchStudyProgressStatus {
  _actual?: Element | undefined;
  _id?: Element | undefined;
  actual?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  state: CodeableConcept;
}

export interface ResearchStudyRecruitment {
  _id?: Element | undefined;
  actualGroup?: Reference | undefined;
  actualNumber?: number | undefined;
  eligibility?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  targetNumber?: number | undefined;
}

export interface ResearchSubject {
  _actualComparisonGroup?: Element | undefined;
  _assignedComparisonGroup?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  actualComparisonGroup?: string | undefined;
  assignedComparisonGroup?: string | undefined;
  consent?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  progress?: ResearchSubjectProgress[] | undefined;
  resourceType: "ResearchSubject";
  status: "draft" | "active" | "retired" | "unknown";
  study: Reference;
  subject: Reference;
  text?: Narrative | undefined;
}

export interface ResearchSubjectProgress {
  _endDate?: Element | undefined;
  _id?: Element | undefined;
  _startDate?: Element | undefined;
  endDate?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  milestone?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  reason?: CodeableConcept | undefined;
  startDate?: string | undefined;
  subjectState?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
}

export interface RiskAssessment {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _mitigation?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference | undefined;
  basis?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  condition?: Reference | undefined;
  contained?: FhirResource[] | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  method?: CodeableConcept | undefined;
  mitigation?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  parent?: Reference | undefined;
  performer?: Reference | undefined;
  prediction?: RiskAssessmentPrediction[] | undefined;
  reason?: CodeableReference[] | undefined;
  resourceType: "RiskAssessment";
  status:
    | "unknown"
    | "amended"
    | "entered-in-error"
    | "cancelled"
    | "registered"
    | "preliminary"
    | "final"
    | "corrected";
  subject: Reference;
  text?: Narrative | undefined;
}

export interface RiskAssessmentPrediction {
  _id?: Element | undefined;
  _rationale?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  outcome?: CodeableConcept | undefined;
  probabilityDecimal?: number | undefined;
  probabilityRange?: Range | undefined;
  qualitativeRisk?: CodeableConcept | undefined;
  rationale?: string | undefined;
  relativeRisk?: number | undefined;
  whenPeriod?: Period | undefined;
  whenRange?: Range | undefined;
}

export interface Schedule {
  _active?: Element | undefined;
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  active?: boolean | undefined;
  actor: Reference[];
  comment?: string | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  planningHorizon?: Period | undefined;
  resourceType: "Schedule";
  serviceCategory?: CodeableConcept[] | undefined;
  serviceType?: CodeableReference[] | undefined;
  specialty?: CodeableConcept[] | undefined;
  text?: Narrative | undefined;
}

export interface SearchParameter {
  _base?: Element[] | undefined;
  _chain?: Element[] | undefined;
  _code?: Element | undefined;
  _comparator?: Element[] | undefined;
  _constraint?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFrom?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _expression?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _modifier?: Element[] | undefined;
  _multipleAnd?: Element | undefined;
  _multipleOr?: Element | undefined;
  _name?: Element | undefined;
  _processingMode?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _target?: Element[] | undefined;
  _title?: Element | undefined;
  _type?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  base: string[];
  chain?: string[] | undefined;
  code: string;
  comparator?:
    | ("eq" | "ne" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | "ap")[]
    | undefined;
  component?: SearchParameterComponent[] | undefined;
  constraint?: string | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFrom?: string | undefined;
  description: string;
  experimental?: boolean | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifier?:
    | (
        | "contains"
        | "in"
        | "text"
        | "missing"
        | "exact"
        | "not"
        | "not-in"
        | "below"
        | "above"
        | "type"
        | "identifier"
        | "of-type"
        | "code-text"
        | "text-advanced"
        | "iterate"
      )[]
    | undefined;
  modifierExtension?: Extension[] | undefined;
  multipleAnd?: boolean | undefined;
  multipleOr?: boolean | undefined;
  name: string;
  processingMode?: "other" | "normal" | "phonetic" | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "SearchParameter";
  status: "draft" | "active" | "retired" | "unknown";
  target?: string[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  type:
    | "string"
    | "number"
    | "date"
    | "reference"
    | "quantity"
    | "token"
    | "composite"
    | "uri"
    | "special";
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface SearchParameterComponent {
  _definition?: Element | undefined;
  _expression?: Element | undefined;
  _id?: Element | undefined;
  definition: string;
  expression: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ServiceRequest {
  _asNeededBoolean?: Element | undefined;
  _authoredOn?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  asNeededBoolean?: boolean | undefined;
  asNeededCodeableConcept?: CodeableConcept | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  bodySite?: CodeableConcept[] | undefined;
  bodyStructure?: Reference | undefined;
  category?: CodeableConcept[] | undefined;
  code?: CodeableReference | undefined;
  contained?: FhirResource[] | undefined;
  doNotPerform?: boolean | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  instantiatesCanonical?: string[] | undefined;
  instantiatesUri?: string[] | undefined;
  insurance?: Reference[] | undefined;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option"
    | "directive";
  language?: string | undefined;
  location?: CodeableReference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  orderDetail?: ServiceRequestOrderDetail[] | undefined;
  patientInstruction?: ServiceRequestPatientInstruction[] | undefined;
  performer?: Reference[] | undefined;
  performerType?: CodeableConcept | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  quantityQuantity?: Quantity | undefined;
  quantityRange?: Range | undefined;
  quantityRatio?: Ratio | undefined;
  reason?: CodeableReference[] | undefined;
  relevantHistory?: Reference[] | undefined;
  replaces?: Reference[] | undefined;
  requester?: Reference | undefined;
  requisition?: Identifier | undefined;
  resourceType: "ServiceRequest";
  specimen?: Reference[] | undefined;
  status:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "on-hold"
    | "revoked";
  subject: Reference;
  supportingInfo?: CodeableReference[] | undefined;
  text?: Narrative | undefined;
}

export interface ServiceRequestOrderDetail {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  parameter: ServiceRequestOrderDetailParameter[];
  parameterFocus?: CodeableReference | undefined;
}

export interface ServiceRequestOrderDetailParameter {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueString?: Element | undefined;
  code: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valuePeriod?: Period | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueString?: string | undefined;
}

export interface ServiceRequestPatientInstruction {
  _id?: Element | undefined;
  _instructionMarkdown?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instructionMarkdown?: string | undefined;
  instructionReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface Slot {
  _comment?: Element | undefined;
  _end?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _overbooked?: Element | undefined;
  _start?: Element | undefined;
  _status?: Element | undefined;
  appointmentType?: CodeableConcept[] | undefined;
  comment?: string | undefined;
  contained?: FhirResource[] | undefined;
  end: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  overbooked?: boolean | undefined;
  resourceType: "Slot";
  schedule: Reference;
  serviceCategory?: CodeableConcept[] | undefined;
  serviceType?: CodeableReference[] | undefined;
  specialty?: CodeableConcept[] | undefined;
  start: string;
  status:
    | "entered-in-error"
    | "busy"
    | "free"
    | "busy-unavailable"
    | "busy-tentative";
  text?: Narrative | undefined;
}

export interface Specimen {
  _combined?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _receivedTime?: Element | undefined;
  _status?: Element | undefined;
  accessionIdentifier?: Identifier | undefined;
  collection?: SpecimenCollection | undefined;
  combined?: "grouped" | "pooled" | undefined;
  condition?: CodeableConcept[] | undefined;
  contained?: FhirResource[] | undefined;
  container?: SpecimenContainer[] | undefined;
  extension?: Extension[] | undefined;
  feature?: SpecimenFeature[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  parent?: Reference[] | undefined;
  processing?: SpecimenProcessing[] | undefined;
  receivedTime?: string | undefined;
  request?: Reference[] | undefined;
  resourceType: "Specimen";
  role?: CodeableConcept[] | undefined;
  status?:
    | "entered-in-error"
    | "available"
    | "unavailable"
    | "unsatisfactory"
    | undefined;
  subject?: Reference | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
}

export interface SpecimenCollection {
  _collectedDateTime?: Element | undefined;
  _id?: Element | undefined;
  bodySite?: CodeableReference | undefined;
  collectedDateTime?: string | undefined;
  collectedPeriod?: Period | undefined;
  collector?: Reference | undefined;
  device?: CodeableReference | undefined;
  duration?: Duration | undefined;
  extension?: Extension[] | undefined;
  fastingStatusCodeableConcept?: CodeableConcept | undefined;
  fastingStatusDuration?: Duration | undefined;
  id?: string | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  procedure?: Reference | undefined;
  quantity?: Quantity | undefined;
}

export interface SpecimenContainer {
  _id?: Element | undefined;
  device: Reference;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  location?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  specimenQuantity?: Quantity | undefined;
}

export interface SpecimenDefinition {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFromCanonical?: Element[] | undefined;
  _derivedFromUri?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _timeAspect?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  collection?: CodeableConcept[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFromCanonical?: string[] | undefined;
  derivedFromUri?: string[] | undefined;
  description?: string | undefined;
  effectivePeriod?: Period | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  patientPreparation?: CodeableConcept[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "SpecimenDefinition";
  status: "draft" | "active" | "retired" | "unknown";
  subjectCodeableConcept?: CodeableConcept | undefined;
  subjectReference?: Reference | undefined;
  text?: Narrative | undefined;
  timeAspect?: string | undefined;
  title?: string | undefined;
  typeCollected?: CodeableConcept | undefined;
  typeTested?: SpecimenDefinitionTypeTested[] | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface SpecimenDefinitionTypeTested {
  _id?: Element | undefined;
  _isDerived?: Element | undefined;
  _preference?: Element | undefined;
  _requirement?: Element | undefined;
  _singleUse?: Element | undefined;
  container?: SpecimenDefinitionTypeTestedContainer | undefined;
  extension?: Extension[] | undefined;
  handling?: SpecimenDefinitionTypeTestedHandling[] | undefined;
  id?: string | undefined;
  isDerived?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  preference: "preferred" | "alternate";
  rejectionCriterion?: CodeableConcept[] | undefined;
  requirement?: string | undefined;
  retentionTime?: Duration | undefined;
  singleUse?: boolean | undefined;
  testingDestination?: CodeableConcept[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface SpecimenDefinitionTypeTestedContainer {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _minimumVolumeString?: Element | undefined;
  _preparation?: Element | undefined;
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
  cap?: CodeableConcept | undefined;
  capacity?: Quantity | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  material?: CodeableConcept | undefined;
  minimumVolumeQuantity?: Quantity | undefined;
  minimumVolumeString?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  preparation?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface SpecimenDefinitionTypeTestedContainerAdditive {
  _id?: Element | undefined;
  additiveCodeableConcept?: CodeableConcept | undefined;
  additiveReference?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface SpecimenDefinitionTypeTestedHandling {
  _id?: Element | undefined;
  _instruction?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  instruction?: string | undefined;
  maxDuration?: Duration | undefined;
  modifierExtension?: Extension[] | undefined;
  temperatureQualifier?: CodeableConcept | undefined;
  temperatureRange?: Range | undefined;
}

export interface SpecimenFeature {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
}

export interface SpecimenProcessing {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _timeDateTime?: Element | undefined;
  additive?: Reference[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  timeDateTime?: string | undefined;
  timePeriod?: Period | undefined;
}

export interface StructureDefinition {
  _abstract?: Element | undefined;
  _baseDefinition?: Element | undefined;
  _contextInvariant?: Element[] | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivation?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _fhirVersion?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _type?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  abstract: boolean;
  baseDefinition?: string | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  context?: StructureDefinitionContext[] | undefined;
  contextInvariant?: string[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivation?: "specialization" | "constraint" | undefined;
  description?: string | undefined;
  differential?: StructureDefinitionDifferential | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  fhirVersion?: string | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  keyword?: Coding[] | undefined;
  kind: "primitive-type" | "complex-type" | "resource" | "logical";
  language?: string | undefined;
  mapping?: StructureDefinitionMapping[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "StructureDefinition";
  snapshot?: StructureDefinitionSnapshot | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  type: string;
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface StructureDefinitionContext {
  _expression?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  expression: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: "fhirpath" | "element" | "extension";
}

export interface StructureDefinitionDifferential {
  _id?: Element | undefined;
  element: ElementDefinition[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface StructureDefinitionMapping {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _identity?: Element | undefined;
  _name?: Element | undefined;
  _uri?: Element | undefined;
  comment?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identity: string;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  uri?: string | undefined;
}

export interface StructureDefinitionSnapshot {
  _id?: Element | undefined;
  element: ElementDefinition[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface StructureMap {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _import?: Element[] | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  const?: StructureMapConst[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  group: StructureMapGroup[];
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  import?: string[] | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "StructureMap";
  status: "draft" | "active" | "retired" | "unknown";
  structure?: StructureMapStructure[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface StructureMapConst {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  value?: string | undefined;
}

export interface StructureMapGroup {
  _documentation?: Element | undefined;
  _extends?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _typeMode?: Element | undefined;
  documentation?: string | undefined;
  extends?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  input: StructureMapGroupInput[];
  modifierExtension?: Extension[] | undefined;
  name: string;
  rule?: StructureMapGroupRule[] | undefined;
  typeMode?: "types" | "type-and-types" | undefined;
}

export interface StructureMapGroupInput {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  _name?: Element | undefined;
  _type?: Element | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: "source" | "target";
  modifierExtension?: Extension[] | undefined;
  name: string;
  type?: string | undefined;
}

export interface StructureMapGroupRule {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  dependent?: StructureMapGroupRuleDependent[] | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  rule?: StructureMapGroupRule[] | undefined;
  source: StructureMapGroupRuleSource[];
  target?: StructureMapGroupRuleTarget[] | undefined;
}

export interface StructureMapGroupRuleDependent {
  _id?: Element | undefined;
  _name?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  parameter: StructureMapGroupRuleTargetParameter[];
}

export interface StructureMapGroupRuleSource {
  _check?: Element | undefined;
  _condition?: Element | undefined;
  _context?: Element | undefined;
  _defaultValue?: Element | undefined;
  _element?: Element | undefined;
  _id?: Element | undefined;
  _listMode?: Element | undefined;
  _logMessage?: Element | undefined;
  _max?: Element | undefined;
  _type?: Element | undefined;
  _variable?: Element | undefined;
  check?: string | undefined;
  condition?: string | undefined;
  context: string;
  defaultValue?: string | undefined;
  element?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  listMode?:
    | "first"
    | "last"
    | "not_first"
    | "not_last"
    | "only_one"
    | undefined;
  logMessage?: string | undefined;
  max?: string | undefined;
  min?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: string | undefined;
  variable?: string | undefined;
}

export interface StructureMapGroupRuleTarget {
  _context?: Element | undefined;
  _element?: Element | undefined;
  _id?: Element | undefined;
  _listMode?: Element[] | undefined;
  _listRuleId?: Element | undefined;
  _transform?: Element | undefined;
  _variable?: Element | undefined;
  context?: string | undefined;
  element?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  listMode?: ("first" | "share" | "last" | "single")[] | undefined;
  listRuleId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  parameter?: StructureMapGroupRuleTargetParameter[] | undefined;
  transform?:
    | "reference"
    | "create"
    | "copy"
    | "truncate"
    | "escape"
    | "cast"
    | "append"
    | "translate"
    | "dateOp"
    | "uuid"
    | "pointer"
    | "evaluate"
    | "cc"
    | "c"
    | "qty"
    | "id"
    | "cp"
    | undefined;
  variable?: string | undefined;
}

export interface StructureMapGroupRuleTargetParameter {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueId?: string | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
}

export interface StructureMapStructure {
  _alias?: Element | undefined;
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _mode?: Element | undefined;
  _url?: Element | undefined;
  alias?: string | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  mode: "source" | "queried" | "target" | "produced";
  modifierExtension?: Extension[] | undefined;
  url: string;
}

export interface Subscription {
  _content?: Element | undefined;
  _contentType?: Element | undefined;
  _end?: Element | undefined;
  _endpoint?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _reason?: Element | undefined;
  _status?: Element | undefined;
  _topic?: Element | undefined;
  channelType: Coding;
  contact?: ContactPoint[] | undefined;
  contained?: FhirResource[] | undefined;
  content?: "empty" | "id-only" | "full-resource" | undefined;
  contentType?: string | undefined;
  end?: string | undefined;
  endpoint?: string | undefined;
  extension?: Extension[] | undefined;
  filterBy?: SubscriptionFilterBy[] | undefined;
  heartbeatPeriod?: number | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  managingEntity?: Reference | undefined;
  maxCount?: number | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  parameter?: SubscriptionParameter[] | undefined;
  reason?: string | undefined;
  resourceType: "Subscription";
  status: "active" | "entered-in-error" | "error" | "requested" | "off";
  text?: Narrative | undefined;
  timeout?: number | undefined;
  topic: string;
}

export interface SubscriptionFilterBy {
  _comparator?: Element | undefined;
  _filterParameter?: Element | undefined;
  _id?: Element | undefined;
  _modifier?: Element | undefined;
  _resourceType?: Element | undefined;
  _value?: Element | undefined;
  comparator?:
    | "eq"
    | "ne"
    | "gt"
    | "lt"
    | "ge"
    | "le"
    | "sa"
    | "eb"
    | "ap"
    | undefined;
  extension?: Extension[] | undefined;
  filterParameter: string;
  id?: string | undefined;
  modifier?:
    | "contains"
    | "in"
    | "text"
    | "missing"
    | "exact"
    | "not"
    | "not-in"
    | "below"
    | "above"
    | "type"
    | "identifier"
    | "of-type"
    | "code-text"
    | "text-advanced"
    | "iterate"
    | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType?: string | undefined;
  value: string;
}

export interface SubscriptionParameter {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  value: string;
}

export interface SubscriptionStatus {
  _eventsSinceSubscriptionStart?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  _topic?: Element | undefined;
  _type?: Element | undefined;
  contained?: FhirResource[] | undefined;
  error?: CodeableConcept[] | undefined;
  eventsSinceSubscriptionStart?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  notificationEvent?: SubscriptionStatusNotificationEvent[] | undefined;
  resourceType: "SubscriptionStatus";
  status?:
    | "active"
    | "entered-in-error"
    | "error"
    | "requested"
    | "off"
    | undefined;
  subscription: Reference;
  text?: Narrative | undefined;
  topic?: string | undefined;
  type:
    | "handshake"
    | "heartbeat"
    | "event-notification"
    | "query-status"
    | "query-event";
}

export interface SubscriptionStatusNotificationEvent {
  _eventNumber?: Element | undefined;
  _id?: Element | undefined;
  _timestamp?: Element | undefined;
  additionalContext?: Reference[] | undefined;
  eventNumber: string;
  extension?: Extension[] | undefined;
  focus?: Reference | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  timestamp?: string | undefined;
}

export interface SubscriptionTopic {
  _approvalDate?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _derivedFrom?: Element[] | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastReviewDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  approvalDate?: string | undefined;
  canFilterBy?: SubscriptionTopicCanFilterBy[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  derivedFrom?: string[] | undefined;
  description?: string | undefined;
  effectivePeriod?: Period | undefined;
  eventTrigger?: SubscriptionTopicEventTrigger[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  lastReviewDate?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  notificationShape?: SubscriptionTopicNotificationShape[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceTrigger?: SubscriptionTopicResourceTrigger[] | undefined;
  resourceType: "SubscriptionTopic";
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  url: string;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface SubscriptionTopicCanFilterBy {
  _comparator?: Element[] | undefined;
  _description?: Element | undefined;
  _filterDefinition?: Element | undefined;
  _filterParameter?: Element | undefined;
  _id?: Element | undefined;
  _modifier?: Element[] | undefined;
  _resource?: Element | undefined;
  comparator?:
    | ("eq" | "ne" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | "ap")[]
    | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  filterDefinition?: string | undefined;
  filterParameter: string;
  id?: string | undefined;
  modifier?:
    | (
        | "contains"
        | "in"
        | "text"
        | "missing"
        | "exact"
        | "not"
        | "not-in"
        | "below"
        | "above"
        | "type"
        | "identifier"
        | "of-type"
        | "code-text"
        | "text-advanced"
        | "iterate"
      )[]
    | undefined;
  modifierExtension?: Extension[] | undefined;
  resource?: string | undefined;
}

export interface SubscriptionTopicEventTrigger {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _resource?: Element | undefined;
  description?: string | undefined;
  event: CodeableConcept;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  resource: string;
}

export interface SubscriptionTopicNotificationShape {
  _id?: Element | undefined;
  _include?: Element[] | undefined;
  _resource?: Element | undefined;
  _revInclude?: Element[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  include?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  resource: string;
  revInclude?: string[] | undefined;
}

export interface SubscriptionTopicResourceTrigger {
  _description?: Element | undefined;
  _fhirPathCriteria?: Element | undefined;
  _id?: Element | undefined;
  _resource?: Element | undefined;
  _supportedInteraction?: Element[] | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  fhirPathCriteria?: string | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  queryCriteria?: SubscriptionTopicResourceTriggerQueryCriteria | undefined;
  resource: string;
  supportedInteraction?: ("delete" | "create" | "update")[] | undefined;
}

export interface SubscriptionTopicResourceTriggerQueryCriteria {
  _current?: Element | undefined;
  _id?: Element | undefined;
  _previous?: Element | undefined;
  _requireBoth?: Element | undefined;
  _resultForCreate?: Element | undefined;
  _resultForDelete?: Element | undefined;
  current?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  previous?: string | undefined;
  requireBoth?: boolean | undefined;
  resultForCreate?: "test-passes" | "test-fails" | undefined;
  resultForDelete?: "test-passes" | "test-fails" | undefined;
}

export interface Substance {
  _description?: Element | undefined;
  _expiry?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instance?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  code: CodeableReference;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  expiry?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  ingredient?: SubstanceIngredient[] | undefined;
  instance: boolean;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
  resourceType: "Substance";
  status?: "active" | "entered-in-error" | "inactive" | undefined;
  text?: Narrative | undefined;
}

export interface SubstanceDefinition {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _version?: Element | undefined;
  characterization?: SubstanceDefinitionCharacterization[] | undefined;
  classification?: CodeableConcept[] | undefined;
  code?: SubstanceDefinitionCode[] | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  domain?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  grade?: CodeableConcept[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  informationSource?: Reference[] | undefined;
  language?: string | undefined;
  manufacturer?: Reference[] | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  moiety?: SubstanceDefinitionMoiety[] | undefined;
  molecularWeight?: SubstanceDefinitionMolecularWeight[] | undefined;
  name?: SubstanceDefinitionName[] | undefined;
  note?: Annotation[] | undefined;
  nucleicAcid?: Reference | undefined;
  polymer?: Reference | undefined;
  property?: SubstanceDefinitionProperty[] | undefined;
  protein?: Reference | undefined;
  referenceInformation?: Reference | undefined;
  relationship?: SubstanceDefinitionRelationship[] | undefined;
  resourceType: "SubstanceDefinition";
  sourceMaterial?: SubstanceDefinitionSourceMaterial | undefined;
  status?: CodeableConcept | undefined;
  structure?: SubstanceDefinitionStructure | undefined;
  supplier?: Reference[] | undefined;
  text?: Narrative | undefined;
  version?: string | undefined;
}

export interface SubstanceDefinitionCharacterization {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  file?: Attachment[] | undefined;
  form?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  technique?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionCode {
  _id?: Element | undefined;
  _statusDate?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  source?: Reference[] | undefined;
  status?: CodeableConcept | undefined;
  statusDate?: string | undefined;
}

export interface SubstanceDefinitionMoiety {
  _amountString?: Element | undefined;
  _id?: Element | undefined;
  _molecularFormula?: Element | undefined;
  _name?: Element | undefined;
  amountQuantity?: Quantity | undefined;
  amountString?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  measurementType?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  molecularFormula?: string | undefined;
  name?: string | undefined;
  opticalActivity?: CodeableConcept | undefined;
  role?: CodeableConcept | undefined;
  stereochemistry?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionMolecularWeight {
  _id?: Element | undefined;
  amount: Quantity;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  method?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionName {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _preferred?: Element | undefined;
  domain?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: CodeableConcept[] | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  official?: SubstanceDefinitionNameOfficial[] | undefined;
  preferred?: boolean | undefined;
  source?: Reference[] | undefined;
  status?: CodeableConcept | undefined;
  synonym?: SubstanceDefinitionName[] | undefined;
  translation?: SubstanceDefinitionName[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionNameOfficial {
  _date?: Element | undefined;
  _id?: Element | undefined;
  authority?: CodeableConcept | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  status?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionProperty {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueDate?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAttachment?: Attachment | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueDate?: string | undefined;
  valueQuantity?: Quantity | undefined;
}

export interface SubstanceDefinitionRelationship {
  _amountString?: Element | undefined;
  _id?: Element | undefined;
  _isDefining?: Element | undefined;
  amountQuantity?: Quantity | undefined;
  amountRatio?: Ratio | undefined;
  amountString?: string | undefined;
  comparator?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  isDefining?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  ratioHighLimitAmount?: Ratio | undefined;
  source?: Reference[] | undefined;
  substanceDefinitionCodeableConcept?: CodeableConcept | undefined;
  substanceDefinitionReference?: Reference | undefined;
  type: CodeableConcept;
}

export interface SubstanceDefinitionSourceMaterial {
  _id?: Element | undefined;
  countryOfOrigin?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  genus?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  part?: CodeableConcept | undefined;
  species?: CodeableConcept | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceDefinitionStructure {
  _id?: Element | undefined;
  _molecularFormula?: Element | undefined;
  _molecularFormulaByMoiety?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  molecularFormula?: string | undefined;
  molecularFormulaByMoiety?: string | undefined;
  molecularWeight?: SubstanceDefinitionMolecularWeight | undefined;
  opticalActivity?: CodeableConcept | undefined;
  representation?: SubstanceDefinitionStructureRepresentation[] | undefined;
  sourceDocument?: Reference[] | undefined;
  stereochemistry?: CodeableConcept | undefined;
  technique?: CodeableConcept[] | undefined;
}

export interface SubstanceDefinitionStructureRepresentation {
  _id?: Element | undefined;
  _representation?: Element | undefined;
  document?: Reference | undefined;
  extension?: Extension[] | undefined;
  format?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  representation?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceIngredient {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Ratio | undefined;
  substanceCodeableConcept?: CodeableConcept | undefined;
  substanceReference?: Reference | undefined;
}

export interface SubstanceNucleicAcid {
  _areaOfHybridisation?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  areaOfHybridisation?: string | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  numberOfSubunits?: number | undefined;
  oligoNucleotideType?: CodeableConcept | undefined;
  resourceType: "SubstanceNucleicAcid";
  sequenceType?: CodeableConcept | undefined;
  subunit?: SubstanceNucleicAcidSubunit[] | undefined;
  text?: Narrative | undefined;
}

export interface SubstanceNucleicAcidSubunit {
  _id?: Element | undefined;
  _sequence?: Element | undefined;
  extension?: Extension[] | undefined;
  fivePrime?: CodeableConcept | undefined;
  id?: string | undefined;
  length?: number | undefined;
  linkage?: SubstanceNucleicAcidSubunitLinkage[] | undefined;
  modifierExtension?: Extension[] | undefined;
  sequence?: string | undefined;
  sequenceAttachment?: Attachment | undefined;
  subunit?: number | undefined;
  sugar?: SubstanceNucleicAcidSubunitSugar[] | undefined;
  threePrime?: CodeableConcept | undefined;
}

export interface SubstanceNucleicAcidSubunitLinkage {
  _connectivity?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _residueSite?: Element | undefined;
  connectivity?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  residueSite?: string | undefined;
}

export interface SubstanceNucleicAcidSubunitSugar {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _residueSite?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  residueSite?: string | undefined;
}

export interface SubstancePolymer {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _modification?: Element | undefined;
  class?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  copolymerConnectivity?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  geometry?: CodeableConcept | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modification?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  monomerSet?: SubstancePolymerMonomerSet[] | undefined;
  repeat?: SubstancePolymerRepeat[] | undefined;
  resourceType: "SubstancePolymer";
  text?: Narrative | undefined;
}

export interface SubstancePolymerMonomerSet {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  ratioType?: CodeableConcept | undefined;
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[] | undefined;
}

export interface SubstancePolymerMonomerSetStartingMaterial {
  _id?: Element | undefined;
  _isDefining?: Element | undefined;
  amount?: Quantity | undefined;
  category?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  isDefining?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface SubstancePolymerRepeat {
  _averageMolecularFormula?: Element | undefined;
  _id?: Element | undefined;
  averageMolecularFormula?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[] | undefined;
  repeatUnitAmountType?: CodeableConcept | undefined;
}

export interface SubstancePolymerRepeatRepeatUnit {
  _id?: Element | undefined;
  _unit?: Element | undefined;
  amount?: number | undefined;
  degreeOfPolymerisation?:
    | SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[]
    | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  orientation?: CodeableConcept | undefined;
  structuralRepresentation?:
    | SubstancePolymerRepeatRepeatUnitStructuralRepresentation[]
    | undefined;
  unit?: string | undefined;
}

export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  _id?: Element | undefined;
  average?: number | undefined;
  extension?: Extension[] | undefined;
  high?: number | undefined;
  id?: string | undefined;
  low?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
  _id?: Element | undefined;
  _representation?: Element | undefined;
  attachment?: Attachment | undefined;
  extension?: Extension[] | undefined;
  format?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  representation?: string | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceProtein {
  _disulfideLinkage?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  contained?: FhirResource[] | undefined;
  disulfideLinkage?: string[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  numberOfSubunits?: number | undefined;
  resourceType: "SubstanceProtein";
  sequenceType?: CodeableConcept | undefined;
  subunit?: SubstanceProteinSubunit[] | undefined;
  text?: Narrative | undefined;
}

export interface SubstanceProteinSubunit {
  _cTerminalModification?: Element | undefined;
  _id?: Element | undefined;
  _nTerminalModification?: Element | undefined;
  _sequence?: Element | undefined;
  cTerminalModification?: string | undefined;
  cTerminalModificationId?: Identifier | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  length?: number | undefined;
  modifierExtension?: Extension[] | undefined;
  nTerminalModification?: string | undefined;
  nTerminalModificationId?: Identifier | undefined;
  sequence?: string | undefined;
  sequenceAttachment?: Attachment | undefined;
  subunit?: number | undefined;
}

export interface SubstanceReferenceInformation {
  _comment?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  comment?: string | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  gene?: SubstanceReferenceInformationGene[] | undefined;
  geneElement?: SubstanceReferenceInformationGeneElement[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  resourceType: "SubstanceReferenceInformation";
  target?: SubstanceReferenceInformationTarget[] | undefined;
  text?: Narrative | undefined;
}

export interface SubstanceReferenceInformationGene {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  gene?: CodeableConcept | undefined;
  geneSequenceOrigin?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: Reference[] | undefined;
}

export interface SubstanceReferenceInformationGeneElement {
  _id?: Element | undefined;
  element?: Identifier | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  source?: Reference[] | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceReferenceInformationTarget {
  _amountString?: Element | undefined;
  _id?: Element | undefined;
  amountQuantity?: Quantity | undefined;
  amountRange?: Range | undefined;
  amountString?: string | undefined;
  amountType?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  interaction?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  organism?: CodeableConcept | undefined;
  organismType?: CodeableConcept | undefined;
  source?: Reference[] | undefined;
  target?: Identifier | undefined;
  type?: CodeableConcept | undefined;
}

export interface SubstanceSourceMaterial {
  _geographicalLocation?: Element[] | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _organismName?: Element | undefined;
  _parentSubstanceName?: Element[] | undefined;
  contained?: FhirResource[] | undefined;
  countryOfOrigin?: CodeableConcept[] | undefined;
  developmentStage?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  fractionDescription?:
    | SubstanceSourceMaterialFractionDescription[]
    | undefined;
  geographicalLocation?: string[] | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  organism?: SubstanceSourceMaterialOrganism | undefined;
  organismId?: Identifier | undefined;
  organismName?: string | undefined;
  parentSubstanceId?: Identifier[] | undefined;
  parentSubstanceName?: string[] | undefined;
  partDescription?: SubstanceSourceMaterialPartDescription[] | undefined;
  resourceType: "SubstanceSourceMaterial";
  sourceMaterialClass?: CodeableConcept | undefined;
  sourceMaterialState?: CodeableConcept | undefined;
  sourceMaterialType?: CodeableConcept | undefined;
  text?: Narrative | undefined;
}

export interface SubstanceSourceMaterialFractionDescription {
  _fraction?: Element | undefined;
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  fraction?: string | undefined;
  id?: string | undefined;
  materialType?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface SubstanceSourceMaterialOrganism {
  _id?: Element | undefined;
  _intraspecificDescription?: Element | undefined;
  author?: SubstanceSourceMaterialOrganismAuthor[] | undefined;
  extension?: Extension[] | undefined;
  family?: CodeableConcept | undefined;
  genus?: CodeableConcept | undefined;
  hybrid?: SubstanceSourceMaterialOrganismHybrid | undefined;
  id?: string | undefined;
  intraspecificDescription?: string | undefined;
  intraspecificType?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral | undefined;
  species?: CodeableConcept | undefined;
}

export interface SubstanceSourceMaterialOrganismAuthor {
  _authorDescription?: Element | undefined;
  _id?: Element | undefined;
  authorDescription?: string | undefined;
  authorType?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface SubstanceSourceMaterialOrganismHybrid {
  _id?: Element | undefined;
  _maternalOrganismId?: Element | undefined;
  _maternalOrganismName?: Element | undefined;
  _paternalOrganismId?: Element | undefined;
  _paternalOrganismName?: Element | undefined;
  extension?: Extension[] | undefined;
  hybridType?: CodeableConcept | undefined;
  id?: string | undefined;
  maternalOrganismId?: string | undefined;
  maternalOrganismName?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  paternalOrganismId?: string | undefined;
  paternalOrganismName?: string | undefined;
}

export interface SubstanceSourceMaterialOrganismOrganismGeneral {
  _id?: Element | undefined;
  class?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  kingdom?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  order?: CodeableConcept | undefined;
  phylum?: CodeableConcept | undefined;
}

export interface SubstanceSourceMaterialPartDescription {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  part?: CodeableConcept | undefined;
  partLocation?: CodeableConcept | undefined;
}

export interface SupplyDelivery {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _status?: Element | undefined;
  basedOn?: Reference[] | undefined;
  contained?: FhirResource[] | undefined;
  destination?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  partOf?: Reference[] | undefined;
  patient?: Reference | undefined;
  receiver?: Reference[] | undefined;
  resourceType: "SupplyDelivery";
  status?:
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "abandoned"
    | undefined;
  suppliedItem?: SupplyDeliverySuppliedItem[] | undefined;
  supplier?: Reference | undefined;
  text?: Narrative | undefined;
  type?: CodeableConcept | undefined;
}

export interface SupplyDeliverySuppliedItem {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  itemCodeableConcept?: CodeableConcept | undefined;
  itemReference?: Reference | undefined;
  modifierExtension?: Extension[] | undefined;
  quantity?: Quantity | undefined;
}

export interface SupplyRequest {
  _authoredOn?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _occurrenceDateTime?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  category?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  deliverFor?: Reference | undefined;
  deliverFrom?: Reference | undefined;
  deliverTo?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  item: CodeableReference;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  occurrenceDateTime?: string | undefined;
  occurrencePeriod?: Period | undefined;
  occurrenceTiming?: Timing | undefined;
  parameter?: SupplyRequestParameter[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  quantity: Quantity;
  reason?: CodeableReference[] | undefined;
  requester?: Reference | undefined;
  resourceType: "SupplyRequest";
  status?:
    | "draft"
    | "active"
    | "unknown"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "suspended"
    | undefined;
  supplier?: Reference[] | undefined;
  text?: Narrative | undefined;
}

export interface SupplyRequestParameter {
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  code?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
}

export interface Task {
  _authoredOn?: Element | undefined;
  _description?: Element | undefined;
  _doNotPerform?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element | undefined;
  _instantiatesUri?: Element | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _lastModified?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  businessStatus?: CodeableConcept | undefined;
  code?: CodeableConcept | undefined;
  contained?: FhirResource[] | undefined;
  description?: string | undefined;
  doNotPerform?: boolean | undefined;
  encounter?: Reference | undefined;
  executionPeriod?: Period | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference | undefined;
  for?: Reference | undefined;
  groupIdentifier?: Identifier | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  input?: TaskInput[] | undefined;
  instantiatesCanonical?: string | undefined;
  instantiatesUri?: string | undefined;
  insurance?: Reference[] | undefined;
  intent:
    | "unknown"
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  language?: string | undefined;
  lastModified?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  output?: TaskOutput[] | undefined;
  owner?: Reference | undefined;
  partOf?: Reference[] | undefined;
  performer?: TaskPerformer[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference[] | undefined;
  relevantHistory?: Reference[] | undefined;
  requestedPerformer?: CodeableReference[] | undefined;
  requestedPeriod?: Period | undefined;
  requester?: Reference | undefined;
  resourceType: "Task";
  restriction?: TaskRestriction | undefined;
  status:
    | "draft"
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "accepted"
    | "requested"
    | "received"
    | "rejected"
    | "ready"
    | "on-hold"
    | "failed";
  statusReason?: CodeableReference | undefined;
  text?: Narrative | undefined;
}

export interface TaskInput {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface TaskOutput {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface TaskPerformer {
  _id?: Element | undefined;
  actor: Reference;
  extension?: Extension[] | undefined;
  function?: CodeableConcept | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TaskRestriction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  recipient?: Reference[] | undefined;
  repetitions?: number | undefined;
}

export interface TerminologyCapabilities {
  _codeSearch?: Element | undefined;
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _kind?: Element | undefined;
  _language?: Element | undefined;
  _lockedDate?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  closure?: TerminologyCapabilitiesClosure | undefined;
  codeSearch?:
    | "in-compose"
    | "in-expansion"
    | "in-compose-or-expansion"
    | undefined;
  codeSystem?: TerminologyCapabilitiesCodeSystem[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date: string;
  description?: string | undefined;
  expansion?: TerminologyCapabilitiesExpansion | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implementation?: TerminologyCapabilitiesImplementation | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  kind: "instance" | "capability" | "requirements";
  language?: string | undefined;
  lockedDate?: boolean | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "TerminologyCapabilities";
  software?: TerminologyCapabilitiesSoftware | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  text?: Narrative | undefined;
  title?: string | undefined;
  translation?: TerminologyCapabilitiesTranslation | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  validateCode?: TerminologyCapabilitiesValidateCode | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface TerminologyCapabilitiesClosure {
  _id?: Element | undefined;
  _translation?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  translation?: boolean | undefined;
}

export interface TerminologyCapabilitiesCodeSystem {
  _content?: Element | undefined;
  _id?: Element | undefined;
  _subsumption?: Element | undefined;
  _uri?: Element | undefined;
  content: "not-present" | "example" | "fragment" | "complete" | "supplement";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  subsumption?: boolean | undefined;
  uri?: string | undefined;
  version?: TerminologyCapabilitiesCodeSystemVersion[] | undefined;
}

export interface TerminologyCapabilitiesCodeSystemVersion {
  _code?: Element | undefined;
  _compositional?: Element | undefined;
  _id?: Element | undefined;
  _isDefault?: Element | undefined;
  _language?: Element[] | undefined;
  _property?: Element[] | undefined;
  code?: string | undefined;
  compositional?: boolean | undefined;
  extension?: Extension[] | undefined;
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
  id?: string | undefined;
  isDefault?: boolean | undefined;
  language?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  property?: string[] | undefined;
}

export interface TerminologyCapabilitiesCodeSystemVersionFilter {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _op?: Element[] | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  op: string[];
}

export interface TerminologyCapabilitiesExpansion {
  _hierarchical?: Element | undefined;
  _id?: Element | undefined;
  _incomplete?: Element | undefined;
  _paging?: Element | undefined;
  _textFilter?: Element | undefined;
  extension?: Extension[] | undefined;
  hierarchical?: boolean | undefined;
  id?: string | undefined;
  incomplete?: boolean | undefined;
  modifierExtension?: Extension[] | undefined;
  paging?: boolean | undefined;
  parameter?: TerminologyCapabilitiesExpansionParameter[] | undefined;
  textFilter?: string | undefined;
}

export interface TerminologyCapabilitiesExpansionParameter {
  _documentation?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  documentation?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
}

export interface TerminologyCapabilitiesImplementation {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _url?: Element | undefined;
  description: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  url?: string | undefined;
}

export interface TerminologyCapabilitiesSoftware {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _version?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  version?: string | undefined;
}

export interface TerminologyCapabilitiesTranslation {
  _id?: Element | undefined;
  _needsMap?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  needsMap: boolean;
}

export interface TerminologyCapabilitiesValidateCode {
  _id?: Element | undefined;
  _translations?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  translations: boolean;
}

export interface TestPlan {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _exitCriteria?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _testTools?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  category?: CodeableConcept[] | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  dependency?: TestPlanDependency[] | undefined;
  description?: string | undefined;
  exitCriteria?: string | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "TestPlan";
  scope?: Reference[] | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  testCase?: TestPlanTestCase[] | undefined;
  testTools?: string | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface TestPlanDependency {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  predecessor?: Reference | undefined;
}

export interface TestPlanTestCase {
  _id?: Element | undefined;
  assertion?: TestPlanTestCaseAssertion[] | undefined;
  dependency?: TestPlanTestCaseDependency[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  scope?: Reference[] | undefined;
  sequence?: number | undefined;
  testData?: TestPlanTestCaseTestData[] | undefined;
  testRun?: TestPlanTestCaseTestRun[] | undefined;
}

export interface TestPlanTestCaseAssertion {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  object?: CodeableReference[] | undefined;
  result?: CodeableReference[] | undefined;
  type?: CodeableConcept[] | undefined;
}

export interface TestPlanTestCaseDependency {
  _description?: Element | undefined;
  _id?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  predecessor?: Reference | undefined;
}

export interface TestPlanTestCaseTestData {
  _id?: Element | undefined;
  _sourceString?: Element | undefined;
  content?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  sourceReference?: Reference | undefined;
  sourceString?: string | undefined;
  type: Coding;
}

export interface TestPlanTestCaseTestRun {
  _id?: Element | undefined;
  _narrative?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  narrative?: string | undefined;
  script?: TestPlanTestCaseTestRunScript | undefined;
}

export interface TestPlanTestCaseTestRunScript {
  _id?: Element | undefined;
  _sourceString?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: CodeableConcept | undefined;
  modifierExtension?: Extension[] | undefined;
  sourceReference?: Reference | undefined;
  sourceString?: string | undefined;
}

export interface TestReport {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _issued?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _result?: Element | undefined;
  _status?: Element | undefined;
  _testScript?: Element | undefined;
  _tester?: Element | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier | undefined;
  implicitRules?: string | undefined;
  issued?: string | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
  participant?: TestReportParticipant[] | undefined;
  resourceType: "TestReport";
  result: "fail" | "pass" | "pending";
  score?: number | undefined;
  setup?: TestReportSetup | undefined;
  status:
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "waiting";
  teardown?: TestReportTeardown | undefined;
  test?: TestReportTest[] | undefined;
  testScript: string;
  tester?: string | undefined;
  text?: Narrative | undefined;
}

export interface TestReportParticipant {
  _display?: Element | undefined;
  _id?: Element | undefined;
  _type?: Element | undefined;
  _uri?: Element | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: "test-engine" | "client" | "server";
  uri: string;
}

export interface TestReportSetup {
  _id?: Element | undefined;
  action: TestReportSetupAction[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestReportSetupAction {
  _id?: Element | undefined;
  assert?: TestReportSetupActionAssert | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: TestReportSetupActionOperation | undefined;
}

export interface TestReportSetupActionAssert {
  _detail?: Element | undefined;
  _id?: Element | undefined;
  _message?: Element | undefined;
  _result?: Element | undefined;
  detail?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  message?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  requirement?: TestReportSetupActionAssertRequirement[] | undefined;
  result: "error" | "warning" | "fail" | "pass" | "skip";
}

export interface TestReportSetupActionAssertRequirement {
  _id?: Element | undefined;
  _linkCanonical?: Element | undefined;
  _linkUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkCanonical?: string | undefined;
  linkUri?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestReportSetupActionOperation {
  _detail?: Element | undefined;
  _id?: Element | undefined;
  _message?: Element | undefined;
  _result?: Element | undefined;
  detail?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  message?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  result: "error" | "warning" | "fail" | "pass" | "skip";
}

export interface TestReportTeardown {
  _id?: Element | undefined;
  action: TestReportTeardownAction[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestReportTeardownAction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation: TestReportSetupActionOperation;
}

export interface TestReportTest {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  action: TestReportTestAction[];
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
}

export interface TestReportTestAction {
  _id?: Element | undefined;
  assert?: TestReportSetupActionAssert | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: TestReportSetupActionOperation | undefined;
}

export interface TestScript {
  _copyright?: Element | undefined;
  _copyrightLabel?: Element | undefined;
  _date?: Element | undefined;
  _description?: Element | undefined;
  _experimental?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _name?: Element | undefined;
  _profile?: Element[] | undefined;
  _publisher?: Element | undefined;
  _purpose?: Element | undefined;
  _status?: Element | undefined;
  _title?: Element | undefined;
  _url?: Element | undefined;
  _version?: Element | undefined;
  _versionAlgorithmString?: Element | undefined;
  contact?: ContactDetail[] | undefined;
  contained?: FhirResource[] | undefined;
  copyright?: string | undefined;
  copyrightLabel?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  destination?: TestScriptDestination[] | undefined;
  experimental?: boolean | undefined;
  extension?: Extension[] | undefined;
  fixture?: TestScriptFixture[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  jurisdiction?: CodeableConcept[] | undefined;
  language?: string | undefined;
  meta?: Meta | undefined;
  metadata?: TestScriptMetadata | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  origin?: TestScriptOrigin[] | undefined;
  profile?: string[] | undefined;
  publisher?: string | undefined;
  purpose?: string | undefined;
  resourceType: "TestScript";
  scope?: TestScriptScope[] | undefined;
  setup?: TestScriptSetup | undefined;
  status: "draft" | "active" | "retired" | "unknown";
  teardown?: TestScriptTeardown | undefined;
  test?: TestScriptTest[] | undefined;
  text?: Narrative | undefined;
  title?: string | undefined;
  url?: string | undefined;
  useContext?: UsageContext[] | undefined;
  variable?: TestScriptVariable[] | undefined;
  version?: string | undefined;
  versionAlgorithmCoding?: Coding | undefined;
  versionAlgorithmString?: string | undefined;
}

export interface TestScriptDestination {
  _id?: Element | undefined;
  _url?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  index: number;
  modifierExtension?: Extension[] | undefined;
  profile: Coding;
  url?: string | undefined;
}

export interface TestScriptFixture {
  _autocreate?: Element | undefined;
  _autodelete?: Element | undefined;
  _id?: Element | undefined;
  autocreate: boolean;
  autodelete: boolean;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  resource?: Reference | undefined;
}

export interface TestScriptMetadata {
  _id?: Element | undefined;
  capability: TestScriptMetadataCapability[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  link?: TestScriptMetadataLink[] | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestScriptMetadataCapability {
  _capabilities?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _link?: Element[] | undefined;
  _required?: Element | undefined;
  _validated?: Element | undefined;
  capabilities: string;
  description?: string | undefined;
  destination?: number | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  link?: string[] | undefined;
  modifierExtension?: Extension[] | undefined;
  origin?: number[] | undefined;
  required: boolean;
  validated: boolean;
}

export interface TestScriptMetadataLink {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _url?: Element | undefined;
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  url: string;
}

export interface TestScriptOrigin {
  _id?: Element | undefined;
  _url?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  index: number;
  modifierExtension?: Extension[] | undefined;
  profile: Coding;
  url?: string | undefined;
}

export interface TestScriptScope {
  _artifact?: Element | undefined;
  _id?: Element | undefined;
  artifact: string;
  conformance?: CodeableConcept | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  phase?: CodeableConcept | undefined;
}

export interface TestScriptSetup {
  _id?: Element | undefined;
  action: TestScriptSetupAction[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestScriptSetupAction {
  _id?: Element | undefined;
  assert?: TestScriptSetupActionAssert | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: TestScriptSetupActionOperation | undefined;
}

export interface TestScriptSetupActionAssert {
  _compareToSourceExpression?: Element | undefined;
  _compareToSourceId?: Element | undefined;
  _compareToSourcePath?: Element | undefined;
  _contentType?: Element | undefined;
  _defaultManualCompletion?: Element | undefined;
  _description?: Element | undefined;
  _direction?: Element | undefined;
  _expression?: Element | undefined;
  _headerField?: Element | undefined;
  _id?: Element | undefined;
  _label?: Element | undefined;
  _minimumId?: Element | undefined;
  _navigationLinks?: Element | undefined;
  _operator?: Element | undefined;
  _path?: Element | undefined;
  _requestMethod?: Element | undefined;
  _requestURL?: Element | undefined;
  _resource?: Element | undefined;
  _response?: Element | undefined;
  _responseCode?: Element | undefined;
  _sourceId?: Element | undefined;
  _stopTestOnFail?: Element | undefined;
  _validateProfileId?: Element | undefined;
  _value?: Element | undefined;
  _warningOnly?: Element | undefined;
  compareToSourceExpression?: string | undefined;
  compareToSourceId?: string | undefined;
  compareToSourcePath?: string | undefined;
  contentType?: string | undefined;
  defaultManualCompletion?: "fail" | "pass" | "skip" | "stop" | undefined;
  description?: string | undefined;
  direction?: "response" | "request" | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  headerField?: string | undefined;
  id?: string | undefined;
  label?: string | undefined;
  minimumId?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  navigationLinks?: boolean | undefined;
  operator?:
    | "contains"
    | "in"
    | "empty"
    | "equals"
    | "notEquals"
    | "notIn"
    | "greaterThan"
    | "lessThan"
    | "notEmpty"
    | "notContains"
    | "eval"
    | "manualEval"
    | undefined;
  path?: string | undefined;
  requestMethod?:
    | "delete"
    | "get"
    | "options"
    | "patch"
    | "post"
    | "put"
    | "head"
    | undefined;
  requestURL?: string | undefined;
  requirement?: TestScriptSetupActionAssertRequirement[] | undefined;
  resource?: string | undefined;
  response?:
    | "continue"
    | "switchingProtocols"
    | "okay"
    | "created"
    | "accepted"
    | "nonAuthoritativeInformation"
    | "noContent"
    | "resetContent"
    | "partialContent"
    | "multipleChoices"
    | "movedPermanently"
    | "found"
    | "seeOther"
    | "notModified"
    | "useProxy"
    | "temporaryRedirect"
    | "permanentRedirect"
    | "badRequest"
    | "unauthorized"
    | "paymentRequired"
    | "forbidden"
    | "notFound"
    | "methodNotAllowed"
    | "notAcceptable"
    | "proxyAuthenticationRequired"
    | "requestTimeout"
    | "conflict"
    | "gone"
    | "lengthRequired"
    | "preconditionFailed"
    | "contentTooLarge"
    | "uriTooLong"
    | "unsupportedMediaType"
    | "rangeNotSatisfiable"
    | "expectationFailed"
    | "misdirectedRequest"
    | "unprocessableContent"
    | "upgradeRequired"
    | "internalServerError"
    | "notImplemented"
    | "badGateway"
    | "serviceUnavailable"
    | "gatewayTimeout"
    | "httpVersionNotSupported"
    | undefined;
  responseCode?: string | undefined;
  sourceId?: string | undefined;
  stopTestOnFail: boolean;
  validateProfileId?: string | undefined;
  value?: string | undefined;
  warningOnly: boolean;
}

export interface TestScriptSetupActionAssertRequirement {
  _id?: Element | undefined;
  _linkCanonical?: Element | undefined;
  _linkUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  linkCanonical?: string | undefined;
  linkUri?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestScriptSetupActionOperation {
  _accept?: Element | undefined;
  _contentType?: Element | undefined;
  _description?: Element | undefined;
  _encodeRequestUrl?: Element | undefined;
  _id?: Element | undefined;
  _label?: Element | undefined;
  _method?: Element | undefined;
  _params?: Element | undefined;
  _requestId?: Element | undefined;
  _resource?: Element | undefined;
  _responseId?: Element | undefined;
  _sourceId?: Element | undefined;
  _targetId?: Element | undefined;
  _url?: Element | undefined;
  accept?: string | undefined;
  contentType?: string | undefined;
  description?: string | undefined;
  destination?: number | undefined;
  encodeRequestUrl: boolean;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  label?: string | undefined;
  method?:
    | "delete"
    | "get"
    | "options"
    | "patch"
    | "post"
    | "put"
    | "head"
    | undefined;
  modifierExtension?: Extension[] | undefined;
  origin?: number | undefined;
  params?: string | undefined;
  requestHeader?: TestScriptSetupActionOperationRequestHeader[] | undefined;
  requestId?: string | undefined;
  resource?: string | undefined;
  responseId?: string | undefined;
  sourceId?: string | undefined;
  targetId?: string | undefined;
  type?: Coding | undefined;
  url?: string | undefined;
}

export interface TestScriptSetupActionOperationRequestHeader {
  _field?: Element | undefined;
  _id?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  field: string;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  value: string;
}

export interface TestScriptTeardown {
  _id?: Element | undefined;
  action: TestScriptTeardownAction[];
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface TestScriptTeardownAction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation: TestScriptSetupActionOperation;
}

export interface TestScriptTest {
  _description?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  action: TestScriptTestAction[];
  description?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name?: string | undefined;
}

export interface TestScriptTestAction {
  _id?: Element | undefined;
  assert?: TestScriptSetupActionAssert | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  operation?: TestScriptSetupActionOperation | undefined;
}

export interface TestScriptVariable {
  _defaultValue?: Element | undefined;
  _description?: Element | undefined;
  _expression?: Element | undefined;
  _headerField?: Element | undefined;
  _hint?: Element | undefined;
  _id?: Element | undefined;
  _name?: Element | undefined;
  _path?: Element | undefined;
  _sourceId?: Element | undefined;
  defaultValue?: string | undefined;
  description?: string | undefined;
  expression?: string | undefined;
  extension?: Extension[] | undefined;
  headerField?: string | undefined;
  hint?: string | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  path?: string | undefined;
  sourceId?: string | undefined;
}

export interface TimingRepeat {
  _dayOfWeek?: Element[] | undefined;
  _durationUnit?: Element | undefined;
  _id?: Element | undefined;
  _periodUnit?: Element | undefined;
  _timeOfDay?: Element[] | undefined;
  _when?: Element[] | undefined;
  boundsDuration?: Duration | undefined;
  boundsPeriod?: Period | undefined;
  boundsRange?: Range | undefined;
  count?: number | undefined;
  countMax?: number | undefined;
  dayOfWeek?:
    | ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[]
    | undefined;
  duration?: number | undefined;
  durationMax?: number | undefined;
  durationUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a" | undefined;
  extension?: Extension[] | undefined;
  frequency?: number | undefined;
  frequencyMax?: number | undefined;
  id?: string | undefined;
  offset?: number | undefined;
  period?: number | undefined;
  periodMax?: number | undefined;
  periodUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a" | undefined;
  timeOfDay?: string[] | undefined;
  when?: string[] | undefined;
}

export interface Transport {
  _authoredOn?: Element | undefined;
  _completionTime?: Element | undefined;
  _description?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _instantiatesCanonical?: Element | undefined;
  _instantiatesUri?: Element | undefined;
  _intent?: Element | undefined;
  _language?: Element | undefined;
  _lastModified?: Element | undefined;
  _priority?: Element | undefined;
  _status?: Element | undefined;
  authoredOn?: string | undefined;
  basedOn?: Reference[] | undefined;
  code?: CodeableConcept | undefined;
  completionTime?: string | undefined;
  contained?: FhirResource[] | undefined;
  currentLocation: Reference;
  description?: string | undefined;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  focus?: Reference | undefined;
  for?: Reference | undefined;
  groupIdentifier?: Identifier | undefined;
  history?: Reference | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  input?: TransportInput[] | undefined;
  instantiatesCanonical?: string | undefined;
  instantiatesUri?: string | undefined;
  insurance?: Reference[] | undefined;
  intent:
    | "unknown"
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  language?: string | undefined;
  lastModified?: string | undefined;
  location?: Reference | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  output?: TransportOutput[] | undefined;
  owner?: Reference | undefined;
  partOf?: Reference[] | undefined;
  performerType?: CodeableConcept[] | undefined;
  priority?: "routine" | "urgent" | "asap" | "stat" | undefined;
  reason?: CodeableReference | undefined;
  relevantHistory?: Reference[] | undefined;
  requestedLocation: Reference;
  requester?: Reference | undefined;
  resourceType: "Transport";
  restriction?: TransportRestriction | undefined;
  status?:
    | "in-progress"
    | "completed"
    | "entered-in-error"
    | "cancelled"
    | "abandoned"
    | "planned"
    | undefined;
  statusReason?: CodeableConcept | undefined;
  text?: Narrative | undefined;
}

export interface TransportInput {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface TransportOutput {
  _id?: Element | undefined;
  _valueBase64Binary?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCanonical?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDate?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueId?: Element | undefined;
  _valueInstant?: Element | undefined;
  _valueInteger64?: Element | undefined;
  _valueMarkdown?: Element | undefined;
  _valueOid?: Element | undefined;
  _valueString?: Element | undefined;
  _valueTime?: Element | undefined;
  _valueUri?: Element | undefined;
  _valueUrl?: Element | undefined;
  _valueUuid?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  type: CodeableConcept;
  valueAddress?: Address | undefined;
  valueAge?: Age | undefined;
  valueAnnotation?: Annotation | undefined;
  valueAttachment?: Attachment | undefined;
  valueAvailability?: Availability | undefined;
  valueBase64Binary?: string | undefined;
  valueBoolean?: boolean | undefined;
  valueCanonical?: string | undefined;
  valueCode?: string | undefined;
  valueCodeableConcept?: CodeableConcept | undefined;
  valueCodeableReference?: CodeableReference | undefined;
  valueCoding?: Coding | undefined;
  valueContactDetail?: ContactDetail | undefined;
  valueContactPoint?: ContactPoint | undefined;
  valueCount?: Count | undefined;
  valueDataRequirement?: DataRequirement | undefined;
  valueDate?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueDistance?: Distance | undefined;
  valueDosage?: Dosage | undefined;
  valueDuration?: Duration | undefined;
  valueExpression?: Expression | undefined;
  valueExtendedContactDetail?: ExtendedContactDetail | undefined;
  valueHumanName?: HumanName | undefined;
  valueId?: string | undefined;
  valueIdentifier?: Identifier | undefined;
  valueInstant?: string | undefined;
  valueInteger?: number | undefined;
  valueInteger64?: string | undefined;
  valueMarkdown?: string | undefined;
  valueMeta?: Meta | undefined;
  valueMoney?: Money | undefined;
  valueOid?: string | undefined;
  valueParameterDefinition?: ParameterDefinition | undefined;
  valuePeriod?: Period | undefined;
  valuePositiveInt?: number | undefined;
  valueQuantity?: Quantity | undefined;
  valueRange?: Range | undefined;
  valueRatio?: Ratio | undefined;
  valueRatioRange?: RatioRange | undefined;
  valueReference?: Reference | undefined;
  valueRelatedArtifact?: RelatedArtifact | undefined;
  valueSampledData?: SampledData | undefined;
  valueSignature?: Signature | undefined;
  valueString?: string | undefined;
  valueTime?: string | undefined;
  valueTiming?: Timing | undefined;
  valueTriggerDefinition?: TriggerDefinition | undefined;
  valueUnsignedInt?: number | undefined;
  valueUri?: string | undefined;
  valueUrl?: string | undefined;
  valueUsageContext?: UsageContext | undefined;
  valueUuid?: string | undefined;
}

export interface TransportRestriction {
  _id?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  period?: Period | undefined;
  recipient?: Reference[] | undefined;
  repetitions?: number | undefined;
}

export interface ValueSetCompose {
  _id?: Element | undefined;
  _inactive?: Element | undefined;
  _lockedDate?: Element | undefined;
  _property?: Element[] | undefined;
  exclude?: ValueSetComposeInclude[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  inactive?: boolean | undefined;
  include: ValueSetComposeInclude[];
  lockedDate?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  property?: string[] | undefined;
}

export interface ValueSetComposeInclude {
  _copyright?: Element | undefined;
  _id?: Element | undefined;
  _system?: Element | undefined;
  _valueSet?: Element[] | undefined;
  _version?: Element | undefined;
  concept?: ValueSetComposeIncludeConcept[] | undefined;
  copyright?: string | undefined;
  extension?: Extension[] | undefined;
  filter?: ValueSetComposeIncludeFilter[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  system?: string | undefined;
  valueSet?: string[] | undefined;
  version?: string | undefined;
}

export interface ValueSetComposeIncludeConcept {
  _code?: Element | undefined;
  _display?: Element | undefined;
  _id?: Element | undefined;
  code: string;
  designation?: ValueSetComposeIncludeConceptDesignation[] | undefined;
  display?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface ValueSetComposeIncludeConceptDesignation {
  _id?: Element | undefined;
  _language?: Element | undefined;
  _value?: Element | undefined;
  additionalUse?: Coding[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  language?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  use?: Coding | undefined;
  value: string;
}

export interface ValueSetComposeIncludeFilter {
  _id?: Element | undefined;
  _op?: Element | undefined;
  _property?: Element | undefined;
  _value?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  op:
    | "in"
    | "exists"
    | "="
    | "not-in"
    | "is-a"
    | "descendent-of"
    | "is-not-a"
    | "regex"
    | "generalizes"
    | "child-of"
    | "descendent-leaf";
  property: string;
  value: string;
}

export interface ValueSetExpansionContainsProperty {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  subProperty?: ValueSetExpansionContainsPropertySubProperty[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueCoding?: Coding | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
}

export interface ValueSetExpansionContainsPropertySubProperty {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueCoding?: Coding | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
}

export interface ValueSetExpansionParameter {
  _id?: Element | undefined;
  _name?: Element | undefined;
  _valueBoolean?: Element | undefined;
  _valueCode?: Element | undefined;
  _valueDateTime?: Element | undefined;
  _valueString?: Element | undefined;
  _valueUri?: Element | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  name: string;
  valueBoolean?: boolean | undefined;
  valueCode?: string | undefined;
  valueDateTime?: string | undefined;
  valueDecimal?: number | undefined;
  valueInteger?: number | undefined;
  valueString?: string | undefined;
  valueUri?: string | undefined;
}

export interface ValueSetExpansionProperty {
  _code?: Element | undefined;
  _id?: Element | undefined;
  _uri?: Element | undefined;
  code: string;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  uri?: string | undefined;
}

export interface ValueSetScope {
  _exclusionCriteria?: Element | undefined;
  _id?: Element | undefined;
  _inclusionCriteria?: Element | undefined;
  exclusionCriteria?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  inclusionCriteria?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}

export interface VerificationResult {
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _lastPerformed?: Element | undefined;
  _nextScheduled?: Element | undefined;
  _status?: Element | undefined;
  _statusDate?: Element | undefined;
  _targetLocation?: Element[] | undefined;
  attestation?: VerificationResultAttestation | undefined;
  contained?: FhirResource[] | undefined;
  extension?: Extension[] | undefined;
  failureAction?: CodeableConcept | undefined;
  frequency?: Timing | undefined;
  id?: string | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lastPerformed?: string | undefined;
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  need?: CodeableConcept | undefined;
  nextScheduled?: string | undefined;
  primarySource?: VerificationResultPrimarySource[] | undefined;
  resourceType: "VerificationResult";
  status:
    | "entered-in-error"
    | "attested"
    | "validated"
    | "in-process"
    | "req-revalid"
    | "val-fail"
    | "reval-fail";
  statusDate?: string | undefined;
  target?: Reference[] | undefined;
  targetLocation?: string[] | undefined;
  text?: Narrative | undefined;
  validationProcess?: CodeableConcept[] | undefined;
  validationType?: CodeableConcept | undefined;
  validator?: VerificationResultValidator[] | undefined;
}

export interface VerificationResultAttestation {
  _date?: Element | undefined;
  _id?: Element | undefined;
  _proxyIdentityCertificate?: Element | undefined;
  _sourceIdentityCertificate?: Element | undefined;
  communicationMethod?: CodeableConcept | undefined;
  date?: string | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  onBehalfOf?: Reference | undefined;
  proxyIdentityCertificate?: string | undefined;
  proxySignature?: Signature | undefined;
  sourceIdentityCertificate?: string | undefined;
  sourceSignature?: Signature | undefined;
  who?: Reference | undefined;
}

export interface VerificationResultPrimarySource {
  _id?: Element | undefined;
  _validationDate?: Element | undefined;
  canPushUpdates?: CodeableConcept | undefined;
  communicationMethod?: CodeableConcept[] | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  pushTypeAvailable?: CodeableConcept[] | undefined;
  type?: CodeableConcept[] | undefined;
  validationDate?: string | undefined;
  validationStatus?: CodeableConcept | undefined;
  who?: Reference | undefined;
}

export interface VerificationResultValidator {
  _id?: Element | undefined;
  _identityCertificate?: Element | undefined;
  attestationSignature?: Signature | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identityCertificate?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  organization: Reference;
}

export interface VirtualServiceDetail {
  _additionalInfo?: Element[] | undefined;
  _addressString?: Element | undefined;
  _addressUrl?: Element | undefined;
  _id?: Element | undefined;
  _sessionKey?: Element | undefined;
  additionalInfo?: string[] | undefined;
  addressContactPoint?: ContactPoint | undefined;
  addressExtendedContactDetail?: ExtendedContactDetail | undefined;
  addressString?: string | undefined;
  addressUrl?: string | undefined;
  channelType?: Coding | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  maxParticipants?: number | undefined;
  sessionKey?: string | undefined;
}

export interface VisionPrescription {
  _created?: Element | undefined;
  _dateWritten?: Element | undefined;
  _id?: Element | undefined;
  _implicitRules?: Element | undefined;
  _language?: Element | undefined;
  _status?: Element | undefined;
  contained?: FhirResource[] | undefined;
  created: string;
  dateWritten: string;
  encounter?: Reference | undefined;
  extension?: Extension[] | undefined;
  id?: string | undefined;
  identifier?: Identifier[] | undefined;
  implicitRules?: string | undefined;
  language?: string | undefined;
  lensSpecification: VisionPrescriptionLensSpecification[];
  meta?: Meta | undefined;
  modifierExtension?: Extension[] | undefined;
  patient: Reference;
  prescriber: Reference;
  resourceType: "VisionPrescription";
  status: "draft" | "active" | "entered-in-error" | "cancelled";
  text?: Narrative | undefined;
}

export interface VisionPrescriptionLensSpecification {
  _brand?: Element | undefined;
  _color?: Element | undefined;
  _eye?: Element | undefined;
  _id?: Element | undefined;
  add?: number | undefined;
  axis?: number | undefined;
  backCurve?: number | undefined;
  brand?: string | undefined;
  color?: string | undefined;
  cylinder?: number | undefined;
  diameter?: number | undefined;
  duration?: Quantity | undefined;
  extension?: Extension[] | undefined;
  eye: "right" | "left";
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
  note?: Annotation[] | undefined;
  power?: number | undefined;
  prism?: VisionPrescriptionLensSpecificationPrism[] | undefined;
  product: CodeableConcept;
  sphere?: number | undefined;
}

export interface VisionPrescriptionLensSpecificationPrism {
  _base?: Element | undefined;
  _id?: Element | undefined;
  amount: number;
  base: "in" | "out" | "up" | "down";
  extension?: Extension[] | undefined;
  id?: string | undefined;
  modifierExtension?: Extension[] | undefined;
}
