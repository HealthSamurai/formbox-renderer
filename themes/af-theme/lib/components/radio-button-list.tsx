import type { RadioButtonListProperties } from "@formbox/theme";
import { LoadingSpinner } from "./loading-spinner.tsx";
import { checkInputClass } from "./tokens.ts";

export function RadioButtonList({
  options,
  selectedOption,
  orientation = "vertical",
  onChange,
  specifyOtherOption,
  customOptionForm,
  id,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  isLoading = false,
}: RadioButtonListProperties) {
  const displayOptions = specifyOtherOption
    ? [...options, specifyOtherOption]
    : options;
  const selectedToken = selectedOption?.token ?? "";
  const hasOptions = displayOptions.length > 0;

  return (
    <div id={id} className="flex flex-col gap-2">
      {hasOptions && (
        <div
          role="radiogroup"
          data-orientation={orientation}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-busy={isLoading || undefined}
          className="data-[orientation=horizontal]:gap-x-4 data-[orientation=horizontal]:gap-y-2 flex flex-col gap-1 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap"
        >
          {displayOptions.map((entry) => (
            <div key={entry.token} className="flex flex-col gap-1">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  className={checkInputClass}
                  name={id}
                  value={entry.token}
                  checked={selectedToken === entry.token}
                  disabled={disabled || isLoading || entry.disabled}
                  onChange={(event) => onChange(event.target.value)}
                />
                {entry.label}
              </label>
            </div>
          ))}
        </div>
      )}
      {isLoading && <LoadingSpinner showLabel />}
      {customOptionForm && <div className="pl-6">{customOptionForm}</div>}
    </div>
  );
}
