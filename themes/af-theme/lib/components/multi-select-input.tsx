import { useStrings, type MultiSelectInputProperties } from "@formbox/theme";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  ComponentPropsWithoutRef,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
} from "react";
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
        ref={containerReference}
        onBlur={handleBlur}
        data-disabled={disabled ? "true" : undefined}
        className="af-input relative flex flex-wrap items-center gap-1.5 p-1.5 data-[disabled=true]:bg-slate-200"
      >
        {selectedOptions.map((chip) => {
          const isChipDisabled = disabled || Boolean(chip.disabled);
          return (
            <div key={chip.token} className="flex flex-col gap-0.5">
              <Chip
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
                <ChipContent>{chip.label}</ChipContent>
              </Chip>
              {chip.errors}
            </div>
          );
        })}
        <div className="relative min-w-32 flex-1">
          {isSearchable ? (
            <input
              id={id}
              className="w-full border-none bg-transparent px-1 py-1 text-[var(--input__font-size,var(--base-font-size,0.875rem))] outline-none placeholder:text-slate-400"
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
              id={id}
              className={[
                "flex min-h-6 w-full items-center px-1 py-1 outline-none",
                disabled || isLoading ? "cursor-not-allowed" : "cursor-text",
              ].join(" ")}
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
                <span className="text-slate-400">
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
            id={listboxId}
            role="listbox"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            className="absolute left-0 right-0 top-[calc(100%+0.25rem)] z-10 flex max-h-64 flex-col overflow-auto rounded-md border border-slate-300 bg-white p-0 shadow-lg"
          >
            {customOptionForm ? (
              <div
                role="presentation"
                className="border-t border-slate-200 bg-white px-3 py-2"
              >
                {customOptionForm}
              </div>
            ) : (
              <>
                {displayOptions.map((option, index) => (
                  <button
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
                    className="cursor-pointer border-none bg-transparent px-3 py-2 text-left text-inherit data-[active=true]:bg-slate-200 enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {option.label}
                  </button>
                ))}
                {specifyOtherOption && (
                  <button
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
                    className="sticky bottom-0 z-[1] cursor-pointer border-none border-t border-slate-200 bg-white px-3 py-2 text-left text-inherit data-[active=true]:bg-slate-200 enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
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

export const Chip = ({
  children,
  ...properties
}: ComponentPropsWithoutRef<"div">) => (
  <div
    {...properties}
    className={[
      "inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5",
      "data-[clickable=true]:cursor-pointer data-[clickable=true]:hover:bg-slate-100",
      "data-[clickable=true]:data-[disabled=true]:cursor-not-allowed data-[clickable=true]:data-[disabled=true]:opacity-60",
      properties.className ?? "",
    ].join(" ")}
  >
    {children}
  </div>
);

const ChipContent = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center">{children}</div>
);
