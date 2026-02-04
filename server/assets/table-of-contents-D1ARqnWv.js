import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronRight, Star, CircleDot, ArrowUpRight } from "lucide-react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { c as cn } from "./utilities-C4Jv4YFd.js";
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const tocLinks = [
  {
    label: "Star on GitHub",
    href: "https://github.com/HealthSamurai/formbox-renderer",
    icon: Star
  },
  {
    label: "Create Issues",
    href: "https://github.com/HealthSamurai/formbox-renderer/issues",
    icon: CircleDot
  }
];
const tocIconLinks = [
  // {
  //   label: "GitHub",
  //   href: "https://github.com/HealthSamurai/formbox-renderer",
  //   icon: Github,
  // },
];
const slugify = (value) => {
  return value.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-");
};
const ensureUniqueId = (value, usedIds) => {
  const baseId = slugify(value) || "section";
  let candidate = baseId;
  let index = 2;
  while (usedIds.has(candidate)) {
    candidate = `${baseId}-${index}`;
    index += 1;
  }
  usedIds.add(candidate);
  return candidate;
};
const collectHeadings = (container) => {
  const headingNodes = [
    ...container.querySelectorAll("h1, h2, h3, h4")
  ];
  const usedIds = /* @__PURE__ */ new Set();
  return headingNodes.reduce((items, heading) => {
    const label = heading.textContent?.trim() ?? "";
    if (!label) return items;
    if (heading.id) {
      usedIds.add(heading.id);
    } else {
      heading.id = ensureUniqueId(label, usedIds);
    }
    const level = Number.parseInt(heading.tagName.slice(1), 10);
    items.push({ id: heading.id, label, level });
    return items;
  }, []);
};
const buildTree = (headings) => {
  const root = [];
  const stack = [];
  headings.forEach((heading) => {
    const node = { ...heading, children: [] };
    while (stack.length > 0 && (stack.at(-1)?.level ?? 0) >= heading.level) {
      stack.pop();
    }
    const parent = stack.at(-1);
    if (parent) {
      parent.children.push(node);
    } else {
      root.push(node);
    }
    stack.push(node);
  });
  return root;
};
const TocTree = ({
  nodes,
  activeIds,
  level,
  className,
  onNavigate
}) => {
  return /* @__PURE__ */ jsx("ul", { className: cn(level !== 0 && "pl-4", className), children: nodes.map((node) => {
    const isActive = activeIds.includes(node.id);
    const showBar = level === 0 || isActive;
    const barPositionClass = level === 0 ? "left-0 md:left-[6px]" : "-left-4 md:left-[-10px]";
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: cn(
          "relative py-1",
          level !== 0 && "[&:first-child]:pt-2 [&:last-child]:pb-0"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            showBar ? /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "absolute top-0 bottom-0 w-px transition-colors duration-300 ease-in-out",
                  barPositionClass,
                  level === 0 ? isActive ? "bg-primary" : "bg-border" : "bg-primary"
                )
              }
            ) : void 0,
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${node.id}`,
                className: cn(
                  "text-muted-foreground hover:text-primary transition-all",
                  "pl-4.5 md:pl-5.5",
                  isActive && "text-primary"
                ),
                onClick: () => onNavigate?.(node.id),
                children: node.label
              }
            )
          ] }),
          node.children.length > 0 ? /* @__PURE__ */ jsx(
            TocTree,
            {
              nodes: node.children,
              activeIds,
              level: level + 1,
              ...onNavigate ? { onNavigate } : {}
            }
          ) : void 0
        ]
      },
      node.id
    );
  }) });
};
function TableOfContents({
  contentId,
  activeRoute,
  isSmall
}) {
  const [headings, setHeadings] = useState([]);
  const [activeIds, setActiveIds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaReference = useRef(
    void 0
  );
  useEffect(() => {
    const documentReference = globalThis.document;
    if (!documentReference) return;
    const scheduleUpdate = globalThis.queueMicrotask ?? ((callback) => globalThis.setTimeout(callback, 0));
    const container = documentReference.querySelector(
      `#${contentId}`
    );
    if (!container) {
      scheduleUpdate(() => {
        setHeadings([]);
        setActiveIds([]);
      });
      return;
    }
    const items = collectHeadings(container);
    scheduleUpdate(() => {
      setHeadings(items);
      const firstItem = items.at(0);
      setActiveIds(firstItem ? [firstItem.id] : []);
    });
    if (items.length === 0 || !globalThis.IntersectionObserver) {
      return;
    }
    const visibleIds = /* @__PURE__ */ new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const headingId = entry.target.id;
          if (!headingId) return;
          if (entry.isIntersecting) {
            visibleIds.add(headingId);
          } else {
            visibleIds.delete(headingId);
          }
        });
        const nextActive = items.filter((item) => visibleIds.has(item.id)).map((item) => item.id);
        setActiveIds(
          (previous) => nextActive.length > 0 ? nextActive : previous
        );
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0
      }
    );
    items.forEach((item) => {
      const heading = documentReference.querySelector(
        `#${item.id}`
      );
      if (heading) observer.observe(heading);
    });
    return () => observer.disconnect();
  }, [contentId, activeRoute]);
  useEffect(() => {
    if (isSmall || activeIds.length === 0) return;
    const viewport = scrollAreaReference.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );
    if (!viewport) return;
    const escapeSelector = typeof globalThis.CSS?.escape === "function" ? globalThis.CSS.escape : (value) => value.replaceAll(/["\\]/g, String.raw`\$&`);
    const padding = 16;
    const viewportRect = viewport.getBoundingClientRect();
    const target = activeIds.map(
      (id) => viewport.querySelector(`a[href="#${escapeSelector(id)}"]`)
    ).find((node) => {
      if (!node) return false;
      const rect = node.getBoundingClientRect();
      return rect.top < viewportRect.top + padding || rect.bottom > viewportRect.bottom - padding;
    });
    if (!target) return;
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < viewportRect.top + padding) {
      viewport.scrollBy({
        top: targetRect.top - viewportRect.top - padding,
        behavior: "smooth"
      });
      return;
    }
    if (targetRect.bottom > viewportRect.bottom - padding) {
      viewport.scrollBy({
        top: targetRect.bottom - viewportRect.bottom + padding,
        behavior: "smooth"
      });
    }
  }, [activeIds, isSmall]);
  const tree = useMemo(() => buildTree(headings), [headings]);
  if (headings.length === 0) return;
  if (isSmall) {
    return /* @__PURE__ */ jsxs("div", { className: "block w-full text-sm lg:hidden", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full px-4 md:px-8 py-3 text-left font-medium",
          type: "button",
          onClick: () => setIsOpen((value) => !value),
          children: [
            "On this page",
            /* @__PURE__ */ jsx(
              ChevronRight,
              {
                className: cn(
                  "ml-auto self-center transition-all",
                  isOpen && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      isOpen ? /* @__PURE__ */ jsx("div", { className: "mx-4 mb-3 pl-2 text-sm", children: /* @__PURE__ */ jsx(
        TocTree,
        {
          nodes: tree,
          activeIds,
          level: 0,
          onNavigate: (id) => setActiveIds([id])
        }
      ) }) : void 0
    ] });
  }
  return /* @__PURE__ */ jsx(
    ScrollArea,
    {
      ref: scrollAreaReference,
      className: "z-30 hidden overflow-y-auto md:block lg:block",
      children: /* @__PURE__ */ jsxs("div", { className: "flex h-[calc(100vh-6.5rem)] flex-col gap-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-base font-semibold", children: "On this page" }),
          /* @__PURE__ */ jsx(
            TocTree,
            {
              nodes: tree,
              activeIds,
              level: 0,
              className: "border-b pb-5",
              onNavigate: (id) => setActiveIds([id])
            }
          )
        ] }),
        tocLinks.length > 0 ? /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "text-muted-foreground",
              tocIconLinks.length > 0 && "border-b pb-5"
            ),
            children: tocLinks.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.href,
                target: "_blank",
                rel: "noreferrer",
                className: "flex w-full gap-1 underline-offset-4 hover:underline [&:not(:first-child)]:pt-3",
                children: [
                  /* @__PURE__ */ jsx(link.icon, { className: "mr-1 self-center size-4" }),
                  link.label,
                  /* @__PURE__ */ jsx(
                    ArrowUpRight,
                    {
                      className: "text-muted-foreground ml-auto self-center",
                      size: 13
                    }
                  )
                ]
              },
              link.href
            ))
          }
        ) : void 0,
        tocIconLinks.length > 0 ? /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: tocIconLinks.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ jsx("button", { className: "ring-offset-background focus-visible:ring-ring inline-flex size-7 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", children: /* @__PURE__ */ jsx(link.icon, {}) })
          },
          link.href
        )) }) : void 0,
        /* @__PURE__ */ jsx("div", { className: "flex-grow" })
      ] })
    }
  );
}
export {
  ScrollArea as S,
  TableOfContents as T
};
