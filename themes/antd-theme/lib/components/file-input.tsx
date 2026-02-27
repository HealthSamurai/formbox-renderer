import { useStrings, type FileInputProperties } from "@formbox/theme";
import { Button, Space, Typography } from "antd";
import { useRef, type ChangeEvent } from "react";

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
  const fileInputReference = useRef<HTMLInputElement | null>(null);
  const hasValue = value != undefined;
  const displayLabel =
    value?.title ??
    value?.url ??
    (hasValue ? strings.inputs.attachmentSelected : strings.file.chooseAction);
  const displaySizeLabel =
    value?.size == undefined
      ? ""
      : strings.file.sizeLabel.replace(
          "{sizeKb}",
          String(Math.round(value.size / 1024)),
        );
  const textProperties = hasValue ? {} : ({ type: "secondary" } as const);

  const handlePickFile = () => {
    if (disabled === true) return;
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

  return (
    <Space align="center" wrap>
      <input
        ref={fileInputReference}
        id={id}
        type="file"
        onChange={handleFileChange}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled === true}
        accept={accept}
        style={{ display: "none" }}
      />
      <Button onClick={handlePickFile} disabled={disabled === true}>
        {hasValue ? strings.file.replaceAction : strings.file.chooseAction}
      </Button>
      <Typography.Text {...textProperties}>
        {displayLabel}
        {displaySizeLabel ? ` (${displaySizeLabel})` : ""}
      </Typography.Text>
      {hasValue && (
        <Button
          type="text"
          danger
          onClick={() => onChange?.()}
          disabled={disabled === true}
        >
          {strings.file.clearAction}
        </Button>
      )}
    </Space>
  );
}
