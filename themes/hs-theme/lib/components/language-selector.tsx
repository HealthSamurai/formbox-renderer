import { useState } from "react";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";
import { styled } from "@linaria/react";

export function LanguageSelector({
  options,
  value,
  onChange,
}: LanguageSelectorProperties) {
  const strings = useStrings();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = options.find((option) => option.value === value);

  return (
    <Root>
      <TriggerButton
        type="button"
        aria-label={strings.language.label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {selectedLanguage?.label ?? value}
        <Chevron aria-hidden data-open={isOpen ? "true" : undefined} />
      </TriggerButton>
      {isOpen && (
        <Menu role="menu">
          {options.map((option) => (
            <MenuItem
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === value}
              data-selected={option.value === value ? "true" : undefined}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Root>
  );
}

const Root = styled.div`
  position: relative;
`;

const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  background: #ffffff;
  color: #1a202c;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25;
  padding: 0.4375rem 0.625rem;

  &:hover {
    background: #edf2f7;
  }

  &:focus-visible {
    outline: 2px solid #3182ce;
    outline-offset: 1px;
  }
`;

const Chevron = styled.span`
  display: inline-block;
  inline-size: 0;
  block-size: 0;
  margin-inline-start: 0.125rem;
  border-inline-start: 0.25rem solid transparent;
  border-inline-end: 0.25rem solid transparent;
  border-block-start: 0.35rem solid #718096;
  transform-origin: center;
  transition: transform 120ms ease;

  &[data-open="true"] {
    transform: rotate(180deg);
  }
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  z-index: 20;
  min-width: 7rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  background: #fff;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.14);
  padding: 0.25rem;
`;

const MenuItem = styled.button`
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  background: transparent;
  color: #1a202c;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.375rem 0.5rem;
  text-align: left;

  &:hover {
    background: #edf2f7;
  }

  &[data-selected="true"] {
    background: #e2e8f0;
    font-weight: 600;
  }
`;
