import { useStrings, type GroupListProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Plus } from "../icons/plus.tsx";
import { IconButton } from "./icon-button.tsx";

export function GroupList({
  linkId,
  header,
  children,
  onAdd,
  canAdd,
}: GroupListProperties) {
  const strings = useStrings();

  return (
    <Container data-linkid={linkId}>
      {header}
      <Items>{children}</Items>
      {onAdd && (
        <Toolbar>
          <IconButton
            icon={<Plus size={16} />}
            onClick={onAdd}
            disabled={canAdd === false}
            label={strings.group.addSection}
          />
        </Toolbar>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Items = styled.div`
  interpolate-size: allow-keywords;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:empty {
    display: none;
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
`;
