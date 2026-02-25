import { useStrings, type CustomOptionFormProperties } from "@formbox/theme";
import { Button, Card, Space } from "antd";

export function CustomOptionForm({
  content,
  errors,
  onCancel,
  onSubmit,
  canSubmit,
}: CustomOptionFormProperties) {
  const strings = useStrings();

  return (
    <Card size="small">
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
        {content}
        {errors}
        <Space wrap>
          <Button
            type="primary"
            onClick={onSubmit}
            disabled={canSubmit === false}
          >
            {strings.dialog.submit}
          </Button>
          <Button onClick={onCancel}>{strings.dialog.cancel}</Button>
        </Space>
      </Space>
    </Card>
  );
}
