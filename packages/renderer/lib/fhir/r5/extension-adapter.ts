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
import type { Extension as R5Extension } from "fhir/r5";

export class ExtensionAdapter implements IExtensionAdapter {
  getValueInteger64Element(extension: Extension): Element | undefined {
    return (extension as R5Extension)._valueInteger64 as Element | undefined;
  }

  setValueInteger64Element(
    extension: Extension,
    value: Element | undefined,
  ): void {
    (extension as R5Extension)._valueInteger64 =
      value as R5Extension["_valueInteger64"];
  }

  getValueAvailability(extension: Extension): Availability | undefined {
    return (extension as R5Extension).valueAvailability as
      | Availability
      | undefined;
  }

  setValueAvailability(
    extension: Extension,
    value: Availability | undefined,
  ): void {
    (extension as R5Extension).valueAvailability =
      value as R5Extension["valueAvailability"];
  }

  getValueCodeableReference(
    extension: Extension,
  ): CodeableReference | undefined {
    return (extension as R5Extension).valueCodeableReference as
      | CodeableReference
      | undefined;
  }

  setValueCodeableReference(
    extension: Extension,
    value: CodeableReference | undefined,
  ): void {
    (extension as R5Extension).valueCodeableReference =
      value as R5Extension["valueCodeableReference"];
  }

  getValueDosage(extension: Extension): Dosage | undefined {
    return (extension as R5Extension).valueDosage as Dosage | undefined;
  }

  setValueDosage(extension: Extension, value: Dosage | undefined): void {
    (extension as R5Extension).valueDosage =
      value as R5Extension["valueDosage"];
  }

  getValueExtendedContactDetail(
    extension: Extension,
  ): ExtendedContactDetail | undefined {
    return (extension as R5Extension).valueExtendedContactDetail as
      | ExtendedContactDetail
      | undefined;
  }

  setValueExtendedContactDetail(
    extension: Extension,
    value: ExtendedContactDetail | undefined,
  ): void {
    (extension as R5Extension).valueExtendedContactDetail =
      value as R5Extension["valueExtendedContactDetail"];
  }

  getValueInteger64(extension: Extension): string | undefined {
    return (extension as R5Extension).valueInteger64 as string | undefined;
  }

  setValueInteger64(extension: Extension, value: string | undefined): void {
    (extension as R5Extension).valueInteger64 =
      value as R5Extension["valueInteger64"];
  }

  getValueRatioRange(extension: Extension): RatioRange | undefined {
    return (extension as R5Extension).valueRatioRange as RatioRange | undefined;
  }

  setValueRatioRange(
    extension: Extension,
    value: RatioRange | undefined,
  ): void {
    (extension as R5Extension).valueRatioRange =
      value as R5Extension["valueRatioRange"];
  }
}
