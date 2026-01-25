import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { SelectionTableControl } from "../control/selection-table-control.tsx";

export const SelectionTableRenderer = observer(function SelectionTableRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <SelectionTableControl node={node} />
    </GroupScaffold>
  );
});
