declare module "@lhncbc/ucum-lhc" {
  export type ConvertStatus = "succeeded" | "failed" | "error" | string;

  export interface ConvertUnitOptions {
    suggest?: boolean;
    molecularWeight?: number;
    charge?: number;
  }

  export interface ConvertUnitResult {
    status: ConvertStatus;
    toVal: number | null;
    msg: string[];
  }

  // eslint-disable-next-line unicorn/prevent-abbreviations
  export class UcumLhcUtils {
    convertUnitTo(
      fromUnitCode: string,
      fromValue: number | string,
      toUnitCode: string,
      options?: ConvertUnitOptions,
    ): ConvertUnitResult;
  }
}
