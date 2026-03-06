import { Children } from "react";
import type { InputGroupProperties } from "@formbox/theme";

export function InputGroup({ children, spans }: InputGroupProperties) {
  const items = Children.toArray(children);
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((child, index) => (
        <div
          key={index}
          style={{
            flex: `${spans[index]} 1 0`,
            minWidth: "min(100%, max-content)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
