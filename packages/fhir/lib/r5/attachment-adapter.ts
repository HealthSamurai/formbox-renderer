import type {
  Attachment,
  Element,
  IAttachmentAdapter,
} from "../generated-types.ts";
import type { Attachment as R5Attachment } from "fhir/r5";

export class AttachmentAdapter implements IAttachmentAdapter {
  getSizeElement(attachment: Attachment): Element | undefined {
    return (attachment as R5Attachment)._size as Element | undefined;
  }

  setSizeElement(attachment: Attachment, value: Element | undefined): void {
    (attachment as R5Attachment)._size = value as R5Attachment["_size"];
  }

  getDuration(attachment: Attachment): number | undefined {
    return (attachment as R5Attachment).duration as number | undefined;
  }

  setDuration(attachment: Attachment, value: number | undefined): void {
    (attachment as R5Attachment).duration = value as R5Attachment["duration"];
  }

  getFrames(attachment: Attachment): number | undefined {
    return (attachment as R5Attachment).frames as number | undefined;
  }

  setFrames(attachment: Attachment, value: number | undefined): void {
    (attachment as R5Attachment).frames = value as R5Attachment["frames"];
  }

  getHeight(attachment: Attachment): number | undefined {
    return (attachment as R5Attachment).height as number | undefined;
  }

  setHeight(attachment: Attachment, value: number | undefined): void {
    (attachment as R5Attachment).height = value as R5Attachment["height"];
  }

  getPages(attachment: Attachment): number | undefined {
    return (attachment as R5Attachment).pages as number | undefined;
  }

  setPages(attachment: Attachment, value: number | undefined): void {
    (attachment as R5Attachment).pages = value as R5Attachment["pages"];
  }

  getSize(attachment: Attachment): string | undefined {
    return (attachment as R5Attachment).size as string | undefined;
  }

  setSize(attachment: Attachment, value: string | undefined): void {
    (attachment as R5Attachment).size = value as R5Attachment["size"];
  }

  getWidth(attachment: Attachment): number | undefined {
    return (attachment as R5Attachment).width as number | undefined;
  }

  setWidth(attachment: Attachment, value: number | undefined): void {
    (attachment as R5Attachment).width = value as R5Attachment["width"];
  }
}
