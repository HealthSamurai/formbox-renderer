import type { LinkProperties } from "@formbox/theme";

export function Link({ id, href, children, target, rel }: LinkProperties) {
  return (
    <a
      id={id}
      href={href}
      target={target}
      rel={rel}
      className="text-text-link underline hover:text-text-link_hover focus:text-text-link_hover"
    >
      {children}
    </a>
  );
}
