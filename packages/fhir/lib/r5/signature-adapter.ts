import type {
  Coding,
  ISignatureAdapter,
  Reference,
  Signature,
} from "../generated-types.ts";
import type { Signature as R5Signature } from "fhir/r5";

export class SignatureAdapter implements ISignatureAdapter {
  getType(signature: Signature): Coding[] | undefined {
    return (signature as R5Signature).type as Coding[] | undefined;
  }

  setType(signature: Signature, value: Coding[] | undefined): void {
    (signature as R5Signature).type = value as R5Signature["type"];
  }

  getWho(signature: Signature): Reference | undefined {
    return (signature as R5Signature).who as Reference | undefined;
  }

  setWho(signature: Signature, value: Reference | undefined): void {
    (signature as R5Signature).who = value as R5Signature["who"];
  }
}
