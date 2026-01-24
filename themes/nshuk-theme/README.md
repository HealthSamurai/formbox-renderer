# @formbox/nshuk-theme

NHS Design System theme for Formbox Renderer. See the NHS Design System at https://service-manual.nhs.uk/design-system.

## Install

```bash
pnpm add @formbox/renderer @formbox/nshuk-theme
# or
npm install @formbox/renderer @formbox/nshuk-theme
```

## Use

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/nshuk-theme";
import "@formbox/nshuk-theme/style.css";

<Renderer questionnaire={questionnaire} theme={theme} />;
```
