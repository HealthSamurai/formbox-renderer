import type {
  DataRequirement,
  DataRequirementCodeFilter,
  DataRequirementDateFilter,
  DataRequirementSort,
  DataRequirementValueFilter,
  IDataRequirementAdapter,
} from "../generated-types.ts";
import type { DataRequirement as R4DataRequirement } from "fhir/r4";

export class DataRequirementAdapter implements IDataRequirementAdapter {
  getCodeFilter(
    requirement: DataRequirement,
  ): DataRequirementCodeFilter[] | undefined {
    return (requirement as R4DataRequirement).codeFilter as
      | DataRequirementCodeFilter[]
      | undefined;
  }

  setCodeFilter(
    requirement: DataRequirement,
    value: DataRequirementCodeFilter[] | undefined,
  ): void {
    (requirement as R4DataRequirement).codeFilter =
      value as R4DataRequirement["codeFilter"];
  }

  getDateFilter(
    requirement: DataRequirement,
  ): DataRequirementDateFilter[] | undefined {
    return (requirement as R4DataRequirement).dateFilter as
      | DataRequirementDateFilter[]
      | undefined;
  }

  setDateFilter(
    requirement: DataRequirement,
    value: DataRequirementDateFilter[] | undefined,
  ): void {
    (requirement as R4DataRequirement).dateFilter =
      value as R4DataRequirement["dateFilter"];
  }

  getSort(requirement: DataRequirement): DataRequirementSort[] | undefined {
    return (requirement as R4DataRequirement).sort as
      | DataRequirementSort[]
      | undefined;
  }

  setSort(
    requirement: DataRequirement,
    value: DataRequirementSort[] | undefined,
  ): void {
    (requirement as R4DataRequirement).sort =
      value as R4DataRequirement["sort"];
  }

  getValueFilter(
    requirement: DataRequirement,
  ): DataRequirementValueFilter[] | undefined {
    void requirement;
    return undefined;
  }

  setValueFilter(
    requirement: DataRequirement,
    value: DataRequirementValueFilter[] | undefined,
  ): void {
    void requirement;
    void value;
  }
}
