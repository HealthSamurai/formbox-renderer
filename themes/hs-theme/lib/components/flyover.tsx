import { useStrings, type FlyoverProperties } from "@formbox/theme";

export function Flyover({ id, children }: FlyoverProperties) {
  const strings = useStrings();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-describedby={id}
        aria-label={strings.aria.flyover}
        className="peer inline-flex size-4 cursor-pointer items-center justify-center rounded-full border border-border-link bg-bg-info-primary text-xs leading-none text-text-link outline-none hover:bg-bg-link_hover/10 focus-visible:ring-4 focus-visible:ring-ring-blue"
      >
        i
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
