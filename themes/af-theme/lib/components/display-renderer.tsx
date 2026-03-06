import type { DisplayRendererProperties } from "@formbox/theme";

export function DisplayRenderer({
  linkId,
  children,
}: DisplayRendererProperties) {
  return (
    <div
      data-linkid={linkId}
      className="break-words py-2.5 text-[var(--base-font-size,0.875rem)] text-slate-700"
    >
      {children}
    </div>
  );
}
