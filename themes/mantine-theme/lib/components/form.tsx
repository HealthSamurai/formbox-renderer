import type { FormEvent } from "react";
import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import { useStrings, type FormProperties } from "@formbox/theme";

export function Form({
  onSubmit,
  onCancel,
  children,
  pagination,
  title,
  description,
  languageSelector,
  errors,
  before,
  after,
  signature,
}: FormProperties) {
  const strings = useStrings();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  const handleCancel = onCancel ?? (() => {});
  const hasHeader = Boolean(title) || Boolean(description);
  const top =
    hasHeader || languageSelector ? (
      <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
        {hasHeader ? (
          <Box style={{ flex: 1, minWidth: 0 }}>
            {title ? (
              <Title order={2} size="h3">
                {title}
              </Title>
            ) : undefined}
            {description ? (
              <Text c="dimmed" size="sm">
                {description}
              </Text>
            ) : undefined}
          </Box>
        ) : undefined}
        {languageSelector ? <Box>{languageSelector}</Box> : undefined}
      </Group>
    ) : undefined;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack gap="md">
        {top}
        {errors}
        {before}
        {children}
        {after}

        {pagination ? (
          <Group justify="space-between" align="center" wrap="wrap" gap="md">
            <Group gap="xs" align="center">
              <Button
                type="button"
                variant="default"
                onClick={pagination.onPrev}
                disabled={pagination.disabledPrev}
              >
                {strings.pagination.previous}
              </Button>
              <Text size="sm">
                {pagination.current} / {pagination.total}
              </Text>
              <Button
                type="button"
                variant="default"
                onClick={pagination.onNext}
                disabled={pagination.disabledNext}
              >
                {strings.pagination.next}
              </Button>
            </Group>
            <Group gap="xs" align="center">
              {signature}
              <Button type="submit" disabled={onSubmit == undefined}>
                {strings.form.submit}
              </Button>
              <Button
                type="button"
                variant="default"
                onClick={handleCancel}
                disabled={onCancel == undefined}
              >
                {strings.form.cancel}
              </Button>
            </Group>
          </Group>
        ) : (
          <Group justify="flex-end" gap="xs">
            {signature}
            <Button type="submit" disabled={onSubmit == undefined}>
              {strings.form.submit}
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={handleCancel}
              disabled={onCancel == undefined}
            >
              {strings.form.cancel}
            </Button>
          </Group>
        )}
      </Stack>
    </Box>
  );
}
