import { useStrings, type FileInputProperties } from "@formbox/theme";
import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useRef,
} from "react";
import { inputClass } from "./tokens.ts";

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
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled ? "true" : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onClick={handleSummaryClick}
      onKeyDown={handleSummaryKeyDown}
      className={[
        inputClass,
        "relative flex items-center pr-9",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      ].join(" ")}
    >
      <input
        ref={fileInputReference}
        id={id}
        type="file"
        onChange={handleFileChange}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        accept={accept}
        className="hidden"
      />
      <span
        data-empty={isEmpty ? "true" : undefined}
        className="block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap data-[empty=true]:text-slate-400"
      >
        {displayLabel}
        {displaySizeLabel ? ` (${displaySizeLabel})` : ""}
      </span>
      {hasValue && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-transparent px-2 py-1 text-slate-600 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => onChange?.()}
          disabled={disabled}
          aria-label={strings.file.clearAction}
        >
          <i aria-hidden className="fa-solid fa-xmark" />
        </button>
      )}
    </div>
  );
}
