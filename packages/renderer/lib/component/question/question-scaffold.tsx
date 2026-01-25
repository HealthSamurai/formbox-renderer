import type { ReactNode } from "react";
import { observer } from "mobx-react-lite";

import type { IQuestionNode } from "../../types.ts";
import { NodeHeader } from "../node/node-header.tsx";
import { useTheme } from "../../ui/theme.tsx";
import { renderErrors } from "../node/errors.tsx";

export type QuestionScaffoldProperties = {
  node: IQuestionNode;
  children: ReactNode;
};

export const QuestionScaffold = observer(function QuestionScaffold({
  node,
  children,
}: QuestionScaffoldProperties) {
  const { QuestionScaffold: ThemedQuestionScaffold } = useTheme();

  return (
    <ThemedQuestionScaffold
      linkId={node.linkId}
      header={
        node.isHeaderless ? undefined : <NodeHeader node={node} as="label" />
      }
      errors={renderErrors(node)}
    >
      {children}
    </ThemedQuestionScaffold>
  );
});
