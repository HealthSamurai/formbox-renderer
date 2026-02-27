import {
  useStrings,
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { styled } from "@linaria/react";
import { useCallback, useState } from "react";
import { IconButton } from "./icon-button.tsx";

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
    <Wrapper>
      <ActionButton
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {value ? strings.signature.signed : strings.signature.sign}
        <Chevron aria-hidden data-open={isOpen ? "true" : undefined} />
      </ActionButton>
      {isOpen ? (
        <Dropdown id={`${id}-dropdown`}>
          <Surface>
            <StyledSignatureInput
              key={signatureVersion}
              id={id}
              value={value}
              disabled={disabled}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              onChange={onChange}
            />
            {!disabled && value != undefined ? (
              <ClearButtonSlot>
                <IconButton
                  icon="×"
                  onClick={handleClear}
                  label={strings.signature.clearAction}
                />
              </ClearButtonSlot>
            ) : undefined}
          </Surface>
        </Dropdown>
      ) : undefined}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ActionButton = styled.button`
  cursor: pointer;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e0;
  background: #edf2f7;
  color: #1a202c;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.2;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Chevron = styled.span`
  display: inline-block;
  inline-size: 0;
  block-size: 0;
  border-inline-start: 0.25rem solid transparent;
  border-inline-end: 0.25rem solid transparent;
  border-block-start: 0.35rem solid #718096;
  transform-origin: center;
  transition: transform 120ms ease;

  &[data-open="true"] {
    transform: rotate(180deg);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 10;
  width: ${SIGNATURE_WIDTH}px;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Surface = styled.div`
  position: relative;
`;

const StyledSignatureInput = styled(BaseSignatureInput)`
  border: none;
  border-radius: 0;
  background: #ffffff;
  display: block;
  width: 100%;
  height: auto;
  touch-action: none;
  cursor: crosshair;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
const ClearButtonSlot = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
`;
