import { observer } from "mobx-react-lite";

import type { GroupListRendererProperties } from "../../../types.ts";
import { NodeHeader } from "../../node/node-header.tsx";
import { GroupScaffold } from "../group-scaffold.tsx";
import { useTheme } from "../../../ui/theme.tsx";
import { strings } from "../../../strings.ts";

export const DefaultListRenderer = observer(function DefaultListRenderer({
  node,
}: GroupListRendererProperties) {
  const { GroupList: ThemedGroupList } = useTheme();
  const header = node.template.text ? (
    <NodeHeader node={node} as="legend" />
  ) : undefined;
  return (
    <ThemedGroupList
      linkId={node.linkId}
      header={header}
      onAdd={() => node.addNode()}
      canAdd={node.canAdd}
      addLabel={strings.group.addSection}
    >
      {node.visibleNodes.map((child) => {
        const Renderer = child.renderer;
        if (!Renderer) {
          return;
        }

        return (
          <GroupScaffold
            key={child.token}
            node={child}
            onRemove={node.canRemove ? () => node.removeNode(child) : undefined}
            canRemove={node.canRemove}
            removeLabel={strings.group.removeSection}
          >
            <Renderer node={child} />
          </GroupScaffold>
        );
      })}
    </ThemedGroupList>
  );
});
