import type { ComponentType } from "react";

export type SignatureInputProperties = {
  value: string | undefined;
  id: string;
  ariaLabelledBy?: string | undefined;
  ariaDescribedBy?: string | undefined;
  disabled?: boolean | undefined;
  onChange?: ((value?: string) => void) | undefined;
};

export type SignatureInputComponent = ComponentType<SignatureInputProperties>;
