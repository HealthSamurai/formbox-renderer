import { observer } from "mobx-react-lite";
import { DisplayRenderer } from "../display/display-renderer.tsx";
import { IPresentableNode } from "../../types.ts";
import { isDisplayNode } from "../../store/display/display-store.ts";
import { isGroupListStore } from "../../store/group/group-list-store.ts";
import { isGroupNode } from "../../store/group/group-store.ts";
import { isQuestionNode } from "../../store/question/question-store.ts";
import { CustomItemExtensionsProvider } from "@formbox/theme";

export const Node = observer(function Node({
  node,
}: {
  node: IPresentableNode;
}) {
  const nodeExtensions = node.customExtensions;

  if (isQuestionNode(node)) {
    const Renderer = node.renderer;
    return Renderer ? (
      <CustomItemExtensionsProvider value={nodeExtensions}>
        <Renderer node={node} />
      </CustomItemExtensionsProvider>
    ) : undefined;
  }
  if (isGroupNode(node)) {
    const Renderer = node.renderer;
    return Renderer ? (
      <CustomItemExtensionsProvider value={nodeExtensions}>
        <Renderer node={node} />
      </CustomItemExtensionsProvider>
    ) : undefined;
  }
  if (isGroupListStore(node)) {
    const Renderer = node.renderer;
    return Renderer ? (
      <CustomItemExtensionsProvider value={nodeExtensions}>
        <Renderer node={node} />
      </CustomItemExtensionsProvider>
    ) : undefined;
  }
  if (isDisplayNode(node)) {
    return (
      <CustomItemExtensionsProvider value={nodeExtensions}>
        <DisplayRenderer node={node} />
      </CustomItemExtensionsProvider>
    );
  }
  return;
});
