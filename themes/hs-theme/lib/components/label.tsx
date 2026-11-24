import { useStrings, type LabelProperties } from "@formbox/theme";
import { cn } from "@health-samurai/react-components";
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
  const labelTag = as === "label" ? "label" : "div";
  const labelFor = labelTag === "label" ? htmlFor : undefined;
  const labelRowTag = labelTag === "div" ? "div" : "span";
  const labelTextTag = labelTag === "div" ? "div" : "span";
  const isEmphasized = as !== "text";
  const isLegend = as === "legend";

  const text = useShortText && shortText != undefined ? shortText : children;

  const LabelTag = labelTag;
  const LabelRowTag = labelRowTag;
  const LabelTextTag = labelTextTag;

  return (
    <LabelTag className="m-0 block border-0 p-0" htmlFor={labelFor}>
      <LabelRowTag className="inline-flex items-start gap-1.5">
        {!!onToggleExpanded && (
          <button
            type="button"
            className="inline-flex size-6 flex-none cursor-pointer items-center justify-center rounded-md border border-border-primary bg-bg-primary p-0 text-text-secondary outline-none hover:bg-bg-secondary hover:text-text-primary focus-visible:ring-4 focus-visible:ring-ring-blue"
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
            <span
              data-expanded={isExpanded ? "true" : undefined}
              className={cn(
                "size-0 origin-[35%_50%] border-y-[0.3rem] border-l-[0.4rem] border-y-transparent border-l-current transition-transform duration-200",
                isExpanded && "rotate-90",
              )}
            />
          </button>
        )}
        <LabelTextTag
          id={id}
          data-emphasis={isEmphasized ? "true" : undefined}
          data-size={isLegend ? "legend" : undefined}
          className={cn(
            "inline-flex items-center gap-1 text-text-primary",
            isLegend ? "h5" : isEmphasized ? "typo-label" : "typo-body",
          )}
        >
          {prefix && <span className="font-semibold">{prefix}</span>}
          {text}
          {required && (
            <span className="text-text-error-primary" aria-hidden>
              *
            </span>
          )}
        </LabelTextTag>
        {help}
        {legal}
        {flyover}
      </LabelRowTag>
      {supportHyperlinks && supportHyperlinks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {supportHyperlinks.map((supportHyperlink, index) => (
            <span
              key={`${supportHyperlink.href}-${index}`}
              className="inline-flex"
            >
              <Link
                href={supportHyperlink.href}
                target="_blank"
                rel="noreferrer"
              >
                {`${supportHyperlink.label ?? supportHyperlink.href} ↗`}
              </Link>
            </span>
          ))}
        </div>
      )}
      {media && (
        <span className="mt-2 block">
          <Media attachment={media} />
        </span>
      )}
    </LabelTag>
  );
}
