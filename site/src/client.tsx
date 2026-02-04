import { createRoot, hydrateRoot } from "react-dom/client";

import { stripBase } from "./lib/base-url.ts";

const rootElement = globalThis.document.querySelector("#root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const url = globalThis.location.pathname;
const pathname = stripBase(url);
const isSwmRoute =
  pathname === "/swm" || pathname === "/swm/" || pathname.startsWith("/swm/");

const renderClient = async () => {
  if (import.meta.env.DEV) {
    const { resolveRoute } = await import("./router.tsx");
    const { element, title } = await resolveRoute(url);

    if (title && globalThis.document) {
      globalThis.document.title = title;
    }

    const hasMarkup = [...rootElement.childNodes].some((node) => {
      if (node.nodeType === globalThis.Node.ELEMENT_NODE) return true;
      if (node.nodeType === globalThis.Node.TEXT_NODE) {
        return Boolean(node.textContent?.trim());
      }
      return false;
    });

    const shouldHydrate = hasMarkup && !isSwmRoute;

    if (shouldHydrate) {
      hydrateRoot(rootElement, element);
    } else {
      createRoot(rootElement).render(element);
    }
    return;
  }

  if (isSwmRoute) {
    const { default: SwmPage } = await import("./swm/page.tsx");

    if (globalThis.document) {
      globalThis.document.title = "Formbox Renderer · Smart Web Messaging";
    }

    createRoot(rootElement).render(<SwmPage />);
    return;
  }

  const isDocsRoute = pathname === "/docs" || pathname.startsWith("/docs/");
  const isRootRoute = pathname === "/";

  if (!isDocsRoute && !isRootRoute) {
    return;
  }

  const { resolveRoute } = await import("./router.tsx");
  const { element, title } = await resolveRoute(url);

  if (title && globalThis.document) {
    globalThis.document.title = title;
  }

  const hasMarkup = [...rootElement.childNodes].some((node) => {
    if (node.nodeType === globalThis.Node.ELEMENT_NODE) return true;
    if (node.nodeType === globalThis.Node.TEXT_NODE) {
      return Boolean(node.textContent?.trim());
    }
    return false;
  });

  if (hasMarkup) {
    hydrateRoot(rootElement, element);
  } else {
    createRoot(rootElement).render(element);
  }
};

await renderClient();
