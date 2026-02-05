import { describe, expect, it } from "vitest";

import { FormStore } from "@formbox/renderer/store/form/form-store.ts";
import {
  assertDisplayNode,
  isDisplayNode,
} from "@formbox/renderer/store/display/display-store.ts";

import type { QuestionnaireOf } from "@formbox/renderer";
type Questionnaire = QuestionnaireOf<"r5">;
describe("type.display", () => {
  const questionnaire: Questionnaire = {
    resourceType: "Questionnaire",
    status: "active",
    item: [{ linkId: "intro", text: "Welcome", type: "display" }],
  };

  const createStore = () =>
    new FormStore("r5", questionnaire, undefined, undefined);

  it("creates a display store for display items", () => {
    const form = createStore();
    const introStore = form.scope.lookupNode("intro");
    assertDisplayNode(introStore);
    expect(isDisplayNode(introStore)).toBe(true);
  });

  it("preserves the display item token", () => {
    const form = createStore();
    const introStore = form.scope.lookupNode("intro");
    assertDisplayNode(introStore);
    expect(introStore.token).toMatch(/^form__\w+__intro$/);
  });

  it("ignores nested items under display entries", () => {
    const questionnaireWithChild: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      item: [
        {
          linkId: "intro",
          text: "Welcome",
          type: "display",
          item: [
            {
              linkId: "child",
              text: "Child question",
              type: "string",
            },
          ],
        },
      ],
    };

    const form = new FormStore(
      "r5",
      questionnaireWithChild,
      undefined,
      undefined,
    );
    expect(form.scope.lookupNode("child")).toBeUndefined();
  });
});
