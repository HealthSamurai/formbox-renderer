import { Children } from "react";
import { useStrings, type AnswerListProperties } from "@formbox/theme";
import { Plus } from "../icons/plus.tsx";
import { IconButton } from "./icon-button.tsx";

export function AnswerList({ children, onAdd, canAdd }: AnswerListProperties) {
  const strings = useStrings();
  const items = Children.toArray(children);

  return (
    <div className="flex flex-col gap-2">
      {items.length > 0 && <div className="flex flex-col gap-3">{items}</div>}
      {onAdd && (
        <div className="flex flex-wrap gap-2">
          <IconButton
            icon={<Plus size={15} />}
            onClick={onAdd}
            disabled={canAdd === false}
            label={strings.selection.addAnother}
          />
        </div>
      )}
    </div>
  );
}
