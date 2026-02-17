import { observer } from "mobx-react-lite";

import type { GroupListRendererProperties } from "../../../types.ts";
import { NodeHeader } from "../../node/node-header.tsx";
import { useTheme } from "../../../ui/theme.tsx";
import { GridTableControl } from "../control/grid-table-control.tsx";
import { renderErrors } from "../../node/errors.tsx";

export const GridTableListRenderer = observer(function GridTableListRenderer({
  node,
}: GroupListRendererProperties) {
  const { GroupScaffold: ThemedGroupScaffold } = useTheme();
  const header =
    node.text || node.shortText ? (
      <NodeHeader node={node} as="legend" />
    ) : undefined;

  return (
    <ThemedGroupScaffold header={header} errors={renderErrors(node)}>
      <GridTableControl list={node} />
    </ThemedGroupScaffold>
  );
});
