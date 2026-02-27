import { useStrings, type ErrorsProperties } from "@formbox/theme";

export function Errors({ id, messages }: ErrorsProperties) {
  const strings = useStrings();

  if (messages.length === 0) return;

  return (
    <div id={id}>
      {messages.map((message, index) => (
        <span className="nhsuk-error-message" key={index}>
          <span className="nhsuk-u-visually-hidden">
            {strings.errors.issueMessage.replace("{message}", message)}
          </span>
          <span aria-hidden="true">{message}</span>
        </span>
      ))}
    </div>
  );
}
