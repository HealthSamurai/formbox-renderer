import type { DisplayRendererProperties } from "@formbox/theme";

export function DisplayRenderer({
  linkId,
  children,
}: DisplayRendererProperties) {
  return (
    <div className="typo-body py-1 text-text-primary" data-linkid={linkId}>
      {children}
    </div>
  );
}
