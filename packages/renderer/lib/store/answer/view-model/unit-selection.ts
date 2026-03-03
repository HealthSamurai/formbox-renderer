import { action, computed, makeObservable, observable } from "mobx";
import type { Coding, Quantity } from "@formbox/fhir";
import type { IAnswer, IUnitSelection, UnitEntry } from "../../../types.ts";
import { areCodingsEqual, buildId, tokenify } from "../../../utilities.ts";

const LEGACY_PREFIX = "__legacy_unit__";
const CUSTOM_PREFIX = "__custom_unit__";

type UnitValueState =
  | { kind: "none" }
  | { kind: "inherent"; token: string }
  | { kind: "custom"; token: string; coding: Coding }
  | { kind: "legacy"; token: string; coding: Coding };

export class UnitSelection implements IUnitSelection {
  private readonly answer: IAnswer<"quantity">;

  @observable
  private customFormActiveState = false;

  @observable
  private customTextState = "";

  @observable
  private customCodingState: Coding | undefined = undefined;

  constructor(answer: IAnswer<"quantity">) {
    this.answer = answer;
    makeObservable(this);
  }

  private get quantity(): Quantity | undefined {
    return this.answer.value as Quantity | undefined;
  }

  @computed
  private get allowCustom(): boolean {
    return this.answer.question.unitOption.effectiveUnitOpen !== "optionsOnly";
  }

  @computed
  private get inherentOptions(): ReadonlyArray<UnitEntry> {
    const map = new Map<string, UnitEntry>();
    for (const coding of this.answer.question.unitOption.options) {
      const token = tokenify("Coding", coding);
      if (!map.has(token)) {
        map.set(token, { token, coding });
      }
    }
    return [...map.values()];
  }

  @computed
  private get currentUnit(): UnitValueState {
    const quantity = this.quantity;
    if (!quantity) {
      return { kind: "none" };
    }

    const inherentToken = this.getTokenForQuantity(quantity);
    if (inherentToken) {
      return { kind: "inherent", token: inherentToken };
    }

    const coding: Coding = {
      system: quantity.system,
      code: quantity.code,
      display: quantity.unit,
    };

    if (!coding.system && !coding.code && !coding.display) {
      return { kind: "none" };
    }

    return this.canRepresentAsCustom(quantity, coding)
      ? {
          kind: "custom",
          token: `${CUSTOM_PREFIX}${tokenify("Coding", coding)}`,
          coding,
        }
      : {
          kind: "legacy",
          token: `${LEGACY_PREFIX}${tokenify("Coding", coding)}`,
          coding,
        };
  }

  @computed
  get entries(): ReadonlyArray<UnitEntry> {
    if (
      this.customFormActiveState ||
      this.currentUnit.kind === "none" ||
      this.currentUnit.kind === "inherent"
    ) {
      return this.inherentOptions;
    }

    return [
      {
        token: this.currentUnit.token,
        coding: this.currentUnit.coding,
      },
      ...this.inherentOptions,
    ];
  }

  @computed
  get specifyOtherToken(): string | undefined {
    return this.allowCustom
      ? buildId(this.answer.token, "specify_other_unit")
      : undefined;
  }

  @computed
  get customFormActive(): boolean {
    return this.customFormActiveState && this.allowCustom;
  }

  @computed
  get customText(): string {
    return this.customTextState;
  }

  @computed
  get customCoding(): Coding | undefined {
    const supplementalSystem =
      this.answer.question.unitOption.supplementalSystem;
    if (this.customCodingState || !supplementalSystem) {
      return this.customCodingState;
    }

    return { system: supplementalSystem };
  }

  @computed
  get canSubmitCustomForm(): boolean {
    if (!this.allowCustom) {
      return false;
    }

    if (this.answer.question.unitOption.effectiveUnitOpen === "optionsOrType") {
      return (
        this.customCodingState != undefined &&
        this.matchesSupplementalSystem(this.customCodingState.system)
      );
    }

    return this.customTextState.trim().length > 0;
  }

  @computed
  get selectedToken(): string | undefined {
    if (this.customFormActiveState) {
      return this.specifyOtherToken;
    }

    switch (this.currentUnit.kind) {
      case "none": {
        return undefined;
      }
      case "inherent":
      case "custom":
      case "legacy": {
        return this.currentUnit.token;
      }
    }
  }

