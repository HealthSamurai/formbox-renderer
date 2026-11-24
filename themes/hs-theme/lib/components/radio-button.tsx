import type { RadioButtonProperties } from "@formbox/theme";

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
    <label className="typo-body inline-flex items-center gap-2 text-text-primary">
      <input
        id={id}
        name={groupName}
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
        className={radioClass}
      />
      {Boolean(label) && <span>{label}</span>}
    </label>
  );
}

// A standalone radio cannot use the kit's RadioGroupItem: the renderer spreads
// one group across table cells, tied together only by `name`. Keep the native
// input and draw it like the kit's regular RadioGroupItem.
const radioClass =
  "m-0 size-5 shrink-0 cursor-pointer appearance-none rounded-full border-[1.5px] border-solid border-border-primary bg-bg-primary outline-none transition-all duration-200 active:scale-90 active:duration-75 checked:border-bg-link checked:bg-[radial-gradient(circle,white_0_4px,var(--color-bg-link)_4.5px)] focus-visible:ring-4 focus-visible:ring-ring-blue focus-visible:not-checked:border-bg-link disabled:cursor-not-allowed disabled:border-border-secondary disabled:bg-bg-primary disabled:active:scale-100 disabled:checked:border-border-secondary disabled:checked:bg-[radial-gradient(circle,white_0_4px,var(--color-border-secondary)_4.5px)]";
