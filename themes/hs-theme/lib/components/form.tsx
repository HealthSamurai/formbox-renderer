import type { FormEvent } from "react";
import { useStrings, type FormProperties } from "@formbox/theme";
import { Button } from "@health-samurai/react-components";

export function Form({
  onSubmit,
  onCancel,
  children,
  title,
  description,
  languageSelector,
  errors,
  before,
  after,
  signature,
  pagination,
}: FormProperties) {
  const strings = useStrings();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };
  const handleCancel = onCancel ?? (() => {});
  const actions = (
    <>
      {signature}
      <Button type="submit" variant="primary" disabled={!onSubmit}>
        {strings.form.submit}
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={handleCancel}
        disabled={!onCancel}
      >
        {strings.form.cancel}
      </Button>
    </>
  );
  const header =
    title || description ? (
      <header className="flex flex-col gap-1">
        {Boolean(title) && (
          <h1 className="typo-page-header m-0 block text-text-primary">
            {title}
          </h1>
        )}
        {Boolean(description) && (
          <p className="typo-body block text-text-secondary">{description}</p>
        )}
      </header>
    ) : undefined;
  const top =
    header || languageSelector ? (
      <div className="flex flex-wrap items-start justify-between gap-3">
        {header && <div className="min-w-0 flex-[1_1_20rem]">{header}</div>}
        {languageSelector && (
          <div className="ml-auto min-w-0 flex-none">{languageSelector}</div>
        )}
      </div>
    ) : undefined;

  if (pagination) {
    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {top}
        {Boolean(errors) && (
          <div className="flex flex-col gap-4 empty:hidden">{errors}</div>
        )}
        {Boolean(before) && (
          <div className="flex flex-col gap-4 empty:hidden">{before}</div>
        )}
        {children}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="typo-body flex items-center gap-2 text-text-primary">
            <Button
              variant="secondary"
              type="button"
              onClick={pagination.onPrev}
              disabled={pagination.disabledPrev}
            >
              {strings.pagination.previous}
            </Button>
            <span>
              {pagination.current} / {pagination.total}
            </span>
            <Button
              variant="secondary"
              type="button"
              onClick={pagination.onNext}
              disabled={pagination.disabledNext}
            >
              {strings.pagination.next}
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
        {Boolean(after) && (
          <div className="flex flex-col gap-4 empty:hidden">{after}</div>
        )}
      </form>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {top}
      {Boolean(errors) && (
        <div className="flex flex-col gap-4 empty:hidden">{errors}</div>
      )}
      {Boolean(before) && (
        <div className="flex flex-col gap-4 empty:hidden">{before}</div>
      )}
      {children}
      {Boolean(after) && (
        <div className="flex flex-col gap-4 empty:hidden">{after}</div>
      )}
      <div className="flex flex-wrap gap-3">{actions}</div>
    </form>
  );
}
