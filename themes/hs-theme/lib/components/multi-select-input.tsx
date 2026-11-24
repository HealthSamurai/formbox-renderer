import { useStrings, type MultiSelectInputProperties } from "@formbox/theme";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import { cn } from "@health-samurai/react-components";
import { LoadingSpinner } from "./loading-spinner.tsx";

function isInteractiveTarget(target: EventTarget | undefined): boolean {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest("input,textarea,select,button,a,[contenteditable]"),
  );
}

export function MultiSelectInput({
  options,
  onSelect,
  onDeselect,
  onSearch,
  id,
  specifyOtherOption,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled = false,
  isLoading = false,
  selectedOptions,
  customOptionForm,
  placeholder,
}: MultiSelectInputProperties) {
  const strings = useStrings();
  const containerReference = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeToken, setActiveToken] = useState<string | undefined>();
  const optionReferences = useRef(
    new Map<string, HTMLButtonElement | undefined>(),
  );
  const hasCustomOptionForm = Boolean(customOptionForm);
  const isOpenWithCustom = isOpen || hasCustomOptionForm;
  const isSearchable = Boolean(onSearch);
  const selectedTokens = useMemo(
    () => new Set(selectedOptions.map((option) => option.token)),
    [selectedOptions],
  );

  const listboxId = `${id}-listbox`;
  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery);
    onSearch?.(nextQuery);
  };
  const displayOptions = useMemo(() => {
    return options.filter((option) => !selectedTokens.has(option.token));
  }, [options, selectedTokens]);
  const visibleOptions = useMemo(() => {
    return specifyOtherOption
      ? [...displayOptions, specifyOtherOption]
      : displayOptions;
  }, [displayOptions, specifyOtherOption]);
  const stickyIndex = specifyOtherOption ? displayOptions.length : -1;
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
    const firstEnabled = visibleOptions.find((entry) => !entry.disabled);
    return firstEnabled?.token;
  }, [activeToken, isOpenWithCustom, visibleOptions]);
  const activeIndex = visibleOptions.findIndex(
    (entry) => entry.token === resolvedActiveToken,
  );
  const activeDescendantId =
    activeIndex === -1 ? undefined : `${listboxId}-option-${activeIndex}`;

  useEffect(() => {
    if (!isOpenWithCustom || resolvedActiveToken === undefined) return;
    const option = optionReferences.current.get(resolvedActiveToken);
    option?.scrollIntoView?.({ block: "nearest" });
  }, [resolvedActiveToken, isOpenWithCustom]);

  const handleSelect = (nextToken: string) => {
    if (nextToken.length === 0 || disabled || isLoading) return;
    onSelect(nextToken);
    updateQuery("");
    setActiveToken(undefined);
    setIsOpen(false);
  };
  const openOptions = () => {
    if (disabled || isLoading) return;
    setIsOpen(true);
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
    if (!containerReference.current) return;
    const nextTarget = event.relatedTarget as Node | undefined;
    if (nextTarget && containerReference.current.contains(nextTarget)) {
      return;
    }
    updateQuery("");
    setActiveToken(undefined);
    setIsOpen(false);
  };

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpenWithCustom) {
        openOptions();
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
        openOptions();
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
        openOptions();
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
      updateQuery("");
      setActiveToken(undefined);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="typo-body relative flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-md border border-border-primary bg-transparent px-2 py-1 text-text-primary transition-all duration-300 hover:border-border-primary_hover focus-within:border-border-link data-[disabled=true]:bg-bg-secondary data-[disabled=true]:text-text-disabled"
        ref={containerReference}
        onBlur={handleBlur}
        data-disabled={disabled ? "true" : undefined}
      >
        {selectedOptions.map((chip) => {
          const isChipDisabled = disabled || Boolean(chip.disabled);
          return (
            <div key={chip.token} className="flex flex-col gap-0.5">
              <div
                data-slot="multi-select-chip"
                className="typo-body inline-flex cursor-pointer items-center gap-1 rounded-full border border-border-primary bg-bg-secondary px-2 py-0.5 text-text-primary outline-none hover:bg-bg-tertiary focus-visible:ring-4 focus-visible:ring-ring-blue data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60 data-[disabled=true]:hover:bg-bg-secondary"
                role="button"
                tabIndex={isChipDisabled ? undefined : 0}
                aria-label={strings.selection.removeSelection}
                aria-disabled={isChipDisabled ? true : undefined}
                data-clickable="true"
                data-disabled={isChipDisabled ? "true" : undefined}
                onClick={(event) => {
                  if (isChipDisabled) return;
                  if (isInteractiveTarget(event.target)) return;
                  onDeselect(chip.token);
                }}
                onKeyDown={(event) => {
                  if (isChipDisabled) return;
                  if (event.currentTarget !== event.target) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onDeselect(chip.token);
                  }
                }}
              >
                <div className="inline-flex items-center">{chip.label}</div>
              </div>
              {chip.errors}
            </div>
          );
        })}
        <div className="relative min-w-32 flex-[1_1_10rem]">
          {isSearchable ? (
            <input
              className="typo-body w-full border-0 bg-transparent p-1 text-text-primary outline-none placeholder:text-text-quaternary disabled:cursor-not-allowed"
              id={id}
              value={query}
              onChange={(event) => {
                updateQuery(event.target.value);
                openOptions();
              }}
              onFocus={() => {
                openOptions();
              }}
              onClick={() => {
                openOptions();
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
              className="flex min-h-6 w-full cursor-text items-center p-1 outline-none aria-disabled:cursor-not-allowed"
              id={id}
              role="combobox"
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              aria-busy={isLoading || undefined}
              aria-expanded={isOpenWithCustom}
              aria-controls={listboxId}
              aria-activedescendant={
                isOpenWithCustom && activeDescendantId
                  ? activeDescendantId
                  : undefined
              }
              aria-disabled={disabled || isLoading ? true : undefined}
              tabIndex={disabled || isLoading ? -1 : 0}
              onFocus={openOptions}
              onClick={openOptions}
              onKeyDown={handleNavigationKeyDown}
            >
              {selectedOptions.length === 0 && (
                <span className="text-text-quaternary">
                  {placeholder ?? strings.selection.selectPlaceholder}
                </span>
              )}
            </div>
          )}
        </div>
        {isLoading && (
          <div className="ml-auto inline-flex items-center">
            <LoadingSpinner />
          </div>
        )}
        {isOpenWithCustom && (
          <div
            className="dropdown-menu-shadow absolute inset-x-0 top-[calc(100%+0.25rem)] z-10 flex max-h-64 flex-col overflow-auto rounded-md border border-border-primary bg-bg-primary p-1"
            id={listboxId}
            role="listbox"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          >
            {customOptionForm ? (
              <div className="p-3" role="presentation">
                {customOptionForm}
              </div>
            ) : (
              <>
                {displayOptions.map((option, index) => (
                  <button
                    className={optionClass}
                    key={option.token}
                    id={`${listboxId}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={selectedTokens.has(option.token)}
                    aria-disabled={option.disabled || undefined}
                    disabled={Boolean(option.disabled)}
                    data-active={option.token === resolvedActiveToken}
                    ref={(node) => {
                      if (node) {
                        optionReferences.current.set(option.token, node);
                      } else {
                        optionReferences.current.delete(option.token);
                      }
                    }}
                    onFocus={() => setActiveToken(option.token)}
                    onKeyDown={handleNavigationKeyDown}
                    onClick={() => {
                      if (!option.disabled) {
                        handleSelect(option.token);
                      }
                    }}
                  >
                    {option.label}
                  </button>
                ))}
                {specifyOtherOption && (
                  <button
                    className={cn(
                      optionClass,
                      "sticky bottom-0 z-[1] rounded-none border-t border-border-separator bg-bg-primary",
                    )}
                    key={specifyOtherOption.token}
                    id={`${listboxId}-option-${stickyIndex}`}
                    type="button"
                    role="option"
                    aria-selected={selectedTokens.has(specifyOtherOption.token)}
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
  );
}

const optionClass =
  "typo-body cursor-pointer rounded px-2 py-1.5 text-left text-text-primary hover:bg-bg-secondary data-[active=true]:bg-bg-tertiary aria-selected:font-medium! disabled:cursor-not-allowed disabled:opacity-50";
