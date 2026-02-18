import { styled } from "@linaria/react";
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
    return <MediaText>{label}</MediaText>;
  }

  if (contentType?.startsWith("image/")) {
    return <MediaImage src={source} alt={label} />;
  }

  if (contentType?.startsWith("audio/")) {
    return <MediaAudio controls src={source} />;
  }

  if (contentType?.startsWith("video/")) {
    return <MediaVideo controls src={source} />;
  }

  return (
    <MediaLink href={source} target="_blank" rel="noreferrer">
      {label}
    </MediaLink>
  );
}

const MediaText = styled.span`
  color: #4a5568;
`;

const MediaImage = styled.img`
  display: block;
  max-width: min(24rem, 100%);
  height: auto;
  border-radius: 0.375rem;
`;

const MediaAudio = styled.audio`
  display: block;
  max-width: min(24rem, 100%);
`;

const MediaVideo = styled.video`
  display: block;
  max-width: min(24rem, 100%);
  height: auto;
`;

const MediaLink = styled.a`
  color: #1a56db;
  text-decoration: underline;
`;
