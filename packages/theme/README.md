# @formbox/theme

Theme contract and TypeScript types for Formbox Renderer themes.

## When to use

Use this package if you are building a custom theme or want strict theme typing. It does not ship runtime components.

## Install

```bash
pnpm add -D @formbox/theme
# or
npm install -D @formbox/theme
```

## Quick start

```tsx
import type { Theme } from "@formbox/theme";
import Renderer from "@formbox/renderer";
import { theme as baseTheme } from "@formbox/hs-theme";

const theme: Theme = {
  ...baseTheme,
  Label: MyLabel,
};

<Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />;
```

## Documentation

- `doc/index.md` - theme specification
- `doc/reference.md` - component reference
- `doc/behavior.md` - renderer behavior notes
