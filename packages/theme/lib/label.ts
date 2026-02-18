import type { ComponentType, ReactNode } from "react";
import type { Attachment } from "./file-input.ts";

export type LabelAs = "legend" | "label" | "text";

export type LabelProperties = {
  prefix?: ReactNode;
  shortText?: string | undefined;
  itemMedia?: Attachment | undefined;
  children: ReactNode;
  id: string;
  htmlFor?: string | undefined;
  required?: boolean | undefined;
  help?: ReactNode;
  legal?: ReactNode;
  flyover?: ReactNode;
  as?: LabelAs | undefined;
};

export type LabelComponent = ComponentType<LabelProperties>;
