import classNames from "classnames";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(classNames(...inputs));
}
const slugify = (value) => {
  return value.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-");
};
const extractText = (node) => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map((child) => extractText(child)).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    const element = node;
    return extractText(element.props?.children);
  }
  return "";
};
const resolveHeadingId = (rawId, fallback) => {
  const normalized = rawId?.trim() ?? "";
  if (normalized) return normalized;
  const text = fallback ? extractText(fallback) : "";
  const candidate = slugify(text);
  return candidate.length > 0 ? candidate : void 0;
};
export {
  cn as c,
  resolveHeadingId as r
};
