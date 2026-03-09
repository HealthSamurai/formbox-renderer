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

const loadDocumentation = async () => {
  const [
    manifestModule,
    layoutModule,
    scaffoldModule,
    indexModule,
    themesModule,
  ] = await Promise.all([
    import("./manifest.ts"),
    import("./layout.tsx"),
    import("./scaffold.tsx"),
    import("./index.tsx"),
    import("./themes.tsx"),
  ]);

  return {
    routes: manifestModule.routes,
    flattenedSidebar: manifestModule.flattenedSidebar,
    Layout: layoutModule.default,
    Scaffold: scaffoldModule.default,
    Index: indexModule.default,
    Themes: themesModule.default,
  };
};

export const getRoutes = async () => {
  if (import.meta.env.SSR) {
    const { routes } = await import("./manifest.ts");
    return ["/", "/docs/", "/docs/themes/", ...routes.keys()];
  }

  return ["/", "/docs/", "/docs/themes/"];
};

export const resolveRoute = async (url: string): Promise<RouteResult> => {
  const pathname = normalizeRoute(
    stripBase(new URL(url, "http://localhost").pathname),
  );

  if (pathname.startsWith("/docs/")) {
    const { routes, flattenedSidebar, Layout, Scaffold, Index, Themes } =
      await loadDocumentation();

    if (pathname === "/docs/") {
      return {
        element: (
          <Layout
            title="Formbox Docs"
            activeRoute={pathname}
            pages={flattenedSidebar}
          >
            <Index />
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
          <Scaffold
            title={entry.title}
            description={entry.description}
            route={pathname}
            pages={flattenedSidebar}
          >
            <Content />
          </Scaffold>
        </Layout>
      ),
      title: `${entry.title} - Formbox Docs`,
    };
  }

  if (pathname !== "/") {
    return await renderNotFound("Not Found");
  }

  const { default: Landing } = await import("./landing.tsx");
  return {
    element: <Landing />,
    title: "Formbox Renderer",
  };
};
