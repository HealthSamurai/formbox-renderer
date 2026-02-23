import { createContext, useContext } from "react";

export type Strings = {
  readonly aria: {
    readonly help: string;
    readonly legal: string;
    readonly flyover: string;
  };
  readonly value: {
    readonly yes: string;
    readonly no: string;
    readonly undefined: string;
  };
  readonly dialog: {
    readonly cancel: string;
    readonly add: string;
  };
  readonly errors: {
    readonly unknown: string;
  };
  readonly file: {
    readonly sizeLabelKb: string;
  };
  readonly group: {
    readonly addSection: string;
    readonly removeSection: string;
    readonly noNodesYet: string;
  };
  readonly gridTable: {
    readonly headerActions: string;
  };
  readonly inputs: {
    readonly referencePlaceholder: string;
    readonly referenceDisplayPlaceholder: string;
    readonly codingSystemPlaceholder: string;
    readonly codingCodePlaceholder: string;
    readonly codingDisplayPlaceholder: string;
    readonly quantityValuePlaceholder: string;
    readonly quantityUnitPlaceholder: string;
    readonly attachmentSelected: string;
  };
  readonly selection: {
    readonly specifyOther: string;
    readonly addAnother: string;
    readonly selectPlaceholder: string;
    readonly removeSelection: string;
    readonly removeCustomValue: string;
  };
  readonly language: {
    readonly label: string;
    readonly placeholder: string;
  };
  readonly table: {
    readonly noChoiceQuestionsHorizontal: string;
    readonly noChoiceQuestions: string;
    readonly noAnswerOptionsHorizontal: string;
    readonly noAnswerOptions: string;
  };
  readonly collapsible: {
    readonly expand: string;
    readonly collapse: string;
  };
  readonly tab: {
    readonly empty: string;
  };
  readonly unsupported: {
    readonly itemType: string;
  };
  readonly validation: {
    readonly group: {
      readonly atLeastOneAnswer: string;
    };
    readonly groupList: {
      readonly minOccurs: string;
      readonly maxOccurs: string;
    };
    readonly question: {
      readonly minOccursSingle: string;
      readonly minOccursMultiple: string;
      readonly maxOccurs: string;
    };
    readonly answer: {
      readonly minLength: string;
      readonly maxLength: string;
      readonly minPrecision: string;
      readonly maxPrecision: string;
      readonly blank: string;
      readonly valueNotEarlier: string;
      readonly valueNotLater: string;
      readonly valueMin: string;
      readonly valueMax: string;
      readonly valueDecimalPlaces: string;
      readonly quantityMin: string;
      readonly quantityMax: string;
      readonly attachmentTypeRequired: string;
      readonly attachmentTypeAllowed: string;
      readonly attachmentSizeMax: string;
    };
  };
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type StringsOverride = DeepPartial<Strings>;

export const StringsContext = createContext<Strings>(
  undefined as unknown as Strings,
);

export function useStrings(): Strings {
  const strings = useContext(StringsContext);

  if (strings == undefined) {
    throw new Error("StringsContext.Provider is required");
  }

  return strings;
}
