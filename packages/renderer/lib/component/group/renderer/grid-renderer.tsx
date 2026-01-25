import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { GridControl } from "../control/grid-control.tsx";

export const GridRenderer = observer(function GridRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <GridControl node={node} />
    </GroupScaffold>
  );
});
