# @formbox/renderer

React renderer for FHIR R4 and R5 Questionnaires. You must provide a theme package.

## Install

```bash
pnpm add @formbox/renderer @formbox/hs-theme
# or
npm install @formbox/renderer @formbox/hs-theme
```

Optional, if you want bundled localization dictionaries:

```bash
pnpm add @formbox/strings
# or
npm install @formbox/strings
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
import { useMemo, useState } from "react";
import Renderer from "@formbox/renderer";
import en from "@formbox/strings/en";
import fr from "@formbox/strings/fr";
import { theme } from "@formbox/hs-theme";
import "@formbox/hs-theme/style.css";

function Form() {
  const [language, setLanguage] = useState<string | undefined>("en");
  const strings = useMemo(
    () => (language?.startsWith("fr") ? fr : en),
    [language],
  );

  return (
    <Renderer
      fhirVersion="r5"
      questionnaire={questionnaire}
      theme={theme}
      language={language}
      onLanguageChange={setLanguage}
      strings={strings}
    />
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
- `initialResponse`: Initial QuestionnaireResponse to seed answers.
- `onChange`: Called on every response change.
- `onSubmit`: Called after validation passes.
- `terminologyServerUrl`: Base URL for ValueSet `$expand` requests.
- `language`: Controlled language for translated Questionnaire text (if omitted, renderer uses `questionnaire.language`).
- `onLanguageChange`: Called when user selects another language.
- `strings`: Strings override tree (or full dictionary) used for renderer and theme UI text.
- `fhirVersion`: `"r4"` or `"r5"` (required).

## Themes and custom themes

- Theme packages live under `themes/*` in this repo.
- Build your own theme with `@formbox/theme` (see `packages/theme/doc/index.md`).
