import type { OptionDisplayProperties } from "@formbox/theme";

export function OptionDisplay({ children, prefix }: OptionDisplayProperties) {
  if (!prefix) {
    return children;
  }

  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
      <span style={{ fontWeight: 600 }}>{prefix}</span>
      {children}
    </span>
  );
}
