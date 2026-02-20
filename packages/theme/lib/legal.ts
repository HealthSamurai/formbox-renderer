import type { ComponentType, ReactNode } from "react";

export type LegalProperties = {
  id: string;
  children: ReactNode;
};

export type LegalComponent = ComponentType<LegalProperties>;
