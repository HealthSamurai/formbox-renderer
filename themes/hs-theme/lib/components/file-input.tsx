import { useStrings, type FileInputProperties } from "@formbox/theme";
import { Button, cn } from "@health-samurai/react-components";
import {
  type ChangeEvent,
  type MouseEvent,
  type KeyboardEvent,
  useRef,
} from "react";

export function FileInput({
  id,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  accept,
  value,
  onChange,
}: FileInputProperties) {
  const strings = useStrings();
  const isEmpty = value == undefined;
  const hasValue = value != undefined;
  const displayLabel =
    value?.title ??
    value?.url ??
    (isEmpty ? strings.file.chooseAction : strings.inputs.attachmentSelected);
  const displaySizeLabel =
    value?.size == undefined
      ? ""
      : strings.file.sizeLabel.replace(
          "{sizeKb}",
          String(Math.round(value.size / 1024)),
        );
  const fileInputReference = useRef<HTMLInputElement | null>(null);

  const handlePickFile = () => {
    if (disabled) return;
    fileInputReference.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;
    try {
      onChange?.(file);
    } finally {
      event.currentTarget.value = "";
    }
  };

  const handleSummaryClick = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const target = event.target as HTMLElement;
    if (target.closest("button")) return;
    handlePickFile();
  };

  const handleSummaryKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePickFile();
    }
  };

  return (
    <div
      className="typo-body relative flex h-9 min-w-0 cursor-pointer items-center rounded-md border border-border-primary bg-transparent py-2 pr-9 pl-3 text-text-primary outline-none transition-all duration-300 hover:border-border-primary_hover focus-visible:border-border-link aria-disabled:cursor-not-allowed aria-disabled:bg-bg-secondary aria-disabled:text-text-disabled"
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled ? "true" : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onClick={handleSummaryClick}
      onKeyDown={handleSummaryKeyDown}
    >
      <input
        className="hidden"
        ref={fileInputReference}
        id={id}
        type="file"
        onChange={handleFileChange}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        accept={accept}
      />
      <span
        data-empty={isEmpty ? "true" : undefined}
        className={cn(
          "block min-w-0 flex-1 truncate",
          isEmpty && "text-text-quaternary",
        )}
      >
        {displayLabel}
        {displaySizeLabel ? ` (${displaySizeLabel})` : ""}
      </span>
      {hasValue && (
        <Button
          type="button"
          variant="ghost"
          size="small"
          className="absolute top-1/2 right-1.5 -translate-y-1/2 text-xl leading-none"
          onClick={() => onChange?.()}
          disabled={disabled}
          aria-label={strings.file.clearAction}
        >
          ×
        </Button>
      )}
    </div>
  );
}
