# @formbox/antd-theme

Ant Design theme for Formbox Renderer.

## Install

```bash
pnpm add @formbox/renderer @formbox/antd-theme
# or
npm install @formbox/renderer @formbox/antd-theme
```

## Use

```tsx
import Renderer from "@formbox/renderer";
import { theme } from "@formbox/antd-theme";
import "@formbox/antd-theme/style.css";

<Renderer questionnaire={questionnaire} theme={theme} />;
```
