import { Button, Group, Stack } from "@mantine/core";
import { useStrings, type CustomOptionFormProperties } from "@formbox/theme";

export function CustomOptionForm({
  content,
  errors,
  onCancel,
  onSubmit,
  canSubmit,
}: CustomOptionFormProperties) {
  const strings = useStrings();

  return (
    <Stack gap="xs">
      <div>{content}</div>
      {errors}
      <Group gap="xs">
        <Button type="button" variant="default" onClick={onCancel}>
          {strings.dialog.cancel}
        </Button>
        <Button
          type="button"
          color="green"
          onClick={onSubmit}
          disabled={canSubmit === false}
        >
          {strings.dialog.add}
        </Button>
      </Group>
    </Stack>
  );
}
