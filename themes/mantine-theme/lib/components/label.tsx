import { ActionIcon, Box, Group, Text } from "@mantine/core";
import { useStrings, type LabelProperties } from "@formbox/theme";
import { styled } from "@linaria/react";
import { useMediaQuery } from "../use-media-query.ts";
import { Media } from "./media.tsx";
import { Link } from "./link.tsx";

export function Label({
  prefix,
  shortText,
  supportHyperlinks,
  media,
  isExpanded,
  onToggleExpanded,
  children,
  id,
  htmlFor,
  required,
  help,
  legal,
  flyover,
  as = "label",
}: LabelProperties) {
  const strings = useStrings();
  const useShortText = useMediaQuery("(max-width: 40rem)");
  const wrapperTag = as === "label" ? "label" : "div";
  const wrapperProperties =
    wrapperTag === "label" && htmlFor ? { htmlFor } : {};
  const emphasize = as !== "text";
  const legend = as === "legend";
  const text = useShortText && shortText != undefined ? shortText : children;

  return (
    <Box component={wrapperTag} {...wrapperProperties} m={0}>
      <Group gap={6} wrap="nowrap" align="center">
        {!!onToggleExpanded && (
          <ToggleButton
            type="button"
            variant="subtle"
            color="gray"
            radius="sm"
            size="sm"
            onClick={onToggleExpanded}
            aria-label={
              isExpanded
                ? strings.collapsible.collapse
                : strings.collapsible.expand
            }
            aria-expanded={isExpanded}
            title={
              isExpanded
                ? strings.collapsible.collapse
                : strings.collapsible.expand
            }
          >
            <ToggleTriangle data-expanded={isExpanded ? "true" : undefined} />
          </ToggleButton>
        )}
        <Text
          id={id}
          component="span"
          fw={emphasize ? 600 : 400}
          size={legend ? "lg" : "sm"}
          style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
        >
          {prefix && (
            <Text component="span" fw={600}>
              {prefix}
            </Text>
          )}
          {text}
          {required && (
            <Text component="span" c="red" aria-hidden>
              *
            </Text>
          )}
        </Text>
        {help}
        {legal}
        {flyover}
      </Group>
      {supportHyperlinks && supportHyperlinks.length > 0 && (
        <Group gap={8} wrap="wrap">
          {supportHyperlinks.map((supportHyperlink, index) => (
            <Link
              key={`${supportHyperlink.href}-${index}`}
              href={supportHyperlink.href}
              target="_blank"
              rel="noreferrer"
            >
              {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
            </Link>
          ))}
        </Group>
      )}
      {media && (
        <Box mt={6}>
          <Media attachment={media} />
        </Box>
      )}
    </Box>
  );
}

const ToggleButton = styled(ActionIcon)`
  flex: 0 0 auto;
`;

const ToggleTriangle = styled.span`
  inline-size: 0;
  block-size: 0;
  border-top: 0.3rem solid transparent;
  border-bottom: 0.3rem solid transparent;
  border-left: 0.4rem solid currentColor;
  transform-origin: 35% 50%;
  transition: transform 200ms ease;
  transform: rotate(0deg);

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }
`;
