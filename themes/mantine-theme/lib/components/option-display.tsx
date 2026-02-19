import type { OptionDisplayProperties } from "@formbox/theme";
import { Text } from "@mantine/core";

export function OptionDisplay({ children, prefix }: OptionDisplayProperties) {
  if (!prefix) {
    return children;
  }

  return (
    <Text component="span" style={{ display: "inline-flex", gap: 4 }}>
      <Text component="span" fw={600}>
        {prefix}
      </Text>
      {children}
    </Text>
  );
}
