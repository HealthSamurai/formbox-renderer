import { useStrings, type FlyoverProperties } from "@formbox/theme";
import { helperIconButtonClass } from "./tokens.ts";

export function Flyover({ id, children }: FlyoverProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.flyover}
        className={[
          helperIconButtonClass,
          "peer border border-indigo-300 bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
        ].join(" ")}
      >
        <i aria-hidden className="fa-solid fa-circle-info" />
      </button>
      <div
        role="tooltip"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-10 w-max max-w-[32rem] -translate-x-1/2 -translate-y-[110%] rounded bg-indigo-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity peer-hover:opacity-100 peer-focus-visible:opacity-100"
      >
        {children}
      </div>
      <span id={id} className="af-sr-only">
        {children}
      </span>
    </span>
  );
}
