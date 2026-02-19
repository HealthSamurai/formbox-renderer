import type { OptionDisplayProperties } from "@formbox/theme";
import { styled } from "@linaria/react";

export function OptionDisplay({ children, prefix }: OptionDisplayProperties) {
  if (!prefix) {
    return children;
  }

  return (
    <Wrapper>
      <Prefix>{prefix}</Prefix>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.25rem;
`;

const Prefix = styled.span`
  font-weight: 600;
`;
