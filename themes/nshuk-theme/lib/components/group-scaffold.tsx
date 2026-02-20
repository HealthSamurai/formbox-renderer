import type { GroupScaffoldProperties } from "@formbox/theme";
import { Collapsible } from "./collapsible.tsx";

export function GroupScaffold({
  header,
  children,
  errors,
  isExpanded,
  onRemove,
  canRemove,
  removeLabel,
}: GroupScaffoldProperties) {
  return (
    <div className="nhsuk-form-group">
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {onRemove && (
        <div className="nhsuk-button-group">
          <button
            type="button"
            onClick={onRemove}
            disabled={canRemove === false}
            className="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
          >
            {removeLabel ?? "Remove"}
          </button>
        </div>
      )}
    </div>
  );
}
