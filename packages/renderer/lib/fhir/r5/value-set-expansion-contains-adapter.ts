import type {
  IValueSetExpansionContainsAdapter,
  ValueSetComposeIncludeConceptDesignation,
  ValueSetExpansionContains,
  ValueSetExpansionContainsProperty,
} from "../generated-types.ts";
import type { ValueSetExpansionContains as R5ValueSetExpansionContains } from "fhir/r5";

export class ValueSetExpansionContainsAdapter implements IValueSetExpansionContainsAdapter {
  getDesignation(
    contains: ValueSetExpansionContains,
  ): ValueSetComposeIncludeConceptDesignation[] | undefined {
    return (contains as R5ValueSetExpansionContains).designation as
      | ValueSetComposeIncludeConceptDesignation[]
      | undefined;
  }

  setDesignation(
    contains: ValueSetExpansionContains,
    value: ValueSetComposeIncludeConceptDesignation[] | undefined,
  ): void {
    (contains as R5ValueSetExpansionContains).designation =
      value as R5ValueSetExpansionContains["designation"];
  }

  getProperty(
    contains: ValueSetExpansionContains,
  ): ValueSetExpansionContainsProperty[] | undefined {
    return (contains as R5ValueSetExpansionContains).property as
      | ValueSetExpansionContainsProperty[]
      | undefined;
  }

  setProperty(
    contains: ValueSetExpansionContains,
    value: ValueSetExpansionContainsProperty[] | undefined,
  ): void {
    (contains as R5ValueSetExpansionContains).property =
      value as R5ValueSetExpansionContains["property"];
  }
}
