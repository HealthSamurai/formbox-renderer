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
    return <span className="text-gray-600">{label}</span>;
  }

  if (contentType?.startsWith("image/")) {
    return (
      <img
        src={source}
        alt={label}
        className="block h-auto max-w-[min(24rem,100%)] rounded-md"
      />
    );
  }

  if (contentType?.startsWith("audio/")) {
    return (
      <audio controls src={source} className="block max-w-[min(24rem,100%)]" />
    );
  }

  if (contentType?.startsWith("video/")) {
    return (
      <video
        controls
        src={source}
        className="block h-auto max-w-[min(24rem,100%)]"
      />
    );
  }

  return (
    <a
      href={source}
      target="_blank"
      rel="noreferrer"
      className="text-[rgb(var(--input__accent-color,var(--main-color,120,38,245)))] underline hover:brightness-90"
    >
      {label}
    </a>
  );
}
