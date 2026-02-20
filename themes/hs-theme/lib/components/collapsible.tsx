import type { ReactNode } from "react";

export function Collapsible({
  isExpanded,
  children,
}: {
  isExpanded: boolean;
  children: ReactNode;
}) {
  return isExpanded && children;
}
