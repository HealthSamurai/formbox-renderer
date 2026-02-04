import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { X, Search as Search$1, Shield, Sparkles, HeartPulse, LayoutGrid, List, Settings, BookOpen, Paintbrush2, Palette, Rocket, ChevronDown, Menu } from "lucide-react";
import * as React from "react";
import { useState, useRef, useMemo, useEffect } from "react";
import { B as Button } from "./site-header-DD7aywWD.js";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { c as cn } from "./utilities-C4Jv4YFd.js";
import { S as ScrollArea, T as TableOfContents } from "./table-of-contents-D1ARqnWv.js";
import Shell from "./shell-NQQM2AGE.js";
import { w as withBase } from "../server.js";
import { s as sidebar } from "./manifest-DUoeLbGp.js";
import "@radix-ui/react-slot";
import "classnames";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
import "react-dom/server";
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const normalizeQuery = (value) => value.trim().toLowerCase();
const Kbd = ({ children }) => /* @__PURE__ */ jsx("kbd", { className: "border-border bg-muted pointer-events-none inline-flex h-5 min-h-5 select-none items-center gap-1 rounded border px-1 font-sans text-[11px] font-medium", children });
function Search({
  inAside = false,
  pages
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputReference = useRef(
    void 0
  );
  const filtered = useMemo(() => {
    const normalized = normalizeQuery(query);
    if (!normalized) return pages;
    return pages.filter((item) => {
      const label = `${item.label} ${item.sectionLabel} ${item.groupLabel}`;
      return label.toLowerCase().includes(normalized);
    });
  }, [pages, query]);
  const grouped = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const item of filtered) {
      const section = item.sectionLabel || "Docs";
      const items = map.get(section) ?? [];
      items.push(item);
      map.set(section, items);
    }
    return [...map.entries()];
  }, [filtered]);
  useEffect(() => {
    const handler = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    globalThis.addEventListener("keydown", handler);
    return () => globalThis.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const frame = globalThis.requestAnimationFrame(
      () => inputReference.current?.focus()
    );
    return () => globalThis.cancelAnimationFrame(frame);
  }, [open]);
  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setQuery("");
    }
  };
  return /* @__PURE__ */ jsxs(SheetPrimitive.Root, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        className: inAside ? "text-muted-foreground hover:text-accent-foreground mb-4 h-8 w-full self-center rounded-md pr-1.5 font-normal" : "text-muted-foreground hover:text-accent-foreground h-8 self-center rounded-md pr-1.5 font-normal md:w-40 lg:w-60",
        children: [
          /* @__PURE__ */ jsx("span", { className: "mr-auto overflow-hidden", children: "Search documentation..." }),
          /* @__PURE__ */ jsx("span", { className: "ml-auto hidden md:block", children: /* @__PURE__ */ jsxs(Kbd, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "⌘" }),
            "K"
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetPrimitive.Portal, { children: [
      /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
      /* @__PURE__ */ jsxs(SheetPrimitive.Content, { className: "fixed left-1/2 top-1/2 z-50 w-[min(90vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-0 shadow-lg", children: [
        /* @__PURE__ */ jsx(SheetPrimitive.Title, { className: "sr-only", children: "Search documentation" }),
        /* @__PURE__ */ jsx(SheetPrimitive.Description, { className: "sr-only", children: "Search the Formbox Renderer docs" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b px-3 py-3 text-sm", children: [
          /* @__PURE__ */ jsx(Search$1, { className: "text-muted-foreground size-[18px]" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputReference,
              value: query,
              onChange: (event) => setQuery(event.target.value),
              placeholder: "Type to search...",
              className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-h-[60vh] overflow-y-auto p-1 text-sm", children: grouped.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-6 text-center", children: "No results found." }) : grouped.map(([section, items]) => /* @__PURE__ */ jsxs("div", { className: "p-1.5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground px-2 py-1.5 text-xs font-medium", children: section }),
          items.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: withBase(item.href),
              onClick: () => setOpen(false),
              className: "hover:bg-muted flex w-full select-none items-center gap-3 rounded-md px-2 py-2",
              children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-foreground", children: item.label }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: item.groupLabel ? `${item.sectionLabel} / ${item.groupLabel}` : item.sectionLabel })
              ] })
            },
            item.href
          ))
        ] }, section)) })
      ] })
    ] })
  ] });
}
const isPageActive = (activeRoute, href, matchPrefix) => {
  return matchPrefix ? activeRoute?.startsWith(href) : activeRoute === href;
};
const getSectionHref = (section) => {
  return section.href ?? section.groups.find((group) => group.href)?.href ?? section.groups.flatMap((group) => group.pages)[0]?.href ?? "/docs/";
};
const getActiveSection = (sidebar2, activeRoute) => {
  return sidebar2.find(
    (section) => activeRoute ? activeRoute.startsWith(getSectionHref(section)) || section.groups.some(
      (group) => group.pages.some(
        (page) => isPageActive(activeRoute, page.href, page.matchPrefix)
      )
    ) : false
  ) ?? sidebar2[0];
};
function Sidebar({
  sidebar: sidebar2,
  activeRoute,
  onNavigate
}) {
  const activeSection = getActiveSection(sidebar2, activeRoute);
  const iconRegistry = {
    rocket: Rocket,
    palette: Palette,
    paintbrush: Paintbrush2,
    "book-open": BookOpen,
    settings: Settings,
    list: List,
    "layout-grid": LayoutGrid,
    "heart-pulse": HeartPulse,
    sparkles: Sparkles,
    shield: Shield
  };
  const getIcon = (icon) => icon ? iconRegistry[icon] : void 0;
  const [openGroups, setOpenGroups] = useState({});
  const autoOpenGroups = useMemo(() => {
    const nextState = {};
    activeSection?.groups.forEach((group) => {
      if (!group.label) return;
      const isGroupActive = group.pages.some(
        (page) => isPageActive(activeRoute, page.href, page.matchPrefix)
      );
      if (isGroupActive) {
        nextState[group.label] = true;
      }
    });
    return nextState;
  }, [activeRoute, activeSection]);
  if (!activeSection) return;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1 border-b pb-4", children: sidebar2.map((section) => {
      const href = getSectionHref(section);
      const isActive = activeRoute === href;
      const Icon = getIcon(section.icon);
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: withBase(href),
          onClick: onNavigate,
          className: cn(
            "text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm",
            isActive && "bg-muted !text-primary font-medium"
          ),
          children: [
            Icon ? /* @__PURE__ */ jsx(Icon, { className: "size-4 self-center" }) : void 0,
            section.label
          ]
        }
      ) }, section.label);
    }) }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1 py-1 pt-4", children: activeSection.groups.map((group) => {
      if (!group.label) {
        return group.pages.map((item) => {
          const isActive = isPageActive(
            activeRoute,
            item.href,
            item.matchPrefix
          );
          const Icon2 = getIcon(item.icon);
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: withBase(item.href),
              onClick: onNavigate,
              className: cn(
                "text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm",
                isActive && "bg-muted !text-primary font-medium"
              ),
              children: [
                Icon2 ? /* @__PURE__ */ jsx(Icon2, { className: "min-w-4 self-center", size: 16 }) : void 0,
                /* @__PURE__ */ jsx("span", { className: "truncate text-nowrap", children: item.label })
              ]
            }
          ) }, item.href);
        });
      }
      const Icon = getIcon(group.icon);
      const isOpen = openGroups[group.label] ?? autoOpenGroups[group.label] ?? false;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "text-foreground/80 hover:bg-muted hover:text-primary flex h-8 w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-sm",
            onClick: () => setOpenGroups((previous) => ({
              ...previous,
              [group.label]: !(previous[group.label] ?? false)
            })),
            children: [
              Icon ? /* @__PURE__ */ jsx(Icon, { className: "min-w-4 self-center", size: 16 }) : void 0,
              /* @__PURE__ */ jsx("span", { className: "truncate text-nowrap", children: group.label }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn(
                    "ml-auto transition-transform",
                    !isOpen && "-rotate-90"
                  ),
                  size: 16
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { style: isOpen ? void 0 : { display: "none" }, children: /* @__PURE__ */ jsx("ul", { className: "mx-3.5 flex flex-col gap-1 border-l px-2.5 py-1", children: group.pages.map((item) => {
          const isActive = isPageActive(
            activeRoute,
            item.href,
            item.matchPrefix
          );
          const PageIcon = getIcon(item.icon);
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: withBase(item.href),
              onClick: onNavigate,
              className: cn(
                "text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm",
                isActive && "bg-muted !text-primary font-medium"
              ),
              children: [
                PageIcon ? /* @__PURE__ */ jsx(
                  PageIcon,
                  {
                    className: "min-w-4 self-center",
                    size: 16
                  }
                ) : void 0,
                /* @__PURE__ */ jsx("span", { className: "truncate text-nowrap", children: item.label })
              ]
            }
          ) }, item.href);
        }) }) })
      ] }) }, group.label);
    }) })
  ] });
}
function Layout({
  title,
  activeRoute,
  children,
  pages
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    Shell,
    {
      title,
      search: /* @__PURE__ */ jsx(Search, { pages }),
      mobileNav: /* @__PURE__ */ jsxs(Sheet, { open: menuOpen, onOpenChange: setMenuOpen, children: [
        /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", children: /* @__PURE__ */ jsx(Menu, { className: "size-[18px]" }) }) }),
        /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "pr-0", children: [
          /* @__PURE__ */ jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxs("a", { className: "flex", href: withBase("/"), children: [
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
          /* @__PURE__ */ jsx("div", { className: "relative h-full overflow-hidden py-6 pr-6 text-sm", children: /* @__PURE__ */ jsx(
            Sidebar,
            {
              sidebar,
              activeRoute,
              onNavigate: () => setMenuOpen(false)
            }
          ) }),
          /* @__PURE__ */ jsx(SheetHeader, { className: "sr-only", children: /* @__PURE__ */ jsx(SheetTitle, { children: "Docs navigation" }) })
        ] })
      ] }),
      mobileToc: /* @__PURE__ */ jsx(
        TableOfContents,
        {
          contentId: "docs-content",
          activeRoute,
          isSmall: true
        }
      ),
      children: /* @__PURE__ */ jsx("div", { className: "min-h-screen border-b", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10 container md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]", children: [
        /* @__PURE__ */ jsx("aside", { className: "h-[calc(100vh-3.5rem)] md:top-[61px] fixed z-30 -ml-2 hidden w-full shrink-0 overflow-y-auto top-[102px] md:sticky md:block", children: /* @__PURE__ */ jsx(ScrollArea, { className: "h-full py-6 pr-6 text-sm md:pr-4", children: /* @__PURE__ */ jsx(Sidebar, { sidebar, activeRoute }) }) }),
        children
      ] }) })
    }
  );
}
export {
  Layout as default
};
