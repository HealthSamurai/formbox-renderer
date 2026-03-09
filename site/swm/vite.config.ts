import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import linaria from "@wyw-in-js/vite";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..");

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: environment["VITE_BASE_URL"] ?? "/",
    plugins: [
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
        transformLibraries: true,
      }),
    ],
    resolve: {
      alias: {
        "@formbox/fhir": path.resolve(repoRoot, "packages/fhir/lib"),
        "@formbox/strings": path.resolve(repoRoot, "packages/strings/lib"),
        "@formbox/theme": path.resolve(repoRoot, "packages/theme/lib"),
        "@formbox/hs-theme": path.resolve(repoRoot, "themes/hs-theme/lib"),
        "@formbox/renderer": path.resolve(repoRoot, "packages/renderer/lib"),
      },
    },
    server: {
      host: "127.0.0.1",
      port: 5174,
      fs: {
        allow: [repoRoot],
      },
    },
  };
});
