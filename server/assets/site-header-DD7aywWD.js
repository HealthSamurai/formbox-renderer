import { jsx, jsxs } from "react/jsx-runtime";
import { Github } from "lucide-react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { c as cn } from "./utilities-C4Jv4YFd.js";
import { w as withBase } from "../server.js";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function SiteHeader({
  links,
  extraNav,
  mobileNav,
  mobileToc,
  search,
  showGithubIcon = true
}) {
  const navLinks = links ?? [
    { href: "/", label: "Home" },
    { href: "/docs/", label: "Docs" },
    { href: "/storybook/", label: "Storybook" }
  ];
  return /* @__PURE__ */ jsxs("header", { className: "bg-background/80 sticky top-0 z-40 backdrop-blur-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "container flex h-14 items-center justify-between gap-2 px-4 md:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden flex-1 md:flex", children: /* @__PURE__ */ jsxs("a", { className: "flex", href: withBase("/"), children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-7 w-7 brightness-0 invert",
            src: withBase("/android-chrome-192x192.png"),
            alt: "Formbox logo"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-3 self-center font-bold", children: "Formbox Renderer" })
      ] }) }),
      mobileNav,
      /* @__PURE__ */ jsxs("a", { className: "flex md:hidden", href: withBase("/"), children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-7 w-7 brightness-0 invert",
            src: withBase("/android-chrome-192x192.png"),
            alt: "Formbox logo"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-3 self-center font-bold", children: "Formbox Renderer" })
      ] }),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          className: "hidden flex-1 items-center justify-center gap-6 text-sm font-semibold lg:flex",
          "aria-label": "Primary",
          children: [
            navLinks.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-muted-foreground transition-colors hover:text-foreground",
                href: withBase(link.href),
                children: link.label
              },
              link.href
            )),
            extraNav
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 justify-end gap-2", children: [
        search,
        showGithubIcon ? /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/HealthSamurai/formbox-renderer",
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ jsx(Github, { className: "size-[18px]" })
          }
        ) }) }) : void 0
      ] })
    ] }),
    mobileToc ? /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: mobileToc }) : void 0
  ] });
}
export {
  Button as B,
  SiteHeader as S
};
