import { action, computed, makeObservable, observable } from "mobx";
import type { Coding, Quantity } from "@formbox/fhir";
import type { IAnswer, IUnitSelection, UnitEntry } from "../../../types.ts";
import { areCodingsEqual, buildId, tokenify } from "../../../utilities.ts";

const LEGACY_PREFIX = "__legacy_unit__";
const CUSTOM_PREFIX = "__custom_unit__";

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

  private get quantityValue(): Quantity | undefined {
    return this.answer.value as Quantity | undefined;
  }

  @computed
  private get allowCustom(): boolean {
    return this.answer.question.unitOption.constraint !== "optionsOnly";
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
  private get customOption(): UnitEntry | undefined {
    if (!this.allowCustom || this.customFormActiveState) {
      return undefined;
    }

    if (this.getTokenForQuantity(this.quantityValue)) {
      return undefined;
    }

    const quantity = this.quantityValue;
    if (!quantity) {
      return undefined;
    }

    const label = quantity.unit ?? quantity.code ?? quantity.system;
    if (!label) {
      return undefined;
    }

    const coding = this.toCoding(quantity) ?? { display: label };
    const codingToken = tokenify("Coding", coding);
    return {
      token: codingToken
        ? `${CUSTOM_PREFIX}${codingToken}`
        : `${CUSTOM_PREFIX}${label}`,
      coding,
    };
  }

  @computed
  private get legacyOption(): UnitEntry | undefined {
    if (this.allowCustom) {
      return undefined;
    }

    if (this.getTokenForQuantity(this.quantityValue)) {
      return undefined;
    }

    const quantity = this.quantityValue;
    if (!quantity) {
      return undefined;
    }

    const label = quantity.unit ?? quantity.code ?? quantity.system;
    if (!label) {
      return undefined;
    }

    const coding = this.toCoding(quantity) ?? { display: label };
    return {
      token: `${LEGACY_PREFIX}${label}`,
      coding,
    };
  }

  @computed
  get entries(): ReadonlyArray<UnitEntry> {
    const base = this.inherentOptions;

    const custom = this.customOption;
    if (custom) {
      return [custom, ...base];
    }

    const legacy = this.legacyOption;
    if (!legacy) {
      return base;
    }

    return [legacy, ...base];
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
    return this.customCodingState;
  }

  @computed
  get canSubmitCustomForm(): boolean {
    if (!this.allowCustom) {
      return false;
    }

    if (this.answer.question.unitOption.constraint === "optionsOrType") {
      return this.customCodingState != undefined;
    }
    return this.customTextState.trim().length > 0;
  }

  @computed
  get selectedToken(): string | undefined {
    if (this.customFormActiveState) {
      return this.specifyOtherToken;
    }

    const custom = this.customOption;
    if (custom) {
      return custom.token;
    }

    const legacy = this.legacyOption;
    if (legacy) {
      return legacy.token;
    }

    return this.getTokenForQuantity(this.quantityValue);
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
    if (this.answer.question.unitOption.constraint === "optionsOrType") {
      this.answer.quantity.handleCodingChange(this.customCodingState);
      this.answer.question.unitOption.rememberCustomOption(
        this.customCodingState!,
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
    if (!this.allowCustom) {
      return;
    }

    const coding = this.toCoding(this.quantityValue);
    if (coding) {
      this.answer.question.unitOption.rememberCustomOption(coding);
    }
  }

  private toCoding(quantity: Quantity | undefined): Coding | undefined {
    if (!quantity) {
      return undefined;
    }

    const coding: Coding = {
      system: quantity.system,
      code: quantity.code,
      display: quantity.unit,
    };

    return coding.system || coding.code || coding.display ? coding : undefined;
  }

  private getCodingForToken(token: string): Coding | undefined {
    const found = this.inherentOptions.find((entry) => entry.token === token);
    return found?.coding ?? undefined;
  }

  private getTokenForCoding(coding: Coding | undefined): string | undefined {
    if (!coding) {
      return;
    }

    for (const entry of this.inherentOptions) {
      if (areCodingsEqual(entry.coding, coding)) {
        return entry.token;
      }
    }

    return;
  }

  private getTokenForQuantity(
    quantity: Quantity | undefined,
  ): string | undefined {
    if (!quantity) {
      return;
    }

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
