import type { HeaderProperties } from "@formbox/theme";

export function Header({ linkId, children }: HeaderProperties) {
  return (
    <div className="flex flex-col gap-4" data-linkid={linkId}>
      {children}
    </div>
  );
}
