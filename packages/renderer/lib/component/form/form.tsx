import { observer } from "mobx-react-lite";
import type { IForm } from "../../types.ts";
import { renderErrors } from "../node/errors.tsx";
import { NodeList } from "../node/node-list.tsx";
import { useTheme } from "../../ui/theme.tsx";

const displayNames =
  typeof Intl === "object" && "DisplayNames" in Intl
    ? new Intl.DisplayNames(["en"], { type: "language" })
    : undefined;

function getLanguageLabel(language: string): string {
  return displayNames?.of(language) ?? language;
}

export const Form = observer(function Form({
  store,
  onSubmit,
  onLanguageChange,
}: {
  store: IForm;
  onSubmit?: (() => void) | undefined;
  onLanguageChange?: ((language: string) => void) | undefined;
}) {
  const { Form: ThemedForm, LanguageSelector: ThemedLanguageSelector } =
    useTheme();

  const languageSelector =
    store.availableLanguages.length > 1 &&
    store.language &&
    onLanguageChange ? (
      <ThemedLanguageSelector
        value={store.language}
        onChange={(value) => onLanguageChange(value)}
        options={store.availableLanguages.map((language) => ({
          value: language,
          label: getLanguageLabel(language),
        }))}
      />
    ) : undefined;

  return (
    <ThemedForm
      title={store.title}
      description={store.description}
      languageSelector={languageSelector}
      errors={renderErrors(store)}
      before={<NodeList nodes={store.headerNodes} />}
      after={<NodeList nodes={store.footerNodes} />}
      onSubmit={onSubmit}
      onCancel={() => store.reset()}
      pagination={store.pagination}
    >
      <NodeList nodes={store.contentNodes} />
    </ThemedForm>
  );
});
