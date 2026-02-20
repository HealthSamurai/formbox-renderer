import type { Attachment } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Typography } from "antd";

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
      <Typography.Text {...classNameProperties} type="secondary">
        {label}
      </Typography.Text>
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
    <Typography.Link
      {...classNameProperties}
      href={source}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </Typography.Link>
  );
}

export const Media = styled(MediaBase)`
  display: block;
  max-inline-size: min(24rem, 100%);
  border-radius: 0.375rem;
`;
