import type {
  IValueSetExpansionContainsAdapter,
  ValueSetComposeIncludeConceptDesignation,
  ValueSetExpansionContains,
  ValueSetExpansionContainsProperty,
} from "../generated-types.ts";
import type { ValueSetExpansionContains as R4ValueSetExpansionContains } from "fhir/r4";

export class ValueSetExpansionContainsAdapter implements IValueSetExpansionContainsAdapter {
  getDesignation(
    contains: ValueSetExpansionContains,
  ): ValueSetComposeIncludeConceptDesignation[] | undefined {
    return (contains as R4ValueSetExpansionContains).designation as
      | ValueSetComposeIncludeConceptDesignation[]
      | undefined;
  }

  setDesignation(
    contains: ValueSetExpansionContains,
    value: ValueSetComposeIncludeConceptDesignation[] | undefined,
  ): void {
    (contains as R4ValueSetExpansionContains).designation =
      value as R4ValueSetExpansionContains["designation"];
  }

  getProperty(
    contains: ValueSetExpansionContains,
  ): ValueSetExpansionContainsProperty[] | undefined {
    void contains;
    return undefined;
  }

  setProperty(
    contains: ValueSetExpansionContains,
    value: ValueSetExpansionContainsProperty[] | undefined,
  ): void {
    void contains;
    void value;
  }
}
