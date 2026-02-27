import { useStrings, type GroupScaffoldProperties } from "@formbox/theme";
import { Collapsible } from "./collapsible.tsx";

export function GroupScaffold({
  header,
  children,
  signature,
  errors,
  isExpanded,
  onRemove,
  canRemove,
}: GroupScaffoldProperties) {
  const strings = useStrings();
  return (
    <div className="nhsuk-form-group">
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {onRemove ? (
        <div className="nhsuk-button-group">
          {signature}
          <button
            type="button"
            onClick={onRemove}
            disabled={canRemove === false}
            className="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
          >
            {strings.group.removeSection}
          </button>
        </div>
      ) : (
        signature
      )}
    </div>
  );
}
