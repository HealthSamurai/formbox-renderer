import { useStrings, type SpinnerInputProperties } from "@formbox/theme";
import { Button } from "@health-samurai/react-components";
import { Minus } from "../icons/minus.tsx";
import { Plus } from "../icons/plus.tsx";
import { getPrecision, roundToPrecision } from "./utilities.ts";

export function SpinnerInput({
  id,
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  ariaLabelledBy,
  ariaDescribedBy,
  placeholder,
  unitLabel,
}: SpinnerInputProperties) {
  const strings = useStrings();
  const unitId = unitLabel ? `${id}-unit` : undefined;
  const describedBy = [ariaDescribedBy, unitId]
    .filter(Boolean)
    .join(" ")
    .trim();

  const handleAdjust = (direction: 1 | -1) => {
    if (disabled) return;
    const current = value ?? 0;
    const safeStep = Number.isFinite(step) && step !== 0 ? step : 1;
    const precision = Math.max(getPrecision(safeStep), getPrecision(current));
    const next = roundToPrecision(current + direction * safeStep, precision);
    if (typeof min === "number" && next < min) {
      onChange(min);
      return;
    }
    if (typeof max === "number" && next > max) {
      onChange(max);
      return;
    }
    onChange(next);
  };

  const control = (
    <div
      className="flex h-9 flex-1 items-stretch overflow-hidden rounded-md border border-border-primary bg-bg-primary transition-all duration-300 hover:border-border-primary_hover focus-within:border-border-link"
      data-disabled={disabled ? "true" : "false"}
    >
      <Button
        type="button"
        variant="ghost"
        className="h-auto rounded-none px-2"
        onClick={() => handleAdjust(-1)}
        disabled={disabled}
        aria-label={strings.spinner.decrease}
      >
        <Minus size={14} />
      </Button>
      <input
        className="typo-body w-full min-w-0 flex-1 appearance-none border-0 bg-transparent px-3 text-text-primary outline-none placeholder:text-text-quaternary disabled:cursor-not-allowed disabled:bg-bg-secondary disabled:text-text-disabled"
        id={id}
        type="number"
        value={value ?? ""}
        onChange={(event) => {
          const next = event.target.value;
          if (next === "") {
            onChange();
            return;
          }
          const parsed = Number(next);
          onChange(Number.isNaN(parsed) ? value : parsed);
        }}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={describedBy.length > 0 ? describedBy : undefined}
        placeholder={placeholder}
      />
      <Button
        type="button"
        variant="ghost"
        className="h-auto rounded-none px-2"
        onClick={() => handleAdjust(1)}
        disabled={disabled}
        aria-label={strings.spinner.increase}
      >
        <Plus size={14} />
      </Button>
    </div>
  );

  if (!unitLabel) {
    return control;
  }

  return (
    <div className="flex w-full min-w-0 items-center gap-2">
      {control}
      <span id={unitId} className="typo-body text-text-secondary">
        {unitLabel}
      </span>
    </div>
  );
}
