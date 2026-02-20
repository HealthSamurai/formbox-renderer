import type { FlyoverProperties } from "@formbox/theme";

export function Flyover({ id, children }: FlyoverProperties) {
  return (
    <div className="nhsuk-hint" id={id}>
      {children}
    </div>
  );
}
