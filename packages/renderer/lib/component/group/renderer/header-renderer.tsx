import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { HeaderControl } from "../control/header-control.tsx";

export const HeaderRenderer = observer(function HeaderRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <HeaderControl node={node} />
    </GroupScaffold>
  );
});
