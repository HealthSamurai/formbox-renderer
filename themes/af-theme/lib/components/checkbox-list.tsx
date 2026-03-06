import type { CheckboxListProperties } from "@formbox/theme";
import { LoadingSpinner } from "./loading-spinner.tsx";
import { checkInputClass } from "./tokens.ts";

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
      id={id}
      data-orientation={orientation}
      data-disabled={disabled}
      aria-busy={isLoading || undefined}
      role="group"
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className="flex flex-col gap-2"
    >
      {hasOptions && (
        <div
          data-orientation={orientation}
          className="data-[orientation=horizontal]:gap-x-4 data-[orientation=horizontal]:gap-y-2 flex flex-col gap-1 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap"
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
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className={checkInputClass}
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
                    onChange={(event) => {
                      if (event.target.checked) {
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