  @action
  select(token?: string): void {
    const specifyOtherToken = this.specifyOtherToken;
    if (specifyOtherToken && token === specifyOtherToken) {
      if (!this.allowCustom || this.answer.question.readOnly) {
        return;
      }

      this.customTextState = "";
      this.customCodingState = undefined;
      this.customFormActiveState = true;
      return;
    }

    if (!token) {
      this.rememberCurrentUnitForReuse();
      this.customTextState = "";
      this.customCodingState = undefined;
      this.customFormActiveState = false;
      this.answer.quantity.handleCodingChange();
      return;
    }

    if (token.startsWith(CUSTOM_PREFIX)) {
      this.customTextState = "";
      this.customCodingState = undefined;
      this.customFormActiveState = false;
      return;
    }

    if (token.startsWith(LEGACY_PREFIX)) {
      return;
    }

    const coding = this.getCodingForToken(token);
    if (!coding) {
      return;
    }

    this.rememberCurrentUnitForReuse();
    this.answer.quantity.handleCodingChange(coding);
    this.customTextState = "";
    this.customCodingState = undefined;
    this.customFormActiveState = false;
  }

  @action
  setCustomText(text: string): void {
    this.customTextState = text;
  }

  @action
  setCustomCoding(coding: Coding | undefined): void {
    this.customCodingState = coding;
  }

  @action
  cancelCustomForm(): void {
    this.customFormActiveState = false;
    this.customTextState = "";
    this.customCodingState = undefined;
  }

  @action
  submitCustomForm(): void {
    if (!this.canSubmitCustomForm || this.answer.question.readOnly) {
      return;
    }

    this.rememberCurrentUnitForReuse();

    if (this.answer.question.unitOption.effectiveUnitOpen === "optionsOrType") {
      if (!this.customCodingState) {
        return;
      }

      this.answer.quantity.handleCodingChange(this.customCodingState);
      this.answer.question.unitOption.rememberCustomOption(
        this.customCodingState,
      );
    } else {
      const customText = this.customTextState.trim();
      this.answer.quantity.handleFreeTextChange(customText);
      if (customText) {
        this.answer.question.unitOption.rememberCustomOption({
          display: customText,
        });
      }
    }

    this.customFormActiveState = false;
    this.customTextState = "";
    this.customCodingState = undefined;
  }

  private rememberCurrentUnitForReuse(): void {
    if (this.currentUnit.kind === "custom") {
      this.answer.question.unitOption.rememberCustomOption(
        this.currentUnit.coding,
      );
    }
  }

  private canRepresentAsCustom(quantity: Quantity, coding: Coding): boolean {
    switch (this.answer.question.unitOption.effectiveUnitOpen) {
      case "optionsOnly": {
        return false;
      }
      case "optionsOrType": {
        return this.matchesSupplementalSystem(coding.system);
      }
      case "optionsOrString": {
        if (quantity.code != undefined || quantity.system != undefined) {
          return (
            !this.answer.question.unitOption.hasOptions &&
            this.answer.question.unitOption.unitOpen == undefined
          );
        }

        return quantity.unit != undefined;
      }
    }
  }

  private matchesSupplementalSystem(system: string | undefined): boolean {
    const supplementalSystem =
      this.answer.question.unitOption.supplementalSystem;
    return supplementalSystem ? system === supplementalSystem : true;
  }

  private getCodingForToken(token: string): Coding | undefined {
    const found = this.inherentOptions.find((entry) => entry.token === token);
    return found?.coding ?? undefined;
  }

  private getTokenForCoding(coding: Coding): string | undefined {
    for (const entry of this.inherentOptions) {
      if (areCodingsEqual(entry.coding, coding)) {
        return entry.token;
      }
    }

    return;
  }

  private getTokenForQuantity(quantity: Quantity): string | undefined {
    if (quantity.code || quantity.system) {
      return this.getTokenForCoding({
        code: quantity.code,
        system: quantity.system,
        display: quantity.unit,
      });
    }

    if (quantity.unit) {
      return (
        this.getTokenForCoding({
          system: quantity.system,
          code: quantity.unit,
        }) ??
        this.getTokenForCoding({
          system: quantity.system,
          display: quantity.unit,
        })
      );
    }

    return;
  }
}
