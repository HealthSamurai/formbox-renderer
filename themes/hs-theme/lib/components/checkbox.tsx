import type { CheckboxProperties } from "@formbox/theme";
import { Checkbox as BaseCheckbox } from "@health-samurai/react-components";

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
    <label className="typo-body inline-flex items-center gap-2 text-text-primary">
      <BaseCheckbox
        id={id}
        checked={checked}
        disabled={disabled}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onCheckedChange={() => onChange()}
      />
      {Boolean(label) && <span>{label}</span>}
    </label>
  );
}
