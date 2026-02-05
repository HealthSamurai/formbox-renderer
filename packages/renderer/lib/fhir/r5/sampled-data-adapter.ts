import type {
  Element,
  ISampledDataAdapter,
  SampledData,
} from "../generated-types.ts";
import type { SampledData as R5SampledData } from "fhir/r5";

export class SampledDataAdapter implements ISampledDataAdapter {
  getCodeMapElement(data: SampledData): Element | undefined {
    return (data as R5SampledData)._codeMap as Element | undefined;
  }

  setCodeMapElement(data: SampledData, value: Element | undefined): void {
    (data as R5SampledData)._codeMap = value as R5SampledData["_codeMap"];
  }

  getIntervalUnitElement(data: SampledData): Element | undefined {
    return (data as R5SampledData)._intervalUnit as Element | undefined;
  }

  setIntervalUnitElement(data: SampledData, value: Element | undefined): void {
    (data as R5SampledData)._intervalUnit =
      value as R5SampledData["_intervalUnit"];
  }

  getOffsetsElement(data: SampledData): Element | undefined {
    return (data as R5SampledData)._offsets as Element | undefined;
  }

  setOffsetsElement(data: SampledData, value: Element | undefined): void {
    (data as R5SampledData)._offsets = value as R5SampledData["_offsets"];
  }

  getCodeMap(data: SampledData): string | undefined {
    return (data as R5SampledData).codeMap as string | undefined;
  }

  setCodeMap(data: SampledData, value: string | undefined): void {
    (data as R5SampledData).codeMap = value as R5SampledData["codeMap"];
  }

  getInterval(data: SampledData): number | undefined {
    return (data as R5SampledData).interval as number | undefined;
  }

  setInterval(data: SampledData, value: number | undefined): void {
    (data as R5SampledData).interval = value as R5SampledData["interval"];
  }

  getIntervalUnit(data: SampledData): string {
    return (data as R5SampledData).intervalUnit as string;
  }

  setIntervalUnit(data: SampledData, value: string): void {
    (data as R5SampledData).intervalUnit =
      value as R5SampledData["intervalUnit"];
  }

  getOffsets(data: SampledData): string | undefined {
    return (data as R5SampledData).offsets as string | undefined;
  }

  setOffsets(data: SampledData, value: string | undefined): void {
    (data as R5SampledData).offsets = value as R5SampledData["offsets"];
  }
}
