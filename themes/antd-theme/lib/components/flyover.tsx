import { useStrings, type FlyoverProperties } from "@formbox/theme";
import { Button, Tooltip } from "antd";

export function Flyover({ id, children }: FlyoverProperties) {
  const strings = useStrings();

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <Tooltip title={children} placement="top">
        <Button
          type="text"
          size="small"
          shape="circle"
          aria-label={strings.aria.flyover}
          aria-describedby={id}
        >
          !
        </Button>
      </Tooltip>
      <span id={id} className="ab-antd-sr-only">
        {children}
      </span>
    </span>
  );
}
