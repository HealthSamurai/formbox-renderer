import type { StackProperties } from "@formbox/theme";

export function Stack({ children }: StackProperties) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
