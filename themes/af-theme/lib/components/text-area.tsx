import type { TextAreaProperties } from "@formbox/theme";
import { textAreaClass } from "./tokens.ts";

export function TextArea({
  id,
  value,
  onChange,
  disabled,
  placeholder,
  ariaLabelledBy,
  ariaDescribedBy,
  inputMode,
  minLength,
  maxLength,
}: TextAreaProperties) {
  return (
    <textarea
      id={id}
      className={textAreaClass}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      inputMode={inputMode}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}
