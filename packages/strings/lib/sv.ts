import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Mer information",
    legal: "Juridisk information",
    flyover: "Mer kontext",
  },
  value: {
    yes: "Ja",
    no: "Nej",
    unanswered: "Obesvarad",
  },
  dialog: {
    cancel: "Avbryt",
    submit: "Tillämpa",
  },
  errors: {
    unknown: "Okänt fel",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
  },
  group: {
    addSection: "Lägg till en till",
    removeSection: "Ta bort",
    noNodesYet: "Inga objekt än.",
  },
  gridTable: {
    headerActions: "Åtgärder",
  },
  inputs: {
    referencePlaceholder: "Resurs/typ/id",
    referenceDisplayPlaceholder: "Visningsetikett",
    codingSystemPlaceholder: "System",
    codingCodePlaceholder: "Kod",
    codingDisplayPlaceholder: "Visning",
    quantityValuePlaceholder: "Värde",
    quantityUnitPlaceholder: "Enhet",
    attachmentSelected: "Bilaga vald",
  },
  selection: {
    specifyOther: "Ange annat",
    addAnother: "Lägg till en till",
    selectPlaceholder: "Välj ett alternativ",
    removeSelection: "Ta bort val",
    removeCustomValue: "Ta bort anpassat värde",
  },
  language: {
    label: "Språk",
    placeholder: "Välj språk",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Inga valfrågor tillgängliga för horisontell tabell.",
    noChoiceQuestions: "Inga valfrågor tillgängliga.",
    noAnswerOptionsHorizontal:
      "Inga svarsalternativ tillgängliga för horisontell tabellayout.",
    noAnswerOptions: "Inga svarsalternativ tillgängliga för tabellayout.",
  },
  collapsible: {
    expand: "Expandera",
    collapse: "Kollapsa",
  },
  tab: {
    empty: "Inget innehåll i fliken",
  },
  unsupported: {
    itemType: "Typen stöds inte: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Minst ett svar krävs i denna grupp.",
    },
    groupList: {
      minOccurs: "Minst {minOccurs} förekomst(er) krävs.",
      maxOccurs: "Högst {maxOccurs} förekomst(er) tillåts.",
    },
    question: {
      minOccursSingle: "Minst ett icke-tomt svar krävs.",
      minOccursMultiple: "Minst {minOccurs} icke-tomma svar krävs.",
      maxOccurs: "Högst {maxOccurs} svar tillåts.",
    },
    answer: {
      minLength: "Svaret måste vara minst {minLength} tecken långt.",
      maxLength: "Svaret överstiger maximal längd på {maxLength}.",
      minPrecision:
        "Svaret måste vara minst {minLength} tecken för att uppnå krävd precision.",
      maxPrecision: "Svaret får inte överstiga {maxLength} tecken.",
      blank: "Svaret får inte vara tomt.",
      valueNotEarlier: "Värdet får inte vara tidigare än {formatted}.",
      valueNotLater: "Värdet får inte vara senare än {formatted}.",
      valueMin: "Värdet måste vara större än eller lika med {formatted}.",
      valueMax: "Värdet måste vara mindre än eller lika med {formatted}.",
      valueDecimalPlaces: "Värdet får inte överskrida {maxPlaces} decimaler.",
      quantityMin: "Mängden måste vara större än eller lika med {formatted}.",
      quantityMax: "Mängden måste vara mindre än eller lika med {formatted}.",
      attachmentTypeMissing:
        "Bilagan måste ange en innehållstyp från den tillåtna listan ({allowed}).",
      attachmentTypeNotAllowed:
        "Bilagan måste vara en av de tillåtna innehållstyperna ({allowed}).",
      attachmentSizeMax: "Bilagan får inte överstiga {maxSize} byte.",
    },
  },
};

export default strings;
