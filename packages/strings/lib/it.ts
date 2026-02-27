import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Ulteriori informazioni",
    legal: "Informazioni legali",
    flyover: "Più contesto",
  },
  value: {
    yes: "Sì",
    no: "No",
    unanswered: "Senza risposta",
  },
  dialog: {
    cancel: "Annulla",
    submit: "Applica",
  },
  form: {
    submit: "Invia",
    cancel: "Annulla",
  },
  errors: {
    unknownMessage: "Errore sconosciuto",
    issuesTitle: "Problemi",
    issueMessage: "Errore: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Scegli file",
    changeAction: "Cambia file",
    replaceAction: "Sostituisci file",
    clearAction: "Cancella",
    noFileChosen: "Nessun file selezionato",
  },
  group: {
    addSection: "Aggiungi un altro",
    removeSection: "Rimuovi",
    noNodesYet: "Nessun elemento al momento.",
  },
  gridTable: {
    headerActions: "Azioni",
  },
  inputs: {
    referencePlaceholder: "Risorsa/tipo/id",
    referenceDisplayPlaceholder: "Etichetta visualizzata",
    codingSystemPlaceholder: "Sistema",
    codingCodePlaceholder: "Codice",
    codingDisplayPlaceholder: "Visualizzazione",
    quantityValuePlaceholder: "Valore",
    quantityUnitPlaceholder: "Unità",
    attachmentSelected: "Allegato selezionato",
    attachmentLabel: "Allegato",
  },
  selection: {
    specifyOther: "Specifica altro",
    addAnother: "Aggiungi un altro",
    selectPlaceholder: "Seleziona un'opzione",
    removeSelection: "Rimuovi selezione",
    removeCustomValue: "Rimuovi valore personalizzato",
    searchPlaceholder: "Cerca",
    noOptions: "Nessuna opzione",
    loadingOptions: "Caricamento opzioni...",
    dividerOr: "o",
  },
  pagination: {
    navigation: "Paginazione",
    previous: "Precedente",
    next: "Successivo",
    pageLabel: "Pagina {page}",
    previousTargetPage: "Pagina precedente {page}",
    nextTargetPage: "Pagina successiva {page}",
  },
  language: {
    label: "Lingua",
    placeholder: "Seleziona lingua",
  },
  table: {
    empty: "Niente da visualizzare.",
    noChoiceQuestionsHorizontal:
      "Nessuna domanda a scelta disponibile per la tabella orizzontale.",
    noChoiceQuestions: "Nessuna domanda a scelta disponibile.",
    noAnswerOptionsHorizontal:
      "Nessuna opzione di risposta disponibile per il layout tabella orizzontale.",
    noAnswerOptions:
      "Nessuna opzione di risposta disponibile per il layout tabella.",
  },
  collapsible: {
    expand: "Espandi",
    collapse: "Comprimi",
  },
  tab: {
    empty: "Nessun contenuto nella scheda",
    scrollLeft: "Scorri le schede a sinistra",
    scrollRight: "Scorri le schede a destra",
  },
  signature: {
    sign: "Firma",
    signed: "Firmato",
    clearAction: "Cancella firma",
  },
  spinner: {
    decrease: "Riduci valore",
    increase: "Aumenta valore",
  },
  unsupported: {
    itemType: "Tipo non supportato: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "È richiesta almeno una risposta in questo gruppo.",
    },
    groupList: {
      minOccurs: "Sono richieste almeno {minOccurs} occorrenza(e).",
      maxOccurs: "Non sono consentite più di {maxOccurs} occorrenza(e).",
    },
    question: {
      minOccursSingle: "È richiesta almeno una risposta non vuota.",
      minOccursMultiple:
        "Sono richieste almeno {minOccurs} risposte non vuote.",
      maxOccurs: "Non sono consentite più di {maxOccurs} risposte.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "La risposta deve contenere almeno {minLength} caratteri.",
      maxLength: "La risposta supera la lunghezza massima di {maxLength}.",
      minPrecision:
        "La risposta deve contenere almeno {minLength} caratteri per rispettare la precisione richiesta.",
      maxPrecision: "La risposta non deve superare {maxLength} caratteri.",
      blank: "La risposta non deve essere vuota.",
      valueNotEarlier: "Il valore non deve essere precedente a {formatted}.",
      valueNotLater: "Il valore non deve essere successivo a {formatted}.",
      valueMin: "Il valore deve essere maggiore o uguale a {formatted}.",
      valueMax: "Il valore deve essere minore o uguale a {formatted}.",
      valueDecimalPlaces:
        "Il valore non deve superare {maxPlaces} cifra(e) decimale(i).",
      quantityMin: "La quantità deve essere maggiore o uguale a {formatted}.",
      quantityMax: "La quantità deve essere minore o uguale a {formatted}.",
      attachmentTypeMissing:
        "L'allegato deve dichiarare un tipo di contenuto dall'elenco consentito ({allowed}).",
      attachmentTypeNotAllowed:
        "L'allegato deve essere uno dei tipi di contenuto consentiti ({allowed}).",
      attachmentSizeMax: "L'allegato non deve superare {maxSize} byte.",
    },
  },
};

export default strings;
