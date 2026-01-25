import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { PageControl } from "../control/page-control.tsx";

export const PageRenderer = observer(function PageRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <PageControl node={node} />
    </GroupScaffold>
  );
});
