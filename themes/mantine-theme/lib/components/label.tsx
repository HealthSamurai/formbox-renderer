import { Box, Group, Text } from "@mantine/core";
import type { LabelProperties } from "@formbox/theme";
import { useMediaQuery } from "../use-media-query.ts";
import { Media } from "./item-media.tsx";

export function Label({
  prefix,
  shortText,
  itemMedia,
  children,
  id,
  htmlFor,
  required,
  help,
  legal,
  flyover,
  as = "label",
}: LabelProperties) {
  const useShortText = useMediaQuery("(max-width: 40rem)");
  const wrapperTag = as === "label" ? "label" : "div";
  const wrapperProperties =
    wrapperTag === "label" && htmlFor ? { htmlFor } : {};
  const emphasize = as !== "text";
  const legend = as === "legend";

  return (
    <Box component={wrapperTag} {...wrapperProperties} style={{ margin: 0 }}>
      <Group gap={6} wrap="nowrap" align="center">
        <Text
          id={id}
          component="span"
          fw={emphasize ? 600 : 400}
          size={legend ? "lg" : "sm"}
          style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
        >
          {prefix ? (
            <Text component="span" fw={600}>
              {prefix}
            </Text>
          ) : undefined}
          {useShortText ? shortText : children}
          {required ? (
            <Text component="span" c="red" aria-hidden>
              *
            </Text>
          ) : undefined}
        </Text>
        {help}
        {legal}
        {flyover}
      </Group>
      {itemMedia && (
        <Box mt={6}>
          <Media attachment={itemMedia} />
        </Box>
      )}
    </Box>
  );
}
