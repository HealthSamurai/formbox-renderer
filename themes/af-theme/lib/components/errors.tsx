import type { ErrorsProperties } from "@formbox/theme";

export function Errors({ id, messages }: ErrorsProperties) {
  if (messages.length === 0) return;
  return (
    <ul
      id={id}
      role="alert"
      className="flex list-none flex-col gap-1 p-0 text-sm text-red-500"
    >
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}
