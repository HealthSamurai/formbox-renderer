---
title: "Renderer"
order: 1
icon: rocket
---

Formbox Renderer is a React renderer for HL7 FHIR R4 and R5 Questionnaires. It is headless. You must pass a theme object and include the theme CSS.

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

<Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />;
```

If you want strong typing, use the versioned type helpers from the renderer.

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

| Prop                   | Type                                             | Required | Description                                               |
| ---------------------- | ------------------------------------------------ | -------- | --------------------------------------------------------- |
| `questionnaire`        | `QuestionnaireOf<V>`                             | Yes      | FHIR Questionnaire resource that drives the form.         |
| `theme`                | `Theme`                                          | Yes      | Theme contract implementation.                            |
| `initialResponse`      | `QuestionnaireResponseOf<V>`                     | No       | Seed response used to initialize answers.                 |
| `onChange`             | `(response: QuestionnaireResponseOf<V>) => void` | No       | Called with the latest response whenever state changes.   |
| `onSubmit`             | `(response: QuestionnaireResponseOf<V>) => void` | No       | Called after validation passes and the form is submitted. |
| `terminologyServerUrl` | `string`                                         | No       | Base URL for ValueSet `$expand` requests.                 |
| `fhirVersion`          | `"r4" \| "r5"`                                   | Yes      | FHIR version for Questionnaire parsing.                   |

## Validation and submit

`onSubmit` fires only after validation passes. When validation fails, the renderer populates Errors slots so your theme can surface issues next to controls or in summaries.

## ValueSet expansion

When a question references a ValueSet, the renderer expands it through a terminology server. If you do not pass `terminologyServerUrl`, the default server is `https://tx.fhir.org/r4` for R4 and `https://tx.fhir.org/r5` for R5.

## Themes

Themes live in `themes/*` in this repo. Every theme exports a `theme` object and a compiled CSS file.

- `@formbox/hs-theme`
- `@formbox/nshuk-theme`
- `@formbox/antd-theme`
- `@formbox/mantine-theme`

To build your own theme, see the theme specification and reference in `packages/theme/doc`.

## Compatibility

The published output targets ES2023. Use a modern browser or Node runtime, or add a transpile or polyfill step if you need to support older environments.
