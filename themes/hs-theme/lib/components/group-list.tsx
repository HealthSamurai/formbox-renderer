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
    <div className="flex flex-col gap-4" data-linkid={linkId}>
      {header}
      <div className="flex flex-col gap-4 [interpolate-size:allow-keywords] empty:hidden">
        {children}
      </div>
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
