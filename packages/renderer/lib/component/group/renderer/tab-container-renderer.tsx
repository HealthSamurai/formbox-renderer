import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { TabContainerControl } from "../control/tab-container-control.tsx";

export const TabContainerRenderer = observer(function TabContainerRenderer({
  node,
}: GroupRendererProperties) {
  return <TabContainerControl node={node} />;
});
