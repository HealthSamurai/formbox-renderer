import type { GroupScaffoldProperties } from "@formbox/theme";
import { Button, Space } from "antd";
import { Collapsible } from "./collapsible.tsx";

export function GroupScaffold({
  header,
  children,
  errors,
  isExpanded,
  onRemove,
  canRemove,
  removeLabel,
}: GroupScaffoldProperties) {
  return (
    <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
      {header}
      <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
      {errors}
      {onRemove && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="text"
            danger
            onClick={onRemove}
            disabled={canRemove === false}
          >
            {removeLabel ?? "Remove"}
          </Button>
        </div>
      )}
    </Space>
  );
}
