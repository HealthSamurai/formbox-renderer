import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";
import package_ from "./package.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const peerDependencies = Object.keys(package_.peerDependencies);

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
      pathsToAliases: false,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "lib/index.tsx"),
        controlled: path.resolve(__dirname, "lib/controlled.tsx"),
      },
      fileName: (_format, entryName) => `${entryName}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "@formbox/strings",
        "@formbox/theme",
        ...peerDependencies,
        ...peerDependencies
          .filter((dep) => !dep.includes("/"))
          .map((dep) => new RegExp(`^${dep}/`)),
      ],
    },
    copyPublicDir: false,
  },
});
