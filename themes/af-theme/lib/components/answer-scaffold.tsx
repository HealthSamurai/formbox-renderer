import { useStrings, type AnswerScaffoldProperties } from "@formbox/theme";
import { Trash } from "../icons/trash.tsx";
import { IconButton } from "./icon-button.tsx";

export function AnswerScaffold({
  control,
  onRemove,
  canRemove,
  errors,
  children,
}: AnswerScaffoldProperties) {
  const strings = useStrings();

  return (
    <div className="flex flex-col gap-[0.35rem]">
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">{control}</div>
        {onRemove && (
          <div className="flex gap-1">
            <IconButton
              icon={<Trash />}
              onClick={onRemove}
              disabled={canRemove === false}
              label={strings.group.removeSection}
            />
          </div>
        )}
      </div>
      <div className="empty:hidden pl-3 pt-3">
        {children}
        {errors}
      </div>
    </div>
  );
}
