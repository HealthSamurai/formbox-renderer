import { DownOutlined } from "@ant-design/icons";
import { type LanguageSelectorProperties, useStrings } from "@formbox/theme";
import { Button, Dropdown } from "antd";

export function LanguageSelector({
  options,
  value,
  onChange,
}: LanguageSelectorProperties) {
  const strings = useStrings();
  const selectedLanguage = options.find((option) => option.value === value);

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: options.map((option) => ({
          key: option.value,
          label: option.label,
        })),
        selectable: true,
        selectedKeys: [value],
        onClick: ({ key }) => {
          onChange(String(key));
        },
      }}
    >
      <Button
        aria-label={strings.language.label}
        icon={
          <DownOutlined style={{ color: "var(--ant-color-text-quaternary)" }} />
        }
        iconPlacement="end"
      >
        {selectedLanguage?.label ?? value}
      </Button>
    </Dropdown>
  );
}
