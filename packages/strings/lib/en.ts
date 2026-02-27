import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "More information",
    legal: "Legal information",
    flyover: "More context",
  },
  value: {
    yes: "Yes",
    no: "No",
    unanswered: "Unanswered",
  },
  dialog: {
    cancel: "Cancel",
    submit: "Apply",
  },
  form: {
    submit: "Submit",
    cancel: "Cancel",
  },
  errors: {
    unknownMessage: "Unknown error",
    issuesTitle: "Issues",
    issueMessage: "Error: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Choose file",
    changeAction: "Change file",
    replaceAction: "Replace file",
    clearAction: "Clear",
    noFileChosen: "No file chosen",
  },
  group: {
    addSection: "Add another",
    removeSection: "Remove",
    noNodesYet: "No nodes yet.",
  },
  gridTable: {
    headerActions: "Actions",
  },
  inputs: {
    referencePlaceholder: "Resource/type/id",
    referenceDisplayPlaceholder: "Display label",
    codingSystemPlaceholder: "System",
    codingCodePlaceholder: "Code",
    codingDisplayPlaceholder: "Display",
    quantityValuePlaceholder: "Value",
    quantityUnitPlaceholder: "Unit",
    attachmentSelected: "Attachment selected",
    attachmentLabel: "Attachment",
  },
  selection: {
    specifyOther: "Specify other",
    addAnother: "Add another",
    selectPlaceholder: "Select an option",
    removeSelection: "Remove selection",
    removeCustomValue: "Remove custom value",
    searchPlaceholder: "Search",
    noOptions: "No options",
    loadingOptions: "Loading options...",
    dividerOr: "or",
  },
  pagination: {
    navigation: "Pagination",
    previous: "Previous",
    next: "Next",
    pageLabel: "Page {page}",
    previousTargetPage: "Previous page {page}",
    nextTargetPage: "Next page {page}",
  },
  language: {
    label: "Language",
    placeholder: "Select language",
  },
  table: {
    empty: "Nothing to display.",
    noChoiceQuestionsHorizontal:
      "No choice questions available for horizontal table.",
    noChoiceQuestions: "No choice questions available.",
    noAnswerOptionsHorizontal:
      "No answer options available for horizontal table layout.",
    noAnswerOptions: "No answer options available for table layout.",
  },
  collapsible: {
    expand: "Expand",
    collapse: "Collapse",
  },
  tab: {
    empty: "No tab content",
    scrollLeft: "Scroll tabs left",
    scrollRight: "Scroll tabs right",
  },
  signature: {
    sign: "Sign",
    signed: "Signed",
    clearAction: "Clear signature",
  },
  spinner: {
    decrease: "Decrease value",
    increase: "Increase value",
  },
  unsupported: {
    itemType: "Unsupported type: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "At least one answer is required in this group.",
    },
    groupList: {
      minOccurs: "At least {minOccurs} occurrence(s) required.",
      maxOccurs: "No more than {maxOccurs} occurrence(s) permitted.",
    },
    question: {
      minOccursSingle: "At least one  non-empty answer is required.",
      minOccursMultiple: "At least {minOccurs} non-empty answers are required.",
      maxOccurs: "No more than {maxOccurs} answers are permitted.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "Response must be at least {minLength} characters long.",
      maxLength: "Response exceeds the maximum length of {maxLength}.",
      minPrecision:
        "Response must be at least {minLength} characters to capture the required precision.",
      maxPrecision: "Response must not exceed {maxLength} characters.",
      blank: "Response must not be blank.",
      valueNotEarlier: "Value must not be earlier than {formatted}.",
      valueNotLater: "Value must not be later than {formatted}.",
      valueMin: "Value must be greater than or equal to {formatted}.",
      valueMax: "Value must be less than or equal to {formatted}.",
      valueDecimalPlaces: "Value must not exceed {maxPlaces} decimal place(s).",
      quantityMin: "Quantity must be greater than or equal to {formatted}.",
      quantityMax: "Quantity must be less than or equal to {formatted}.",
      attachmentTypeMissing:
        "Attachment must declare a content type from the allowed list ({allowed}).",
      attachmentTypeNotAllowed:
        "Attachment must be one of the allowed content types ({allowed}).",
      attachmentSizeMax: "Attachment must not exceed {maxSize} bytes.",
    },
  },
};

export default strings;
