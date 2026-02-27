import { Stack } from "@mantine/core";
import type { QuestionScaffoldProperties } from "@formbox/theme";
import { Collapsible } from "./collapsible.tsx";

export function QuestionScaffold({
  linkId,
  header,
  children,
  signature,
  errors,
  isExpanded,
}: QuestionScaffoldProperties) {
  return (
    <Stack data-linkid={linkId} gap="xs">
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {signature && <div>{signature}</div>}
    </Stack>
  );
}
