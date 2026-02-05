import { useEffect, useMemo } from "react";
import { styled } from "@linaria/react";
import type { IPresentableNode } from "@formbox/renderer/types.ts";
import { FormStore } from "@formbox/renderer/store/form/form-store.ts";
import { Form } from "@formbox/renderer/component/form/form.tsx";
import { Node } from "@formbox/renderer/component/node/node.tsx";
import {
  useQuestionnaireBroadcaster,
  useQuestionnaireResponseBroadcaster,
} from "./story-channel-hooks.ts";

import type { FhirVersion, QuestionnaireOf } from "@formbox/renderer";
type RendererMode = "node" | "form";

type RendererProperties<V extends FhirVersion = "r5"> = {
  questionnaire: QuestionnaireOf<V>;
  fhirVersion: V;
  storyId: string;
  mode: RendererMode;
};

export function Renderer<V extends FhirVersion = "r5">({
  questionnaire,
  fhirVersion,
  storyId,
  mode,
}: RendererProperties<V>) {
  const store = useMemo(
    () => new FormStore(fhirVersion, questionnaire, undefined, undefined),
    [fhirVersion, questionnaire],
  );

  useEffect(() => () => store.dispose(), [store]);

  useQuestionnaireResponseBroadcaster(store, storyId);
  useQuestionnaireBroadcaster(questionnaire, storyId);

  if (mode === "form") {
    return (
      <StoryFrame>
        <Form store={store} onSubmit={() => store.validateAll()} />
      </StoryFrame>
    );
  }

  if (store.nodes.length !== 1) {
    throw new Error(
      `Expected a single root node, but got ${store.nodes.length}.`,
    );
  }

  const node = store.nodes[0];
  return (
    <StoryFrame>
      <Node node={node as IPresentableNode} />
    </StoryFrame>
  );
}

const StoryFrame = styled.div`
  width: 100%;
  padding: 24px;
`;
