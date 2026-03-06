import type { ReactNode } from "react";
import { helperIconButtonClass } from "./tokens.ts";

export type IconButtonProperties = {
  icon: ReactNode;
  onClick: () => void;
  disabled?: boolean | undefined;
  label: string;
};

export function IconButton({
  icon,
  onClick,
  disabled,
  label,
}: IconButtonProperties) {
  return (
    <button
      type="button"
      className={helperIconButtonClass}
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
