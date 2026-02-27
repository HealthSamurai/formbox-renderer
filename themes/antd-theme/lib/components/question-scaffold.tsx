import type { QuestionScaffoldProperties } from "@formbox/theme";
import { Space } from "antd";
import { Collapsible } from "./collapsible.tsx";

export function QuestionScaffold({
  linkId,
  header,
  children,
  signature,
  errors,
  isExpanded,
}: QuestionScaffoldProperties) {
  return (
    <div data-linkid={linkId}>
      <Space orientation="vertical" size="small" style={{ width: "100%" }}>
        {header}
        <Collapsible isExpanded={isExpanded}>{children}</Collapsible>
        {errors}
        {signature}
      </Space>
    </div>
  );
}
