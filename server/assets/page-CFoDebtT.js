import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { ChevronRight, SquarePen, ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";
import { w as withBase } from "../server.js";
import { c as cn, r as resolveHeadingId } from "./utilities-C4Jv4YFd.js";
import { M as MDXProvider, r as routes } from "./manifest-DUoeLbGp.js";
import { T as TableOfContents } from "./table-of-contents-D1ARqnWv.js";
import "react-dom/server";
import "classnames";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
function Breadcrumbs({ route, pages }) {
  const page = pages.find((item) => item.href === route);
  const items = [];
  if (page?.sectionLabel) {
    items.push({ label: page.sectionLabel, href: page.sectionHref });
  }
  if (page?.groupLabel) {
    const href = page.groupHref && page.groupHref !== route ? page.groupHref : void 0;
    items.push({ label: page.groupLabel, href });
  }
  if (page?.label && page?.label !== page.groupLabel) {
    items.push({ label: page.label, href: route });
  }
  if (items.length === 0) return;
  const lastIndex = items.length - 1;
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", className: "mb-4", children: /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", children: items.map((item, index) => {
    const showSeparator = index < lastIndex;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("li", { className: "inline-flex items-center gap-1.5", children: item.href ? /* @__PURE__ */ jsx(
        "a",
        {
          href: withBase(item.href),
          className: cn(
            "hover:text-foreground transition-colors",
            index === lastIndex && "text-foreground"
          ),
          "aria-current": index === lastIndex ? "page" : void 0,
          children: item.label
        }
      ) : /* @__PURE__ */ jsx("span", { className: "text-foreground font-normal", children: item.label }) }),
      showSeparator && /* @__PURE__ */ jsx(
        "li",
        {
          role: "presentation",
          "aria-hidden": "true",
          className: "[&>svg]:h-3.5 [&>svg]:w-3.5",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5" })
        }
      )
    ] }, `${item.label}-${index}`);
  }) }) });
}
function Diagram({ svg, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "overflow-x-auto rounded-lg p-4 [&:not(:first-child)]:mt-6",
        className
      ),
      style: { backgroundColor: "#2f363d" },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex justify-center [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:w-full",
          "aria-label": "Mermaid diagram",
          role: "img",
          dangerouslySetInnerHTML: { __html: svg }
        }
      )
    }
  );
}
const mdxComponents = {
  Diagram,
  h1: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "h1",
    {
      className: cn(
        "scroll-m-20 break-words text-4xl font-extrabold tracking-tight lg:text-5xl [&:not(:first-child)]:mt-10",
        className
      ),
      ...properties
    }
  ),
  h2: ({
    id,
    className,
    children,
    ...properties
  }) => {
    const headingId = resolveHeadingId(id, children);
    return /* @__PURE__ */ jsx(
      "h2",
      {
        id: headingId,
        className: cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight [&:not(:first-child)]:mt-10",
          className
        ),
        ...properties,
        children: headingId ? /* @__PURE__ */ jsx("a", { href: `#${headingId}`, className: "no-underline hover:no-underline", children }) : children
      }
    );
  },
  h3: ({
    id,
    className,
    children,
    ...properties
  }) => {
    const headingId = resolveHeadingId(id, children);
    return /* @__PURE__ */ jsx(
      "h3",
      {
        id: headingId,
        className: cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-10",
          className
        ),
        ...properties,
        children: headingId ? /* @__PURE__ */ jsx("a", { href: `#${headingId}`, className: "no-underline hover:no-underline", children }) : children
      }
    );
  },
  h4: ({
    id,
    className,
    children,
    ...properties
  }) => {
    const headingId = resolveHeadingId(id, children);
    return /* @__PURE__ */ jsx(
      "h4",
      {
        id: headingId,
        className: cn(
          "scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-10",
          className
        ),
        ...properties,
        children: headingId ? /* @__PURE__ */ jsx("a", { href: `#${headingId}`, className: "no-underline hover:no-underline", children }) : children
      }
    );
  },
  h5: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "h5",
    {
      className: cn(
        "scroll-m-20 text-lg font-semibold tracking-tight [&:not(:first-child)]:mt-10",
        className
      ),
      ...properties
    }
  ),
  h6: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "h6",
    {
      className: cn(
        "scroll-m-20 text-lg font-semibold tracking-tight [&:not(:first-child)]:mt-10",
        className
      ),
      ...properties
    }
  ),
  p: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "p",
    {
      className: cn("leading-7 [&:not(:first-child)]:mt-6", className),
      ...properties
    }
  ),
  a: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "a",
    {
      className: cn("font-semibold underline underline-offset-4", className),
      ...properties
    }
  ),
  ul: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "ul",
    {
      className: cn(
        "[&:not(:first-child)]:mt-6 ml-6 list-disc [&>li]:mt-2",
        className
      ),
      ...properties
    }
  ),
  ol: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "ol",
    {
      className: cn(
        "[&:not(:first-child)]:mt-6 ml-6 list-decimal [&>li]:mt-2",
        className
      ),
      ...properties
    }
  ),
  li: ({ className, ...properties }) => /* @__PURE__ */ jsx("li", { className: cn(className), ...properties }),
  blockquote: ({
    className,
    ...properties
  }) => /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: cn(
        "[&:not(:first-child)]:mt-6 border-l-2 pl-6 italic",
        className
      ),
      ...properties
    }
  ),
  pre: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "pre",
    {
      className: cn(
        "relative overflow-x-auto rounded-lg border p-4 font-mono text-sm [&:not(:first-child)]:mt-6",
        className
      ),
      ...properties
    }
  ),
  table: ({ className, ...properties }) => /* @__PURE__ */ jsx("div", { className: "w-full overflow-y-auto [&:not(:first-child)]:mt-6", children: /* @__PURE__ */ jsx("table", { className: cn("w-full", className), ...properties }) }),
  tr: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "tr",
    {
      className: cn("m-0 border-t p-0 even:bg-muted", className),
      ...properties
    }
  ),
  th: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "th",
    {
      className: cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...properties
    }
  ),
  td: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "td",
    {
      className: cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...properties
    }
  ),
  hr: ({ className, ...properties }) => /* @__PURE__ */ jsx(
    "hr",
    {
      className: cn("[&:not(:first-child)]:mt-6", className),
      ...properties
    }
  ),
  strong: ({
    className,
    ...properties
  }) => /* @__PURE__ */ jsx("strong", { className: cn("font-semibold", className), ...properties })
};
function Markdown({
  children,
  contentId,
  className
}) {
  return /* @__PURE__ */ jsx(MDXProvider, { components: mdxComponents, children: /* @__PURE__ */ jsx(
    "div",
    {
      id: contentId,
      className: cn(
        "[&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:relative [&_:not(pre)>code]:rounded [&_:not(pre)>code]:px-[0.3rem] [&_:not(pre)>code]:py-[0.2rem] [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:font-semibold",
        className
      ),
      children
    }
  ) });
}
const getActiveIndex = (pages, route) => {
  return pages.findIndex((page) => page.href === route);
};
function PageFooter({ route, pages }) {
  const activeIndex = getActiveIndex(pages, route);
  const previous = activeIndex > 0 ? pages[activeIndex - 1] : void 0;
  const next = activeIndex >= 0 && activeIndex < pages.length - 1 ? pages[activeIndex + 1] : void 0;
  const entry = routes.get(route);
  const editUrl = entry?.sourcePath ? `https://github.com/HealthSamurai/formbox-renderer/edit/master/${entry.sourcePath}` : void 0;
  return /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex w-full items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "w-fit", children: editUrl ? /* @__PURE__ */ jsx(
        "a",
        {
          href: editUrl,
          target: "_blank",
          rel: "noreferrer",
          className: "text-primary text-sm font-semibold",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(SquarePen, { className: "size-4" }),
            "Edit this page"
          ] })
        }
      ) : void 0 }),
      /* @__PURE__ */ jsx("div", { className: "w-fit", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold text-primary transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          onClick: () => globalThis.window?.scrollTo({ top: 0, behavior: "smooth" }),
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowUp, { className: "size-4" }),
            "Back to Top"
          ] })
        }
      ) })
    ] }),
    previous || next ? /* @__PURE__ */ jsxs("div", { className: "border-t pt-6 lg:flex lg:flex-row", children: [
      previous ? /* @__PURE__ */ jsx("a", { href: withBase(previous.href), className: "basis-1/3", children: /* @__PURE__ */ jsx("div", { className: "hover:bg-muted/50 mb-4 space-y-2 rounded-lg border p-4 transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex size-6 min-w-6", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "mx-auto size-5 self-center" }) }),
        /* @__PURE__ */ jsx("span", { className: "w-full space-y-2 self-center text-left", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold", children: previous.label }) })
      ] }) }) }) : void 0,
      /* @__PURE__ */ jsx("span", { className: "flex-1" }),
      next ? /* @__PURE__ */ jsx("a", { href: withBase(next.href), className: "basis-1/3", children: /* @__PURE__ */ jsx("div", { className: "hover:bg-muted/50 mb-4 space-y-2 rounded-lg border p-4 transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "w-full space-y-2 self-center text-right", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold", children: next.label }) }),
        /* @__PURE__ */ jsx("div", { className: "ml-auto flex size-6 min-w-6", children: /* @__PURE__ */ jsx(ArrowRight, { className: "mx-auto size-5 self-center" }) })
      ] }) }) }) : void 0
    ] }) : void 0
  ] });
}
function Page({
  title,
  description,
  route,
  pages,
  children
}) {
  return /* @__PURE__ */ jsxs(
    "main",
    {
      id: "content",
      className: "lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8 relative py-6",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full min-w-0", children: [
          /* @__PURE__ */ jsx(Breadcrumbs, { route, pages }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("h1", { className: "scroll-m-20 break-words text-4xl font-extrabold tracking-tight lg:text-5xl", children: title }),
            description ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground pt-1 text-lg", children: description }) : void 0
          ] }),
          /* @__PURE__ */ jsx(Markdown, { contentId: "docs-content", children }),
          /* @__PURE__ */ jsx(PageFooter, { route, pages })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden text-sm lg:block", children: /* @__PURE__ */ jsx("div", { className: "sticky md:top-[91px]", children: /* @__PURE__ */ jsx(TableOfContents, { contentId: "docs-content", activeRoute: route }) }) })
      ]
    }
  );
}
export {
  Page as default
};
