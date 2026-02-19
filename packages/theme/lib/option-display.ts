import type { ComponentType, ReactNode } from "react";

export type OptionDisplayProperties = {
  children: ReactNode;
  prefix?: string | undefined;
};

export type OptionDisplayComponent = ComponentType<OptionDisplayProperties>;
