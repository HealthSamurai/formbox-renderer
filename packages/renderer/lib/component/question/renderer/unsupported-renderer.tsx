import { useStrings } from "@formbox/theme";
import { QuestionScaffold } from "../question-scaffold.tsx";
import type { QuestionRendererProperties } from "../../../types.ts";

export function UnsupportedRenderer({ node }: QuestionRendererProperties) {
  const strings = useStrings();
  return (
    <QuestionScaffold node={node}>
      {strings.unsupported.itemType} {node.type}
    </QuestionScaffold>
  );
}
