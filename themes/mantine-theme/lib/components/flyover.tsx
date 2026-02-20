import { ActionIcon, Tooltip, VisuallyHidden } from "@mantine/core";
import { useStrings, type FlyoverProperties } from "@formbox/theme";

export function Flyover({ id, children }: FlyoverProperties) {
  const strings = useStrings();

  return (
    <Tooltip label={children} withArrow>
      <span>
        <ActionIcon
          variant="subtle"
          size="sm"
          aria-describedby={id}
          aria-label={strings.aria.flyover}
        >
          i
        </ActionIcon>
        <VisuallyHidden id={id}>{children}</VisuallyHidden>
      </span>
    </Tooltip>
  );
}
