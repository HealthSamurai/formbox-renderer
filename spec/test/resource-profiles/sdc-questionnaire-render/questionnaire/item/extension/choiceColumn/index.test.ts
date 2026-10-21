import { describe, expect, it, vi } from "vitest";

import { FormStore } from "@formbox/renderer/store/form/form-store.ts";
import en from "@formbox/strings/en";
import { isQuestionNode } from "@formbox/renderer/store/question/question-store.ts";
import type { IQuestionNode } from "@formbox/renderer/types.ts";
import { EXT } from "@formbox/renderer/utilities.ts";

import type { QuestionnaireOf } from "@formbox/renderer";
type Questionnaire = QuestionnaireOf<"r5">;
type Item = NonNullable<Questionnaire["item"]>[number];

const SNOMED = "http://snomed.info/sct";

function column(
  path: string,
  options: { label?: string; width?: number; forDisplay?: boolean } = {},
) {
  return {
    url: EXT.SDC_CHOICE_COLUMN,
    extension: [
      { url: "path", valueString: path },
      ...(options.label === undefined
        ? []
        : [{ url: "label", valueString: options.label }]),
      ...(options.width === undefined
        ? []
        : [
            {
              url: "width",
              valueQuantity: {
                value: options.width,
                system: "http://unitsofmeasure.org",
                code: "%",
              },
            },
          ]),
      ...(options.forDisplay === undefined
        ? []
        : [{ url: "forDisplay", valueBoolean: options.forDisplay }]),
    ],
  };
}

function createQuestion(item: Item) {
  const form = new FormStore(
    en,
    "r5",
    "form",
    { resourceType: "Questionnaire", status: "active", item: [item] },
    undefined,
    undefined,
  );
  const node = form.scope.lookupNode(item.linkId);
  if (!node || !isQuestionNode(node)) {
    throw new Error(`Expected question for ${item.linkId}`);
  }
  return node as IQuestionNode<"coding">;
}

describe("choiceColumn", () => {
  it("builds cells and forDisplay display for answerOption codings", () => {
    const question = createQuestion({
      linkId: "allergy",
      type: "coding",
      extension: [
        column("code", { label: "SCTID", width: 30 }),
        column("display", { label: "Substance", forDisplay: true }),
        column("missing"),
      ],
      answerOption: [
        {
          valueCoding: {
            system: SNOMED,
            code: "91936005",
            display: "Penicillin",
          },
        },
      ],
    });

    expect(question.answerOption.choiceColumns).toEqual([
      { path: "code", label: "SCTID", width: "30%", forDisplay: false },
      {
        path: "display",
        label: "Substance",
        width: undefined,
        forDisplay: true,
      },
      {
        path: "missing",
        label: undefined,
        width: undefined,
        forDisplay: false,
      },
    ]);

    const [option] = question.answerOption.inherentOptions;
    expect(option.cells).toEqual(["91936005", "Penicillin", ""]);

    question.answerOption.select.selectOption(option.token);
    expect(question.answers[0]?.value).toEqual({
      system: SNOMED,
      code: "91936005",
      display: "Penicillin",
    });
  });

  it("reads properties and designations from $expand and stores a plain Coding", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      statusText: "OK",
      json: () =>
        Promise.resolve({
          expansion: {
            contains: [
              {
                system: SNOMED,
                code: "4855003",
                display: "Retinopathy",
                property: [{ code: "parent", valueCode: "362.0" }],
                designation: [{ language: "de", value: "Retinopathie" }],
              },
            ],
          },
        }),
    } as unknown as Response);

    try {
      const question = createQuestion({
        linkId: "condition",
        type: "coding",
        answerValueSet: "http://example.org/ValueSet/conditions",
        extension: [
          column("parent", { label: "Parent" }),
          column("de", { label: "German", forDisplay: true }),
        ],
      });

      for (
        let index = 0;
        index < 25 && question.answerOption.select.isLoading;
        index++
      ) {
        await Promise.resolve();
      }

      const url = new URL(String(fetchSpy.mock.calls[0]?.[0]));
      expect(url.searchParams.getAll("property")).toEqual(["parent", "de"]);
      expect(url.searchParams.get("includeDesignations")).toBe("true");

      const [option] = question.answerOption.inherentOptions;
      expect(option.cells).toEqual(["362.0", "Retinopathie"]);
      expect(option.value).toEqual({
        system: SNOMED,
        code: "4855003",
        display: "Retinopathie",
      });
    } finally {
      fetchSpy.mockRestore();
    }
  });

  it("leaves items without columns unchanged", () => {
    const coding = { system: SNOMED, code: "1", display: "One" };
    const question = createQuestion({
      linkId: "plain",
      type: "coding",
      answerOption: [{ valueCoding: coding }],
    });

    expect(question.answerOption.choiceColumns).toEqual([]);
    expect(question.answerOption.inherentOptions[0]?.cells).toBeUndefined();
    expect(question.answerOption.inherentOptions[0]?.value).toEqual(coding);
  });
});
