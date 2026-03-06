import { useStrings } from "@formbox/theme";

export type LoadingSpinnerProperties = {
  label?: string | undefined;
  showLabel?: boolean | undefined;
  size?: "sm" | "md" | undefined;
};

export function LoadingSpinner({
  label,
  showLabel = false,
  size = "sm",
}: LoadingSpinnerProperties) {
  const strings = useStrings();
  const resolvedLabel = label ?? strings.selection.loadingOptions;

  return (
    <span
      role="status"
      aria-live="polite"
      className="inline-flex items-center gap-1.5"
    >
      <span
        aria-hidden="true"
        data-size={size}
        className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-[rgb(var(--input__accent-color,var(--main-color,120,38,245)))] data-[size=md]:h-4 data-[size=md]:w-4"
      />
      {showLabel ? (
        <span className="text-sm text-gray-600">{resolvedLabel}</span>
      ) : (
        <span className="af-sr-only">{resolvedLabel}</span>
      )}
    </span>
  );
}
