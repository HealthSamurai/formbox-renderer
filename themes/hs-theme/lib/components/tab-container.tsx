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
    return (
      <p className="typo-body text-text-tertiary italic">{strings.tab.empty}</p>
    );
  }

  const active = items[clampedIndex];

  return (
    <div className="flex flex-col gap-3" data-linkid={linkId}>
      {Boolean(header) && (
        <div className="typo-label text-text-primary">{header}</div>
      )}
      <div className="relative">
        <button
          className="absolute top-0 bottom-px z-[3] flex w-8 cursor-pointer items-center justify-center border-0 p-0 text-text-secondary outline-none before:inline-block before:border-r-2 before:border-b-2 before:border-current before:p-[3px] before:content-[''] hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring-blue focus-visible:ring-inset disabled:cursor-default data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0 left-0 bg-gradient-to-r from-bg-primary from-75% to-transparent before:rotate-[135deg]"
          ref={leftScrollReference}
          type="button"
          aria-label={strings.tab.scrollLeft}
          onClick={() => handleScrollButton(-1)}
          data-direction="left"
          data-visible={isScrollable && canScrollLeft ? "true" : "false"}
          disabled={!canScrollLeft}
        />
        <div
          role="tablist"
          ref={tabListReference}
          className="no-scrollbar overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className="relative inline-flex min-w-full flex-nowrap gap-1 border-b border-border-separator px-1 whitespace-nowrap"
            ref={tabListInnerReference}
            data-scrollable={isScrollable ? "true" : "false"}
          >
            {items.map((item, index) => {
              const selected = index === clampedIndex;
              return (
                <button
                  className="typo-body -mb-px h-10 flex-none cursor-pointer border-b-2 border-b-transparent px-3 pt-2.5 pb-2 whitespace-nowrap text-text-tertiary outline-none transition-[color,box-shadow] hover:bg-bg-secondary/60 hover:text-text-tertiary_hover focus-visible:ring-2 focus-visible:ring-ring-blue data-[selected=true]:border-b-border-brand data-[selected=true]:text-text-primary"
                  key={item.token}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={item.panelId}
                  id={item.buttonId}
                  onClick={() => onChange(index)}
                  data-selected={selected ? "true" : "false"}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <button
          className="absolute top-0 bottom-px z-[3] flex w-8 cursor-pointer items-center justify-center border-0 p-0 text-text-secondary outline-none before:inline-block before:border-r-2 before:border-b-2 before:border-current before:p-[3px] before:content-[''] hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring-blue focus-visible:ring-inset disabled:cursor-default data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0 right-0 bg-gradient-to-l from-bg-primary from-75% to-transparent before:-rotate-45"
          ref={rightScrollReference}
          type="button"
          aria-label={strings.tab.scrollRight}
          onClick={() => handleScrollButton(1)}
          data-direction="right"
          data-visible={isScrollable && canScrollRight ? "true" : "false"}
          disabled={!canScrollRight}
        />
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
