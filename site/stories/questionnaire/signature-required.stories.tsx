import type { Meta, StoryObj } from "@storybook/react-vite";
import { Renderer } from "../renderer.tsx";
import group from "./samples/signature-required/group.json" with { type: "json" };
import question from "./samples/signature-required/question.json" with { type: "json" };
import questionnaire from "./samples/signature-required/questionnaire.json" with { type: "json" };
import repeatingGroup from "./samples/signature-required/repeating-group.json" with { type: "json" };
import repeatingQuestion from "./samples/signature-required/repeating-question.json" with { type: "json" };

import type { QuestionnaireOf } from "@formbox/renderer";

type Questionnaire = QuestionnaireOf<"r5">;

type PlaygroundArguments = {
  questionnaire: Questionnaire;
};

const meta = {
  title: "Questionnaires/Signature required",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    questionnaire: {
      control: { type: "object" },
      description: "Input questionnaire",
    },
  },
} satisfies Meta<PlaygroundArguments>;

export default meta;

function makeStory(
  label: string,
  questionnaireInput: Questionnaire,
): StoryObj<PlaygroundArguments> {
  return {
    name: label,
    args: { questionnaire: questionnaireInput },
    render: (arguments_, context) => {
      return (
        <Renderer
          fhirVersion="r5"
          questionnaire={arguments_.questionnaire}
          storyId={context.id}
          mode="form"
        />
      );
    },
  };
}

export const Questionnaire = makeStory(
  "Questionnaire",
  questionnaire as Questionnaire,
);

export const Group = makeStory("Group", group as Questionnaire);

export const RepeatingGroup = makeStory(
  "Repeating group",
  repeatingGroup as Questionnaire,
);

export const Question = makeStory("Question", question as Questionnaire);

export const RepeatingQuestion = makeStory(
  "Repeating question",
  repeatingQuestion as Questionnaire,
);
