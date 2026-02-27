import type { Meta, StoryObj } from "@storybook/react-vite";
import { Renderer } from "../renderer.tsx";
import usageModeQuestionnaire from "./samples/usage-mode.json" with { type: "json" };

import type {
  QuestionnaireOf,
  QuestionnaireResponseOf,
  RenderMode,
} from "@formbox/renderer";

type Questionnaire = QuestionnaireOf<"r5">;
type QuestionnaireResponse = QuestionnaireResponseOf<"r5">;

type PlaygroundArguments = {
  questionnaire: Questionnaire;
  formMode: RenderMode;
};

const meta = {
  title: "Questionnaires",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    questionnaire: {
      control: { type: "object" },
      description: "Input questionnaire",
    },
    formMode: {
      control: { type: "radio" },
      options: ["capture", "display"],
      description: "Form mode passed to renderer store.",
    },
  },
} satisfies Meta<PlaygroundArguments>;

export default meta;

const partialCompletedResponse: QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse",
  status: "completed",
  questionnaire: "Questionnaire/usage-mode-showcase",
  item: [
    {
      linkId: "shared-chief-complaint",
      answer: [{ valueString: "Persistent knee pain when climbing stairs." }],
    },
    {
      linkId: "review-assessment-note",
      answer: [
        {
          valueString:
            "Pain improved after physiotherapy; continue current plan.",
        },
      ],
    },
    {
      linkId: "plan-home-care",
      answer: [
        { valueString: "Daily stretching and reassessment in 2 weeks." },
      ],
    },
  ],
};

export const UsageMode: StoryObj<PlaygroundArguments> = {
  name: "Usage mode",
  args: {
    questionnaire: usageModeQuestionnaire as Questionnaire,
    formMode: "capture",
  },
  render: (arguments_, context) => {
    return (
      <Renderer
        fhirVersion="r5"
        questionnaire={arguments_.questionnaire}
        defaultQuestionnaireResponse={partialCompletedResponse}
        formMode={arguments_.formMode}
        storyId={context.id}
        mode="form"
      />
    );
  },
};
