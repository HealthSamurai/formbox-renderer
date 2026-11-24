import { useRef } from "react";
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
    <span id={unitId} className="typo-body text-text-secondary">
      {unitLabel}
    </span>
  );

  return (
    <div
      className="flex flex-col gap-0.5"
      data-disabled={disabled ? "true" : "false"}
    >
      <input
        className="block w-full accent-[var(--color-fg-link)] disabled:cursor-not-allowed disabled:opacity-60"
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
      />
      <div
        aria-hidden="true"
        ref={labelsReference}
        className="typo-body relative flex w-full justify-between text-text-secondary [&_[data-hidden=true]]:invisible"
      >
        <div
          aria-hidden="true"
          ref={valueReference}
          className="absolute top-0 inline-flex items-center gap-1.5 whitespace-nowrap"
          style={{
            left: `${clampedPercent}%`,
            transform: `translate(-${clampedPercent}%, 0)`,
          }}
        >
          {value} {unit}
        </div>
        <div ref={lowerReference} data-hidden={isLowerClose ? "true" : "false"}>
          {lowerLabel ?? (
            <>
              {sliderMin} {unit}
            </>
          )}
        </div>
        <div ref={upperReference} data-hidden={isUpperClose ? "true" : "false"}>
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
