import { useStrings, type HelpProperties } from "@formbox/theme";
import { helperIconButtonClass } from "./tokens.ts";

export function Help({ id, children }: HelpProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.help}
        className={[helperIconButtonClass, "peer"].join(" ")}
      >
        <i aria-hidden className="fa-solid fa-question scale-[0.85]" />
      </button>
      <div
        role="tooltip"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-10 w-max max-w-[32rem] -translate-x-1/2 -translate-y-[110%] rounded bg-[rgba(var(--input__accent-color,var(--main-color,120,38,245)),0.7)] px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity peer-hover:opacity-100 peer-focus-visible:opacity-100"
      >
        {children}
      </div>
      <span id={id} className="af-sr-only">
        {children}
      </span>
    </span>
  );
}
