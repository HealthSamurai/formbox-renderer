import { useStrings, type GroupScaffoldProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { Children } from "react";
import { Trash } from "../icons/trash.tsx";
import { Collapsible } from "./collapsible.tsx";
import { IconButton } from "./icon-button.tsx";

export function GroupScaffold({
  header,
  children,
  signature,
  errors,
  isExpanded,
  onRemove,
  canRemove,
}: GroupScaffoldProperties) {
  const strings = useStrings();
  const content = Children.toArray(children);

  return (
    <Container>
      {header}
      {content.length > 0 && (
        <Collapsible isExpanded={isExpanded}>
          {onRemove ? (
            <ItemContent>{content}</ItemContent>
          ) : (
            <GroupContent>{content}</GroupContent>
          )}
        </Collapsible>
      )}
      {errors}
      {onRemove ? (
        <Toolbar>
          {signature}
          <IconButton
            icon={<Trash />}
            onClick={onRemove}
            disabled={canRemove === false}
            label={strings.group.removeSection}
          />
        </Toolbar>
      ) : (
        signature
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GroupContent = styled.div`
  display: grid;
  gap: 1rem;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;
