import { ActionIcon, Tooltip, VisuallyHidden } from "@mantine/core";
import { useStrings, type HelpProperties } from "@formbox/theme";

export function Help({ id, children }: HelpProperties) {
  const strings = useStrings();

  return (
    <Tooltip label={children} withArrow>
      <span>
        <ActionIcon
          variant="subtle"
          size="sm"
          aria-describedby={id}
          aria-label={strings.aria.help}
        >
          ?
        </ActionIcon>
        <VisuallyHidden id={id}>{children}</VisuallyHidden>
      </span>
    </Tooltip>
  );
}
