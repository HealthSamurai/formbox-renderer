import { useEffect, useState } from "react";

function getMatch(query: string): boolean {
  if (typeof globalThis.matchMedia !== "function") {
    return false;
  }

  return globalThis.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMatch(query));

  useEffect(() => {
    if (typeof globalThis.matchMedia !== "function") {
      return;
    }

    const media = globalThis.matchMedia(query);
    const update = () => {
      setMatches(media.matches);
    };

    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => {
        media.removeEventListener("change", update);
      };
    }

    media.addListener(update);
    return () => {
      media.removeListener(update);
    };
  }, [query]);

  return matches;
}
