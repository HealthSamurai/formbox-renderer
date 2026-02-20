import { styled } from "@linaria/react";
import type { LabelProperties } from "@formbox/theme";
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
  expandLabel,
  collapseLabel,
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
  const labelTag = as === "label" ? "label" : "div";
  const labelFor = labelTag === "label" ? htmlFor : undefined;
  const labelRowTag = labelTag === "div" ? "div" : "span";
  const labelTextTag = labelTag === "div" ? "div" : "span";
  const isEmphasized = as !== "text";
  const isLegend = as === "legend";

  const text = useShortText && shortText != undefined ? shortText : children;

  return (
    <Wrapper as={labelTag} htmlFor={labelFor}>
      <LabelRow as={labelRowTag}>
        {!!onToggleExpanded && (
          <ToggleButton
            type="button"
            onClick={onToggleExpanded}
            aria-label={isExpanded ? collapseLabel : expandLabel}
            aria-expanded={isExpanded}
            title={isExpanded ? collapseLabel : expandLabel}
          >
            <ToggleTriangle data-expanded={isExpanded ? "true" : undefined} />
          </ToggleButton>
        )}
        <LabelText
          id={id}
          as={labelTextTag}
          data-emphasis={isEmphasized ? "true" : undefined}
          data-size={isLegend ? "legend" : undefined}
        >
          {prefix && <Prefix>{prefix}</Prefix>}
          {text}
          {required && <Required aria-hidden>*</Required>}
        </LabelText>
        {help}
        {legal}
        {flyover}
      </LabelRow>
      {supportHyperlinks && supportHyperlinks.length > 0 && (
        <SupportLinks>
          {supportHyperlinks.map((supportHyperlink, index) => (
            <SupportLink key={`${supportHyperlink.href}-${index}`}>
              <Link
                href={supportHyperlink.href}
                target="_blank"
                rel="noreferrer"
              >
                {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
              </Link>
            </SupportLink>
          ))}
        </SupportLinks>
      )}
      {media && (
        <MediaContainer>
          <Media attachment={media} />
        </MediaContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
`;

const LabelRow = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.35rem;
`;

const LabelText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &[data-emphasis="true"] {
    font-weight: 600;
  }

  &[data-size="legend"] {
    font-size: 1.25rem;
  }
`;

const Prefix = styled.span`
  font-weight: 600;
`;

const Required = styled.span`
  color: #e53e3e;
`;

const SupportLink = styled.span`
  display: inline-flex;
`;

const SupportLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MediaContainer = styled.span`
  display: block;
  margin-top: 0.5rem;
`;

const ToggleButton = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  background: #edf2f7;
  color: #1a202c;
  box-shadow: inset 0 1px 0 #fff;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: #e2e8f0;
    border-color: #a0aec0;
  }

  &:focus-visible {
    outline: 2px solid #3182ce;
    outline-offset: 1px;
  }
`;

const ToggleTriangle = styled.span`
  inline-size: 0;
  block-size: 0;
  border-top: 0.3rem solid transparent;
  border-bottom: 0.3rem solid transparent;
  border-left: 0.4rem solid currentColor;
  transform-origin: 35% 50%;
  transition: transform 200ms ease;
  transform: rotate(0deg);

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }
`;
