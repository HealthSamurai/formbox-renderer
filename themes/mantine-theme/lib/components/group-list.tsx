import { Box, Button, Stack } from "@mantine/core";
import { useStrings, type GroupListProperties } from "@formbox/theme";

export function GroupList({
  linkId,
  header,
  children,
  onAdd,
  canAdd,
}: GroupListProperties) {
  const strings = useStrings();

  return (
    <Stack data-linkid={linkId} gap="md">
      {header}
      <Stack gap="md">{children}</Stack>
      {onAdd ? (
        <Box>
          <Button
            type="button"
            variant="outline"
            onClick={onAdd}
            disabled={canAdd === false}
          >
            {strings.group.addSection}
          </Button>
        </Box>
      ) : undefined}
    </Stack>
  );
}
