import { useStrings, type ErrorsProperties } from "@formbox/theme";
import { Alert } from "antd";

export function Errors({ id, messages }: ErrorsProperties) {
  const strings = useStrings();

  if (messages.length === 0) {
    return;
  }

  return (
    <div id={id}>
      <Alert
        type="error"
        showIcon
        message={strings.errors.issuesTitle}
        description={
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            {messages.map((message, index) => (
              <li key={`${index}-${message}`}>{message}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
}
