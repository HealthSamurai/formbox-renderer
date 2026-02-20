import type { HelpProperties } from "@formbox/theme";

export function Help({ id, children }: HelpProperties) {
  return (
    <div className="nhsuk-hint" id={id}>
      {children}
    </div>
  );
}
