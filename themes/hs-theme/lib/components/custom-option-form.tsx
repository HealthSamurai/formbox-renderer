import { useStrings, type CustomOptionFormProperties } from "@formbox/theme";
import { Button } from "@health-samurai/react-components";

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
        <Button type="button" variant="secondary" onClick={onCancel}>
          {strings.dialog.cancel}
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={onSubmit}
          disabled={canSubmit === false}
        >
          {strings.dialog.submit}
        </Button>
      </div>
    </div>
  );
}
