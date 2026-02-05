import type {
  CodeableConcept,
  Element,
  IRelatedArtifactAdapter,
  Reference,
  RelatedArtifact,
} from "../generated-types.ts";

export class RelatedArtifactAdapter implements IRelatedArtifactAdapter {
  getPublicationDateElement(artifact: RelatedArtifact): Element | undefined {
    void artifact;
    return undefined;
  }

  setPublicationDateElement(
    artifact: RelatedArtifact,
    value: Element | undefined,
  ): void {
    void artifact;
    void value;
  }

  getPublicationStatusElement(artifact: RelatedArtifact): Element | undefined {
    void artifact;
    return undefined;
  }

  setPublicationStatusElement(
    artifact: RelatedArtifact,
    value: Element | undefined,
  ): void {
    void artifact;
    void value;
  }

  getClassifier(artifact: RelatedArtifact): CodeableConcept[] | undefined {
    void artifact;
    return undefined;
  }

  setClassifier(
    artifact: RelatedArtifact,
    value: CodeableConcept[] | undefined,
  ): void {
    void artifact;
    void value;
  }

  getPublicationDate(artifact: RelatedArtifact): string | undefined {
    void artifact;
    return undefined;
  }

  setPublicationDate(
    artifact: RelatedArtifact,
    value: string | undefined,
  ): void {
    void artifact;
    void value;
  }

  getPublicationStatus(
    artifact: RelatedArtifact,
  ): "draft" | "active" | "retired" | "unknown" | undefined {
    void artifact;
    return undefined;
  }

  setPublicationStatus(
    artifact: RelatedArtifact,
    value: "draft" | "active" | "retired" | "unknown" | undefined,
  ): void {
    void artifact;
    void value;
  }

  getResourceReference(artifact: RelatedArtifact): Reference | undefined {
    void artifact;
    return undefined;
  }

  setResourceReference(
    artifact: RelatedArtifact,
    value: Reference | undefined,
  ): void {
    void artifact;
    void value;
  }
}
