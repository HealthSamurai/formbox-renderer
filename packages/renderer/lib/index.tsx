import type {
  FhirVersion,
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/fhir";
import { FormStore } from "./store/form/form-store.ts";
import { Form } from "./component/form/form.tsx";
import { useCallback, useEffect, useMemo } from "react";
import { autorun } from "mobx";
import en from "@formbox/strings/en";
import {
  StringsContext,
  type Theme,
  type StringsOverride,
} from "@formbox/theme";
import { ThemeProvider } from "./ui/theme.tsx";
import { deepMerge } from "./utilities.ts";

type RendererProperties<V extends FhirVersion> = {
  questionnaire: QuestionnaireOf<V>;
  initialResponse?: QuestionnaireResponseOf<V> | undefined;
  onChange?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  onSubmit?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  terminologyServerUrl?: string | undefined;
  language?: string | undefined;
  onLanguageChange?: ((language: string | undefined) => void) | undefined;
  strings?: StringsOverride | undefined;
  fhirVersion: V;
  theme: Theme;
};

function Renderer<V extends FhirVersion>({
  questionnaire,
  initialResponse,
  onSubmit,
  onChange,
  terminologyServerUrl,
  language,
  onLanguageChange,
  strings: stringsOverride,
  fhirVersion,
  theme,
}: RendererProperties<V>) {
  const strings = useMemo(
    () => (stringsOverride == undefined ? en : deepMerge(en, stringsOverride)),
    [stringsOverride],
  );

  const store = useMemo(
    () =>
      new FormStore(
        en,
        fhirVersion,
        questionnaire,
        initialResponse,
        terminologyServerUrl,
      ),
    [questionnaire, initialResponse, terminologyServerUrl, fhirVersion],
  );

  useEffect(() => () => store.dispose(), [store]);

  useEffect(() => {
    store.setStrings(strings);
  }, [store, strings]);

  useEffect(() => {
    store.setLanguage(language ?? questionnaire.language);
  }, [store, language, questionnaire.language]);

  useEffect(() => {
    if (!onChange) {
      return;
    }

    const dispose = autorun(() => {
      onChange(store.response as QuestionnaireResponseOf<V>);
    });

    return () => {
      dispose();
    };
  }, [onChange, store]);

  const handleSubmit = useCallback(() => {
    if (store.validateAll()) {
      onSubmit?.(store.response as QuestionnaireResponseOf<V>);
    }
  }, [onSubmit, store]);

  return (
    <ThemeProvider theme={theme}>
      <StringsContext.Provider value={strings}>
        <Form
          store={store}
          onSubmit={handleSubmit}
          onLanguageChange={onLanguageChange}
        />
      </StringsContext.Provider>
    </ThemeProvider>
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

export type { Strings, StringsOverride } from "@formbox/theme";
