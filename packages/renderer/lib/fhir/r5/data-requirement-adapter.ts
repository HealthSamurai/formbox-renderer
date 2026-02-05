import type {
  DataRequirement,
  DataRequirementCodeFilter,
  DataRequirementDateFilter,
  DataRequirementSort,
  DataRequirementValueFilter,
  IDataRequirementAdapter,
} from "../generated-types.ts";
import type { DataRequirement as R5DataRequirement } from "fhir/r5";

export class DataRequirementAdapter implements IDataRequirementAdapter {
  getCodeFilter(
    requirement: DataRequirement,
  ): DataRequirementCodeFilter[] | undefined {
    return (requirement as R5DataRequirement).codeFilter as
      | DataRequirementCodeFilter[]
      | undefined;
  }

  setCodeFilter(
    requirement: DataRequirement,
    value: DataRequirementCodeFilter[] | undefined,
  ): void {
    (requirement as R5DataRequirement).codeFilter =
      value as R5DataRequirement["codeFilter"];
  }

  getDateFilter(
    requirement: DataRequirement,
  ): DataRequirementDateFilter[] | undefined {
    return (requirement as R5DataRequirement).dateFilter as
      | DataRequirementDateFilter[]
      | undefined;
  }

  setDateFilter(
    requirement: DataRequirement,
    value: DataRequirementDateFilter[] | undefined,
  ): void {
    (requirement as R5DataRequirement).dateFilter =
      value as R5DataRequirement["dateFilter"];
  }

  getSort(requirement: DataRequirement): DataRequirementSort[] | undefined {
    return (requirement as R5DataRequirement).sort as
      | DataRequirementSort[]
      | undefined;
  }

  setSort(
    requirement: DataRequirement,
    value: DataRequirementSort[] | undefined,
  ): void {
    (requirement as R5DataRequirement).sort =
      value as R5DataRequirement["sort"];
  }

  getValueFilter(
    requirement: DataRequirement,
  ): DataRequirementValueFilter[] | undefined {
    return (requirement as R5DataRequirement).valueFilter as
      | DataRequirementValueFilter[]
      | undefined;
  }

  setValueFilter(
    requirement: DataRequirement,
    value: DataRequirementValueFilter[] | undefined,
  ): void {
    (requirement as R5DataRequirement).valueFilter =
      value as R5DataRequirement["valueFilter"];
  }
}
