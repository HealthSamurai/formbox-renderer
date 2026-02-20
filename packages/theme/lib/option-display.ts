import type { ComponentType, ReactNode } from "react";
import type { Attachment } from "./file-input.ts";

export type OptionDisplayProperties = {
  children: ReactNode;
  prefix?: string | undefined;
  media?: Attachment | undefined;
};

export type OptionDisplayComponent = ComponentType<OptionDisplayProperties>;
