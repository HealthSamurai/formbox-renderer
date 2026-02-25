import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Renderer, {
  type LaunchContext,
  type QuestionnaireOf,
  type QuestionnaireResponseOf,
  type Strings,
} from "@formbox/renderer";
import ControlledRenderer from "@formbox/renderer/controlled";
import { theme as hsTheme } from "@formbox/hs-theme";
import en from "@formbox/strings/en";
import es from "@formbox/strings/es";
import { useState } from "react";

type Questionnaire = QuestionnaireOf<"r5">;
type QuestionnaireResponse = QuestionnaireResponseOf<"r5">;

const EMPTY_RESPONSE: QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  questionnaire: "Questionnaire/test",
};
const EMPTY_LAUNCH_CONTEXT: LaunchContext = {};

function noopOnChange() {}
function noopOnSubmit() {}
function noopOnLanguageChange() {}

const TERMINOLOGY_SERVER_URL = "https://tx.fhir.org/r5";

function getLanguageLabel(code: string): string {
  if (typeof Intl === "object" && "DisplayNames" in Intl) {
    return new Intl.DisplayNames(["en"], { type: "language" }).of(code) ?? code;
  }

  return code;
}

const questionnaireWithHelp: Questionnaire = {
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
                    system: "http://hl7.org/fhir/questionnaire-item-control",
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

const translatedQuestionnaireWithHelp: Questionnaire = {
  resourceType: "Questionnaire",
  status: "active",
  language: "en",
  item: [
    {
      linkId: "patient-name",
      text: "Patient name",
      type: "string",
      _text: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/translation",
            extension: [
              { url: "lang", valueCode: "es" },
              { url: "content", valueString: "Nombre del paciente" },
            ],
          },
        ],
      },
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
                    system: "http://hl7.org/fhir/questionnaire-item-control",
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

function buildControlledStrings(): Strings {
  return {
    ...en,
    aria: {
      ...en.aria,
      help: "Localized help button",
    },
  };
}

describe("renderer.strings", () => {
  it("uses controlled strings from renderer props", () => {
    render(
      <ControlledRenderer
        fhirVersion="r5"
        questionnaire={questionnaireWithHelp}
        defaultQuestionnaireResponse={EMPTY_RESPONSE}
        language="en"
        theme={hsTheme}
        strings={buildControlledStrings()}
        onChange={noopOnChange}
        onSubmit={noopOnSubmit}
        onLanguageChange={noopOnLanguageChange}
        terminologyServerUrl={TERMINOLOGY_SERVER_URL}
        launchContext={EMPTY_LAUNCH_CONTEXT}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Localized help button" }),
    ).toBeInTheDocument();
  });

  it("persists local edits even when parent does not propagate updated response", async () => {
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
    const onChange = vi.fn();

    render(
      <ControlledRenderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        defaultQuestionnaireResponse={EMPTY_RESPONSE}
        language="en"
        theme={hsTheme}
        strings={buildControlledStrings()}
        onChange={onChange}
        onSubmit={noopOnSubmit}
        onLanguageChange={noopOnLanguageChange}
        terminologyServerUrl={TERMINOLOGY_SERVER_URL}
        launchContext={EMPTY_LAUNCH_CONTEXT}
      />,
    );

    const input = screen.getByLabelText("Patient name");
    await user.type(input, "Alice");
    expect(onChange).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByLabelText("Patient name")).toHaveValue("Alice");
    });
  });

  it("keeps newly added repeated answers locally even without parent propagation", async () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      item: [
        {
          linkId: "patient-alias",
          text: "Patient alias",
          type: "string",
          repeats: true,
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
              valueInteger: 1,
            },
          ],
        },
      ],
    };

    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <ControlledRenderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        defaultQuestionnaireResponse={EMPTY_RESPONSE}
        language="en"
        theme={hsTheme}
        strings={buildControlledStrings()}
        onChange={onChange}
        onSubmit={noopOnSubmit}
        onLanguageChange={noopOnLanguageChange}
        terminologyServerUrl={TERMINOLOGY_SERVER_URL}
        launchContext={EMPTY_LAUNCH_CONTEXT}
      />,
    );

    expect(screen.getAllByLabelText("Patient alias")).toHaveLength(1);
    await user.click(
      screen.getByRole("button", { name: en.selection.addAnother }),
    );
    await waitFor(() => {
      expect(screen.getAllByLabelText("Patient alias")).toHaveLength(2);
    });

    const aliasInputsAfterAdd = screen.getAllByLabelText("Patient alias");
    await user.type(aliasInputsAfterAdd[1], "Emergency alias");
    expect(onChange).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getAllByLabelText("Patient alias")).toHaveLength(2);
    });
    expect(screen.getAllByLabelText("Patient alias")[1]).toHaveValue(
      "Emergency alias",
    );
  });

  it("keeps option selection locally even without parent propagation", async () => {
    const questionnaire: Questionnaire = {
      resourceType: "Questionnaire",
      status: "active",
      item: [
        {
          linkId: "consent",
          text: "Consent",
          type: "string",
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://hl7.org/fhir/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
          answerOption: [{ valueString: "Yes" }, { valueString: "No" }],
        },
      ],
    };

    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <ControlledRenderer
        fhirVersion="r5"
        questionnaire={questionnaire}
        defaultQuestionnaireResponse={EMPTY_RESPONSE}
        language="en"
        theme={hsTheme}
        strings={buildControlledStrings()}
        onChange={onChange}
        onSubmit={noopOnSubmit}
        onLanguageChange={noopOnLanguageChange}
        terminologyServerUrl={TERMINOLOGY_SERVER_URL}
        launchContext={EMPTY_LAUNCH_CONTEXT}
      />,
    );

    const yesOption = screen.getByRole("radio", { name: "Yes" });
    await user.click(yesOption);
    expect(onChange).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByRole("radio", { name: "Yes" })).toBeChecked();
    });
  });

  it("renders updated value when parent propagates response back", async () => {
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

    function ControlledHost() {
      const [response, setResponse] = useState<QuestionnaireResponse>({
        resourceType: "QuestionnaireResponse",
        status: "in-progress",
        questionnaire: "Questionnaire/test",
      });

      return (
        <ControlledRenderer
          fhirVersion="r5"
          questionnaire={questionnaire}
          defaultQuestionnaireResponse={response}
          language="en"
          theme={hsTheme}
          strings={buildControlledStrings()}
          onChange={(nextResponse) => {
            setResponse(nextResponse as QuestionnaireResponse);
          }}
          onSubmit={noopOnSubmit}
          onLanguageChange={noopOnLanguageChange}
          terminologyServerUrl={TERMINOLOGY_SERVER_URL}
          launchContext={EMPTY_LAUNCH_CONTEXT}
        />
      );
    }

    const user = userEvent.setup();
    render(<ControlledHost />);

    await user.type(screen.getByLabelText("Patient name"), "Alice");
    await waitFor(() => {
      expect(screen.getByLabelText("Patient name")).toHaveValue("Alice");
    });
  });

  it("autonomous mode switches bundled strings by selected language", () => {
    const esLabel = getLanguageLabel("es");

    render(
      <Renderer
        fhirVersion="r5"
        questionnaire={translatedQuestionnaireWithHelp}
        theme={hsTheme}
      />,
    );

    expect(
      screen.getByRole("button", { name: en.aria.help }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Language" }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: esLabel }));

    expect(
      screen.getByRole("button", { name: es.aria.help }),
    ).toBeInTheDocument();
  });
});
