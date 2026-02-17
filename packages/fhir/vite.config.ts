import { defineConfig } from "vite";
import type { LibraryFormats } from "vite";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libraryFormats: LibraryFormats[] = ["es"];

export default defineConfig(() => {
  return {
    plugins: [
      dts({
        rollupTypes: true,
        tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, "lib/index.ts"),
        fileName: "index",
        formats: libraryFormats,
      },
      copyPublicDir: false,
      minify: false,
    },
  };
});
