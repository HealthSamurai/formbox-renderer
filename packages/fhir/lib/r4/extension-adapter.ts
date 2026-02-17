import type {
  Availability,
  CodeableReference,
  Dosage,
  Element,
  ExtendedContactDetail,
  Extension,
  IExtensionAdapter,
  RatioRange,
} from "../generated-types.ts";
import type { Extension as R4Extension } from "fhir/r4";

export class ExtensionAdapter implements IExtensionAdapter {
  getValueInteger64Element(extension: Extension): Element | undefined {
    void extension;
    return undefined;
  }

  setValueInteger64Element(
    extension: Extension,
    value: Element | undefined,
  ): void {
    void extension;
    void value;
  }

  getValueAvailability(extension: Extension): Availability | undefined {
    void extension;
    return undefined;
  }

  setValueAvailability(
    extension: Extension,
    value: Availability | undefined,
  ): void {
    void extension;
    void value;
  }

  getValueCodeableReference(
    extension: Extension,
  ): CodeableReference | undefined {
    void extension;
    return undefined;
  }

  setValueCodeableReference(
    extension: Extension,
    value: CodeableReference | undefined,
  ): void {
    void extension;
    void value;
  }

  getValueDosage(extension: Extension): Dosage | undefined {
    return (extension as R4Extension).valueDosage as Dosage | undefined;
  }

  setValueDosage(extension: Extension, value: Dosage | undefined): void {
    (extension as R4Extension).valueDosage =
      value as R4Extension["valueDosage"];
  }

  getValueExtendedContactDetail(
    extension: Extension,
  ): ExtendedContactDetail | undefined {
    void extension;
    return undefined;
  }

  setValueExtendedContactDetail(
    extension: Extension,
    value: ExtendedContactDetail | undefined,
  ): void {
    void extension;
    void value;
  }

  getValueInteger64(extension: Extension): string | undefined {
    void extension;
    return undefined;
  }

  setValueInteger64(extension: Extension, value: string | undefined): void {
    void extension;
    void value;
  }

  getValueRatioRange(extension: Extension): RatioRange | undefined {
    void extension;
    return undefined;
  }

  setValueRatioRange(
    extension: Extension,
    value: RatioRange | undefined,
  ): void {
    void extension;
    void value;
  }
}
