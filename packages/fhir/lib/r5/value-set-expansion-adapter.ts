import type {
  Element,
  IValueSetExpansionAdapter,
  ValueSetExpansion,
  ValueSetExpansionParameter,
  ValueSetExpansionProperty,
} from "../generated-types.ts";
import type { ValueSetExpansion as R5ValueSetExpansion } from "fhir/r5";

export class ValueSetExpansionAdapter implements IValueSetExpansionAdapter {
  getNextElement(expansion: ValueSetExpansion): Element | undefined {
    return (expansion as R5ValueSetExpansion)._next as Element | undefined;
  }

  setNextElement(
    expansion: ValueSetExpansion,
    value: Element | undefined,
  ): void {
    (expansion as R5ValueSetExpansion)._next =
      value as R5ValueSetExpansion["_next"];
  }

  getNext(expansion: ValueSetExpansion): string | undefined {
    return (expansion as R5ValueSetExpansion).next as string | undefined;
  }

  setNext(expansion: ValueSetExpansion, value: string | undefined): void {
    (expansion as R5ValueSetExpansion).next =
      value as R5ValueSetExpansion["next"];
  }

  getParameter(
    expansion: ValueSetExpansion,
  ): ValueSetExpansionParameter[] | undefined {
    return (expansion as R5ValueSetExpansion).parameter as
      | ValueSetExpansionParameter[]
      | undefined;
  }

  setParameter(
    expansion: ValueSetExpansion,
    value: ValueSetExpansionParameter[] | undefined,
  ): void {
    (expansion as R5ValueSetExpansion).parameter =
      value as R5ValueSetExpansion["parameter"];
  }

  getProperty(
    expansion: ValueSetExpansion,
  ): ValueSetExpansionProperty[] | undefined {
    return (expansion as R5ValueSetExpansion).property as
      | ValueSetExpansionProperty[]
      | undefined;
  }

  setProperty(
    expansion: ValueSetExpansion,
    value: ValueSetExpansionProperty[] | undefined,
  ): void {
    (expansion as R5ValueSetExpansion).property =
      value as R5ValueSetExpansion["property"];
  }
}
