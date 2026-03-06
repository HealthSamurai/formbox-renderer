import { useState } from "react";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";

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
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--input__accent-color,var(--main-color,120,38,245)),0.5)]"
        aria-label={strings.language.label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {selectedLanguage?.label ?? value}
        <i
          aria-hidden
          data-open={isOpen ? "true" : undefined}
          className="fa-solid fa-chevron-down ml-0.5 text-[10px] text-gray-500 transition-transform data-[open=true]:rotate-180"
        />
      </button>
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+0.25rem)] z-20 min-w-28 rounded-md border border-gray-300 bg-white p-1 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === value}
              data-selected={option.value === value ? "true" : undefined}
              className="w-full rounded px-2 py-1.5 text-left text-gray-900 hover:bg-gray-100 data-[selected=true]:bg-gray-200 data-[selected=true]:font-semibold"
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
