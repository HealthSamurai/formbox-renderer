import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import linaria from "@wyw-in-js/vite";
import { defineConfig, loadEnv } from "vite";
import { shiki } from "./vite/shiki.ts";
import { mdx } from "./vite/mdx.ts";
import { getCodeBlockBackground } from "./vite/theme.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const siteRoot = path.resolve(__dirname, "src");
const distributionRoot = path.resolve(__dirname, "dist");
const require = createRequire(import.meta.url);
const mdxReactPath = require.resolve("@mdx-js/react");
const htmlInputs = {
  client: path.resolve(siteRoot, "index.html"),
  "swm-client": path.resolve(siteRoot, "swm/index.html"),
};

export default defineConfig(async ({ mode, isSsrBuild }) => {
  const environment = loadEnv(mode, process.cwd(), "VITE_");
  return {
    root: siteRoot,
    base: environment["VITE_BASE_URL"] ?? "/",
    publicDir: path.resolve(__dirname, "public"),
    define: {
      __DOCS_CODE_BLOCK_BG__: JSON.stringify(await getCodeBlockBackground()),
    },
    resolve: {
      alias: {
        "@": siteRoot,
        "@mdx-js/react": mdxReactPath,
        "@formbox/renderer": path.resolve(repoRoot, "packages/renderer/lib"),
        "@formbox/theme": path.resolve(repoRoot, "packages/theme/lib"),
        "@formbox/hs-theme": path.resolve(repoRoot, "themes/hs-theme/lib"),
      },
    },
    plugins: [
      shiki(),
      mdx(),
      react(),
      linaria({
        include: [
          path.resolve(
            repoRoot,
            "themes/hs-theme/lib/components/**/*.{ts,tsx}",
          ),
        ],
        babelOptions: {
          presets: [
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true,
              },
            ],
          ],
        },
      }),
      tailwind(),
    ],
    server: {
      host: "127.0.0.1",
      port: 5173,
      fs: {
        allow: [repoRoot],
      },
    },
    build: isSsrBuild
      ? {
          emptyOutDir: true,
          outDir: path.resolve(distributionRoot, "server"),
          ssr: path.resolve(siteRoot, "server.tsx"),
        }
      : {
          emptyOutDir: true,
          outDir: distributionRoot,
          rollupOptions: {
            input: htmlInputs,
          },
        },
  };
});
