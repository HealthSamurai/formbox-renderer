import { useStrings } from "@formbox/theme";
import { QuestionScaffold } from "../question-scaffold.tsx";
import type { QuestionRendererProperties } from "../../../types.ts";
import { formatString } from "../../../utilities.ts";

export function UnsupportedRenderer({ node }: QuestionRendererProperties) {
  const strings = useStrings();
  return (
    <QuestionScaffold node={node}>
      {formatString(strings.unsupported.itemType, { type: node.type })}
    </QuestionScaffold>
  );
}
