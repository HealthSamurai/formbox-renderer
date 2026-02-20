import { observer } from "mobx-react-lite";
import type { IPresentableNode } from "../../types.ts";
import { getNodeLegalId } from "../../utilities.ts";
import { useTheme } from "../../ui/theme.tsx";

export const NodeLegal = observer(function NodeLegal({
  node,
}: {
  node: IPresentableNode;
}) {
  const { Legal: ThemedLegal } = useTheme();

  if (!node.legal) {
    return;
  }

  const legalId = getNodeLegalId(node);

  return <ThemedLegal id={legalId}>{node.legal}</ThemedLegal>;
});
