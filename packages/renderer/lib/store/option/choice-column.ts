import type {
  Coding,
  QuestionnaireItem,
  ValueSetComposeIncludeConceptDesignation,
  ValueSetExpansionContainsProperty,
} from "@formbox/fhir";
import type { ChoiceColumn } from "../../types.ts";
import {
  EXT,
  extractExtensionValue,
  findExtension,
  findExtensions,
  getTranslated,
  widthFromQuantity,
} from "../../utilities.ts";

// $expand entries carry these on top of the Coding fields (R5 shape).
type ExpandedConcept = Coding & {
  designation?: ValueSetComposeIncludeConceptDesignation[] | undefined;
  property?: ValueSetExpansionContainsProperty[] | undefined;
};

// ponytail: code and system are read as Coding fields too (not in SDC, but what authors expect).
const CODING_FIELDS = new Set(["display", "code", "system"]);

export function parseChoiceColumns(
  item: QuestionnaireItem,
  language: string | undefined,
): ChoiceColumn[] {
  return findExtensions(item, EXT.SDC_CHOICE_COLUMN).flatMap((extension) => {
    const path = findExtension(extension, "path")?.valueString?.trim();
    if (!path) return [];

    return [
      {
        path,
        label: getTranslated(
          findExtension(extension, "label"),
          "valueString",
          language,
        ),
        width: widthFromQuantity(
          extractExtensionValue("Quantity", extension, "width"),
        ),
        forDisplay:
          findExtension(extension, "forDisplay")?.valueBoolean === true,
      },
    ];
  });
}

// Paths that are neither Coding fields: property codes or designation language/use codes.
export function getExpansionProperties(
  columns: ReadonlyArray<ChoiceColumn>,
): string[] {
  return columns
    .map((column) => column.path)
    .filter((path) => !CODING_FIELDS.has(path));
}

export function getChoiceColumnCell(coding: Coding, path: string): string {
  const concept = coding as ExpandedConcept;

  if (CODING_FIELDS.has(path)) {
    return concept[path as "display" | "code" | "system"] ?? "";
  }

  const property = concept.property?.find((entry) => entry.code === path);
  if (property) {
    const value =
      property.valueString ??
      property.valueCode ??
      property.valueDateTime ??
      property.valueCoding?.display ??
      property.valueCoding?.code ??
      property.valueInteger ??
      property.valueDecimal ??
      property.valueBoolean;
    return value == undefined ? "" : String(value);
  }

  const designation =
    concept.designation?.find((entry) => entry.language === path) ??
    concept.designation?.find((entry) => entry.use?.code === path);
  return designation?.value ?? "";
}

// The stored Coding: plain Coding fields, with display taken from forDisplay columns.
export function applyChoiceColumns(
  coding: Coding,
  columns: ReadonlyArray<ChoiceColumn>,
): { coding: Coding; cells: string[] } {
  const cells = columns.map((column) =>
    getChoiceColumnCell(coding, column.path),
  );
  const forDisplay = columns
    .flatMap((column, index) => (column.forDisplay ? [cells[index]] : []))
    .filter((cell) => cell.length > 0)
    .join(" ");
  const display = forDisplay || coding.display;

  return {
    cells,
    coding: {
      ...(coding.system === undefined ? {} : { system: coding.system }),
      ...(coding.version === undefined ? {} : { version: coding.version }),
      ...(coding.code === undefined ? {} : { code: coding.code }),
      ...(display === undefined ? {} : { display }),
    },
  };
}
