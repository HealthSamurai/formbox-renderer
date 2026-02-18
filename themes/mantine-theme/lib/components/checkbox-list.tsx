import { Box, Checkbox, Group, Loader, Stack } from "@mantine/core";
import type { CheckboxListProperties } from "@formbox/theme";
import type { ReactNode } from "react";

function joinIds(...parts: Array<string | undefined>) {
  const value = parts.filter(Boolean).join(" ").trim();
  return value.length > 0 ? value : undefined;
}

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

  const groupDescribedByProperties =
    ariaDescribedBy == undefined ? {} : { "aria-describedby": ariaDescribedBy };

  return (
    <Stack
      id={id}
      gap="xs"
      aria-busy={isLoading}
      role="group"
      aria-labelledby={ariaLabelledBy}
      {...groupDescribedByProperties}
    >
      {displayOptions.length > 0 ? (
        <ChoicesContainer orientation={orientation}>
          {displayOptions.map((option) => {
            const selectedOption = selectedByToken.get(option.token);
            const isSpecifyOtherOption = option.token === specifyOtherToken;
            const checked = isSpecifyOtherOption
              ? isCustomActive || Boolean(selectedOption)
              : Boolean(selectedOption);

            const optionDescribedBy = joinIds(
              ariaDescribedBy,
              selectedOption?.ariaDescribedBy,
            );
            const describedByProperties =
              optionDescribedBy == undefined
                ? {}
                : { "aria-describedby": optionDescribedBy };

            const optionDisabled =
              disabled === true ||
              isLoading ||
              (option.disabled === true &&
                !(isSpecifyOtherOption && isCustomActive));

            return (
              <Box key={option.token}>
                <Checkbox
                  name={id}
                  checked={checked}
                  disabled={optionDisabled}
                  label={option.label}
                  {...describedByProperties}
                  onChange={() => {
                    if (checked) {
                      onDeselect(option.token);
                    } else {
                      onSelect(option.token);
                    }
                  }}
                />
                {selectedOption?.errors}
              </Box>
            );
          })}
        </ChoicesContainer>
      ) : undefined}

      {isLoading ? <Loader size="xs" /> : undefined}
      {customOptionForm ? <Box>{customOptionForm}</Box> : undefined}
    </Stack>
  );
}

function ChoicesContainer({
  orientation,
  children,
}: {
  orientation: "horizontal" | "vertical";
  children: ReactNode;
}) {
  if (orientation === "horizontal") {
    return (
      <Group gap="md" wrap="wrap" align="flex-start">
        {children}
      </Group>
    );
  }

  return <Stack gap={4}>{children}</Stack>;
}
