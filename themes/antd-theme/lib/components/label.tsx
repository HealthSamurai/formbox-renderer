import type { LabelProperties } from "@formbox/theme";
import { Button, Space, Typography } from "antd";
import { styled } from "@linaria/react";
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
  const isEmphasized = as !== "text";
  const isLegend = as === "legend";
  const text = useShortText && shortText != undefined ? shortText : children;
  const content = (
    <Space orientation="vertical" size={0}>
      <Space align="center" size="small" wrap>
        {!!onToggleExpanded && (
          <ToggleButton
            type="text"
            size="small"
            htmlType="button"
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
      </Space>
      {supportHyperlinks && supportHyperlinks.length > 0 && (
        <Space size="small" wrap>
          {supportHyperlinks.map((supportHyperlink, index) => (
            <Link
              key={`${supportHyperlink.href}-${index}`}
              href={supportHyperlink.href}
              target="_blank"
              rel="noreferrer"
            >
              {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
            </Link>
          ))}
        </Space>
      )}
      {media && <Media attachment={media} />}
    </Space>
  );

  if (as === "label") {
    return <LabelWrapper htmlFor={htmlFor}>{content}</LabelWrapper>;
  }

  return <BlockWrapper>{content}</BlockWrapper>;
}

const BlockWrapper = styled.div`
  display: block;
`;

const LabelWrapper = styled.label`
  display: block;
`;

const ToggleButton = styled(Button)`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  padding-inline: 0 !important;
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

const LabelText = styled(Typography.Text)`
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
  color: #cf1322;
`;
