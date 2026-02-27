import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Więcej informacji",
    legal: "Informacje prawne",
    flyover: "Więcej kontekstu",
  },
  value: {
    yes: "Tak",
    no: "Nie",
    unanswered: "Bez odpowiedzi",
  },
  dialog: {
    cancel: "Anuluj",
    submit: "Zastosuj",
  },
  form: {
    submit: "Prześlij",
    cancel: "Anuluj",
  },
  errors: {
    unknownMessage: "Nieznany błąd",
    issuesTitle: "Problemy",
    issueMessage: "Błąd: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Wybierz plik",
    changeAction: "Zmień plik",
    replaceAction: "Zastąp plik",
    clearAction: "Wyczyść",
    noFileChosen: "Nie wybrano pliku",
  },
  group: {
    addSection: "Dodaj kolejny",
    removeSection: "Usuń",
    noNodesYet: "Brak elementów.",
  },
  gridTable: {
    headerActions: "Akcje",
  },
  inputs: {
    referencePlaceholder: "Zasób/typ/id",
    referenceDisplayPlaceholder: "Etykieta wyświetlana",
    codingSystemPlaceholder: "System",
    codingCodePlaceholder: "Kod",
    codingDisplayPlaceholder: "Wyświetlanie",
    quantityValuePlaceholder: "Wartość",
    quantityUnitPlaceholder: "Jednostka",
    attachmentSelected: "Załącznik wybrany",
    attachmentLabel: "Załącznik",
  },
  selection: {
    specifyOther: "Określ inne",
    addAnother: "Dodaj kolejny",
    selectPlaceholder: "Wybierz opcję",
    removeSelection: "Usuń wybór",
    removeCustomValue: "Usuń wartość niestandardową",
    searchPlaceholder: "Szukaj",
    noOptions: "Brak opcji",
    loadingOptions: "Ładowanie opcji...",
    dividerOr: "lub",
  },
  pagination: {
    navigation: "Paginacja",
    previous: "Poprzednia",
    next: "Następna",
    pageLabel: "Strona {page}",
    previousTargetPage: "Poprzednia strona {page}",
    nextTargetPage: "Następna strona {page}",
  },
  language: {
    label: "Język",
    placeholder: "Wybierz język",
  },
  table: {
    empty: "Brak danych do wyświetlenia.",
    noChoiceQuestionsHorizontal:
      "Brak pytań wyboru dostępnych dla tabeli poziomej.",
    noChoiceQuestions: "Brak pytań wyboru dostępnych.",
    noAnswerOptionsHorizontal:
      "Brak opcji odpowiedzi dostępnych dla poziomego układu tabeli.",
    noAnswerOptions: "Brak opcji odpowiedzi dostępnych dla układu tabeli.",
  },
  collapsible: {
    expand: "Rozwiń",
    collapse: "Zwiń",
  },
  tab: {
    empty: "Brak zawartości zakładki",
    scrollLeft: "Przewiń karty w lewo",
    scrollRight: "Przewiń karty w prawo",
  },
  signature: {
    sign: "Podpisz",
    signed: "Podpisano",
    clearAction: "Wyczyść podpis",
  },
  spinner: {
    decrease: "Zmniejsz wartość",
    increase: "Zwiększ wartość",
  },
  unsupported: {
    itemType: "Nieobsługiwany typ: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer:
        "W tej grupie wymagana jest co najmniej jedna odpowiedź.",
    },
    groupList: {
      minOccurs: "Wymagane co najmniej {minOccurs} wystąpienie(a).",
      maxOccurs: "Nie dozwolone więcej niż {maxOccurs} wystąpienie(a).",
    },
    question: {
      minOccursSingle: "Wymagana jest co najmniej jedna niepusta odpowiedź.",
      minOccursMultiple:
        "Wymagane są co najmniej {minOccurs} niepuste odpowiedzi.",
      maxOccurs: "Nie dozwolone więcej niż {maxOccurs} odpowiedzi.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "Odpowiedź musi mieć co najmniej {minLength} znaków.",
      maxLength: "Odpowiedź przekracza maksymalną długość {maxLength}.",
      minPrecision:
        "Odpowiedź musi mieć co najmniej {minLength} znaków, aby zachować wymaganą precyzję.",
      maxPrecision: "Odpowiedź nie może przekraczać {maxLength} znaków.",
      blank: "Odpowiedź nie może być pusta.",
      valueNotEarlier: "Wartość nie może być wcześniejsza niż {formatted}.",
      valueNotLater: "Wartość nie może być późniejsza niż {formatted}.",
      valueMin: "Wartość musi być większa lub równa {formatted}.",
      valueMax: "Wartość musi być mniejsza lub równa {formatted}.",
      valueDecimalPlaces:
        "Wartość nie może przekraczać {maxPlaces} miejsca/miejsc po przecinku.",
      quantityMin: "Ilość musi być większa lub równa {formatted}.",
      quantityMax: "Ilość musi być mniejsza lub równa {formatted}.",
      attachmentTypeMissing:
        "Załącznik musi deklarować typ treści z dozwolonej listy ({allowed}).",
      attachmentTypeNotAllowed:
        "Załącznik musi być jednym z dozwolonych typów treści ({allowed}).",
      attachmentSizeMax: "Załącznik nie może przekraczać {maxSize} bajtów.",
    },
  },
};

export default strings;
