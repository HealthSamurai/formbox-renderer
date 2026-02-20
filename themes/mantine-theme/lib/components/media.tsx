import { Anchor, Text } from "@mantine/core";
import type { Attachment } from "@formbox/theme";
import { styled } from "@linaria/react";

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

function MediaBase({
  attachment,
  className,
}: {
  attachment: Attachment;
  className?: string;
}) {
  const label = attachment.title ?? attachment.url ?? "Attachment";
  const source = getAttachmentSource(attachment);
  const contentType = attachment.contentType?.toLowerCase();
  const classNameProperties = className === undefined ? {} : { className };

  if (source == undefined) {
    return (
      <Text {...classNameProperties} size="sm" c="dimmed">
        {label}
      </Text>
    );
  }

  if (contentType?.startsWith("image/")) {
    return <img {...classNameProperties} src={source} alt={label} />;
  }

  if (contentType?.startsWith("audio/")) {
    return <audio {...classNameProperties} controls src={source} />;
  }

  if (contentType?.startsWith("video/")) {
    return <video {...classNameProperties} controls src={source} />;
  }

  return (
    <Anchor
      {...classNameProperties}
      href={source}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </Anchor>
  );
}

export const Media = styled(MediaBase)`
  display: block;
  max-inline-size: min(24rem, 100%);
  border-radius: 0.375rem;
`;
