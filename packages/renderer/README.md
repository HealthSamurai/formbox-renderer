# @formbox/renderer

React renderer for FHIR R4 and R5 Questionnaires. You must provide a theme package.

## Install

```bash
pnpm add @formbox/renderer @formbox/hs-theme
# or
npm install @formbox/renderer @formbox/hs-theme
```

## Peer dependencies

Install these in your app (your package manager will usually warn you):

- react, react-dom
- mobx, mobx-react-lite, mobx-utils
- classnames
- fhirpath
- @lhncbc/ucum-lhc

## Usage

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/hs-theme";
import "@formbox/hs-theme/style.css";

function Form() {
  return (
    <Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />
  );
}
```

If you want strong typing, use the versioned type helpers from the renderer:

```ts
import type { QuestionnaireOf } from "@formbox/renderer";

const questionnaire: QuestionnaireOf<"r5"> = {
  resourceType: "Questionnaire",
  status: "active",
  item: [{ linkId: "first", text: "First name", type: "string" }],
};
```

These types map directly to `fhir/r4` or `fhir/r5` based on the version you pass.

## Renderer props

- `questionnaire` (required): FHIR Questionnaire resource.
- `theme` (required): Theme object.
- `defaultQuestionnaireResponse`: Initial QuestionnaireResponse value.
- `defaultLanguage`: Initial language value.
- `onChange`: Called on every response change.
- `onSubmit`: Called after validation passes.
- `onLanguageChange`: Called when user selects another language.
- `terminologyServerUrl`: Base URL for ValueSet `$expand` requests.
- `launchContext`: Named resources made available to expressions (for SDC `launchContext` support).
- `fhirVersion`: `"r4"` or `"r5"` (required).

## Partially controlled mode

Use `Renderer` from `@formbox/renderer/controlled` when `language` and `strings` are managed outside the renderer and the response is seeded from a default value.

All props are required. Use `null` for values/callbacks you do not provide.

```tsx
import Renderer from "@formbox/renderer/controlled";
import en from "@formbox/strings/en";

<Renderer
  fhirVersion="r5"
  questionnaire={questionnaire}
  defaultQuestionnaireResponse={questionnaireResponse}
  language={language}
  strings={en}
  onChange={onChange}
  onSubmit={null}
  onLanguageChange={onLanguageChange}
  terminologyServerUrl={null}
  theme={theme}
/>;
```

## Themes and custom themes

- Theme packages live under `themes/*` in this repo.
- Build your own theme with `@formbox/theme` (see `packages/theme/doc/index.md`).
