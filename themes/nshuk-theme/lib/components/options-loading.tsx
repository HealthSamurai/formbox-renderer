import { useStrings, type OptionsLoadingProperties } from "@formbox/theme";

export function OptionsLoading({ isLoading }: OptionsLoadingProperties) {
  const strings = useStrings();

  if (isLoading) {
    return (
      <div className="nhsuk-hint" role="status">
        {strings.selection.loadingOptions}
      </div>
    );
  }
  return;
}
