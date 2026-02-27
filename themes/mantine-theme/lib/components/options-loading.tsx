import { Text } from "@mantine/core";
import { useStrings, type OptionsLoadingProperties } from "@formbox/theme";

export function OptionsLoading({ isLoading }: OptionsLoadingProperties) {
  const strings = useStrings();

  if (!isLoading) return;

  return (
    <Text size="sm" c="dimmed" role="status">
      {strings.selection.loadingOptions}
    </Text>
  );
}
