import { styled } from "@linaria/react";
import type { LabelProperties } from "@formbox/theme";
import type { ReactNode } from "react";
import { useMediaQuery } from "../use-media-query.ts";
import { Media } from "./item-media.tsx";
import { Link } from "./link.tsx";

export function Label({
  prefix,
  shortText,
  supportHyperlinks,
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
  const text = useShortText && shortText != undefined ? shortText : children;
  const itemMediaNode = itemMedia && (
    <div className="nhsuk-u-margin-top-2">
      <Media attachment={itemMedia} />
    </div>
  );
  const supportLinks =
    supportHyperlinks && supportHyperlinks.length > 0 ? (
      <SupportLinks>
        {supportHyperlinks.map((supportHyperlink, index) => (
          <span key={`${supportHyperlink.href}-${index}`}>
            <Link href={supportHyperlink.href} target="_blank" rel="noreferrer">
              {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
            </Link>
          </span>
        ))}
      </SupportLinks>
    ) : undefined;

  const content = (
    <>
      {prefix && <Prefix>{prefix}</Prefix>}
      {text}
      {required && <span aria-hidden="true"> *</span>}
    </>
  );

  if (as === "legend") {
    return (
      <div className="nhsuk-fieldset__legend nhsuk-fieldset__legend--m" id={id}>
        <div className="nhsuk-fieldset__heading">{content}</div>
        {help}
        {legal}
        {flyover}
        {supportLinks}
        {itemMediaNode}
      </div>
    );
  }

  if (as === "label") {
    return (
      <div className="nhsuk-fieldset__legend nhsuk-fieldset__legend--s">
        <label className="nhsuk-fieldset__heading" id={id} htmlFor={htmlFor}>
          {content}
        </label>
        {supportLinks}
        {help}
        {legal}
        {flyover}
        {itemMediaNode}
      </div>
    );
  }

  return (
    <div className="nhsuk-label" id={id}>
      {content}
      {supportLinks}
      {help}
      {legal}
      {flyover}
      {itemMediaNode}
    </div>
  );
}

function Prefix({ children }: { children: ReactNode }) {
  return <span className="nhsuk-label__prefix">{children} </span>;
}

const SupportLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;
