import { useStrings, type LegalProperties } from "@formbox/theme";
import { helperIconButtonClass } from "./tokens.ts";

export function Legal({ id, children }: LegalProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.legal}
        className={[
          helperIconButtonClass,
          "peer border border-amber-700 bg-amber-50 text-amber-700 hover:bg-amber-200",
        ].join(" ")}
      >
        <i aria-hidden className="fa-solid fa-gavel" />
      </button>
      <div
        role="dialog"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-10 w-max max-w-[36rem] -translate-x-1/2 -translate-y-[110%] rounded bg-amber-900 px-4 py-3 text-[0.85rem] leading-relaxed text-white opacity-0 shadow-lg transition-opacity peer-hover:opacity-100 peer-focus-visible:opacity-100"
      >
        {children}
      </div>
      <span id={id} className="af-sr-only">
        {children}
      </span>
    </span>
  );
}
