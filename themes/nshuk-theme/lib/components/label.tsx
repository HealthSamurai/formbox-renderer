import type { LabelProperties } from "@formbox/theme";
import type { ReactNode } from "react";
import { useMediaQuery } from "../use-media-query.ts";
import { Media } from "./item-media.tsx";

export function Label({
  prefix,
  shortText,
  itemMedia,
  children,
  id,
  htmlFor,
  required,
  help,
  legal,
  flyover,
  as = "label",
}: LabelProperties) {
  const useShortText = useMediaQuery("(max-width: 40rem)");
  const text = useShortText ? shortText : children;
  const itemMediaNode = itemMedia && (
    <div className="nhsuk-u-margin-top-2">
      <Media attachment={itemMedia} />
    </div>
  );

  const content = (
    <>
      {prefix && <Prefix>{prefix}</Prefix>}
      {text}
      {required && <span aria-hidden="true"> *</span>}
    </>
  );

  if (as === "legend") {
    return (
      <>
        <div
          className="nhsuk-fieldset__legend nhsuk-fieldset__legend--m"
          id={id}
        >
          <span className="nhsuk-fieldset__heading">{content}</span>
        </div>
        {help}
        {legal}
        {flyover}
        {itemMediaNode}
      </>
    );
  }

  if (as === "label") {
    return (
      <>
        <label
          className="nhsuk-fieldset__legend nhsuk-fieldset__legend--s"
          id={id}
          htmlFor={htmlFor}
        >
          <span className="nhsuk-fieldset__heading">{content}</span>
        </label>
        {help}
        {legal}
        {flyover}
        {itemMediaNode}
      </>
    );
  }

  return (
    <>
      <div className="nhsuk-label" id={id}>
        {content}
      </div>
      {help}
      {legal}
      {flyover}
      {itemMediaNode}
    </>
  );
}

function Prefix({ children }: { children: ReactNode }) {
  return <span className="nhsuk-label__prefix">{children} </span>;
}
