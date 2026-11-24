import { useStrings } from "@formbox/theme";
import { cn } from "@health-samurai/react-components";

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
      className="inline-flex items-center gap-1.5"
      role="status"
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        data-size={size}
        className={cn(
          "inline-block animate-spin rounded-full border-2 border-border-primary border-t-fg-link",
          size === "md" ? "size-3.5" : "size-3",
        )}
      />
      {showLabel ? (
        <span className="typo-body text-text-secondary">{resolvedLabel}</span>
      ) : (
        <span className="sr-only">{resolvedLabel}</span>
      )}
    </span>
  );
}
