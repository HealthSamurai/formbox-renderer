import { useStrings, type OptionsLoadingProperties } from "@formbox/theme";

export function OptionsLoading({ isLoading }: OptionsLoadingProperties) {
  const strings = useStrings();

  if (isLoading) {
    return (
      <div className="typo-body text-text-secondary" role="status">
        {strings.selection.loadingOptions}
      </div>
    );
  }
  return;
}
