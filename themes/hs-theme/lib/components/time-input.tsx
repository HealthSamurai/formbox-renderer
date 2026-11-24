import type { TimeInputProperties } from "@formbox/theme";
import { fieldClass } from "./classes.ts";

export function TimeInput({
  id,
  value,
  onChange,
  disabled,
  placeholder,
  ariaLabelledBy,
  ariaDescribedBy,
  min,
  max,
}: TimeInputProperties) {
  return (
    <input
      id={id}
      className={fieldClass}
      type="time"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      min={min}
      max={max}
    />
  );
}
