import type { LabelProperties } from "@formbox/theme";
import type { ReactNode } from "react";
import { useMediaQuery } from "../use-media-query.ts";

export function Label({
  prefix,
  shortText,
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
    </>
  );
}

function Prefix({ children }: { children: ReactNode }) {
  return <span className="nhsuk-label__prefix">{children} </span>;
}
