# @formbox/af-theme

Aidbox Forms Theme for Formbox Renderer.

## Install

```bash
pnpm add @formbox/renderer @formbox/af-theme
# or
npm install @formbox/renderer @formbox/af-theme
```

## Use

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/af-theme";
import "@formbox/af-theme/style.css";

<Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />;
```
