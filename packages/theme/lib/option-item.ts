import type { ReactNode } from "react";

export type OptionItem = {
  token: string;
  label: ReactNode;
  disabled: boolean;
  exclusive: boolean;
  // One text per column when the select has `columns`.
  cells?: readonly string[] | undefined;
};

export type OptionColumn = {
  label: string | undefined;
  // CSS width (e.g. "20%", "120px"); undefined shares the remaining space.
  width: string | undefined;
};

export type SelectedOptionItem = OptionItem & {
  ariaDescribedBy?: string | undefined;
  errors?: ReactNode;
};
