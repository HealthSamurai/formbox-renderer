import { observer } from "mobx-react-lite";

import type { GroupListRendererProperties } from "../../../types.ts";
import { NodeErrors } from "../../node/node-errors.tsx";
import { NodeHeader } from "../../node/node-header.tsx";
import { useTheme } from "../../../ui/theme.tsx";
import { GridTableControl } from "../control/grid-table-control.tsx";

export const GridTableListRenderer = observer(function GridTableListRenderer({
  node,
}: GroupListRendererProperties) {
  const { GroupScaffold: ThemedGroupScaffold } = useTheme();
  const header = node.template.text ? (
    <NodeHeader node={node} as="legend" />
  ) : undefined;

  return (
    <ThemedGroupScaffold header={header} errors={<NodeErrors node={node} />}>
      <GridTableControl list={node} />
    </ThemedGroupScaffold>
  );
});
