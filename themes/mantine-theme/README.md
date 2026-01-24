# @formbox/mantine-theme

Mantine theme for Formbox Renderer.

## Install

```bash
pnpm add @formbox/renderer @formbox/mantine-theme
# or
npm install @formbox/renderer @formbox/mantine-theme
```

## Use

Mantine components require a provider in the React tree. This package re-exports `MantineProvider` as `Provider`.

```tsx
import Renderer from "@formbox/renderer";
import { Provider, theme } from "@formbox/mantine-theme";
import "@formbox/mantine-theme/style.css";

<Provider>
  <Renderer questionnaire={questionnaire} theme={theme} />
</Provider>;
```
