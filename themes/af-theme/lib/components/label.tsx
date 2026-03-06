import { useStrings, type LabelProperties } from "@formbox/theme";
import { useMediaQuery } from "../use-media-query.ts";
import { helperIconButtonClass } from "./tokens.ts";
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

  const WrapperTag = labelTag;
  const RowTag = labelRowTag;
  const TextTag = labelTextTag;

  return (
    <WrapperTag
      className="m-0 block border-0 p-0"
      {...(labelFor ? { htmlFor: labelFor } : {})}
    >
      <RowTag className="inline-flex items-start gap-[0.35rem]">
        {!!onToggleExpanded && (
          <button
            type="button"
            className={helperIconButtonClass}
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
            <i
              aria-hidden
              data-expanded={isExpanded ? "true" : undefined}
              className="fa-solid fa-chevron-right origin-center text-[10px] transition-transform duration-200 ease-in-out data-[expanded=true]:rotate-90"
            />
          </button>
        )}
        <TextTag
          id={id}
          className={[
            "inline-flex items-center gap-1",
            isEmphasized ? "font-semibold" : "",
            isLegend ? "text-xl" : "",
          ].join(" ")}
        >
          {prefix && <span className="font-semibold">{prefix}</span>}
          {text}
          {required && (
            <span className="text-red-500" aria-hidden>
              *
            </span>
          )}
        </TextTag>
        {help}
        {legal}
        {flyover}
      </RowTag>
      {supportHyperlinks && supportHyperlinks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {supportHyperlinks.map((supportHyperlink, index) => (
            <span
              className="inline-flex"
              key={`${supportHyperlink.href}-${index}`}
            >
              <Link
                href={supportHyperlink.href}
                target="_blank"
                rel="noreferrer"
              >
                <>
                  {supportHyperlink.label ?? supportHyperlink.href}{" "}
                  <i
                    aria-hidden
                    className="fa-solid fa-arrow-up-right-from-square text-[11px]"
                  />
                </>
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
    </WrapperTag>
  );
}
