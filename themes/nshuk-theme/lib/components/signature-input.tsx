import {
  useStrings,
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { styled } from "@linaria/react";
import { useCallback, useState } from "react";

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
      <TriggerButton
        type="button"
        className="nhsuk-button nhsuk-button--secondary"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {value ? strings.signature.signed : strings.signature.sign}
      </TriggerButton>
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
                <button
                  type="button"
                  className="nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-u-margin-bottom-0"
                  onClick={handleClear}
                  aria-label={strings.signature.clearAction}
                >
                  ×
                </button>
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

const TriggerButton = styled.button`
  margin: 0;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: var(--nhsuk-z-index-dropdown);
  width: ${SIGNATURE_WIDTH}px;
  border: 1px solid #b1b4b6;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
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
  top: 8px;
  right: 8px;
  z-index: 1;
  & > button {
    min-width: 0;
    padding-right: 8px;
    padding-left: 8px;
  }
`;
