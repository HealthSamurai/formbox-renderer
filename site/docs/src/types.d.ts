declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}

declare module "*.md" {
  import type { ComponentType } from "react";

  const MarkdownComponent: ComponentType<Record<string, unknown>>;
  export default MarkdownComponent;
}

declare const __DOCS_CODE_BLOCK_BG__: string;
