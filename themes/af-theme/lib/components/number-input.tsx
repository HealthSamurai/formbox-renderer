import type { NumberInputProperties } from "@formbox/theme";
import { inputClass } from "./tokens.ts";

export function NumberInput({
  id,
  value,
  onChange,
  disabled,
  placeholder,
  step,
  min,
  max,
  ariaLabelledBy,
  ariaDescribedBy,
  unitLabel,
}: NumberInputProperties) {
  const unitId = unitLabel ? `${id}-unit` : undefined;
  const describedByValues = [ariaDescribedBy, unitId].filter(
    Boolean,
  ) as string[];
  const describedBy =
    describedByValues.length > 0 ? describedByValues.join(" ") : undefined;

  if (!unitLabel) {
    return (
      <input
        id={id}
        type="number"
        inputMode="decimal"
        className={inputClass}
        value={value ?? ""}
        onChange={(event) => {
          const nextValue = event.target.value;
          onChange(nextValue === "" ? undefined : Number(nextValue));
        }}
        disabled={disabled}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={describedBy}
      />
    );
  }

  return (
    <div className="flex w-full items-stretch gap-2 min-w-0">
      <div className="af-input flex items-center gap-2 p-0 pr-0 min-w-0">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className="min-w-0 flex-1 border-none bg-transparent px-4 py-1 leading-relaxed outline-none"
          value={value ?? ""}
          onChange={(event) => {
            const nextValue = event.target.value;
            onChange(nextValue === "" ? undefined : Number(nextValue));
          }}
          disabled={disabled}
          placeholder={placeholder}
          step={step}
          min={min}
          max={max}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={describedBy}
        />
        <span
          id={unitId}
          className="h-full shrink-0 rounded-r-md border-l border-slate-300 bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
        >
          {unitLabel}
        </span>
      </div>
    </div>
  );
}
