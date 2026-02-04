import { jsx, jsxs } from "react/jsx-runtime";
import { E as ExploreCards } from "./explore-cards-CPB_nrmw.js";
import "react";
import "./utilities-C4Jv4YFd.js";
import "classnames";
import "tailwind-merge";
import "../server.js";
import "react-dom/server";
function Index() {
  const cards = [
    {
      href: "/docs/renderer/",
      eyebrow: "Core",
      title: "Renderer",
      description: "Learn how to wire questionnaires, themes, and state management."
    },
    {
      href: "/docs/themes/",
      eyebrow: "Themes",
      title: "Available Themes",
      description: "Explore the bundled UI themes and pick a starting point."
    },
    {
      href: "/docs/theme/",
      eyebrow: "Themes",
      title: "Custom Theme",
      description: "Review the theme contract and renderer guarantees."
    },
    {
      href: "/storybook/",
      eyebrow: "Demos",
      title: "Storybook",
      description: "Preview components and review supported question types."
    }
  ];
  return /* @__PURE__ */ jsx("main", { id: "content", className: "relative py-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full min-w-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", children: "Formbox Renderer docs" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground pt-1 text-lg", children: "Read the package docs and guides. Each package keeps its own reference material alongside the code." })
    ] }),
    /* @__PURE__ */ jsx(ExploreCards, { cards })
  ] }) });
}
export {
  Index as default
};
