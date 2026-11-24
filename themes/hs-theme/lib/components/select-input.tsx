import { useStrings, type SelectInputProperties } from "@formbox/theme";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import { LoadingSpinner } from "./loading-spinner.tsx";
import { cn } from "@health-samurai/react-components";
import { fieldClass } from "./classes.ts";

export function SelectInput({
  options,
  selectedOption,
  specifyOtherOption,
  customOptionForm,
  onChange,
  onSearch,
  id,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled = false,
  isLoading = false,
  placeholder,
}: SelectInputProperties) {
  const strings = useStrings();
  const containerReference = useRef<HTMLDivElement | null>(null);
  const inputReference = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [activeToken, setActiveToken] = useState<string | undefined>();
  const optionReferences = useRef(
    new Map<string, HTMLButtonElement | undefined>(),
  );
  const hasCustomOptionForm = Boolean(customOptionForm);
  const isOpenWithCustom = isOpen || hasCustomOptionForm;
  const isSearchable = Boolean(onSearch);
  const showSearchInput = isSearchable && isOpenWithCustom;
  const selectedToken = selectedOption?.token ?? "";

  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery);
    onSearch?.(nextQuery);
  };

  const displayContent = selectedOption ? (
    selectedOption.label
  ) : (
    <span className={"text-text-quaternary"}>
      {placeholder ?? strings.selection.selectPlaceholder}
    </span>
  );

  const listboxId = `${id}-listbox`;
  const visibleOptions = useMemo(() => {
    return specifyOtherOption ? [...options, specifyOtherOption] : options;
  }, [options, specifyOtherOption]);
  const stickyIndex = specifyOtherOption ? options.length : -1;
  const resolvedActiveToken = useMemo(() => {
    if (!isOpenWithCustom || visibleOptions.length === 0) {
      return;
    }
    const currentActive = activeToken
      ? visibleOptions.find((entry) => entry.token === activeToken)
      : undefined;
    if (currentActive && !currentActive.disabled) {
      return currentActive.token;
    }
    const selectedEntry = selectedToken
      ? visibleOptions.find((entry) => entry.token === selectedToken)
      : undefined;
    if (selectedEntry && !selectedEntry.disabled) {
      return selectedEntry.token;
    }
    const firstEnabled = visibleOptions.find((entry) => !entry.disabled);
    return firstEnabled?.token;
  }, [activeToken, isOpenWithCustom, selectedToken, visibleOptions]);
  const activeIndex = visibleOptions.findIndex(
    (entry) => entry.token === resolvedActiveToken,
  );
  const activeDescendantId =
    activeIndex === -1 ? undefined : `${listboxId}-option-${activeIndex}`;

  useEffect(() => {
    if (!isOpenWithCustom || resolvedActiveToken === undefined) return;
    const option = optionReferences.current.get(resolvedActiveToken);
    option?.scrollIntoView?.({ block: "nearest" });
  }, [isOpenWithCustom, resolvedActiveToken]);

  useEffect(() => {
    if (!isOpen) return;
    inputReference.current?.focus();
  }, [isOpen]);

  const handleSelect = (nextToken: string) => {
    if (disabled || isLoading) return;
    onChange(nextToken);
    updateQuery("");
    setIsDirty(false);
    setActiveToken(undefined);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange();
    updateQuery("");
    setIsDirty(false);
    setActiveToken(undefined);
    setIsOpen(false);
  };

  const findNextEnabledIndex = (startIndex: number, direction: 1 | -1) => {
    if (visibleOptions.length === 0) return -1;
    const count = visibleOptions.length;
    const startPoint =
      startIndex < 0 ? (direction === 1 ? -1 : count) : startIndex;
    for (const offset of visibleOptions.keys()) {
      const nextIndex = startPoint + direction * (offset + 1);
      const wrappedIndex = ((nextIndex % count) + count) % count;
      if (!visibleOptions[wrappedIndex].disabled) {
        return wrappedIndex;
      }
    }
    return -1;
  };

  const findEdgeEnabledIndex = (direction: 1 | -1) => {
    const indices = [...visibleOptions.keys()];
    if (direction === -1) {
      indices.reverse();
    }
    for (const index of indices) {
      if (!visibleOptions[index].disabled) return index;
    }
    return -1;
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (hasCustomOptionForm) return;
    if (containerReference.current == undefined) return;
    const nextTarget = event.relatedTarget as Node | undefined;
    if (nextTarget && containerReference.current.contains(nextTarget)) {
      return;
    }
    const shouldClear =
      !disabled &&
      !isLoading &&
      isDirty &&
      query.trim().length === 0 &&
      Boolean(selectedOption);
    if (shouldClear) {
      onChange();
    }
    setActiveToken(undefined);
    setIsOpen(false);
  };

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpenWithCustom) {
        updateQuery("");
        setIsDirty(false);
        setIsOpen(true);
        return;
      }
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = findNextEnabledIndex(activeIndex, direction);
      if (nextIndex !== -1) {
        setActiveToken(visibleOptions[nextIndex].token);
      }
      return;
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (!isOpenWithCustom) {
        updateQuery("");
        setIsDirty(false);
        setIsOpen(true);
      }
      const direction = event.key === "Home" ? 1 : -1;
      const edgeIndex = findEdgeEnabledIndex(direction);
      if (edgeIndex !== -1) {
        setActiveToken(visibleOptions[edgeIndex].token);
      }
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (!isOpenWithCustom) {
        updateQuery("");
        setIsDirty(false);
        setIsOpen(true);
        return;
      }
      if (activeIndex !== -1) {
        const entry = visibleOptions[activeIndex];
        if (!entry.disabled) {
          handleSelect(entry.token);
        }
      }
      return;
    }
    if (event.key === "Escape") {
      if (hasCustomOptionForm) return;
      setActiveToken(undefined);
      setIsOpen(false);
    }
  };

  return (
    <div
      data-loading={isLoading ? "true" : undefined}
      ref={containerReference}
      onBlur={handleBlur}
    >
      <div className={"flex items-center gap-2"}>
        <div className={"relative flex-1"}>
          {showSearchInput ? (
            <input
              ref={inputReference}
              id={id}
              className={cn(
                fieldClass,
                (selectedOption || isLoading) && "pr-8",
              )}
              data-has-actions={
                selectedOption || isLoading ? "true" : undefined
              }
              value={query}
              onChange={(event) => {
                updateQuery(event.target.value);
                setIsDirty(true);
                setIsOpen(true);
              }}
              onFocus={() => {
                if (!disabled && !isLoading) {
                  updateQuery("");
                  setIsDirty(false);
                  setIsOpen(true);
                }
              }}
              onClick={() => {
                if (!disabled && !isLoading && !isOpen) {
                  updateQuery("");
                  setIsDirty(false);
                  setIsOpen(true);
                }
              }}
              onKeyDown={handleNavigationKeyDown}
              disabled={disabled || isLoading}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              aria-busy={isLoading || undefined}
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={isOpenWithCustom}
              aria-controls={listboxId}
              aria-activedescendant={
                isOpenWithCustom && activeDescendantId
                  ? activeDescendantId
                  : undefined
              }
              placeholder={placeholder ?? strings.selection.selectPlaceholder}
              autoComplete="off"
            />
          ) : (
            <div
              data-slot="select-display"
              id={id}
              className={cn(
                fieldClass,
                "flex cursor-pointer items-center aria-disabled:cursor-not-allowed aria-disabled:bg-bg-secondary aria-disabled:text-text-disabled",
                (selectedOption || isLoading) && "pr-8",
              )}
              data-has-actions={
                selectedOption || isLoading ? "true" : undefined
              }
              role="combobox"
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              aria-busy={isLoading || undefined}
              aria-expanded={isOpenWithCustom}
              aria-controls={listboxId}
              aria-placeholder={
                selectedOption
                  ? undefined
                  : (placeholder ?? strings.selection.selectPlaceholder)
              }
              aria-disabled={disabled || isLoading ? true : undefined}
              tabIndex={disabled || isLoading ? -1 : 0}
              onClick={() => {
                if (!disabled && !isLoading && !isOpen) {
                  updateQuery("");
                  setIsDirty(false);
                  setIsOpen(true);
                }
              }}
              onKeyDown={handleNavigationKeyDown}
            >
              {displayContent}
            </div>
          )}
          {(selectedOption || isLoading) && (
            <div
              className={
                "absolute top-1/2 right-2 inline-flex -translate-y-1/2 items-center gap-1"
              }
            >
              {selectedOption && (
                <button
                  className={
                    "rounded-md px-2 py-1 text-xl leading-none text-text-secondary hover:bg-bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
                  }
                  type="button"
                  onClick={handleClear}
                  disabled={disabled || isLoading}
                  onMouseDown={(event) => event.preventDefault()}
                  aria-label={strings.selection.removeSelection}
                >
                  {"\u00D7"}
                </button>
              )}
              {isLoading && <LoadingSpinner />}
            </div>
          )}
          {isOpenWithCustom && (
            <div
              className={
                "dropdown-menu-shadow absolute inset-x-0 top-[calc(100%+0.25rem)] z-10 flex max-h-64 flex-col overflow-auto rounded-md border border-border-primary bg-bg-primary p-1"
              }
              id={listboxId}
              role="listbox"
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
            >
              {customOptionForm ? (
                <div className={"p-3"} role="presentation">
                  {customOptionForm}
                </div>
              ) : (
                <>
                  {options.map((entry, index) => (
                    <button
                      className={optionClass}
                      key={entry.token}
                      id={`${listboxId}-option-${index}`}
                      type="button"
                      role="option"
                      aria-selected={entry.token === selectedToken}
                      aria-disabled={entry.disabled || undefined}
                      disabled={entry.disabled}
                      data-active={entry.token === resolvedActiveToken}
                      ref={(node) => {
                        if (node) {
                          optionReferences.current.set(entry.token, node);
                        } else {
                          optionReferences.current.delete(entry.token);
                        }
                      }}
                      onFocus={() => setActiveToken(entry.token)}
                      onKeyDown={handleNavigationKeyDown}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        if (!entry.disabled) {
                          handleSelect(entry.token);
                        }
                      }}
                    >
                      {entry.label}
                    </button>
                  ))}
                  {specifyOtherOption && (
                    <button
                      className={cn(
                        optionClass,
                        "sticky bottom-0 z-[1] rounded-none border-t border-border-separator bg-bg-primary",
                      )}
                      id={`${listboxId}-option-${stickyIndex}`}
                      type="button"
                      role="option"
                      aria-selected={specifyOtherOption.token === selectedToken}
                      aria-disabled={specifyOtherOption.disabled || undefined}
                      disabled={Boolean(specifyOtherOption.disabled)}
                      data-active={
                        specifyOtherOption.token === resolvedActiveToken
                      }
                      ref={(node) => {
                        if (node) {
                          optionReferences.current.set(
                            specifyOtherOption.token,
                            node,
                          );
                        } else {
                          optionReferences.current.delete(
                            specifyOtherOption.token,
                          );
                        }
                      }}
                      onFocus={() => setActiveToken(specifyOtherOption.token)}
                      onKeyDown={handleNavigationKeyDown}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        if (!specifyOtherOption.disabled) {
                          handleSelect(specifyOtherOption.token);
                        }
                      }}
                    >
                      {specifyOtherOption.label}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const optionClass =
  "typo-body cursor-pointer rounded px-2 py-1.5 text-left text-text-primary hover:bg-bg-secondary data-[active=true]:bg-bg-tertiary aria-selected:font-medium! disabled:cursor-not-allowed disabled:opacity-50";
