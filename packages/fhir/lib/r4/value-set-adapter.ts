import type {
  CodeableConcept,
  Coding,
  ContactDetail,
  Element,
  FhirResource,
  IValueSetAdapter,
  Narrative,
  Period,
  RelatedArtifact,
  ValueSet,
  ValueSetCompose,
  ValueSetScope,
} from "../generated-types.ts";
import type { ValueSet as R4ValueSet } from "fhir/r4";

export class ValueSetAdapter implements IValueSetAdapter {
  getApprovalDateElement(valueSet: ValueSet): Element | undefined {
    void valueSet;
    return undefined;
  }

  setApprovalDateElement(valueSet: ValueSet, value: Element | undefined): void {
    void valueSet;
    void value;
  }

  getCopyrightLabelElement(valueSet: ValueSet): Element | undefined {
    void valueSet;
    return undefined;
  }

  setCopyrightLabelElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    void valueSet;
    void value;
  }

  getLastReviewDateElement(valueSet: ValueSet): Element | undefined {
    void valueSet;
    return undefined;
  }

  setLastReviewDateElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    void valueSet;
    void value;
  }

  getVersionAlgorithmStringElement(valueSet: ValueSet): Element | undefined {
    void valueSet;
    return undefined;
  }

  setVersionAlgorithmStringElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    void valueSet;
    void value;
  }

  getApprovalDate(valueSet: ValueSet): string | undefined {
    void valueSet;
    return undefined;
  }

  setApprovalDate(valueSet: ValueSet, value: string | undefined): void {
    void valueSet;
    void value;
  }

  getAuthor(valueSet: ValueSet): ContactDetail[] | undefined {
    void valueSet;
    return undefined;
  }

  setAuthor(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    void valueSet;
    void value;
  }

  getCompose(valueSet: ValueSet): ValueSetCompose | undefined {
    return (valueSet as R4ValueSet).compose as ValueSetCompose | undefined;
  }

  setCompose(valueSet: ValueSet, value: ValueSetCompose | undefined): void {
    (valueSet as R4ValueSet).compose = value as R4ValueSet["compose"];
  }

  getContained(valueSet: ValueSet): FhirResource[] | undefined {
    return (valueSet as R4ValueSet).contained as FhirResource[] | undefined;
  }

  setContained(valueSet: ValueSet, value: FhirResource[] | undefined): void {
    (valueSet as R4ValueSet).contained = value as R4ValueSet["contained"];
  }

  getCopyrightLabel(valueSet: ValueSet): string | undefined {
    void valueSet;
    return undefined;
  }

  setCopyrightLabel(valueSet: ValueSet, value: string | undefined): void {
    void valueSet;
    void value;
  }

  getEditor(valueSet: ValueSet): ContactDetail[] | undefined {
    void valueSet;
    return undefined;
  }

  setEditor(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    void valueSet;
    void value;
  }

  getEffectivePeriod(valueSet: ValueSet): Period | undefined {
    void valueSet;
    return undefined;
  }

  setEffectivePeriod(valueSet: ValueSet, value: Period | undefined): void {
    void valueSet;
    void value;
  }

  getEndorser(valueSet: ValueSet): ContactDetail[] | undefined {
    void valueSet;
    return undefined;
  }

  setEndorser(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    void valueSet;
    void value;
  }

  getLastReviewDate(valueSet: ValueSet): string | undefined {
    void valueSet;
    return undefined;
  }

  setLastReviewDate(valueSet: ValueSet, value: string | undefined): void {
    void valueSet;
    void value;
  }

  getRelatedArtifact(valueSet: ValueSet): RelatedArtifact[] | undefined {
    void valueSet;
    return undefined;
  }

  setRelatedArtifact(
    valueSet: ValueSet,
    value: RelatedArtifact[] | undefined,
  ): void {
    void valueSet;
    void value;
  }

  getReviewer(valueSet: ValueSet): ContactDetail[] | undefined {
    void valueSet;
    return undefined;
  }

  setReviewer(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    void valueSet;
    void value;
  }

  getScope(valueSet: ValueSet): ValueSetScope | undefined {
    void valueSet;
    return undefined;
  }

  setScope(valueSet: ValueSet, value: ValueSetScope | undefined): void {
    void valueSet;
    void value;
  }

  getText(valueSet: ValueSet): Narrative | undefined {
    return (valueSet as R4ValueSet).text as Narrative | undefined;
  }

  setText(valueSet: ValueSet, value: Narrative | undefined): void {
    (valueSet as R4ValueSet).text = value as R4ValueSet["text"];
  }

  getTopic(valueSet: ValueSet): CodeableConcept[] | undefined {
    void valueSet;
    return undefined;
  }

  setTopic(valueSet: ValueSet, value: CodeableConcept[] | undefined): void {
    void valueSet;
    void value;
  }

  getVersionAlgorithmCoding(valueSet: ValueSet): Coding | undefined {
    void valueSet;
    return undefined;
  }

  setVersionAlgorithmCoding(
    valueSet: ValueSet,
    value: Coding | undefined,
  ): void {
    void valueSet;
    void value;
  }

  getVersionAlgorithmString(valueSet: ValueSet): string | undefined {
    void valueSet;
    return undefined;
  }

  setVersionAlgorithmString(
    valueSet: ValueSet,
    value: string | undefined,
  ): void {
    void valueSet;
    void value;
  }
}
