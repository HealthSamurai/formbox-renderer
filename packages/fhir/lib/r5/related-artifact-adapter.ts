import type {
  CodeableConcept,
  Element,
  IRelatedArtifactAdapter,
  Reference,
  RelatedArtifact,
} from "../generated-types.ts";
import type { RelatedArtifact as R5RelatedArtifact } from "fhir/r5";

export class RelatedArtifactAdapter implements IRelatedArtifactAdapter {
  getPublicationDateElement(artifact: RelatedArtifact): Element | undefined {
    return (artifact as R5RelatedArtifact)._publicationDate as
      | Element
      | undefined;
  }

  setPublicationDateElement(
    artifact: RelatedArtifact,
    value: Element | undefined,
  ): void {
    (artifact as R5RelatedArtifact)._publicationDate =
      value as R5RelatedArtifact["_publicationDate"];
  }

  getPublicationStatusElement(artifact: RelatedArtifact): Element | undefined {
    return (artifact as R5RelatedArtifact)._publicationStatus as
      | Element
      | undefined;
  }

  setPublicationStatusElement(
    artifact: RelatedArtifact,
    value: Element | undefined,
  ): void {
    (artifact as R5RelatedArtifact)._publicationStatus =
      value as R5RelatedArtifact["_publicationStatus"];
  }

  getClassifier(artifact: RelatedArtifact): CodeableConcept[] | undefined {
    return (artifact as R5RelatedArtifact).classifier as
      | CodeableConcept[]
      | undefined;
  }

  setClassifier(
    artifact: RelatedArtifact,
    value: CodeableConcept[] | undefined,
  ): void {
    (artifact as R5RelatedArtifact).classifier =
      value as R5RelatedArtifact["classifier"];
  }

  getPublicationDate(artifact: RelatedArtifact): string | undefined {
    return (artifact as R5RelatedArtifact).publicationDate as
      | string
      | undefined;
  }

  setPublicationDate(
    artifact: RelatedArtifact,
    value: string | undefined,
  ): void {
    (artifact as R5RelatedArtifact).publicationDate =
      value as R5RelatedArtifact["publicationDate"];
  }

  getPublicationStatus(
    artifact: RelatedArtifact,
  ): "draft" | "active" | "retired" | "unknown" | undefined {
    return (artifact as R5RelatedArtifact).publicationStatus as
      | "draft"
      | "active"
      | "retired"
      | "unknown"
      | undefined;
  }

  setPublicationStatus(
    artifact: RelatedArtifact,
    value: "draft" | "active" | "retired" | "unknown" | undefined,
  ): void {
    (artifact as R5RelatedArtifact).publicationStatus =
      value as R5RelatedArtifact["publicationStatus"];
  }

  getResourceReference(artifact: RelatedArtifact): Reference | undefined {
    return (artifact as R5RelatedArtifact).resourceReference as
      | Reference
      | undefined;
  }

  setResourceReference(
    artifact: RelatedArtifact,
    value: Reference | undefined,
  ): void {
    (artifact as R5RelatedArtifact).resourceReference =
      value as R5RelatedArtifact["resourceReference"];
  }
}
