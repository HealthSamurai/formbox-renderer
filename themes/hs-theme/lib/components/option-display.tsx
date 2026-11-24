import type { OptionDisplayProperties } from "@formbox/theme";
import { Media } from "./media.tsx";

export function OptionDisplay({
  children,
  prefix,
  media,
}: OptionDisplayProperties) {
  return (
    <span className="inline-flex min-w-0 flex-col items-start gap-2">
      <span className="max-w-[min(24rem,100%)] empty:hidden [[data-slot=multi-select-chip]_&]:hidden [[data-slot=select-display]_&]:hidden">
        {media && <Media attachment={media} />}
      </span>
      <span className="inline-flex min-w-0 items-baseline gap-1">
        {prefix && <span className="font-semibold">{prefix}</span>}
        {children}
      </span>
    </span>
  );
}
