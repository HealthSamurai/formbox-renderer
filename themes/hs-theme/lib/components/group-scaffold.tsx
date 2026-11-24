import { useStrings, type GroupScaffoldProperties } from "@formbox/theme";
import { Children } from "react";
import { Trash } from "../icons/trash.tsx";
import { Collapsible } from "./collapsible.tsx";
import { IconButton } from "./icon-button.tsx";

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
  const content = Children.toArray(children);

  return (
    <div className="flex flex-col gap-4">
      {header}
      {content.length > 0 && (
        <Collapsible isExpanded={isExpanded}>
          {onRemove ? (
            <div className="flex flex-col gap-4">{content}</div>
          ) : (
            <div className="grid gap-4">{content}</div>
          )}
        </Collapsible>
      )}
      {errors}
      {onRemove ? (
        <div className="flex justify-end gap-2">
          {signature}
          <IconButton
            icon={<Trash />}
            onClick={onRemove}
            disabled={canRemove === false}
            label={strings.group.removeSection}
          />
        </div>
      ) : (
        signature
      )}
    </div>
  );
}
