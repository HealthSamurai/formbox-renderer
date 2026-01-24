# Formbox Renderer

React renderer for HL7® FHIR® R5 Questionnaires with pluggable themes. The renderer is headless: you must pass a theme and include its CSS.

## Install

```bash
pnpm add @formbox/renderer @formbox/hs-theme
# or
npm install @formbox/renderer @formbox/hs-theme
```

## Peer dependencies

@formbox/renderer expects these to be installed by your app:

- react, react-dom
- mobx, mobx-react-lite, mobx-utils
- classnames
- fhirpath
- @lhncbc/ucum-lhc

Your package manager will warn you if any are missing.

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

export function IntakeForm() {
  return <Renderer questionnaire={questionnaire} theme={theme} />;
}
```

If you want strong typing, import FHIR types from `fhir/r5`:

```ts
import type { Questionnaire, QuestionnaireResponse } from "fhir/r5";
```

If TypeScript cannot resolve `fhir/r5`, add `@types/fhir` as a dev dependency:

```bash
pnpm add -D @types/fhir
```

## Themes

All themes export a `theme` object and a compiled CSS file:

- `@formbox/hs-theme` - Health Samurai look.
- `@formbox/nshuk-theme` - NHS Design System look.
- `@formbox/antd-theme` - Ant Design components.
- `@formbox/mantine-theme` - Mantine components (wrap with `Provider`).

Mantine usage:

```tsx
import Renderer from "@formbox/renderer";
import { Provider, theme } from "@formbox/mantine-theme";
import "@formbox/mantine-theme/style.css";

<Provider>
  <Renderer questionnaire={questionnaire} theme={theme} />
</Provider>;
```

## Renderer props

- `questionnaire` (required): FHIR Questionnaire resource.
- `theme` (required): Theme object.
- `initialResponse`: Initial QuestionnaireResponse to seed answers.
- `onChange`: Called on every response change.
- `onSubmit`: Called after validation passes.
- `terminologyServerUrl`: Base URL for ValueSet `$expand` requests.

## Custom themes

Build a theme by implementing the `@formbox/theme` contract. Start from an existing theme and override what you need.

See:

- `packages/theme/doc/index.md` (spec)
- `packages/theme/doc/reference.md` (component reference)
- `packages/theme/doc/behavior.md` (behavior notes)

## Compatibility

The published output targets ES2023. Use a modern browser/Node runtime or add a transpile/polyfill step for older environments.

## License

MIT. See `LICENSE`.
