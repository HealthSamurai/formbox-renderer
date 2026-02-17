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
import type { ValueSet as R5ValueSet } from "fhir/r5";

export class ValueSetAdapter implements IValueSetAdapter {
  getApprovalDateElement(valueSet: ValueSet): Element | undefined {
    return (valueSet as R5ValueSet)._approvalDate as Element | undefined;
  }

  setApprovalDateElement(valueSet: ValueSet, value: Element | undefined): void {
    (valueSet as R5ValueSet)._approvalDate =
      value as R5ValueSet["_approvalDate"];
  }

  getCopyrightLabelElement(valueSet: ValueSet): Element | undefined {
    return (valueSet as R5ValueSet)._copyrightLabel as Element | undefined;
  }

  setCopyrightLabelElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    (valueSet as R5ValueSet)._copyrightLabel =
      value as R5ValueSet["_copyrightLabel"];
  }

  getLastReviewDateElement(valueSet: ValueSet): Element | undefined {
    return (valueSet as R5ValueSet)._lastReviewDate as Element | undefined;
  }

  setLastReviewDateElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    (valueSet as R5ValueSet)._lastReviewDate =
      value as R5ValueSet["_lastReviewDate"];
  }

  getVersionAlgorithmStringElement(valueSet: ValueSet): Element | undefined {
    return (valueSet as R5ValueSet)._versionAlgorithmString as
      | Element
      | undefined;
  }

  setVersionAlgorithmStringElement(
    valueSet: ValueSet,
    value: Element | undefined,
  ): void {
    (valueSet as R5ValueSet)._versionAlgorithmString =
      value as R5ValueSet["_versionAlgorithmString"];
  }

  getApprovalDate(valueSet: ValueSet): string | undefined {
    return (valueSet as R5ValueSet).approvalDate as string | undefined;
  }

  setApprovalDate(valueSet: ValueSet, value: string | undefined): void {
    (valueSet as R5ValueSet).approvalDate = value as R5ValueSet["approvalDate"];
  }

  getAuthor(valueSet: ValueSet): ContactDetail[] | undefined {
    return (valueSet as R5ValueSet).author as ContactDetail[] | undefined;
  }

  setAuthor(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    (valueSet as R5ValueSet).author = value as R5ValueSet["author"];
  }

  getCompose(valueSet: ValueSet): ValueSetCompose | undefined {
    return (valueSet as R5ValueSet).compose as ValueSetCompose | undefined;
  }

  setCompose(valueSet: ValueSet, value: ValueSetCompose | undefined): void {
    (valueSet as R5ValueSet).compose = value as R5ValueSet["compose"];
  }

  getContained(valueSet: ValueSet): FhirResource[] | undefined {
    return (valueSet as R5ValueSet).contained as FhirResource[] | undefined;
  }

  setContained(valueSet: ValueSet, value: FhirResource[] | undefined): void {
    (valueSet as R5ValueSet).contained = value as R5ValueSet["contained"];
  }

  getCopyrightLabel(valueSet: ValueSet): string | undefined {
    return (valueSet as R5ValueSet).copyrightLabel as string | undefined;
  }

  setCopyrightLabel(valueSet: ValueSet, value: string | undefined): void {
    (valueSet as R5ValueSet).copyrightLabel =
      value as R5ValueSet["copyrightLabel"];
  }

  getEditor(valueSet: ValueSet): ContactDetail[] | undefined {
    return (valueSet as R5ValueSet).editor as ContactDetail[] | undefined;
  }

  setEditor(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    (valueSet as R5ValueSet).editor = value as R5ValueSet["editor"];
  }

  getEffectivePeriod(valueSet: ValueSet): Period | undefined {
    return (valueSet as R5ValueSet).effectivePeriod as Period | undefined;
  }

  setEffectivePeriod(valueSet: ValueSet, value: Period | undefined): void {
    (valueSet as R5ValueSet).effectivePeriod =
      value as R5ValueSet["effectivePeriod"];
  }

  getEndorser(valueSet: ValueSet): ContactDetail[] | undefined {
    return (valueSet as R5ValueSet).endorser as ContactDetail[] | undefined;
  }

  setEndorser(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    (valueSet as R5ValueSet).endorser = value as R5ValueSet["endorser"];
  }

  getLastReviewDate(valueSet: ValueSet): string | undefined {
    return (valueSet as R5ValueSet).lastReviewDate as string | undefined;
  }

  setLastReviewDate(valueSet: ValueSet, value: string | undefined): void {
    (valueSet as R5ValueSet).lastReviewDate =
      value as R5ValueSet["lastReviewDate"];
  }

  getRelatedArtifact(valueSet: ValueSet): RelatedArtifact[] | undefined {
    return (valueSet as R5ValueSet).relatedArtifact as
      | RelatedArtifact[]
      | undefined;
  }

  setRelatedArtifact(
    valueSet: ValueSet,
    value: RelatedArtifact[] | undefined,
  ): void {
    (valueSet as R5ValueSet).relatedArtifact =
      value as R5ValueSet["relatedArtifact"];
  }

  getReviewer(valueSet: ValueSet): ContactDetail[] | undefined {
    return (valueSet as R5ValueSet).reviewer as ContactDetail[] | undefined;
  }

  setReviewer(valueSet: ValueSet, value: ContactDetail[] | undefined): void {
    (valueSet as R5ValueSet).reviewer = value as R5ValueSet["reviewer"];
  }

  getScope(valueSet: ValueSet): ValueSetScope | undefined {
    return (valueSet as R5ValueSet).scope as ValueSetScope | undefined;
  }

  setScope(valueSet: ValueSet, value: ValueSetScope | undefined): void {
    (valueSet as R5ValueSet).scope = value as R5ValueSet["scope"];
  }

  getText(valueSet: ValueSet): Narrative | undefined {
    return (valueSet as R5ValueSet).text as Narrative | undefined;
  }

  setText(valueSet: ValueSet, value: Narrative | undefined): void {
    (valueSet as R5ValueSet).text = value as R5ValueSet["text"];
  }

  getTopic(valueSet: ValueSet): CodeableConcept[] | undefined {
    return (valueSet as R5ValueSet).topic as CodeableConcept[] | undefined;
  }

  setTopic(valueSet: ValueSet, value: CodeableConcept[] | undefined): void {
    (valueSet as R5ValueSet).topic = value as R5ValueSet["topic"];
  }

  getVersionAlgorithmCoding(valueSet: ValueSet): Coding | undefined {
    return (valueSet as R5ValueSet).versionAlgorithmCoding as
      | Coding
      | undefined;
  }

  setVersionAlgorithmCoding(
    valueSet: ValueSet,
    value: Coding | undefined,
  ): void {
    (valueSet as R5ValueSet).versionAlgorithmCoding =
      value as R5ValueSet["versionAlgorithmCoding"];
  }

  getVersionAlgorithmString(valueSet: ValueSet): string | undefined {
    return (valueSet as R5ValueSet).versionAlgorithmString as
      | string
      | undefined;
  }

  setVersionAlgorithmString(
    valueSet: ValueSet,
    value: string | undefined,
  ): void {
    (valueSet as R5ValueSet).versionAlgorithmString =
      value as R5ValueSet["versionAlgorithmString"];
  }
}
