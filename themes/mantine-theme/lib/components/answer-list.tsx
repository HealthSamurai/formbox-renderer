import { Button, Stack } from "@mantine/core";
import { Children } from "react";
import { useStrings, type AnswerListProperties } from "@formbox/theme";

export function AnswerList({ children, onAdd, canAdd }: AnswerListProperties) {
  const strings = useStrings();
  const items = Children.toArray(children);

  return (
    <Stack gap="sm">
      {items.length > 0 ? <Stack gap="sm">{items}</Stack> : undefined}
      {onAdd ? (
        <Button type="button" onClick={onAdd} disabled={canAdd === false}>
          {strings.selection.addAnother}
        </Button>
      ) : undefined}
    </Stack>
  );
}
