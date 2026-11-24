import type { CheckboxListProperties } from "@formbox/theme";
import { Checkbox, cn } from "@health-samurai/react-components";
import { LoadingSpinner } from "./loading-spinner.tsx";

export function CheckboxList({
  options,
  selectedOptions,
  orientation = "vertical",
  specifyOtherOption,
  customOptionForm,
  onSelect,
  onDeselect,
  id,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  isLoading = false,
}: CheckboxListProperties) {
  const displayOptions = specifyOtherOption
    ? [...options, specifyOtherOption]
    : options;
  const selectedByToken = new Map(
    selectedOptions.map((option) => [option.token, option]),
  );
  const specifyOtherToken = specifyOtherOption?.token;
  const isCustomActive = Boolean(customOptionForm && specifyOtherToken);
  const hasOptions = displayOptions.length > 0;

  return (
    <div
      className="flex flex-col gap-2"
      id={id}
      data-orientation={orientation}
      data-disabled={disabled}
      aria-busy={isLoading || undefined}
      role="group"
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {hasOptions && (
        <div
          data-orientation={orientation}
          className={cn(
            "flex flex-col gap-1",
            orientation === "horizontal" &&
              "flex-row flex-wrap gap-x-4 gap-y-2",
          )}
        >
          {displayOptions.map((option, index) => {
            const optionId = `${id}-option-${index}`;
            const selectedOption = selectedByToken.get(option.token);
            const isSpecifyOtherOption = option.token === specifyOtherToken;
            const optionAriaDescribedBy =
              [ariaDescribedBy, selectedOption?.ariaDescribedBy]
                .filter(Boolean)
                .join(" ") || undefined;

            return (
              <div key={option.token} className="flex flex-col gap-1">
                <label className="typo-body inline-flex items-center gap-2 text-text-primary">
                  <Checkbox
                    name={id}
                    checked={
                      isSpecifyOtherOption
                        ? isCustomActive || Boolean(selectedOption)
                        : Boolean(selectedOption)
                    }
                    disabled={
                      disabled ||
                      isLoading ||
                      (option.disabled &&
                        !(isSpecifyOtherOption && isCustomActive))
                    }
                    aria-labelledby={`${ariaLabelledBy} ${optionId}`}
                    aria-describedby={optionAriaDescribedBy}
                    onCheckedChange={(checked) => {
                      if (checked === true) {
                        onSelect(option.token);
                      } else {
                        onDeselect(option.token);
                      }
                    }}
                  />
                  <span id={optionId}>{option.label}</span>
                </label>
                {selectedOption?.errors ?? undefined}
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <LoadingSpinner showLabel />}
      {Boolean(customOptionForm) && <div>{customOptionForm}</div>}
    </div>
  );
}
