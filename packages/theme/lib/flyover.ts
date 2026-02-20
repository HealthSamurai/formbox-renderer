import type { ComponentType, ReactNode } from "react";

export type FlyoverProperties = {
  id: string;
  children: ReactNode;
};

export type FlyoverComponent = ComponentType<FlyoverProperties>;
