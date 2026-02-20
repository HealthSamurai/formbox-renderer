import type { ComponentType, ReactNode } from "react";

export type HelpProperties = {
  id: string;
  children: ReactNode;
};

export type HelpComponent = ComponentType<HelpProperties>;
