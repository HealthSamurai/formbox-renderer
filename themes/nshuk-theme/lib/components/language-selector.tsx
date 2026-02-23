import type { ChangeEvent } from "react";
import { styled } from "@linaria/react";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";

export function LanguageSelector({
  options,
  value,
  onChange,
}: LanguageSelectorProperties) {
  const strings = useStrings();

  return (
    <Select
      className="nhsuk-select"
      aria-label={strings.language.label}
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        onChange(event.target.value)
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  && {
    width: fit-content;
    min-width: 0;
    max-width: 8rem;
  }
`;
