import type {
  Element,
  IValueSetExpansionAdapter,
  ValueSetExpansion,
  ValueSetExpansionParameter,
  ValueSetExpansionProperty,
} from "../generated-types.ts";
import type { ValueSetExpansion as R4ValueSetExpansion } from "fhir/r4";

export class ValueSetExpansionAdapter implements IValueSetExpansionAdapter {
  getNextElement(expansion: ValueSetExpansion): Element | undefined {
    void expansion;
    return undefined;
  }

  setNextElement(
    expansion: ValueSetExpansion,
    value: Element | undefined,
  ): void {
    void expansion;
    void value;
  }

  getNext(expansion: ValueSetExpansion): string | undefined {
    void expansion;
    return undefined;
  }

  setNext(expansion: ValueSetExpansion, value: string | undefined): void {
    void expansion;
    void value;
  }

  getParameter(
    expansion: ValueSetExpansion,
  ): ValueSetExpansionParameter[] | undefined {
    return (expansion as R4ValueSetExpansion).parameter as
      | ValueSetExpansionParameter[]
      | undefined;
  }

  setParameter(
    expansion: ValueSetExpansion,
    value: ValueSetExpansionParameter[] | undefined,
  ): void {
    (expansion as R4ValueSetExpansion).parameter =
      value as R4ValueSetExpansion["parameter"];
  }

  getProperty(
    expansion: ValueSetExpansion,
  ): ValueSetExpansionProperty[] | undefined {
    void expansion;
    return undefined;
  }

  setProperty(
    expansion: ValueSetExpansion,
    value: ValueSetExpansionProperty[] | undefined,
  ): void {
    void expansion;
    void value;
  }
}
