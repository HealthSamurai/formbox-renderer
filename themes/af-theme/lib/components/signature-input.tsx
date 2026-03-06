import {
  useStrings,
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { useCallback, useState } from "react";
import { IconButton } from "./icon-button.tsx";
import { secondaryButtonClass } from "./tokens.ts";

const SIGNATURE_WIDTH = 300;

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
      <button
        type="button"
        className={[secondaryButtonClass, "leading-tight"].join(" ")}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {value ? strings.signature.signed : strings.signature.sign}
        <i
          aria-hidden
          data-open={isOpen ? "true" : undefined}
          className="fa-solid fa-chevron-down text-[10px] transition-transform data-[open=true]:rotate-180"
        />
      </button>
      {isOpen ? (
        <div
          id={`${id}-dropdown`}
          className="absolute left-0 top-[calc(100%+0.5rem)] z-10 w-[300px] overflow-hidden rounded-lg border border-slate-300 bg-white shadow-lg"
          style={{ width: SIGNATURE_WIDTH }}
        >
          <div className="relative">
            <BaseSignatureInput
              key={signatureVersion}
              id={id}
              value={value}
              disabled={disabled}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              onChange={onChange}
              className="block h-auto w-full touch-none border-none bg-white"
            />
            {!disabled && value != undefined ? (
              <div className="absolute right-2 top-2 z-[1]">
                <IconButton
                  icon={<i aria-hidden className="fa-solid fa-xmark" />}
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
