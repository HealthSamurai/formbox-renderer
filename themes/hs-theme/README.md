# @formbox/hs-theme

Health Samurai theme for Formbox Renderer.

## Install

```bash
pnpm add @formbox/renderer @formbox/hs-theme
# or
npm install @formbox/renderer @formbox/hs-theme
```

## Use

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/hs-theme";
import "@formbox/hs-theme/style.css";

<Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />;
```
