# @formbox/renderer

React renderer for FHIR R5 Questionnaires. You must provide a theme package.

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

<Renderer questionnaire={questionnaire} theme={theme} />;
```

## Renderer props

- `questionnaire` (required): FHIR Questionnaire resource.
- `theme` (required): Theme object.
- `initialResponse`: Initial QuestionnaireResponse to seed answers.
- `onChange`: Called on every response change.
- `onSubmit`: Called after validation passes.
- `terminologyServerUrl`: Base URL for ValueSet `$expand` requests.

## Themes and custom themes

- Theme packages live under `themes/*` in this repo.
- Build your own theme with `@formbox/theme` (see `packages/theme/doc/index.md`).
