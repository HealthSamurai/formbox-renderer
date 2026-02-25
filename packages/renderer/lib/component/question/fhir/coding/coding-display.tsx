import type { ValueDisplayProperties } from "../../../../types.ts";

export function CodingDisplay({ value }: ValueDisplayProperties<"coding">) {
  return <>{value.display ?? value.code ?? ""}</>;
}
