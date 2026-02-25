import { reaction } from "mobx";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  FhirVersion,
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/fhir";
import { type Strings, StringsContext, type Theme } from "@formbox/theme";
import type { LaunchContext } from "./types.ts";
import { Form } from "./component/form/form.tsx";
import { FormStore } from "./store/form/form-store.ts";
import { ThemeProvider } from "./ui/theme.tsx";

export type RendererProperties<V extends FhirVersion> = {
  questionnaire: QuestionnaireOf<V>;
  defaultQuestionnaireResponse: QuestionnaireResponseOf<V> | null;
  language: string | null;
  strings: Strings;
  onChange: ((response: QuestionnaireResponseOf<V>) => void) | null;
  onSubmit: ((response: QuestionnaireResponseOf<V>) => void) | null;
  onLanguageChange: ((language: string) => void) | null;
  terminologyServerUrl: string | null;
  launchContext: LaunchContext | null;
  fhirVersion: V;
  theme: Theme;
};

function Renderer<V extends FhirVersion>({
  questionnaire,
  defaultQuestionnaireResponse,
  language,
  strings,
  onChange,
  onSubmit,
  onLanguageChange,
  terminologyServerUrl,
  launchContext,
  fhirVersion,
  theme,
}: RendererProperties<V>) {
  const onChangeReference = useRef(onChange);
  // These refs are intentionally excluded from store recreation triggers.
  const stringsReference = useRef(strings);
  const languageReference = useRef(language);
  const responseReference = useRef(defaultQuestionnaireResponse);
  const launchContextReference = useRef(launchContext);
  const isInitialStoreSetupReference = useRef(true);

  useEffect(() => {
    onChangeReference.current = onChange;
  }, [onChange]);

  useEffect(() => {
    stringsReference.current = strings;
    languageReference.current = language;
    responseReference.current = defaultQuestionnaireResponse;
    launchContextReference.current = launchContext;
  }, [defaultQuestionnaireResponse, language, strings, launchContext]);

  const [store, setStore] = useState<FormStore<V>>(
    () =>
      new FormStore(
        strings,
        fhirVersion,
        questionnaire,
        defaultQuestionnaireResponse ?? undefined,
        terminologyServerUrl ?? undefined,
        language ?? undefined,
        launchContext ?? undefined,
      ),
  );

  useEffect(() => {
    if (isInitialStoreSetupReference.current) {
      isInitialStoreSetupReference.current = false;
      return;
    }

    setStore(
      new FormStore(
        stringsReference.current,
        fhirVersion,
        questionnaire,
        responseReference.current ?? undefined,
        terminologyServerUrl ?? undefined,
        languageReference.current ?? undefined,
        launchContextReference.current ?? undefined,
      ),
    );
  }, [fhirVersion, questionnaire, terminologyServerUrl]);

  useEffect(() => {
    store.setStrings(strings);
  }, [store, strings]);

  useEffect(() => {
    store.setLanguage(language ?? undefined);
  }, [store, language]);

  useEffect(() => {
    store.setLaunchContext(launchContext ?? undefined);
  }, [store, launchContext]);

  useEffect(() => {
    const dispose = reaction(
      () => store.response as QuestionnaireResponseOf<V>,
      (response) => {
        onChangeReference.current?.(response);
      },
    );

    return () => {
      dispose();
      store.dispose();
    };
  }, [store]);

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
          onLanguageChange={onLanguageChange ?? undefined}
        />
      </StringsContext.Provider>
    </ThemeProvider>
  );
}

export default Renderer;
