import { useStrings, type GroupListProperties } from "@formbox/theme";
import { Plus } from "../icons/plus.tsx";
import { IconButton } from "./icon-button.tsx";

export function GroupList({
  linkId,
  header,
  children,
  onAdd,
  canAdd,
}: GroupListProperties) {
  const strings = useStrings();

  return (
    <div data-linkid={linkId} className="flex flex-col gap-4">
      {header}
      <div className="empty:hidden flex flex-col gap-4">{children}</div>
      {onAdd && (
        <div className="flex justify-start gap-3">
          <IconButton
            icon={<Plus size={16} />}
            onClick={onAdd}
            disabled={canAdd === false}
            label={strings.group.addSection}
          />
        </div>
      )}
    </div>
  );
}
