import de from "./de.ts";
import en from "./en.ts";
import es from "./es.ts";
import fi from "./fi.ts";
import fr from "./fr.ts";
import it from "./it.ts";
import nl from "./nl.ts";
import pl from "./pl.ts";
import pt from "./pt.ts";
import ru from "./ru.ts";
import sv from "./sv.ts";
import tr from "./tr.ts";

export { default as de } from "./de.ts";
export { default as en } from "./en.ts";
export { default as es } from "./es.ts";
export { default as fi } from "./fi.ts";
export { default as fr } from "./fr.ts";
export { default as it } from "./it.ts";
export { default as nl } from "./nl.ts";
export { default as pl } from "./pl.ts";
export { default as pt } from "./pt.ts";
export { default as ru } from "./ru.ts";
export { default as sv } from "./sv.ts";
export { default as tr } from "./tr.ts";

const strings = {
  de,
  en,
  es,
  fi,
  fr,
  it,
  nl,
  pl,
  pt,
  ru,
  sv,
  tr,
} as const;

export type SupportedLocale = keyof typeof strings;

export default strings;
