import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Meer informatie",
    legal: "Juridische informatie",
    flyover: "Meer context",
  },
  value: {
    yes: "Ja",
    no: "Nee",
    unanswered: "Onbeantwoord",
  },
  dialog: {
    cancel: "Annuleren",
    submit: "Toepassen",
  },
  form: {
    submit: "Verzenden",
    cancel: "Annuleren",
  },
  errors: {
    unknownMessage: "Onbekende fout",
    issuesTitle: "Problemen",
    issueMessage: "Fout: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Bestand kiezen",
    changeAction: "Bestand wijzigen",
    replaceAction: "Bestand vervangen",
    clearAction: "Wissen",
    noFileChosen: "Geen bestand gekozen",
  },
  group: {
    addSection: "Nog een toevoegen",
    removeSection: "Verwijderen",
    noNodesYet: "Nog geen elementen.",
  },
  gridTable: {
    headerActions: "Acties",
  },
  inputs: {
    referencePlaceholder: "Resource/type/id",
    referenceDisplayPlaceholder: "Weergavelabel",
    codingSystemPlaceholder: "Systeem",
    codingCodePlaceholder: "Code",
    codingDisplayPlaceholder: "Weergave",
    quantityValuePlaceholder: "Waarde",
    quantityUnitPlaceholder: "Eenheid",
    attachmentSelected: "Bijlage geselecteerd",
    attachmentLabel: "Bijlage",
  },
  selection: {
    specifyOther: "Anders specificeren",
    addAnother: "Nog een toevoegen",
    selectPlaceholder: "Selecteer een optie",
    removeSelection: "Selectie verwijderen",
    removeCustomValue: "Aangepaste waarde verwijderen",
    searchPlaceholder: "Zoeken",
    noOptions: "Geen opties",
    loadingOptions: "Opties laden...",
    dividerOr: "of",
  },
  pagination: {
    navigation: "Paginering",
    previous: "Vorige",
    next: "Volgende",
    pageLabel: "Pagina {page}",
    previousTargetPage: "Vorige pagina {page}",
    nextTargetPage: "Volgende pagina {page}",
  },
  language: {
    label: "Taal",
    placeholder: "Selecteer taal",
  },
  table: {
    empty: "Niets weer te geven.",
    noChoiceQuestionsHorizontal:
      "Geen keuzevragen beschikbaar voor de horizontale tabel.",
    noChoiceQuestions: "Geen keuzevragen beschikbaar.",
    noAnswerOptionsHorizontal:
      "Geen antwoordopties beschikbaar voor de horizontale tabelindeling.",
    noAnswerOptions: "Geen antwoordopties beschikbaar voor de tabelindeling.",
  },
  collapsible: {
    expand: "Uitvouwen",
    collapse: "Inklappen",
  },
  tab: {
    empty: "Geen tabinhoud",
    scrollLeft: "Tabbladen naar links scrollen",
    scrollRight: "Tabbladen naar rechts scrollen",
  },
  signature: {
    sign: "Ondertekenen",
    signed: "Ondertekend",
    clearAction: "Handtekening wissen",
  },
  spinner: {
    decrease: "Waarde verlagen",
    increase: "Waarde verhogen",
  },
  unsupported: {
    itemType: "Niet ondersteund type: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Minimaal een antwoord is vereist in deze groep.",
    },
    groupList: {
      minOccurs: "Minimaal {minOccurs} voorkomen(s) vereist.",
      maxOccurs: "Niet meer dan {maxOccurs} voorkomen(s) toegestaan.",
    },
    question: {
      minOccursSingle: "Minimaal een niet-leeg antwoord is vereist.",
      minOccursMultiple:
        "Minimaal {minOccurs} niet-lege antwoorden zijn vereist.",
      maxOccurs: "Niet meer dan {maxOccurs} antwoorden toegestaan.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "Antwoord moet minimaal {minLength} tekens bevatten.",
      maxLength: "Antwoord overschrijdt de maximale lengte van {maxLength}.",
      minPrecision:
        "Antwoord moet minimaal {minLength} tekens bevatten om de vereiste precisie vast te leggen.",
      maxPrecision: "Antwoord mag niet meer dan {maxLength} tekens bevatten.",
      blank: "Antwoord mag niet leeg zijn.",
      valueNotEarlier: "Waarde mag niet eerder zijn dan {formatted}.",
      valueNotLater: "Waarde mag niet later zijn dan {formatted}.",
      valueMin: "Waarde moet groter dan of gelijk aan {formatted} zijn.",
      valueMax: "Waarde moet kleiner dan of gelijk aan {formatted} zijn.",
      valueDecimalPlaces:
        "Waarde mag niet meer dan {maxPlaces} decimaal/decimalen bevatten.",
      quantityMin:
        "Hoeveelheid moet groter dan of gelijk aan {formatted} zijn.",
      quantityMax:
        "Hoeveelheid moet kleiner dan of gelijk aan {formatted} zijn.",
      attachmentTypeMissing:
        "Bijlage moet een contenttype uit de toegestane lijst ({allowed}) opgeven.",
      attachmentTypeNotAllowed:
        "Bijlage moet een van de toegestane contenttypen zijn ({allowed}).",
      attachmentSizeMax: "Bijlage mag niet groter zijn dan {maxSize} bytes.",
    },
  },
};

export default strings;
