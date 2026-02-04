import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "./utilities-C4Jv4YFd.js";
import { w as withBase } from "../server.js";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function ExploreCards({ cards }) {
  return /* @__PURE__ */ jsx("section", { className: "grid gap-4 sm:grid-cols-2", children: cards.map((card) => /* @__PURE__ */ jsx("a", { href: withBase(card.href), className: "group", children: /* @__PURE__ */ jsx(Card, { className: "hover:bg-muted/50 shadow-none transition-all", children: /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs font-medium", children: card.eyebrow }),
    /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: card.title }),
    card.description ? /* @__PURE__ */ jsx(CardDescription, { children: card.description }) : void 0
  ] }) }) }, card.href)) });
}
export {
  ExploreCards as E
};
