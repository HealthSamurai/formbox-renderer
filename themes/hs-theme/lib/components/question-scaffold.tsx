import type { QuestionScaffoldProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Collapsible } from "./collapsible.tsx";

export function QuestionScaffold({
  linkId,
  header,
  children,
  signature,
  errors,
  isExpanded,
}: QuestionScaffoldProperties) {
  return (
    <Container data-linkid={linkId}>
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {signature}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
