import { useStrings, type SpinnerInputProperties } from "@formbox/theme";
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
    <div className="af-input flex items-stretch gap-0 p-0 overflow-hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center px-2 text-slate-700 enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => handleAdjust(-1)}
        disabled={disabled}
        aria-label={strings.spinner.decrease}
      >
        <Minus size={14} />
      </button>
      <input
        id={id}
        type="number"
        className="min-w-0 flex-1 appearance-none border-none bg-transparent px-3 py-1 outline-none"
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
      <button
        type="button"
        className="inline-flex items-center justify-center px-2 text-slate-700 enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => handleAdjust(1)}
        disabled={disabled}
        aria-label={strings.spinner.increase}
      >
        <Plus size={14} />
      </button>
    </div>
  );

  if (!unitLabel) {
    return control;
  }

  return (
    <div className="flex w-full min-w-0 items-center gap-2">
      {control}
      <span id={unitId} className="text-sm text-slate-600">
        {unitLabel}
      </span>
    </div>
  );
}
