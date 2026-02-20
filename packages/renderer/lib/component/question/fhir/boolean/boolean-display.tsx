import { useStrings } from "@formbox/theme";
import type { ValueDisplayProperties } from "../../../../types.ts";

export function BooleanDisplay({ value }: ValueDisplayProperties<"boolean">) {
  const strings = useStrings();
  return <>{value ? strings.value.yes : strings.value.no}</>;
}
