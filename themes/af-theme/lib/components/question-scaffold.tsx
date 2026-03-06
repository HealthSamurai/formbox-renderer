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
    <div data-linkid={linkId} className="flex flex-col gap-2">
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {signature}
    </div>
  );
}
