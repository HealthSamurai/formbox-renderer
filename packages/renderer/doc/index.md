---
title: "Renderer"
order: 1
icon: rocket
---

Formbox Renderer is a React renderer for HL7 FHIR R5 Questionnaires. It is headless. You must pass a theme object and include the theme CSS.

## Install

```bash
pnpm add @formbox/renderer @formbox/hs-theme
# or
npm install @formbox/renderer @formbox/hs-theme
```

## Peer dependencies

Install these in your app. Your package manager will usually warn you if any are missing.

- react, react-dom
- mobx, mobx-react-lite, mobx-utils
- classnames
- fhirpath
- @lhncbc/ucum-lhc

## Quick start

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/hs-theme";
import "@formbox/hs-theme/style.css";

const questionnaire = {
  resourceType: "Questionnaire",
  item: [
    { linkId: "first", text: "First name", type: "string", required: true },
    { linkId: "consent", text: "Consent to treatment", type: "boolean" },
  ],
};

<Renderer questionnaire={questionnaire} theme={theme} />;
```

If you want strong typing, import FHIR types from `fhir/r5` and add `@types/fhir` as a dev dependency if your editor cannot resolve the module.

```ts
import type { Questionnaire, QuestionnaireResponse } from "fhir/r5";
```

## Renderer props

| Prop                   | Type                                        | Required | Description                                               |
| ---------------------- | ------------------------------------------- | -------- | --------------------------------------------------------- |
| `questionnaire`        | `Questionnaire`                             | Yes      | FHIR Questionnaire resource that drives the form.         |
| `theme`                | `Theme`                                     | Yes      | Theme contract implementation.                            |
| `initialResponse`      | `QuestionnaireResponse`                     | No       | Seed response used to initialize answers.                 |
| `onChange`             | `(response: QuestionnaireResponse) => void` | No       | Called with the latest response whenever state changes.   |
| `onSubmit`             | `(response: QuestionnaireResponse) => void` | No       | Called after validation passes and the form is submitted. |
| `terminologyServerUrl` | `string`                                    | No       | Base URL for ValueSet `$expand` requests.                 |

## Validation and submit

`onSubmit` fires only after validation passes. When validation fails, the renderer populates Errors slots so your theme can surface issues next to controls or in summaries.

## ValueSet expansion

When a question references a ValueSet, the renderer expands it through a terminology server. If you do not pass `terminologyServerUrl`, the default server is `https://tx.fhir.org/r5`.

## Themes

Themes live in `themes/*` in this repo. Every theme exports a `theme` object and a compiled CSS file.

- `@formbox/hs-theme`
- `@formbox/nshuk-theme`
- `@formbox/antd-theme`
- `@formbox/mantine-theme`

To build your own theme, see the theme specification and reference in `packages/theme/doc`.

## Compatibility

The published output targets ES2023. Use a modern browser or Node runtime, or add a transpile or polyfill step if you need to support older environments.
