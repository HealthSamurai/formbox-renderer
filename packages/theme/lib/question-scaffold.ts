import type { ComponentType, ReactNode } from "react";

export type QuestionScaffoldProperties = {
  linkId: string;
  header?: ReactNode;
  children: ReactNode;
  errors?: ReactNode;
  isExpanded: boolean;
};

export type QuestionScaffoldComponent =
  ComponentType<QuestionScaffoldProperties>;
