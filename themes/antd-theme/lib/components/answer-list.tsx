import { useStrings, type AnswerListProperties } from "@formbox/theme";
import { Button, Space } from "antd";

export function AnswerList({ children, onAdd, canAdd }: AnswerListProperties) {
  const strings = useStrings();

  return (
    <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
      {children}
      {onAdd && (
        <Button onClick={onAdd} disabled={canAdd === false}>
          {strings.selection.addAnother}
        </Button>
      )}
    </Space>
  );
}
