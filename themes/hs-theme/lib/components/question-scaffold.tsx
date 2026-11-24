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
    <div className="flex flex-col gap-2" data-linkid={linkId}>
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {signature}
    </div>
  );
}
