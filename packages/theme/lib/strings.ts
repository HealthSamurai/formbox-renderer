import { createContext, useContext } from "react";

type PlaceholderString<Key extends string> = `${string}{${Key}}${string}`;

export type Strings = {
  readonly aria: {
    readonly help: string;
    readonly legal: string;
    readonly flyover: string;
  };
  readonly value: {
    readonly yes: string;
    readonly no: string;
    readonly unanswered: string;
  };
  readonly dialog: {
    readonly cancel: string;
    readonly submit: string;
  };
  readonly errors: {
    readonly unknown: string;
  };
  readonly file: {
    readonly sizeLabel: PlaceholderString<"sizeKb">;
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
    readonly itemType: PlaceholderString<"type">;
  };
  readonly validation: {
    readonly group: {
      readonly atLeastOneAnswer: string;
    };
    readonly groupList: {
      readonly minOccurs: PlaceholderString<"minOccurs">;
      readonly maxOccurs: PlaceholderString<"maxOccurs">;
    };
    readonly question: {
      readonly minOccursSingle: string;
      readonly minOccursMultiple: PlaceholderString<"minOccurs">;
      readonly maxOccurs: PlaceholderString<"maxOccurs">;
    };
    readonly answer: {
      readonly minLength: PlaceholderString<"minLength">;
      readonly maxLength: PlaceholderString<"maxLength">;
      readonly minPrecision: PlaceholderString<"minLength">;
      readonly maxPrecision: PlaceholderString<"maxLength">;
      readonly blank: string;
      readonly valueNotEarlier: PlaceholderString<"formatted">;
      readonly valueNotLater: PlaceholderString<"formatted">;
      readonly valueMin: PlaceholderString<"formatted">;
      readonly valueMax: PlaceholderString<"formatted">;
      readonly valueDecimalPlaces: PlaceholderString<"maxPlaces">;
      readonly quantityMin: PlaceholderString<"formatted">;
      readonly quantityMax: PlaceholderString<"formatted">;
      readonly attachmentTypeMissing: PlaceholderString<"allowed">;
      readonly attachmentTypeNotAllowed: PlaceholderString<"allowed">;
      readonly attachmentSizeMax: PlaceholderString<"maxSize">;
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
