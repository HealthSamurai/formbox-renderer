import { observer } from "mobx-react-lite";

import type { GroupRendererProperties } from "../../../types.ts";
import { GroupScaffold } from "../group-scaffold.tsx";
import { FooterControl } from "../control/footer-control.tsx";

export const FooterRenderer = observer(function FooterRenderer({
  node,
}: GroupRendererProperties) {
  return (
    <GroupScaffold node={node}>
      <FooterControl node={node} />
    </GroupScaffold>
  );
});
