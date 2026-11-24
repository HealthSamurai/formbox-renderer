import {
  useStrings,
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { Button, cn } from "@health-samurai/react-components";
import { useCallback, useState } from "react";
import { IconButton } from "./icon-button.tsx";

export function SignatureInput({
  id,
  value,
  disabled,
  ariaLabelledBy,
  ariaDescribedBy,
  onChange,
}: SignatureInputProperties) {
  const strings = useStrings();
  const [signatureVersion, setSignatureVersion] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = useCallback(() => {
    if (disabled) {
      return;
    }
    onChange?.();
    setSignatureVersion((previous) => previous + 1);
  }, [disabled, onChange]);

  return (
    <div className="relative inline-flex flex-col items-start">
      <Button
        type="button"
        variant="secondary"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {value ? strings.signature.signed : strings.signature.sign}
        <span
          aria-hidden
          data-open={isOpen ? "true" : undefined}
          className={cn(
            "inline-block size-0 border-x-[0.25rem] border-t-[0.35rem] border-x-transparent border-t-fg-tertiary transition-transform duration-100",
            isOpen && "rotate-180",
          )}
        />
      </Button>
      {isOpen ? (
        <div
          id={`${id}-dropdown`}
          className="dropdown-menu-shadow absolute top-[calc(100%+0.5rem)] left-0 z-10 flex w-[300px] flex-col overflow-hidden rounded-lg border border-border-primary bg-bg-primary"
        >
          <div className="relative">
            <BaseSignatureInput
              className="block h-auto w-full cursor-crosshair touch-none rounded-none border-0 bg-bg-primary outline-none aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
              key={signatureVersion}
              id={id}
              value={value}
              disabled={disabled}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              onChange={onChange}
            />
            {!disabled && value != undefined ? (
              <div className="absolute top-2 right-2 z-[1]">
                <IconButton
                  icon="×"
                  onClick={handleClear}
                  label={strings.signature.clearAction}
                />
              </div>
            ) : undefined}
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
