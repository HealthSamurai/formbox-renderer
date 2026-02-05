import { describe, expect, it } from "vitest";

import { FormStore } from "@formbox/renderer/store/form/form-store.ts";
import { assertQuestionNode } from "@formbox/renderer/store/question/question-store.ts";
import { assertDefined } from "@formbox/renderer/utilities.ts";

import {
  makeCalculatedExpression,
  makeVariable,
} from "../../../../../utilities.ts";

import type { QuestionnaireOf } from "@formbox/renderer";
type Questionnaire = QuestionnaireOf<"r5">;
describe("questionnaire variable extension", () => {
  it("records questionnaire-level variable name collisions on the form", () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      extension: [
        makeVariable("duplicate", "'first'"),
        makeVariable("duplicate", "'second'"),
      ],
    };

    const form = new FormStore("r5", questionnaire, undefined, undefined);

    const collision = form.issues.find((issue) => {
      const diagnostics = issue.diagnostics?.toLowerCase();
      return (
        issue.code === "invalid" &&
        diagnostics &&
        diagnostics.includes("duplicate")
      );
    });

    expect(collision).toBeTruthy();
  });

  it("evaluates questionnaire-level variables and exposes them to descendants", () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      extension: [makeVariable("globalValue", "'root-scope'")],
      item: [
        {
          linkId: "mirror",
          type: "string",
          extension: [makeCalculatedExpression(undefined, "%globalValue")],
        },
      ],
    };

    const form = new FormStore("r5", questionnaire, undefined, undefined);
    const rootVariable = form.scope.lookupExpression("globalValue");
    assertDefined(rootVariable);

    expect(rootVariable.value).toEqual(["root-scope"]);

    const mirror = form.scope.lookupNode("mirror");
    assertQuestionNode(mirror);

    expect(mirror.answers[0]?.value).toBe("root-scope");
  });

  it("captures evaluation errors for questionnaire-level variables", () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      extension: [makeVariable("badVar", "1 +")],
      item: [
        {
          linkId: "mirror",
          type: "string",
          extension: [makeCalculatedExpression(undefined, "%badVar")],
        },
      ],
    };

    const form = new FormStore("r5", questionnaire, undefined, undefined);
    const slot = form.scope.lookupExpression("badVar");
    assertDefined(slot);

    void slot.value;

    expect(slot.error?.diagnostics).toContain(
      'Failed to evaluate variable "badVar" expression',
    );
    expect(slot.error?.diagnostics).toContain(
      "because the expression has a syntax error",
    );

    const mirror = form.scope.lookupNode("mirror");
    assertQuestionNode(mirror);

    expect(mirror.answers[0]?.value).toBeUndefined();
  });
});
