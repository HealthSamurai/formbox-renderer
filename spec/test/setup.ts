import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import type { ComponentType, ReactNode } from "react";
import React, { useContext } from "react";
import { afterEach, vi } from "vitest";
import { theme as hsTheme } from "@formbox/hs-theme";
import en from "@formbox/strings/en";
import { StringsContext } from "@formbox/theme";

function withStringsFallback<P extends object>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return function WithStringsFallback(properties: P) {
    const strings = useContext(StringsContext);

    return strings == undefined
      ? React.createElement(
          StringsContext.Provider,
          { value: en },
          React.createElement(Component, properties),
        )
      : React.createElement(Component, properties);
  };
}

const themeWithStringsFallback = Object.fromEntries(
  Object.entries(hsTheme).map(([key, component]) => [
    key,
    withStringsFallback(component as ComponentType<object>),
  ]),
) as unknown as typeof hsTheme;

vi.mock("@formbox/renderer/ui/theme.tsx", () => ({
  ThemeProvider: ({ children }: { children: ReactNode }) => children,
  useTheme: () => themeWithStringsFallback,
}));

afterEach(() => {
  cleanup();
});
