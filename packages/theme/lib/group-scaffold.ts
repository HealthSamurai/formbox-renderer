import type { ComponentType, ReactNode } from "react";

export type GroupScaffoldProperties = {
  header?: ReactNode;
  children?: ReactNode;
  errors?: ReactNode;
  signature?: ReactNode;
  isExpanded: boolean;
  onRemove?: (() => void) | undefined;
  canRemove?: boolean | undefined;
};

export type GroupScaffoldComponent = ComponentType<GroupScaffoldProperties>;
