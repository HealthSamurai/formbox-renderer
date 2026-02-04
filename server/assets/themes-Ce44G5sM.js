import { jsx, jsxs } from "react/jsx-runtime";
import { E as ExploreCards } from "./explore-cards-CPB_nrmw.js";
import { s as sidebar, r as routes } from "./manifest-DUoeLbGp.js";
import "react";
import "./utilities-C4Jv4YFd.js";
import "classnames";
import "tailwind-merge";
import "../server.js";
import "react-dom/server";
function Themes() {
  const themesSection = sidebar.find((section) => section.label === "Themes");
  const availableThemes = themesSection?.groups.find((group) => group.label === "Available Themes")?.pages ?? [];
  const customThemes = themesSection?.groups.find((group) => group.label === "Custom Theme")?.pages ?? [];
  const availableCards = availableThemes.map((theme) => ({
    href: theme.href,
    eyebrow: "Available Themes",
    title: theme.label,
    description: routes.get(theme.href)?.description
  }));
  const customCards = customThemes.map((theme) => ({
    href: theme.href,
    eyebrow: "Custom Theme",
    title: theme.label,
    description: routes.get(theme.href)?.description
  }));
  return /* @__PURE__ */ jsx("main", { id: "content", className: "relative py-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full min-w-0 space-y-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", children: "Themes" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground pt-1 text-lg", children: "Browse the available themes or build a custom experience from the theme contract." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-7", children: "Start with a ready-made UI kit, review how each theme wires inputs and layouts, and treat them as reference implementations when you want a consistent UI fast." }),
      /* @__PURE__ */ jsx(ExploreCards, { cards: availableCards })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-7", children: "Use the Theme contract to build your own design system, align behavior with renderer guarantees, and keep styling fully in your control." }),
      /* @__PURE__ */ jsx(ExploreCards, { cards: customCards })
    ] })
  ] }) });
}
export {
  Themes as default
};
