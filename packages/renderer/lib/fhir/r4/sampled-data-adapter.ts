import type {
  Element,
  ISampledDataAdapter,
  SampledData,
} from "../generated-types.ts";

export class SampledDataAdapter implements ISampledDataAdapter {
  getCodeMapElement(data: SampledData): Element | undefined {
    void data;
    return undefined;
  }

  setCodeMapElement(data: SampledData, value: Element | undefined): void {
    void data;
    void value;
  }

  getIntervalUnitElement(data: SampledData): Element | undefined {
    void data;
    return undefined;
  }

  setIntervalUnitElement(data: SampledData, value: Element | undefined): void {
    void data;
    void value;
  }

  getOffsetsElement(data: SampledData): Element | undefined {
    void data;
    return undefined;
  }

  setOffsetsElement(data: SampledData, value: Element | undefined): void {
    void data;
    void value;
  }

  getCodeMap(data: SampledData): string | undefined {
    void data;
    return undefined;
  }

  setCodeMap(data: SampledData, value: string | undefined): void {
    void data;
    void value;
  }

  getInterval(data: SampledData): number | undefined {
    void data;
    return undefined;
  }

  setInterval(data: SampledData, value: number | undefined): void {
    void data;
    void value;
  }

  getIntervalUnit(data: SampledData): string {
    void data;
    throw new Error("SampledData.intervalUnit is not supported in R4.");
  }

  setIntervalUnit(data: SampledData, value: string): void {
    void data;
    void value;
    throw new Error("SampledData.intervalUnit is not supported in R4.");
  }

  getOffsets(data: SampledData): string | undefined {
    void data;
    return undefined;
  }

  setOffsets(data: SampledData, value: string | undefined): void {
    void data;
    void value;
  }
}
