import { renderToString } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
const withBase = (value) => {
  if (!value.startsWith("/")) {
    return value;
  }
  return `${"/formbox-renderer/"}${value.slice(1)}`;
};
const stripBase = (pathname) => {
  return pathname.startsWith("/formbox-renderer/") ? `/${pathname.slice("/formbox-renderer/".length)}` : pathname;
};
const normalizeRoute = (value) => {
  if (!value.startsWith("/")) {
    value = `/${value}`;
  }
  if (value === "/") return value;
  return value.endsWith("/") ? value : `${value}/`;
};
const renderNotFound = async (title) => {
  const { default: Shell } = await import("./assets/shell-NQQM2AGE.js");
  return {
    element: /* @__PURE__ */ jsx(Shell, { title, children: /* @__PURE__ */ jsxs(
      "div",
      {
        id: "content",
        className: "flex h-[calc(100vh-3.5rem)] items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "scroll-m-20 border-r px-4 py-3 text-2xl font-semibold", children: "404" }),
          /* @__PURE__ */ jsx("span", { className: "scroll-m-20 px-4", children: "This page could not be found." })
        ]
      }
    ) }),
    title
  };
};
const loadDocumentation = async () => {
  const [manifest, layout, documentPage, documentationIndex, themes] = await Promise.all([
    import("./assets/manifest-DUoeLbGp.js").then((n) => n.m),
    import("./assets/layout-B13W_G9K.js"),
    import("./assets/page-CFoDebtT.js"),
    import("./assets/index-Biw2Xbl-.js"),
    import("./assets/themes-Ce44G5sM.js")
  ]);
  return {
    routes: manifest.routes,
    flattenedSidebar: manifest.flattenedSidebar,
    Layout: layout.default,
    DocumentPage: documentPage.default,
    DocumentationIndex: documentationIndex.default,
    Themes: themes.default
  };
};
const getRoutes = async () => {
  {
    const { routes } = await import("./assets/manifest-DUoeLbGp.js").then((n) => n.m);
    return ["/", "/swm/", "/docs/", "/docs/themes/", ...routes.keys()];
  }
};
const resolveRoute = async (url) => {
  const pathname = normalizeRoute(
    stripBase(new URL(url, "http://localhost").pathname)
  );
  if (pathname.startsWith("/docs/")) {
    const {
      routes,
      flattenedSidebar,
      Layout,
      DocumentPage,
      DocumentationIndex,
      Themes
    } = await loadDocumentation();
    if (pathname === "/docs/") {
      return {
        element: /* @__PURE__ */ jsx(
          Layout,
          {
            title: "Formbox Docs",
            activeRoute: pathname,
            pages: flattenedSidebar,
            children: /* @__PURE__ */ jsx(DocumentationIndex, {})
          }
        ),
        title: "Formbox Docs"
      };
    }
    if (pathname === "/docs/themes/") {
      return {
        element: /* @__PURE__ */ jsx(
          Layout,
          {
            title: "Themes",
            activeRoute: pathname,
            pages: flattenedSidebar,
            children: /* @__PURE__ */ jsx(Themes, {})
          }
        ),
        title: "Themes - Formbox Docs"
      };
    }
    const entry = routes.get(pathname);
    if (!entry) {
      return await renderNotFound("Docs · Not Found");
    }
    const module = await entry.load();
    const Content = module.default;
    return {
      element: /* @__PURE__ */ jsx(
        Layout,
        {
          title: entry.title,
          activeRoute: pathname,
          pages: flattenedSidebar,
          children: /* @__PURE__ */ jsx(
            DocumentPage,
            {
              title: entry.title,
              description: entry.description,
              route: pathname,
              pages: flattenedSidebar,
              children: /* @__PURE__ */ jsx(Content, {})
            }
          )
        }
      ),
      title: `${entry.title} - Formbox Docs`
    };
  }
  if (pathname === "/swm/") {
    {
      return {
        element: /* @__PURE__ */ jsx("div", { className: "swm-status", children: "Loading smart messaging..." }),
        title: "Formbox Renderer · Smart Web Messaging"
      };
    }
  }
  if (pathname !== "/") {
    return await renderNotFound("Not Found");
  }
  const { default: Landing } = await import("./assets/index-DbxVb0Z2.js");
  return {
    element: /* @__PURE__ */ jsx(Landing, {}),
    title: "Formbox Renderer"
  };
};
async function render(url) {
  const { element, title } = await resolveRoute(url);
  const appHtml = renderToString(element);
  return { appHtml, title };
}
export {
  getRoutes as prerenderRoutes,
  render,
  withBase as w
};
