import type { ComponentType, ReactNode } from "react";

export type GroupListProperties = {
  linkId: string;
  header?: ReactNode;
  children: ReactNode;
  onAdd?: (() => void) | undefined;
  canAdd?: boolean | undefined;
};

export type GroupListComponent = ComponentType<GroupListProperties>;
