import type {
  Coding,
  ISignatureAdapter,
  Reference,
  Signature,
} from "../generated-types.ts";
import type { Signature as R4Signature } from "fhir/r4";

export class SignatureAdapter implements ISignatureAdapter {
  getType(signature: Signature): Coding[] | undefined {
    return (signature as R4Signature).type as Coding[] | undefined;
  }

  setType(signature: Signature, value: Coding[] | undefined): void {
    (signature as R4Signature).type = value as R4Signature["type"];
  }

  getWho(signature: Signature): Reference | undefined {
    return (signature as R4Signature).who as Reference | undefined;
  }

  setWho(signature: Signature, value: Reference | undefined): void {
    (signature as R4Signature).who = value as R4Signature["who"];
  }
}
