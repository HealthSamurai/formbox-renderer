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

## Fonts

The theme is built on [`@health-samurai/react-components`](https://www.npmjs.com/package/@health-samurai/react-components) and uses its Inter and JetBrains Mono typography. The fonts are not bundled: load them in the `<head>` of the host page.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
  rel="stylesheet"
/>
```

The stylesheet includes Tailwind's preflight, which resets default element styles on the whole page.
