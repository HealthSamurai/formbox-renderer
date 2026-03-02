import { action, computed, makeObservable } from "mobx";
import type { Coding, Quantity } from "@formbox/fhir";
import type { IAnswer, IQuantityAnswer } from "../../../types.ts";
import { isEmptyObject } from "../../../utilities.ts";
import { UnitSelection } from "./unit-selection.ts";

export class QuantityAnswer implements IQuantityAnswer {
  private readonly answer: IAnswer<"quantity">;

  constructor(answer: IAnswer<"quantity">) {
    this.answer = answer;
    makeObservable(this);
  }

  private get quantityValue(): Quantity | undefined {
    return (this.answer.value as Quantity | undefined) ?? undefined;
  }

  @computed({ keepAlive: true })
  get unitSelection() {
    return new UnitSelection(this.answer);
  }

  @action
  handleNumberInput(raw: string): void {
    if (raw === "") {
      this.applyQuantityChange((draft) => {
        delete draft.value;
      });
      return;
    }

    const parsed = Number(raw);
    if (Number.isNaN(parsed)) {
      return;
    }

    this.applyQuantityChange((draft) => {
      draft.value = parsed;
    });
  }

  @action
  handleFreeTextChange(text: string): void {
    this.applyQuantityChange((draft) => {
      if (text) {
        draft.unit = text;
      } else {
        delete draft.unit;
      }
      delete draft.code;
      delete draft.system;
    });
  }

  @action
  handleCodingChange(coding?: Coding): void {
    this.applyQuantityChange((draft) => {
      this.applyCodingToQuantity(draft, coding);
    });
  }

  private applyQuantityChange(builder: (draft: Quantity) => void): void {
    const draft: Quantity = { ...this.quantityValue };
    builder(draft);
    this.answer.setValueByUser(isEmptyObject(draft) ? undefined : draft);
  }

  private applyCodingToQuantity(draft: Quantity, coding: Coding | undefined) {
    if (!coding) {
      delete draft.unit;
      delete draft.code;
      delete draft.system;
      return;
    }

    if (coding.display) {
      draft.unit = coding.display;
    } else if (coding.code) {
      draft.unit = coding.code;
    } else {
      delete draft.unit;
    }

    if (coding.code) {
      draft.code = coding.code;
    } else {
      delete draft.code;
    }

    if (coding.system) {
      draft.system = coding.system;
    } else {
      delete draft.system;
    }
  }
}
