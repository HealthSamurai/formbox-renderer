import { useStrings, type OptionsLoadingProperties } from "@formbox/theme";

export function OptionsLoading({ isLoading }: OptionsLoadingProperties) {
  const strings = useStrings();

  if (isLoading) {
    return (
      <div
        role="status"
        className="text-[var(--base-font-size,0.875rem)] text-gray-600"
      >
        {strings.selection.loadingOptions}
      </div>
    );
  }
  return;
}
