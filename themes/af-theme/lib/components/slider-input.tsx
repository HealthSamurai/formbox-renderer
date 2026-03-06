import { useRef } from "react";
import type { CSSProperties } from "react";
import type { SliderInputProperties } from "@formbox/theme";
import { clamp, useIsWithinGap } from "./utilities.ts";

export function SliderInput({
  id,
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  ariaLabelledBy,
  ariaDescribedBy,
  lowerLabel,
  upperLabel,
  unitLabel,
}: SliderInputProperties) {
  const sliderMin = typeof min === "number" ? min : 0;
  const sliderMax = typeof max === "number" ? max : sliderMin + 100;
  const normalizedValue = clamp(
    typeof value === "number" ? value : sliderMin,
    sliderMin,
    sliderMax,
  );
  const sliderRange = sliderMax - sliderMin;
  const valuePercent =
    sliderRange > 0 ? ((normalizedValue - sliderMin) / sliderRange) * 100 : 0;
  const clampedPercent = clamp(valuePercent, 0, 100);
  const unitId = unitLabel ? `${id}-unit` : undefined;
  const describedBy = [ariaDescribedBy, unitId]
    .filter(Boolean)
    .join(" ")
    .trim();

  const labelsReference = useRef<HTMLDivElement | null>(null);
  const valueReference = useRef<HTMLDivElement | null>(null);
  const lowerReference = useRef<HTMLDivElement | null>(null);
  const upperReference = useRef<HTMLDivElement | null>(null);
  const isLowerClose = useIsWithinGap(
    labelsReference,
    valueReference,
    lowerReference,
    8,
    [value],
  );
  const isUpperClose = useIsWithinGap(
    labelsReference,
    valueReference,
    upperReference,
    8,
    [value],
  );

  const unit = Boolean(unitLabel) && (
    <span id={unitId} className="text-sm text-slate-600">
      {unitLabel}
    </span>
  );

  return (
    <div className="flex flex-col gap-1">
      <input
        id={id}
        type="range"
        min={sliderMin}
        max={sliderMax}
        step={step || 1}
        value={normalizedValue}
        onChange={(event) => {
          const nextValue = Number(event.target.value);
          onChange(Number.isNaN(nextValue) ? undefined : nextValue);
        }}
        disabled={disabled}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={describedBy.length > 0 ? describedBy : undefined}
        className="af-slider"
        style={
          {
            "--current-slider-value": `${clampedPercent}%`,
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        ref={labelsReference}
        className="relative flex w-full justify-between text-sm text-slate-600"
      >
        <div
          aria-hidden="true"
          ref={valueReference}
          className="absolute top-0 inline-flex items-center gap-1 whitespace-nowrap"
          style={{
            left: `${clampedPercent}%`,
            transform: `translate(-${clampedPercent}%, 0)`,
          }}
        >
          {value} {unit}
        </div>
        <div
          ref={lowerReference}
          data-hidden={isLowerClose ? "true" : "false"}
          className="data-[hidden=true]:invisible"
        >
          {lowerLabel ?? (
            <>
              {sliderMin} {unit}
            </>
          )}
        </div>
        <div
          ref={upperReference}
          data-hidden={isUpperClose ? "true" : "false"}
          className="data-[hidden=true]:invisible"
        >
          {upperLabel ?? (
            <>
              {sliderMax} {unit}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
