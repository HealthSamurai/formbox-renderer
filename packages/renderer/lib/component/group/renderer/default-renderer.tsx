import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { DefaultControl } from "../control/default-control.tsx";

export const DefaultRenderer = observer(function DefaultRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <DefaultControl node={node} />
    </GroupScaffold>
  );
});
