import { describe, expect, it } from "vitest";

import {
  R4QuestionnaireItemAdapter,
  R5QuestionnaireItemAdapter,
} from "../lib/index.ts";

describe("QuestionnaireItem adapters", () => {
  it("maps answerConstraint for R4 open-choice while R5 uses explicit field", () => {
    const r4Adapter = new R4QuestionnaireItemAdapter();
    const r5Adapter = new R5QuestionnaireItemAdapter();

    const openChoiceItem = {
      type: "open-choice",
    } as unknown as Parameters<
      R4QuestionnaireItemAdapter["getAnswerConstraint"]
    >[0];
    const plainItem = {
      type: "boolean",
    } as unknown as Parameters<
      R4QuestionnaireItemAdapter["getAnswerConstraint"]
    >[0];
    const r5Item = {} as Parameters<
      R5QuestionnaireItemAdapter["setAnswerConstraint"]
    >[0];

    expect(r4Adapter.getAnswerConstraint(openChoiceItem)).toBe(
      "optionsOrString",
    );
    expect(r4Adapter.getAnswerConstraint(plainItem)).toBeUndefined();

    r5Adapter.setAnswerConstraint(r5Item, "optionsOnly");
    expect(r5Adapter.getAnswerConstraint(r5Item)).toBe("optionsOnly");
  });

  it("maps R4 choice/open-choice to coding while R5 keeps coding directly", () => {
    const r4Adapter = new R4QuestionnaireItemAdapter();
    const r5Adapter = new R5QuestionnaireItemAdapter();

    const r4ChoiceItem = {
      type: "choice",
    } as unknown as Parameters<R4QuestionnaireItemAdapter["getType"]>[0];
    const r4OpenChoiceItem = {
      type: "open-choice",
    } as unknown as Parameters<R4QuestionnaireItemAdapter["getType"]>[0];
    const r5Item = {} as Parameters<R5QuestionnaireItemAdapter["setType"]>[0];
    const r4Target = {} as Parameters<R4QuestionnaireItemAdapter["setType"]>[0];

    expect(r4Adapter.getType(r4ChoiceItem)).toBe("coding");
    expect(r4Adapter.getType(r4OpenChoiceItem)).toBe("coding");

    r4Adapter.setType(r4Target, "coding");
    r5Adapter.setType(r5Item, "coding");

    expect((r4Target as unknown as { type?: string }).type).toBe("choice");
    expect(r5Adapter.getType(r5Item)).toBe("coding");
  });
});
