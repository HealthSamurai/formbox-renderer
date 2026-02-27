import { useStrings, type GroupScaffoldProperties } from "@formbox/theme";
import { Button, Space } from "antd";
import { Collapsible } from "./collapsible.tsx";

export function GroupScaffold({
  header,
  children,
  signature,
  errors,
  isExpanded,
  onRemove,
  canRemove,
}: GroupScaffoldProperties) {
  const strings = useStrings();

  return (
    <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {onRemove ? (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {signature}
          <Button
            type="text"
            danger
            onClick={onRemove}
            disabled={canRemove === false}
          >
            {strings.group.removeSection}
          </Button>
        </div>
      ) : (
        signature
      )}
    </Space>
  );
}
