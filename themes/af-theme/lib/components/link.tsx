import type { LinkProperties } from "@formbox/theme";

export function Link({ href, children, target, rel }: LinkProperties) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-[rgb(var(--input__accent-color,var(--main-color,120,38,245)))] underline hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--input__accent-color,var(--main-color,120,38,245)),0.5)]"
    >
      {children}
    </a>
  );
}
