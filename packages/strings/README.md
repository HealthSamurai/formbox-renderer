# @formbox/strings

Localized UI strings for Formbox renderer packages.

## Install

```bash
pnpm add @formbox/strings
# or
npm install @formbox/strings
```

## Usage

Import all bundled locales:

```ts
import strings from "@formbox/strings";

const en = strings.en;
const ru = strings.ru;
```

Import a single locale:

```ts
import fi from "@formbox/strings/fi";
```

Example with `@formbox/renderer/controlled`:

```tsx
import ControlledRenderer from "@formbox/renderer/controlled";
import fi from "@formbox/strings/fi";

<ControlledRenderer
  fhirVersion="r5"
  questionnaire={questionnaire}
  defaultQuestionnaireResponse={questionnaireResponse}
  language="fi"
  strings={fi}
  onChange={onChange}
  onSubmit={null}
  onLanguageChange={onLanguageChange}
  terminologyServerUrl={null}
  theme={theme}
/>;
```

## Available locales

- `de`
- `en`
- `es`
- `fi`
- `fr`
- `it`
- `nl`
- `pl`
- `pt`
- `ru`
- `sv`
- `tr`

## Development

From repo root:

```bash
pnpm --filter @formbox/strings lint
pnpm --filter @formbox/strings typecheck
pnpm --filter @formbox/strings build
```
