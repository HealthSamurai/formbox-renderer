import type { OptionDisplayProperties } from "@formbox/theme";

export function OptionDisplay({ children, prefix }: OptionDisplayProperties) {
  if (!prefix) {
    return children;
  }

  return (
    <>
      <span className="nhsuk-label__prefix">{prefix} </span>
      {children}
    </>
  );
}
