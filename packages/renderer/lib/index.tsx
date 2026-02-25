/* eslint-disable unicorn/no-null */
import { useCallback, useMemo, useState } from "react";
import bundledStrings from "@formbox/strings";
import type {
  FhirVersion,
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/fhir";
import type { Theme } from "@formbox/theme";
import ControlledRenderer from "./controlled.tsx";
import type { LaunchContext } from "./types.ts";

export type RendererProperties<V extends FhirVersion> = {
  questionnaire: QuestionnaireOf<V>;
  defaultQuestionnaireResponse?: QuestionnaireResponseOf<V> | undefined;
  defaultLanguage?: string | undefined;
  onChange?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  onSubmit?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  onLanguageChange?: ((language: string) => void) | undefined;
  terminologyServerUrl?: string | undefined;
  launchContext?: LaunchContext | undefined;
  fhirVersion: V;
  theme: Theme;
};

function resolveBundledStrings(language: string | null | undefined) {
  const primaryLanguage = language?.split(
    "-",
  )[0] as keyof typeof bundledStrings;
  return bundledStrings[primaryLanguage] ?? bundledStrings.en;
}

function Renderer<V extends FhirVersion>({
  questionnaire,
  defaultQuestionnaireResponse,
  defaultLanguage,
  onChange,
  onSubmit,
  onLanguageChange,
  terminologyServerUrl,
  launchContext,
  fhirVersion,
  theme,
}: RendererProperties<V>) {
  const [language, setLanguage] = useState<string | null>(
    defaultLanguage ?? questionnaire.language ?? null,
  );

  const strings = useMemo(() => resolveBundledStrings(language), [language]);

  const handleChange = useCallback(
    (response: QuestionnaireResponseOf<V>) => {
      onChange?.(response);
    },
    [onChange],
  );

  const handleLanguageChange = useCallback(
    (nextLanguage: string) => {
      setLanguage(nextLanguage);
      onLanguageChange?.(nextLanguage);
    },
    [onLanguageChange],
  );

  return (
    <ControlledRenderer
      questionnaire={questionnaire}
      defaultQuestionnaireResponse={defaultQuestionnaireResponse ?? null}
      language={language}
      strings={strings}
      onChange={handleChange}
      onSubmit={onSubmit ?? null}
      onLanguageChange={handleLanguageChange}
      terminologyServerUrl={terminologyServerUrl ?? null}
      launchContext={launchContext ?? null}
      fhirVersion={fhirVersion}
      theme={theme}
    />
  );
}

export default Renderer;

export { R4Adapter } from "./fhir/r4-adapter.ts";
export { R5Adapter } from "./fhir/r5-adapter.ts";

export type {
  AttachmentOf,
  CodingOf,
  ElementOf,
  ExtensionOf,
  FhirVersion,
  FhirTypesByVersion,
  OperationOutcomeIssueOf,
  QuantityOf,
  QuestionnaireItemAnswerOptionOf,
  QuestionnaireItemEnableWhenOf,
  QuestionnaireItemInitialOf,
  QuestionnaireItemOf,
  QuestionnaireOf,
  QuestionnaireResponseItemAnswerOf,
  QuestionnaireResponseItemOf,
  QuestionnaireResponseOf,
  ReferenceOf,
} from "@formbox/fhir";

export type { Strings } from "@formbox/theme";
export type { LaunchContext } from "./types.ts";
