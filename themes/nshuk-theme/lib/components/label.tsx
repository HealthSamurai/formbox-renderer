import { styled } from "@linaria/react";
import { useStrings, type LabelProperties } from "@formbox/theme";
import type { ReactNode } from "react";
import { useMediaQuery } from "../use-media-query.ts";
import { Media } from "./media.tsx";
import { Link } from "./link.tsx";

export function Label({
  prefix,
  shortText,
  supportHyperlinks,
  media,
  isExpanded,
  onToggleExpanded,
  children,
  id,
  htmlFor,
  required,
  help,
  legal,
  flyover,
  as = "label",
}: LabelProperties) {
  const strings = useStrings();
  const useShortText = useMediaQuery("(max-width: 40rem)");
  const text = useShortText && shortText != undefined ? shortText : children;
  const mediaNode = media && (
    <div className="nhsuk-u-margin-top-2">
      <Media attachment={media} />
    </div>
  );
  const supportLinks = supportHyperlinks && supportHyperlinks.length > 0 && (
    <SupportLinks>
      {supportHyperlinks.map((supportHyperlink, index) => (
        <span key={`${supportHyperlink.href}-${index}`}>
          <Link href={supportHyperlink.href} target="_blank" rel="noreferrer">
            {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
          </Link>
        </span>
      ))}
    </SupportLinks>
  );

  const content = (
    <>
      {!!onToggleExpanded && (
        <ToggleButton
          type="button"
          onClick={onToggleExpanded}
          aria-label={
            isExpanded
              ? strings.collapsible.collapse
              : strings.collapsible.expand
          }
          aria-expanded={isExpanded}
          title={
            isExpanded
              ? strings.collapsible.collapse
              : strings.collapsible.expand
          }
        >
          <ToggleTriangle data-expanded={isExpanded ? "true" : undefined} />
        </ToggleButton>
      )}
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
        {mediaNode}
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
        {mediaNode}
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
      {mediaNode}
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

const ToggleButton = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 1.675rem;
  min-block-size: 1.5rem;
  margin-inline-end: 0.35rem;
  margin-bottom: 0;
  padding: 0;
  line-height: 1;
  border: 0;
  background: transparent;
  appearance: none;
  color: inherit;
  cursor: pointer;
`;

const ToggleTriangle = styled.span`
  inline-size: 0;
  block-size: 0;
  border-color: transparent;
  border-left-color: currentColor;
  border-style: solid;
  border-width: 0.4375rem 0 0.4375rem 0.75775rem;
  clip-path: polygon(0 0, 100% 50%, 0 100%);

  &[data-expanded="true"] {
    border-left-color: transparent;
    border-top-color: currentColor;
    border-width: 0.75775rem 0.4375rem 0;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
  }
`;
