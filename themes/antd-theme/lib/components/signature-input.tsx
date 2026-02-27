import {
  type SignatureInputProperties,
  PerfectFreehand as BaseSignatureInput,
} from "@formbox/theme";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = useCallback(() => {
    if (disabled) {
      return;
    }
    onChange?.();
    setSignatureVersion((previous) => previous + 1);
  }, [disabled, onChange]);

  const dropdown = (
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
            <Button
              type="text"
              size="small"
              // shape="circle"
              icon={<CloseOutlined />}
              onClick={handleClear}
              aria-label="Clear signature"
            />
          </ClearButtonSlot>
        ) : undefined}
      </Surface>
    </Dropdown>
  );

  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      open={isOpen}
      onOpenChange={setIsOpen}
      content={dropdown}
      overlayInnerStyle={{ padding: 0, borderRadius: 8, overflow: "hidden" }}
    >
      <Button
        disabled={Boolean(disabled)}
        aria-haspopup="dialog"
        type="text"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        icon={<EditOutlined />}
      >
        {value ? "Signed" : "Sign"}
      </Button>
    </Popover>
  );
}

const Dropdown = styled.div`
  width: ${SIGNATURE_WIDTH}px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
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
