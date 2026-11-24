import { useState } from "react";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";
import { Button, cn } from "@health-samurai/react-components";

export function LanguageSelector({
  options,
  value,
  onChange,
}: LanguageSelectorProperties) {
  const strings = useStrings();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = options.find((option) => option.value === value);

  return (
    <div className="relative">
      <Button
        type="button"
        variant="secondary"
        aria-label={strings.language.label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {selectedLanguage?.label ?? value}
        <span
          aria-hidden
          data-open={isOpen ? "true" : undefined}
          className={cn(
            "ml-0.5 inline-block size-0 border-x-[0.25rem] border-t-[0.35rem] border-x-transparent border-t-fg-tertiary transition-transform duration-100",
            isOpen && "rotate-180",
          )}
        />
      </Button>
      {isOpen && (
        <div
          role="menu"
          className="dropdown-menu-shadow absolute top-[calc(100%+0.25rem)] right-0 z-20 min-w-28 rounded-md border border-border-primary bg-bg-primary p-1"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === value}
              data-selected={option.value === value ? "true" : undefined}
              className={cn(
                "typo-body flex w-full cursor-pointer justify-start rounded-sm border-0 bg-transparent px-2 py-1.5 text-left text-text-primary hover:bg-bg-secondary",
                option.value === value && "bg-bg-tertiary font-medium!",
              )}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
