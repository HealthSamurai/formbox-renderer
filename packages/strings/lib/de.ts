import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Weitere Informationen",
    legal: "Rechtliche Hinweise",
    flyover: "Mehr Kontext",
  },
  value: {
    yes: "Ja",
    no: "Nein",
    unanswered: "Unbeantwortet",
  },
  dialog: {
    cancel: "Abbrechen",
    submit: "Übernehmen",
  },
  form: {
    submit: "Absenden",
    cancel: "Abbrechen",
  },
  errors: {
    unknownMessage: "Unbekannter Fehler",
    issuesTitle: "Probleme",
    issueMessage: "Fehler: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Datei auswählen",
    changeAction: "Datei ändern",
    replaceAction: "Datei ersetzen",
    clearAction: "Löschen",
    noFileChosen: "Keine Datei ausgewählt",
  },
  group: {
    addSection: "Weiteren hinzufügen",
    removeSection: "Entfernen",
    noNodesYet: "Noch keine Elemente.",
  },
  gridTable: {
    headerActions: "Aktionen",
  },
  inputs: {
    referencePlaceholder: "Ressource/typ/id",
    referenceDisplayPlaceholder: "Anzeigetext",
    codingSystemPlaceholder: "System",
    codingCodePlaceholder: "Code",
    codingDisplayPlaceholder: "Anzeige",
    quantityValuePlaceholder: "Wert",
    quantityUnitPlaceholder: "Einheit",
    attachmentSelected: "Anhang ausgewählt",
    attachmentLabel: "Anhang",
  },
  selection: {
    specifyOther: "Anderes angeben",
    addAnother: "Weiteren hinzufügen",
    selectPlaceholder: "Option auswählen",
    removeSelection: "Auswahl entfernen",
    removeCustomValue: "Benutzerdefinierten Wert entfernen",
    searchPlaceholder: "Suchen",
    noOptions: "Keine Optionen",
    loadingOptions: "Optionen werden geladen...",
    dividerOr: "oder",
  },
  pagination: {
    navigation: "Seitennavigation",
    previous: "Zurück",
    next: "Weiter",
    pageLabel: "Seite {page}",
    previousTargetPage: "Vorherige Seite {page}",
    nextTargetPage: "Nächste Seite {page}",
  },
  language: {
    label: "Sprache",
    placeholder: "Sprache auswählen",
  },
  table: {
    empty: "Nichts anzuzeigen.",
    noChoiceQuestionsHorizontal:
      "Keine Auswahlfragen für die horizontale Tabelle verfügbar.",
    noChoiceQuestions: "Keine Auswahlfragen verfügbar.",
    noAnswerOptionsHorizontal:
      "Keine Antwortoptionen für das horizontale Tabellenlayout verfügbar.",
    noAnswerOptions: "Keine Antwortoptionen für das Tabellenlayout verfügbar.",
  },
  collapsible: {
    expand: "Erweitern",
    collapse: "Einklappen",
  },
  tab: {
    empty: "Kein Tab-Inhalt",
    scrollLeft: "Tabs nach links scrollen",
    scrollRight: "Tabs nach rechts scrollen",
  },
  signature: {
    sign: "Signieren",
    signed: "Signiert",
    clearAction: "Signatur löschen",
  },
  spinner: {
    decrease: "Wert verringern",
    increase: "Wert erhöhen",
  },
  unsupported: {
    itemType: "Nicht unterstützter Typ: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer:
        "In dieser Gruppe ist mindestens eine Antwort erforderlich.",
    },
    groupList: {
      minOccurs: "Mindestens {minOccurs} Vorkommen erforderlich.",
      maxOccurs: "Nicht mehr als {maxOccurs} Vorkommen erlaubt.",
    },
    question: {
      minOccursSingle: "Mindestens eine nicht-leere Antwort ist erforderlich.",
      minOccursMultiple:
        "Mindestens {minOccurs} nicht-leere Antworten sind erforderlich.",
      maxOccurs: "Nicht mehr als {maxOccurs} Antworten sind erlaubt.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "Die Antwort muss mindestens {minLength} Zeichen lang sein.",
      maxLength:
        "Die Antwort überschreitet die maximale Länge von {maxLength}.",
      minPrecision:
        "Die Antwort muss mindestens {minLength} Zeichen lang sein, um die erforderliche Präzision abzubilden.",
      maxPrecision: "Die Antwort darf {maxLength} Zeichen nicht überschreiten.",
      blank: "Die Antwort darf nicht leer sein.",
      valueNotEarlier: "Der Wert darf nicht früher als {formatted} sein.",
      valueNotLater: "Der Wert darf nicht später als {formatted} sein.",
      valueMin: "Der Wert muss größer oder gleich {formatted} sein.",
      valueMax: "Der Wert muss kleiner oder gleich {formatted} sein.",
      valueDecimalPlaces:
        "Der Wert darf nicht mehr als {maxPlaces} Dezimalstellen haben.",
      quantityMin: "Die Menge muss größer oder gleich {formatted} sein.",
      quantityMax: "Die Menge muss kleiner oder gleich {formatted} sein.",
      attachmentTypeMissing:
        "Der Anhang muss einen Inhaltstyp aus der erlaubten Liste ({allowed}) angeben.",
      attachmentTypeNotAllowed:
        "Der Anhang muss einer der erlaubten Inhaltstypen sein ({allowed}).",
      attachmentSizeMax: "Der Anhang darf {maxSize} Byte nicht überschreiten.",
    },
  },
};

export default strings;
