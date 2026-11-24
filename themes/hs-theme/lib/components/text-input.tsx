import type { TextInputProperties } from "@formbox/theme";
import { Input } from "@health-samurai/react-components";

export function TextInput({
  id,
  type = "text",
  value,
  onChange,
  disabled,
  placeholder,
  ariaLabelledBy,
  ariaDescribedBy,
  inputMode,
  minLength,
  maxLength,
}: TextInputProperties) {
  return (
    <Input
      id={id}
      // Input narrows `type` to text/password, but the native element accepts any.
      type={type as "text"}
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
