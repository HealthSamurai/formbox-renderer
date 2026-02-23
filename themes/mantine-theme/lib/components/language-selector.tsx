import { Button, Menu, ComboboxChevron } from "@mantine/core";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";

export function LanguageSelector({
  options,
  value,
  onChange,
}: LanguageSelectorProperties) {
  const strings = useStrings();
  const selectedLanguage = options.find((option) => option.value === value);

  return (
    <Menu withinPortal={false} position="bottom-end">
      <Menu.Target>
        <Button
          variant="default"
          aria-label={strings.language.label}
          rightSection={<ComboboxChevron />}
        >
          {selectedLanguage?.label ?? value}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {options.map((option) => (
          <Menu.Item
            key={option.value}
            onClick={() => onChange(option.value)}
            fw={option.value === value ? 700 : 400}
          >
            {option.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
