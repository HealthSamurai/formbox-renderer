import type { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import type { IGroupNode } from "../../types.ts";
import { NodeHeader } from "../node/node-header.tsx";
import { renderErrors } from "../node/errors.tsx";
import { useTheme } from "../../ui/theme.tsx";

export const GroupScaffold = observer(function GroupScaffold({
  node,
  children,
  onRemove,
  canRemove,
  removeLabel,
}: {
  node: IGroupNode;
  children?: ReactNode;
  onRemove?: (() => void) | undefined;
  canRemove?: boolean | undefined;
  removeLabel?: string | undefined;
}) {
  const { GroupScaffold: ThemedGroupScaffold } = useTheme();

  const header = node.isHeaderless ? undefined : (
    <NodeHeader node={node} as="legend" />
  );
  return (
    <ThemedGroupScaffold
      header={header}
      errors={renderErrors(node)}
      onRemove={onRemove}
      canRemove={canRemove}
      removeLabel={removeLabel}
    >
      {children}
    </ThemedGroupScaffold>
  );
});
