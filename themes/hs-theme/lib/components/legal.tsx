import { useStrings, type LegalProperties } from "@formbox/theme";

export function Legal({ id, children }: LegalProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.legal}
        className="peer inline-flex size-6 cursor-pointer items-center justify-center rounded-md border border-border-warning-primary bg-bg-warning-secondary text-sm text-text-warning-primary outline-none hover:bg-bg-warning-primary focus-visible:ring-4 focus-visible:ring-ring-blue"
      >
        §
      </button>
      <div
        role="dialog"
        aria-hidden="true"
        className="typo-body pointer-events-none absolute top-0 left-1/2 z-10 max-w-xl -translate-x-1/2 -translate-y-[110%] rounded-md bg-bg-primary_inverse px-4 py-3 text-text-primary_on-brand opacity-0 shadow-lg transition-opacity duration-150 peer-hover:pointer-events-auto peer-hover:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:opacity-100"
      >
        {children}
      </div>
      <span id={id} className="sr-only">
        {children}
      </span>
    </span>
  );
}
