import { getStroke } from "perfect-freehand";
import {
  type ComponentPropsWithoutRef,
  type PointerEvent,
  useCallback,
  useRef,
  useState,
} from "react";

type InputPoint = [number, number, number];
type StrokePoint = [number, number];

export interface PerfectFreehandStrokeOptions {
  size?: number;
  thinning?: number;
  smoothing?: number;
  streamline?: number;
  easing?: (pressure: number) => number;
  simulatePressure?: boolean;
  start?: {
    cap?: boolean;
    taper?: number | boolean;
    easing?: (distance: number) => number;
  };
  end?: {
    cap?: boolean;
    taper?: number | boolean;
    easing?: (distance: number) => number;
  };
  last?: boolean;
}

const DEFAULT_SIGNATURE_WIDTH = 300;
const DEFAULT_SIGNATURE_HEIGHT = 100;
const DEFAULT_STROKE_COLOR = "#111827";
const DEFAULT_STROKE_OPTIONS: PerfectFreehandStrokeOptions = {
  size: 6,
  thinning: 0.7,
  smoothing: 0.65,
  streamline: 0.5,
  simulatePressure: true,
  last: true,
} as const;

export type PerfectFreehandProperties = Omit<
  ComponentPropsWithoutRef<"svg">,
  "children" | "onChange"
> & {
  value: string | undefined;
  disabled?: boolean | undefined;
  onChange?: ((value: string | undefined) => void) | undefined;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeOptions?: PerfectFreehandStrokeOptions;
  className?: string;
};

export function PerfectFreehand({
  value,
  disabled,
  onChange,
  width = DEFAULT_SIGNATURE_WIDTH,
  height = DEFAULT_SIGNATURE_HEIGHT,
  strokeColor = DEFAULT_STROKE_COLOR,
  strokeOptions = DEFAULT_STROKE_OPTIONS,
  ...svgProperties
}: PerfectFreehandProperties) {
  const activePointerIdReference = useRef<number | undefined>(undefined);
  const [activePoints, setActivePoints] = useState<InputPoint[]>([]);
  const [initialValue, setInitialValue] = useState<string | undefined>(value);
  const [committedPaths, setCommittedPaths] = useState<string[]>([]);

  const onPointerDown = useCallback(
    (event: PointerEvent<SVGSVGElement>) => {
      if (disabled) {
        return;
      }

      const svg = event.currentTarget;
      svg.setPointerCapture(event.pointerId);
      activePointerIdReference.current = event.pointerId;

      setActivePoints([toPoint(event, svg, width, height)]);
      setInitialValue(undefined);
    },
    [disabled, height, width],
  );

  const onPointerMove = useCallback(
    (event: PointerEvent<SVGSVGElement>) => {
      if (
        disabled ||
        event.buttons !== 1 ||
        activePointerIdReference.current !== event.pointerId
      ) {
        return;
      }

      const svg = event.currentTarget;
      setActivePoints((previous) => [
        ...previous,
        toPoint(event, svg, width, height),
      ]);
    },
    [disabled, height, width],
  );

  const onPointerUp = useCallback(
    (event: PointerEvent<SVGSVGElement>) => {
      if (event.pointerId !== activePointerIdReference.current) {
        return;
      }

      const svg = event.currentTarget;
      activePointerIdReference.current = undefined;
      if (svg.hasPointerCapture(event.pointerId)) {
        svg.releasePointerCapture(event.pointerId);
      }

      if (activePoints.length > 0) {
        const newCommittedPaths = [
          ...committedPaths,
          toPath(getStroke(activePoints, strokeOptions)),
        ];

        setCommittedPaths(newCommittedPaths);
        onChange?.(toDataUrl(newCommittedPaths, width, height, strokeColor));
      }

      setActivePoints([]);
    },
    [
      activePoints,
      committedPaths,
      height,
      onChange,
      strokeColor,
      strokeOptions,
      width,
    ],
  );

  const activePath =
    activePoints.length > 0
      ? toPath(getStroke(activePoints, strokeOptions))
      : undefined;

  return (
    <svg
      {...svgProperties}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-disabled={disabled ? "true" : undefined}
      tabIndex={disabled ? -1 : (svgProperties.tabIndex ?? 0)}
    >
      {initialValue && (
        <image
          href={initialValue}
          x={0}
          y={0}
          width={width}
          height={height}
          preserveAspectRatio="none"
        />
      )}
      {committedPaths.map((path, index) => (
        <path key={index} d={path} fill={strokeColor} />
      ))}
      {activePath && <path d={activePath} fill={strokeColor} />}
    </svg>
  );
}

function toPath(stroke: ReadonlyArray<StrokePoint>): string {
  if (stroke.length === 0) {
    return "";
  }

  const d = stroke.reduce<Array<string | number>>(
    (accumulator, [x0, y0], index, array) => {
      const [x1, y1] = array[(index + 1) % array.length];
      accumulator.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return accumulator;
    },
    ["M", ...stroke[0], "Q"],
  );

  d.push("Z");
  return d.join(" ");
}

function toDataUrl(
  paths: readonly string[],
  width: number,
  height: number,
  strokeColor: string,
): string {
  const pathMarkup = paths
    .map((path) => `<path d="${path}" fill="${strokeColor}"/>`)
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${pathMarkup}</svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function toPoint(
  event: PointerEvent<SVGSVGElement>,
  svg: SVGSVGElement,
  width: number,
  height: number,
): InputPoint {
  const box = svg.getBoundingClientRect();
  const x = ((event.clientX - box.left) / box.width) * width;
  const y = ((event.clientY - box.top) / box.height) * height;
  const pressure = event.pressure > 0 ? event.pressure : 0.5;
  return [x, y, pressure];
}
