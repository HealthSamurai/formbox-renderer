import type { LegalProperties } from "@formbox/theme";

export function Legal({ id, children }: LegalProperties) {
  return (
    <div className="nhsuk-hint" id={id}>
      {children}
    </div>
  );
}
