import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import { shiki } from "./vite/shiki.ts";
import { mdx } from "./vite/mdx.ts";
import { getCodeBlockBackground } from "./vite/theme.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..");
const siteRoot = path.resolve(__dirname, "src");
const distributionRoot = path.resolve(__dirname, "dist");

export default defineConfig(async ({ mode, isSsrBuild }) => {
  const environment = loadEnv(mode, process.cwd(), "VITE_");
  return {
    root: siteRoot,
    base: environment["VITE_BASE_URL"] ?? "/",
    publicDir: path.resolve(__dirname, "public"),
    resolve: {
      alias: {
        "@mdx-js/react": path.resolve(__dirname, "node_modules/@mdx-js/react"),
      },
    },
    define: {
      __DOCS_CODE_BLOCK_BG__: JSON.stringify(await getCodeBlockBackground()),
    },
    plugins: [shiki(), mdx(), react(), tailwind()],
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
        },
  };
});
