import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import linaria from "@wyw-in-js/vite";

const fromRoot = (...segments: string[]) =>
  path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "..",
    "..",
    ...segments,
  );

const linariaInclude = [
  fromRoot("themes/hs-theme/lib/components/**/*.{ts,tsx}"),
  fromRoot("themes/af-theme/lib/components/**/*.{ts,tsx}"),
  fromRoot("themes/nshuk-theme/lib/components/**/*.{ts,tsx}"),
  fromRoot("themes/antd-theme/lib/components/**/*.{ts,tsx}"),
  fromRoot("themes/mantine-theme/lib/components/**/*.{ts,tsx}"),
];

const workspaceAliases = {
  "@formbox/fhir": fromRoot("packages/fhir/lib"),
  "@formbox/strings": fromRoot("packages/strings/lib"),
  "@formbox/theme": fromRoot("packages/theme/lib"),
  "@formbox/af-theme": fromRoot("themes/af-theme/lib"),
  "@formbox/antd-theme": fromRoot("themes/antd-theme/lib"),
  "@formbox/mantine-theme": fromRoot("themes/mantine-theme/lib"),
  "@formbox/hs-theme": fromRoot("themes/hs-theme/lib"),
  "@formbox/nshuk-theme": fromRoot("themes/nshuk-theme/lib"),
  "@formbox/renderer": fromRoot("packages/renderer/lib"),
};

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(Array.isArray(config.resolve.alias)
        ? {}
        : (config.resolve.alias ?? {})),
      ...workspaceAliases,
    };
    config.plugins = [
      ...(config.plugins ?? []),
      linaria({
        include: linariaInclude,
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
    ];

    return config;
  },
};
export default config;
