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
  const className = errors
    ? "nhsuk-form-group nhsuk-form-group--error"
    : "nhsuk-form-group";

  return (
    <div className={className} data-linkid={linkId}>
      {header}
      {errors}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {signature}
    </div>
  );
}
