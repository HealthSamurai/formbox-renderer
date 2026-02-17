import type {
  FhirVersion,
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/fhir";
import { FormStore } from "./store/form/form-store.ts";
import { Form } from "./component/form/form.tsx";
import { useCallback, useEffect, useMemo } from "react";
import { autorun } from "mobx";
import type { Theme } from "@formbox/theme";
import { ThemeProvider } from "./ui/theme.tsx";

type RendererProperties<V extends FhirVersion> = {
  questionnaire: QuestionnaireOf<V>;
  initialResponse?: QuestionnaireResponseOf<V> | undefined;
  onChange?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  onSubmit?: ((response: QuestionnaireResponseOf<V>) => void) | undefined;
  terminologyServerUrl?: string | undefined;
  fhirVersion: V;
  theme: Theme;
};

function Renderer<V extends FhirVersion>({
  questionnaire,
  initialResponse,
  onSubmit,
  onChange,
  terminologyServerUrl,
  fhirVersion,
  theme,
}: RendererProperties<V>) {
  const store = useMemo(
    () =>
      new FormStore(
        fhirVersion,
        questionnaire,
        initialResponse,
        terminologyServerUrl,
      ),
    [questionnaire, initialResponse, terminologyServerUrl, fhirVersion],
  );

  useEffect(() => () => store.dispose(), [store]);

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
      <Form store={store} onSubmit={handleSubmit} />
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
