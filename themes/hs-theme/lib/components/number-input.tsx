import type { NumberInputProperties } from "@formbox/theme";
import { cn } from "@health-samurai/react-components";
import { fieldClass } from "./classes.ts";

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

  return (
    <div
      className="flex w-full items-stretch"
      data-has-unit={unitLabel ? "true" : "false"}
    >
      <div className="flex w-full items-stretch">
        <input
          className={cn(fieldClass, unitLabel && "rounded-r-none")}
          id={id}
          type="number"
          inputMode="numeric"
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
        {unitLabel && (
          <span
            id={unitId}
            aria-hidden="true"
            className="typo-body inline-flex h-9 items-center rounded-r-md border border-l-0 border-border-primary bg-bg-secondary px-3 text-text-secondary"
          >
            {unitLabel}
          </span>
        )}
      </div>
    </div>
  );
}
