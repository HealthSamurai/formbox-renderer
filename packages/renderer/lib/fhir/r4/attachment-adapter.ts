import type {
  Attachment,
  Element,
  IAttachmentAdapter,
} from "../generated-types.ts";
import type { Attachment as R4Attachment } from "fhir/r4";

export class AttachmentAdapter implements IAttachmentAdapter {
  getSizeElement(attachment: Attachment): Element | undefined {
    void attachment;
    return undefined;
  }

  setSizeElement(attachment: Attachment, value: Element | undefined): void {
    void attachment;
    void value;
  }

  getDuration(attachment: Attachment): number | undefined {
    void attachment;
    return undefined;
  }

  setDuration(attachment: Attachment, value: number | undefined): void {
    void attachment;
    void value;
  }

  getFrames(attachment: Attachment): number | undefined {
    void attachment;
    return undefined;
  }

  setFrames(attachment: Attachment, value: number | undefined): void {
    void attachment;
    void value;
  }

  getHeight(attachment: Attachment): number | undefined {
    void attachment;
    return undefined;
  }

  setHeight(attachment: Attachment, value: number | undefined): void {
    void attachment;
    void value;
  }

  getPages(attachment: Attachment): number | undefined {
    void attachment;
    return undefined;
  }

  setPages(attachment: Attachment, value: number | undefined): void {
    void attachment;
    void value;
  }

  getSize(attachment: Attachment): string | undefined {
    const size = (attachment as R4Attachment).size;
    return (typeof size === "number" ? String(size) : undefined) as
      | string
      | undefined;
  }

  setSize(attachment: Attachment, value: string | undefined): void {
    if (value === undefined) {
      (attachment as R4Attachment).size = undefined;
      return;
    }
    const parsed = Number(value);
    (attachment as R4Attachment).size = Number.isFinite(parsed)
      ? parsed
      : undefined;
  }

  getWidth(attachment: Attachment): number | undefined {
    void attachment;
    return undefined;
  }

  setWidth(attachment: Attachment, value: number | undefined): void {
    void attachment;
    void value;
  }
}
