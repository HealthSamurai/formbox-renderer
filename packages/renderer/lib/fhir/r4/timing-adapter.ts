import type {
  ITimingAdapter,
  Timing,
  TimingRepeat,
} from "../generated-types.ts";
import type { Timing as R4Timing } from "fhir/r4";

export class TimingAdapter implements ITimingAdapter {
  getRepeat(timing: Timing): TimingRepeat | undefined {
    return (timing as R4Timing).repeat as TimingRepeat | undefined;
  }

  setRepeat(timing: Timing, value: TimingRepeat | undefined): void {
    (timing as R4Timing).repeat = value as R4Timing["repeat"];
  }
}
