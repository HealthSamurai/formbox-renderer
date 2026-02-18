import { Box, Group, Loader, Radio, Stack } from "@mantine/core";
import type { RadioButtonListProperties } from "@formbox/theme";

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
  const selectedToken = selectedOption?.token;

  const groupDescribedByProperties =
    ariaDescribedBy == undefined ? {} : { "aria-describedby": ariaDescribedBy };

  const optionNodes = displayOptions.map((option) => {
    const optionDisabled =
      disabled === true || isLoading || option.disabled === true;

    return (
      <Radio
        key={option.token}
        name={id}
        value={option.token}
        checked={selectedToken === option.token}
        disabled={optionDisabled}
        onChange={() => onChange(option.token)}
        label={option.label}
        {...groupDescribedByProperties}
      />
    );
  });

  return (
    <Stack
      id={id}
      gap="xs"
      aria-busy={isLoading}
      role="radiogroup"
      aria-labelledby={ariaLabelledBy}
      {...groupDescribedByProperties}
    >
      {displayOptions.length > 0 ? (
        orientation === "horizontal" ? (
          <Group gap="md" wrap="wrap" align="flex-start">
            {optionNodes}
          </Group>
        ) : (
          optionNodes
        )
      ) : undefined}

      {isLoading ? <Loader size="xs" /> : undefined}
      {customOptionForm ? <Box>{customOptionForm}</Box> : undefined}
    </Stack>
  );
}
