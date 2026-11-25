import { describe, expect, it } from "vitest";
import { FormStore } from "@formbox/renderer/store/form/form-store.ts";
import { assertGroupNode } from "@formbox/renderer/store/group/group-store.ts";
import { assertQuestionNode } from "@formbox/renderer/store/question/question-store.ts";
import en from "@formbox/strings/en";
import type {
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/renderer";

describe("host-managed expression population", () => {
  it.each([
    ["text/fhirpath", "'prefill'"],
    ["text/fhirpath", "%demographicsPatient.name.first().given.first()"],
    ["text/fhirpath", "1 +"],
    ["application/x-fhir-query", "Patient?_id={{%patient.id}}"],
  ])(
    "ignores initialExpression (%s: %s) with and without an existing response",
    (language, expression) => {
      const questionnaire: QuestionnaireOf<"r5"> = {
        resourceType: "Questionnaire",
        status: "active",
        item: [
          {
            linkId: "demographics",
            type: "group",
            extension: [
              {
                url: "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext",
                valueExpression: {
                  name: "demographicsPatient",
                  language: "application/x-fhir-query",
                  expression: "Patient?_id={{%patient.id}}",
                },
              },
            ],
            item: [
              {
                linkId: "name",
                type: "string",
                extension: [
                  {
                    url: "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression",
                    valueExpression: {
                      name: "namePrefill",
                      language,
                      expression,
                    },
                  },
                ],
              },
            ],
          },
        ],
      };
      const response: QuestionnaireResponseOf<"r5"> = {
        resourceType: "QuestionnaireResponse",
        questionnaire: "Questionnaire/host-populated",
        status: "in-progress",
        item: [
          {
            linkId: "demographics",
            item: [
              { linkId: "name", answer: [{ valueString: "Server populated" }] },
            ],
          },
        ],
      };

      for (const existingResponse of [undefined, response]) {
        const form = new FormStore(
          en,
          "r5",
          "form",
          questionnaire,
          existingResponse,
          undefined,
        );
        const group = form.scope.lookupNode("demographics");
        assertGroupNode(group);
        expect(
          group.scope.lookupVariable("demographicsPatient"),
        ).toBeUndefined();
        expect(group.issues).toEqual([]);

        const question = form.scope.lookupNode("name");
        assertQuestionNode(question);
        expect(question.scope.lookupVariable("namePrefill")).toBeUndefined();
        expect(question.answers[0]?.value).toBe(
          existingResponse ? "Server populated" : undefined,
        );
        expect(question.issues).toEqual([]);
        expect(form.validateAll()).toBe(true);
      }
    },
  );
});
