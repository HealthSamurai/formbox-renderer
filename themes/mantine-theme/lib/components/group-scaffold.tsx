import { Button, Group, Stack } from "@mantine/core";
import { Children } from "react";
import { useStrings, type GroupScaffoldProperties } from "@formbox/theme";
import { Collapsible } from "./collapsible.tsx";

export function GroupScaffold({
  header,
  children,
  errors,
  isExpanded,
  onRemove,
  canRemove,
}: GroupScaffoldProperties) {
  const strings = useStrings();
  const content = Children.toArray(children);

  return (
    <Stack gap="md">
      {header}
      {content.length > 0 && (
        <Collapsible isExpanded={isExpanded}>
          <Stack gap="md">{content}</Stack>
        </Collapsible>
      )}
      {errors}
      {onRemove && (
        <Group justify="flex-end">
          <Button
            type="button"
            variant="subtle"
            color="red"
            onClick={onRemove}
            disabled={canRemove === false}
          >
            {strings.group.removeSection}
          </Button>
        </Group>
      )}
    </Stack>
  );
}
