import { Anchor, Text } from "@mantine/core";
import type { Attachment } from "@formbox/theme";

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
  const label = attachment.title ?? attachment.url ?? "Attachment";
  const source = getAttachmentSource(attachment);
  const contentType = attachment.contentType?.toLowerCase();

  if (source == undefined) {
    return (
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    );
  }

  if (contentType?.startsWith("image/")) {
    return (
      <img
        src={source}
        alt={label}
        style={{
          maxWidth: "min(24rem, 100%)",
          height: "auto",
          borderRadius: 6,
        }}
      />
    );
  }

  if (contentType?.startsWith("audio/")) {
    return (
      <audio controls src={source} style={{ maxWidth: "min(24rem, 100%)" }} />
    );
  }

  if (contentType?.startsWith("video/")) {
    return (
      <video
        controls
        src={source}
        style={{ maxWidth: "min(24rem, 100%)", height: "auto" }}
      />
    );
  }

  return (
    <Anchor href={source} target="_blank" rel="noreferrer">
      {label}
    </Anchor>
  );
}
