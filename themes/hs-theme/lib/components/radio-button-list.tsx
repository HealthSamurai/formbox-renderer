import type { RadioButtonListProperties } from "@formbox/theme";
import {
  RadioGroup,
  RadioGroupItem,
  cn,
} from "@health-samurai/react-components";
import { LoadingSpinner } from "./loading-spinner.tsx";

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

  return (
    <div id={id} className="flex flex-col gap-2">
      {displayOptions.length > 0 && (
        <RadioGroup
          name={id}
          value={selectedToken}
          onValueChange={(token) => onChange(token)}
          orientation={orientation}
          disabled={disabled || isLoading}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-busy={isLoading || undefined}
          className={cn(
            "flex flex-col gap-1",
            orientation === "horizontal" &&
              "flex-row flex-wrap gap-x-4 gap-y-2",
          )}
        >
          {displayOptions.map((entry) => (
            <label
              key={entry.token}
              className="typo-body inline-flex items-center gap-2 text-text-primary"
            >
              <RadioGroupItem value={entry.token} disabled={entry.disabled} />
              {entry.label}
            </label>
          ))}
        </RadioGroup>
      )}
      {isLoading && <LoadingSpinner showLabel />}
      {customOptionForm && <div className="pl-6">{customOptionForm}</div>}
    </div>
  );
}
