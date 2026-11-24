import type { FooterProperties } from "@formbox/theme";

export function Footer({ linkId, children }: FooterProperties) {
  return (
    <div className="flex flex-col gap-4" data-linkid={linkId}>
      {children}
    </div>
  );
}
