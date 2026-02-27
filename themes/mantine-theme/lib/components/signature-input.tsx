import {
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { Button, CloseButton, Popover } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
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
  const [signatureVersion, setSignatureVersion] = useState(0);
  const [opened, setOpened] = useState(false);

  const handleClear = useCallback(() => {
    if (disabled) {
      return;
    }
    onChange?.();
    setSignatureVersion((previous) => previous + 1);
  }, [disabled, onChange]);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom-start"
      shadow="md"
      withinPortal={false}
    >
      <Popover.Target>
        <Button
          variant="outline"
          disabled={Boolean(disabled)}
          aria-haspopup="dialog"
          aria-expanded={opened}
          aria-controls={`${id}-dropdown`}
          onClick={() => setOpened((value_) => !value_)}
          leftSection={<IconPencil size={16} stroke={1.8} aria-hidden />}
        >
          {value ? "Signed" : "Sign"}
        </Button>
      </Popover.Target>
      <Popover.Dropdown id={`${id}-dropdown`} p={0}>
        <Dropdown>
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
                <CloseButton
                  variant="default"
                  size="sm"
                  onClick={handleClear}
                  aria-label="Clear signature"
                />
              </ClearButtonSlot>
            ) : undefined}
          </Surface>
        </Dropdown>
      </Popover.Dropdown>
    </Popover>
  );
}

const Dropdown = styled.div`
  width: ${SIGNATURE_WIDTH}px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
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
  top: 6px;
  right: 6px;
  z-index: 1;
`;
