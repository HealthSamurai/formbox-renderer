import type { ReactNode } from "react";
import { Button } from "@health-samurai/react-components";

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
    <Button
      type="button"
      variant="secondary"
      size="small"
      className="size-8 px-0"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
    >
      {icon}
    </Button>
  );
}
