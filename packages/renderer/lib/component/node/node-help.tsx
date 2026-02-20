import { observer } from "mobx-react-lite";
import type { IPresentableNode } from "../../types.ts";
import { getNodeHelpId } from "../../utilities.ts";
import { useTheme } from "../../ui/theme.tsx";

export const NodeHelp = observer(function NodeHelp({
  node,
}: {
  node: IPresentableNode;
}) {
  const { Help: ThemedHelp } = useTheme();
  const id = getNodeHelpId(node);

  return id ? <ThemedHelp id={id}>{node.help}</ThemedHelp> : undefined;
});
