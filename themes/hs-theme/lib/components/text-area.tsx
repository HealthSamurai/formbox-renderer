import type { TextAreaProperties } from "@formbox/theme";
import { Textarea } from "@health-samurai/react-components";

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
    <Textarea
      id={id}
      className="min-h-24"
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
