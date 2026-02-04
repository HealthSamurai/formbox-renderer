import type { ReactElement } from "react";

import { stripBase } from "./lib/base-url.ts";

type RouteResult = {
  element: ReactElement;
  title: string;
};

const normalizeRoute = (value: string) => {
  if (!value.startsWith("/")) {
    value = `/${value}`;
  }
  if (value === "/") return value;
  return value.endsWith("/") ? value : `${value}/`;
};

const renderNotFound = async (title: string): Promise<RouteResult> => {
  const { default: Shell } = await import("./components/shell.tsx");
  return {
    element: (
      <Shell title={title}>
        <div
          id="content"
          className="flex h-[calc(100vh-3.5rem)] items-center justify-center"
        >
          <h3 className="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
            404
          </h3>
          <span className="scroll-m-20 px-4">
            This page could not be found.
          </span>
        </div>
      </Shell>
    ),
    title,
  };
};

const loadDocs = async () => {
  const [manifest, layout, documentPage, documentationIndex, themes] =
    await Promise.all([
      import("./docs/manifest.ts"),
      import("./docs/layout.tsx"),
      import("./docs/page.tsx"),
      import("./docs/index.tsx"),
      import("./docs/themes.tsx"),
    ]);

  return {
    routes: manifest.routes,
    flattenedSidebar: manifest.flattenedSidebar,
    Layout: layout.default,
    DocumentPage: documentPage.default,
    DocumentationIndex: documentationIndex.default,
    Themes: themes.default,
  };
};

export const getRoutes = async () => {
  if (import.meta.env.SSR) {
    const { routes } = await import("./docs/manifest.ts");
    return ["/", "/swm/", "/docs/", "/docs/themes/", ...routes.keys()];
  }

  return ["/", "/swm/", "/docs/", "/docs/themes/"];
};

export const resolveRoute = async (url: string): Promise<RouteResult> => {
  const pathname = normalizeRoute(
    stripBase(new URL(url, "http://localhost").pathname),
  );

  if (pathname.startsWith("/docs/")) {
    const {
      routes,
      flattenedSidebar,
      Layout,
      DocumentPage,
      DocumentationIndex,
      Themes,
    } = await loadDocs();

    if (pathname === "/docs/") {
      return {
        element: (
          <Layout
            title="Formbox Docs"
            activeRoute={pathname}
            pages={flattenedSidebar}
          >
            <DocumentationIndex />
          </Layout>
        ),
        title: "Formbox Docs",
      };
    }

    if (pathname === "/docs/themes/") {
      return {
        element: (
          <Layout
            title="Themes"
            activeRoute={pathname}
            pages={flattenedSidebar}
          >
            <Themes />
          </Layout>
        ),
        title: "Themes - Formbox Docs",
      };
    }

    const entry = routes.get(pathname);
    if (!entry) {
      return await renderNotFound("Docs · Not Found");
    }

    const module = await entry.load();
    const Content = module.default;

    return {
      element: (
        <Layout
          title={entry.title}
          activeRoute={pathname}
          pages={flattenedSidebar}
        >
          <DocumentPage
            title={entry.title}
            description={entry.description}
            route={pathname}
            pages={flattenedSidebar}
          >
            <Content />
          </DocumentPage>
        </Layout>
      ),
      title: `${entry.title} - Formbox Docs`,
    };
  }

  if (pathname === "/swm/") {
    if (import.meta.env.SSR) {
      return {
        element: <div className="swm-status">Loading smart messaging...</div>,
        title: "Formbox Renderer · Smart Web Messaging",
      };
    }

    const { default: SwmPage } = await import("./swm/page.tsx");
    return {
      element: <SwmPage />,
      title: "Formbox Renderer · Smart Web Messaging",
    };
  }

  if (pathname !== "/") {
    return await renderNotFound("Not Found");
  }

  const { default: Landing } = await import("./index.tsx");
  return {
    element: <Landing />,
    title: "Formbox Renderer",
  };
};
