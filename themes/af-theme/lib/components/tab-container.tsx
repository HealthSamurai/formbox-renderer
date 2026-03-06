import { useStrings, type TabContainerProperties } from "@formbox/theme";
import { useCallback, useEffect, useRef, useState } from "react";
import { clamp } from "./utilities.ts";

export function TabContainer({
  header,
  items,
  value,
  onChange,
  errors,
  linkId,
}: TabContainerProperties) {
  const strings = useStrings();
  const tabListReference = useRef<HTMLDivElement | null>(null);
  const tabListInnerReference = useRef<HTMLDivElement | null>(null);
  const leftScrollReference = useRef<HTMLButtonElement | null>(null);
  const rightScrollReference = useRef<HTMLButtonElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const clampedIndex = clamp(value, 0, Math.max(items.length - 1, 0));

  const updateScrollState = useCallback(() => {
    const list = tabListReference.current;
    if (!list) return;
    const maxScrollLeft = Math.max(list.scrollWidth - list.clientWidth, 0);
    const nextScrollable = maxScrollLeft > 1;
    const nextCanScrollLeft = list.scrollLeft > 0;
    const nextCanScrollRight = list.scrollLeft < maxScrollLeft - 1;

    setIsScrollable(nextScrollable);
    setCanScrollLeft(nextCanScrollLeft);
    setCanScrollRight(nextCanScrollRight);
  }, []);

  useEffect(() => {
    const list = tabListReference.current;
    if (!list) return;
    updateScrollState();

    const handleScroll = () => updateScrollState();
    list.addEventListener("scroll", handleScroll, { passive: true });

    if (typeof ResizeObserver === "undefined") {
      const handleResize = () => updateScrollState();
      globalThis.addEventListener("resize", handleResize);
      return () => {
        list.removeEventListener("scroll", handleScroll);
        globalThis.removeEventListener("resize", handleResize);
      };
    }

    const observer = new ResizeObserver(() => updateScrollState());
    observer.observe(list);

    return () => {
      list.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [items.length, updateScrollState]);

  useEffect(() => {
    updateScrollState();
  }, [items, updateScrollState]);

  useEffect(() => {
    const list = tabListReference.current;
    if (!list) return;
    const activeTab = list.querySelector<HTMLElement>('[data-selected="true"]');
    if (!activeTab) return;
    const inner = tabListInnerReference.current;
    if (!inner) return;

    const styles = globalThis.getComputedStyle(inner);
    const leftPadding = Number.parseFloat(styles.paddingLeft) || 0;
    const rightPadding = Number.parseFloat(styles.paddingRight) || 0;
    const leftOverlay = leftScrollReference.current?.offsetWidth ?? 0;
    const rightOverlay = rightScrollReference.current?.offsetWidth ?? 0;
    const leftSafe = isScrollable ? Math.max(leftPadding, leftOverlay) : 0;
    const rightSafe = isScrollable ? Math.max(rightPadding, rightOverlay) : 0;
    const listRect = list.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    const tabRight = tabLeft + tabRect.width;
    const leftEdge = list.scrollLeft + leftSafe;
    const rightEdge = list.scrollLeft + list.clientWidth - rightSafe;

    let nextScrollLeft = list.scrollLeft;
    if (tabLeft < leftEdge) {
      nextScrollLeft = tabLeft - leftSafe;
    } else if (tabRight > rightEdge) {
      nextScrollLeft = tabRight - (list.clientWidth - rightSafe);
    }

    const maxScrollLeft = Math.max(list.scrollWidth - list.clientWidth, 0);
    const clampedNext = clamp(nextScrollLeft, 0, maxScrollLeft);
    if (clampedNext !== list.scrollLeft) {
      list.scrollTo({
        left: clampedNext,
        behavior: "smooth",
      });
    }
  }, [clampedIndex, isScrollable, items.length]);

  const handleScrollButton = (direction: 1 | -1) => {
    const list = tabListReference.current;
    if (!list) return;
    const offset = Math.max(140, Math.round(list.clientWidth * 0.6));
    list.scrollBy({ left: direction * offset, behavior: "smooth" });
  };

  if (items.length === 0) {
    return <p className="italic text-slate-400">{strings.tab.empty}</p>;
  }

  const active = items[clampedIndex];

  return (
    <div data-linkid={linkId} className="flex flex-col gap-3">
      {Boolean(header) && <div className="font-bold">{header}</div>}
      <div className="relative">
        <button
          ref={leftScrollReference}
          type="button"
          aria-label={strings.tab.scrollLeft}
          onClick={() => handleScrollButton(-1)}
          data-direction="left"
          data-visible={isScrollable && canScrollLeft ? "true" : "false"}
          disabled={!canScrollLeft}
          className="absolute bottom-[1px] top-0 left-0 z-[3] flex w-8 items-center justify-center border-0 p-0 text-slate-600 transition data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0 disabled:cursor-default"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1) 75%, rgba(255,255,255,0))",
          }}
        >
          <i aria-hidden className="fa-solid fa-chevron-left text-xs" />
        </button>
        <div
          role="tablist"
          ref={tabListReference}
          className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={tabListInnerReference}
            data-scrollable={isScrollable ? "true" : "false"}
            className="relative inline-flex min-w-full flex-nowrap gap-1 whitespace-nowrap px-1 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:z-[1] after:h-px after:bg-slate-300 after:content-['']"
          >
            {items.map((item, index) => {
              const selected = index === clampedIndex;
              return (
                <button
                  key={item.token}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={item.panelId}
                  id={item.buttonId}
                  onClick={() => onChange(index)}
                  data-selected={selected ? "true" : "false"}
                  className="relative z-0 whitespace-nowrap rounded-t-lg border border-transparent border-b-transparent bg-transparent px-3.5 py-2 text-slate-600 first:ml-1 hover:bg-slate-50 hover:text-slate-800 data-[selected=true]:z-[2] data-[selected=true]:border-slate-300 data-[selected=true]:border-b-white data-[selected=true]:bg-white data-[selected=true]:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--input__accent-color,var(--main-color,120,38,245)),0.5)]"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <button
          ref={rightScrollReference}
          type="button"
          aria-label={strings.tab.scrollRight}
          onClick={() => handleScrollButton(1)}
          data-direction="right"
          data-visible={isScrollable && canScrollRight ? "true" : "false"}
          disabled={!canScrollRight}
          className="absolute bottom-[1px] top-0 right-0 z-[3] flex w-8 items-center justify-center border-0 p-0 text-slate-600 transition data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0 disabled:cursor-default"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,1) 75%, rgba(255,255,255,0))",
          }}
        >
          <i aria-hidden className="fa-solid fa-chevron-right text-xs" />
        </button>
      </div>
      <div
        role="tabpanel"
        id={active.panelId}
        aria-labelledby={active.buttonId}
      >
        {active.content}
      </div>
      {Boolean(errors) && <div className="flex flex-col gap-2">{errors}</div>}
    </div>
  );
}
