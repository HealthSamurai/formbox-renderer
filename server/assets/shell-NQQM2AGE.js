import { jsxs, jsx } from "react/jsx-runtime";
import { Github } from "lucide-react";
import { useEffect } from "react";
import { S as SiteHeader, B as Button } from "./site-header-DD7aywWD.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utilities-C4Jv4YFd.js";
import "classnames";
import "tailwind-merge";
import "../server.js";
import "react-dom/server";
function Shell({
  title,
  children,
  mobileNav,
  mobileToc,
  search
}) {
  useEffect(() => {
    if (!globalThis.document) return;
    const resolvedTitle = title ? title.includes("Formbox Docs") ? title : `${title} - Formbox Docs` : "Formbox Docs";
    document.title = resolvedTitle;
  }, [title]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:font-semibold",
        href: "#content",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsx(SiteHeader, { mobileNav, mobileToc, search }),
    children,
    /* @__PURE__ */ jsx("footer", { className: "text-muted-foreground py-6 md:px-8 md:py-0", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Copyright © 2024" }),
      /* @__PURE__ */ jsx("span", { className: "flex-1" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 md:justify-end", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "icon", className: "flex gap-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/HealthSamurai/formbox-renderer",
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ jsx(Github, { className: "size-5" })
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Shell as default
};
