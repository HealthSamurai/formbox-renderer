import { useStrings, type HelpProperties } from "@formbox/theme";

export function Help({ id, children }: HelpProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.help}
        className="peer relative inline-flex size-4 cursor-help items-center justify-center rounded-full border border-border-primary bg-bg-primary text-xs leading-none text-text-secondary outline-none hover:bg-bg-secondary focus-visible:ring-4 focus-visible:ring-ring-blue"
      >
        ?
      </button>
      <div
        role="tooltip"
        aria-hidden="true"
        className="typo-body pointer-events-none absolute top-0 left-1/2 z-10 max-w-lg -translate-x-1/2 -translate-y-[110%] rounded-md bg-bg-primary_inverse px-3 py-2 text-text-primary_on-brand opacity-0 shadow-lg transition-opacity duration-150 peer-hover:pointer-events-auto peer-hover:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:opacity-100"
      >
        {children}
      </div>
      <span id={id} className="sr-only">
        {children}
      </span>
    </span>
  );
}
