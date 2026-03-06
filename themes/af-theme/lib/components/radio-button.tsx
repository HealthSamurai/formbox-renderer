import type { RadioButtonProperties } from "@formbox/theme";
import { checkInputClass } from "./tokens.ts";

export function RadioButton({
  id,
  groupName,
  value,
  checked,
  onChange,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  label,
}: RadioButtonProperties) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        id={id}
        name={groupName}
        type="radio"
        className={checkInputClass}
        value={value}
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
