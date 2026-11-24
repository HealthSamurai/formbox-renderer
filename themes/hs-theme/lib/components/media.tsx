import { useStrings, type Attachment } from "@formbox/theme";

function getAttachmentSource(attachment: Attachment): string | undefined {
  if (attachment.url) {
    return attachment.url;
  }

  if (attachment.data == undefined) {
    return undefined;
  }

  const contentType = attachment.contentType ?? "application/octet-stream";
  return `data:${contentType};base64,${attachment.data}`;
}

export function Media({ attachment }: { attachment: Attachment }) {
  const strings = useStrings();
  const label =
    attachment.title ?? attachment.url ?? strings.inputs.attachmentLabel;
  const source = getAttachmentSource(attachment);
  const contentType = attachment.contentType?.toLowerCase();

  if (source == undefined) {
    return <span className="text-text-secondary">{label}</span>;
  }

  if (contentType?.startsWith("image/")) {
    return (
      <img
        className="block h-auto max-w-[min(24rem,100%)] rounded-md"
        src={source}
        alt={label}
      />
    );
  }

  if (contentType?.startsWith("audio/")) {
    return (
      <audio className="block max-w-[min(24rem,100%)]" controls src={source} />
    );
  }

  if (contentType?.startsWith("video/")) {
    return (
      <video
        className="block h-auto max-w-[min(24rem,100%)]"
        controls
        src={source}
      />
    );
  }

  return (
    <a
      className="text-text-link underline"
      href={source}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
