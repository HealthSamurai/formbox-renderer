import type { ComponentType, ReactNode } from "react";
import type { Attachment } from "./file-input.ts";

export type LabelAs = "legend" | "label" | "text";

export type Hyperlink = {
  href: string;
  label: string | undefined;
};

export type LabelProperties = {
  prefix?: ReactNode;
  shortText?: string | undefined;
  supportHyperlinks?: ReadonlyArray<Hyperlink> | undefined;
  media?: Attachment | undefined;
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
