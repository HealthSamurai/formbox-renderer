import de from "./de.ts";
import en from "./en.ts";
import es from "./es.ts";
import fr from "./fr.ts";

export { default as de } from "./de.ts";
export { default as en } from "./en.ts";
export { default as es } from "./es.ts";
export { default as fr } from "./fr.ts";

const strings = {
  de,
  en,
  es,
  fr,
} as const;

export type SupportedLocale = keyof typeof strings;

export default strings;
