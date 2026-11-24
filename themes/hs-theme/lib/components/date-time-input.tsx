import type { DateTimeInputProperties } from "@formbox/theme";
import { fieldClass } from "./classes.ts";

export function DateTimeInput({
  id,
  value,
  onChange,
  disabled,
  placeholder,
  ariaLabelledBy,
  ariaDescribedBy,
  min,
  max,
}: DateTimeInputProperties) {
  return (
    <input
      id={id}
      className={fieldClass}
      type="datetime-local"
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
