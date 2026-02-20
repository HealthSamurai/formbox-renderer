import { ActionIcon, Box, Popover, Text, VisuallyHidden } from "@mantine/core";
import { useState } from "react";
import { useStrings, type LegalProperties } from "@formbox/theme";

export function Legal({ id, children }: LegalProperties) {
  const [opened, setOpened] = useState(false);
  const strings = useStrings();

  return (
    <Popover opened={opened} onChange={setOpened} width={320} withArrow>
      <Popover.Target>
        <span>
          <ActionIcon
            variant="subtle"
            color="orange"
            size="sm"
            aria-describedby={id}
            aria-label={strings.aria.legal}
            onClick={() => setOpened((value) => !value)}
          >
            §
          </ActionIcon>
          <VisuallyHidden id={id}>{children}</VisuallyHidden>
        </span>
      </Popover.Target>
      <Popover.Dropdown>
        <Box>
          <Text size="sm">{children}</Text>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
}
