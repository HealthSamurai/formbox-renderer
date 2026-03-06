import type { CheckboxProperties } from "@formbox/theme";
import { checkInputClass } from "./tokens.ts";

export function Checkbox({
  id,
  checked,
  onChange,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  label,
}: CheckboxProperties) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className={checkInputClass}
        checked={checked}
        disabled={disabled}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
      />
      {Boolean(label) && <span>{label}</span>}
    </label>
  );
}
