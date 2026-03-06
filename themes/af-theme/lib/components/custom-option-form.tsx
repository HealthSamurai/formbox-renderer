import { useStrings, type CustomOptionFormProperties } from "@formbox/theme";
import { primaryButtonClass, secondaryButtonClass } from "./tokens.ts";

export function CustomOptionForm({
  content,
  errors,
  onCancel,
  onSubmit,
  canSubmit,
}: CustomOptionFormProperties) {
  const strings = useStrings();

  return (
    <div className="flex flex-col gap-2">
      <div>{content}</div>
      {errors ?? undefined}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={secondaryButtonClass}
          onClick={onCancel}
        >
          {strings.dialog.cancel}
        </button>
        <button
          type="button"
          className={primaryButtonClass}
          onClick={onSubmit}
          disabled={canSubmit === false}
        >
          {strings.dialog.submit}
        </button>
      </div>
    </div>
  );
}
