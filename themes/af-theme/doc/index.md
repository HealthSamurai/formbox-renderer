---
title: "Aidbox Forms Theme"
order: 5
---

Aidbox Forms Theme for Formbox Renderer.

## Install

```bash
pnpm add @formbox/af-theme
```

Include the compiled CSS:

```ts
import "@formbox/af-theme/style.css";
```

## Usage

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/af-theme";

<Renderer fhirVersion="r5" questionnaire={questionnaire} theme={theme} />;
```
