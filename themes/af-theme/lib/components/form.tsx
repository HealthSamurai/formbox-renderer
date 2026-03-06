import type { FormEvent } from "react";
import { useStrings, type FormProperties } from "@formbox/theme";
import { primaryButtonClass, secondaryButtonClass } from "./tokens.ts";

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
      <button type="submit" className={primaryButtonClass} disabled={!onSubmit}>
        {strings.form.submit}
      </button>
      <button
        type="button"
        className={secondaryButtonClass}
        onClick={handleCancel}
        disabled={!onCancel}
      >
        {strings.form.cancel}
      </button>
    </>
  );
  const header =
    title || description ? (
      <header className="flex flex-col gap-1">
        {Boolean(title) && (
          <h1 className="m-0 text-[calc(var(--base-font-size,0.875rem)+0.625rem)] font-semibold tracking-wide text-gray-900">
            {title}
          </h1>
        )}
        {Boolean(description) && (
          <p className="text-[var(--base-font-size,0.875rem)] text-gray-600">
            {description}
          </p>
        )}
      </header>
    ) : undefined;
  const top =
    header || languageSelector ? (
      <div className="flex flex-wrap items-start justify-between gap-3">
        {header && <div className="min-w-0 flex-1 basis-80">{header}</div>}
        {languageSelector && (
          <div className="ml-auto min-w-0 shrink-0">{languageSelector}</div>
        )}
      </div>
    ) : undefined;

  if (pagination) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {top}
        {Boolean(errors) && <div className="empty:hidden">{errors}</div>}
        {Boolean(before) && <div className="empty:hidden">{before}</div>}
        {children}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={secondaryButtonClass}
              onClick={pagination.onPrev}
              disabled={pagination.disabledPrev}
            >
              {strings.pagination.previous}
            </button>
            <span className="text-sm text-gray-700">
              {pagination.current} / {pagination.total}
            </span>
            <button
              type="button"
              className={secondaryButtonClass}
              onClick={pagination.onNext}
              disabled={pagination.disabledNext}
            >
              {strings.pagination.next}
            </button>
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
        {Boolean(after) && <div className="empty:hidden">{after}</div>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {top}
      {Boolean(errors) && <div className="empty:hidden">{errors}</div>}
      {Boolean(before) && <div className="empty:hidden">{before}</div>}
      {children}
      {Boolean(after) && <div className="empty:hidden">{after}</div>}
      <div className="flex flex-wrap gap-3">{actions}</div>
    </form>
  );
}
