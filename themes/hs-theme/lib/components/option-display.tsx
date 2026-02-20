import type { OptionDisplayProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Chip } from "./multi-select-input.tsx";
import { DisplayField } from "./select-input.tsx";
import { Media } from "./media.tsx";

export function OptionDisplay({
  children,
  prefix,
  media,
}: OptionDisplayProperties) {
  return (
    <Wrapper>
      <MediaSlot>{media && <Media attachment={media} />}</MediaSlot>
      <Label>
        {prefix && <Prefix>{prefix}</Prefix>}
        {children}
      </Label>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
`;

const MediaSlot = styled.span`
  max-inline-size: min(24rem, 100%);

  &:empty,
  ${DisplayField} &,
  ${Chip} & {
    display: none;
  }
`;

const Label = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.25rem;
  min-width: 0;
`;

const Prefix = styled.span`
  font-weight: 600;
`;
