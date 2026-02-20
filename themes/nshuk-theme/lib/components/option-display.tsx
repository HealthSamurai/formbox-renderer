import type { OptionDisplayProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Media } from "./media.tsx";
import { Chip } from "./multi-select-input.tsx";
import { Display } from "./select-input.tsx";

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
  gap: var(--nhsuk-spacing-2);
  min-width: 0;
`;

const MediaSlot = styled.span`
  max-inline-size: min(24rem, 100%);

  &:empty,
  ${Display} &,
  ${Chip} & {
    display: none;
  }
`;

const Label = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--nhsuk-spacing-1);
  min-width: 0;
`;

const Prefix = styled.span`
  font-weight: 600;
`;
