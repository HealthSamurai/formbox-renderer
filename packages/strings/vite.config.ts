import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";
import package_ from "./package.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const peerDependencies = Object.keys(package_.peerDependencies ?? {});
const dependencies = Object.keys(package_.dependencies ?? {});
const externalDeps = new Set([
  ...peerDependencies,
  ...dependencies,
  "react",
  "react-dom",
]);
const subpathMatchers = [...externalDeps]
  .filter((dep) => !dep.includes("/"))
  .map((dep) => new RegExp(`^${dep}/`));
const rollupExternal = [
  ...externalDeps,
  "react/jsx-runtime",
  ...subpathMatchers,
];

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
      pathsToAliases: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "lib/index.ts"),
        de: path.resolve(__dirname, "lib/de.ts"),
        en: path.resolve(__dirname, "lib/en.ts"),
        es: path.resolve(__dirname, "lib/es.ts"),
        fr: path.resolve(__dirname, "lib/fr.ts"),
      },
      fileName: (_format, entryName) => `${entryName}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: rollupExternal,
    },
    copyPublicDir: false,
    minify: false,
  },
});
