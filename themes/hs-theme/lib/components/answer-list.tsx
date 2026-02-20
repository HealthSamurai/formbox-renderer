import { styled } from "@linaria/react";
import { Children } from "react";
import { useStrings, type AnswerListProperties } from "@formbox/theme";
import { Plus } from "../icons/plus.tsx";
import { IconButton } from "./icon-button.tsx";

export function AnswerList({ children, onAdd, canAdd }: AnswerListProperties) {
  const strings = useStrings();
  const items = Children.toArray(children);

  return (
    <Container>
      {items.length > 0 && <List>{items}</List>}
      {onAdd && (
        <Toolbar>
          <IconButton
            icon={<Plus size={15} />}
            onClick={onAdd}
            disabled={canAdd === false}
            label={strings.selection.addAnother}
          />
        </Toolbar>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
