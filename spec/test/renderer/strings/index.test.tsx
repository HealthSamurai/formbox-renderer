import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Renderer, { type QuestionnaireOf } from "@formbox/renderer";
import { theme as hsTheme } from "@formbox/hs-theme";

type Questionnaire = QuestionnaireOf<"r5">;

describe("renderer.strings", () => {
  it("applies override strings via renderer context", () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      item: [
        {
          linkId: "patient-name",
          text: "Patient name",
          type: "string",
          item: [
            {
              linkId: "patient-name-help",
              type: "display",
              text: "Provide legal full name.",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "help",
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    };

    render(
      <Renderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        theme={hsTheme}
        strings={{
          aria: { help: "Localized help button" },
        }}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Localized help button" }),
    ).toBeInTheDocument();
  });

  it("does not reset answers when strings object identity changes", async () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      item: [
        {
          linkId: "patient-name",
          text: "Patient name",
          type: "string",
        },
      ],
    };

    const user = userEvent.setup();
    const { rerender } = render(
      <Renderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        theme={hsTheme}
        strings={{
          aria: { help: "Localized help button" },
        }}
      />,
    );

    const input = screen.getByLabelText("Patient name");
    await user.type(input, "Alice");
    expect(input).toHaveValue("Alice");

    rerender(
      <Renderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        theme={hsTheme}
        strings={{
          aria: { help: "Localized help button" },
        }}
      />,
    );

    expect(screen.getByLabelText("Patient name")).toHaveValue("Alice");
  });
});
