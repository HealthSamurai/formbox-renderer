import type {
  ITimingAdapter,
  Timing,
  TimingRepeat,
} from "../generated-types.ts";
import type { Timing as R5Timing } from "fhir/r5";

export class TimingAdapter implements ITimingAdapter {
  getRepeat(timing: Timing): TimingRepeat | undefined {
    return (timing as R5Timing).repeat as TimingRepeat | undefined;
  }

  setRepeat(timing: Timing, value: TimingRepeat | undefined): void {
    (timing as R5Timing).repeat = value as R5Timing["repeat"];
  }
}
