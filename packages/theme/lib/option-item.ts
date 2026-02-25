import type { ReactNode } from "react";

export type OptionItem = {
  token: string;
  label: ReactNode;
  disabled: boolean;
  exclusive: boolean;
};

export type SelectedOptionItem = OptionItem & {
  ariaDescribedBy?: string | undefined;
  errors?: ReactNode;
};
