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
    undefined: "Unbeantwortet",
  },
  dialog: {
    cancel: "Abbrechen",
    add: "Uebernehmen",
  },
  errors: {
    unknown: "Unbekannter Fehler",
  },
  file: {
    sizeLabelKb: "{sizeKb} KB",
  },
  group: {
    addSection: "Weiteren hinzufuegen",
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
    attachmentSelected: "Anhang ausgewaehlt",
  },
  selection: {
    specifyOther: "Anderes angeben",
    addAnother: "Weiteren hinzufuegen",
    selectPlaceholder: "Option auswaehlen",
    removeSelection: "Auswahl entfernen",
    removeCustomValue: "Benutzerdefinierten Wert entfernen",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Keine Auswahlfragen fuer die horizontale Tabelle verfuegbar.",
    noChoiceQuestions: "Keine Auswahlfragen verfuegbar.",
    noAnswerOptionsHorizontal:
      "Keine Antwortoptionen fuer das horizontale Tabellenlayout verfuegbar.",
    noAnswerOptions:
      "Keine Antwortoptionen fuer das Tabellenlayout verfuegbar.",
  },
  collapsible: {
    expand: "Erweitern",
    collapse: "Einklappen",
  },
  tab: {
    empty: "Kein Tab-Inhalt",
  },
  unsupported: {
    itemType: "Nicht unterstuetzter Typ:",
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
    answer: {
      minLength: "Die Antwort muss mindestens {minLength} Zeichen lang sein.",
      maxLength:
        "Die Antwort ueberschreitet die maximale Laenge von {maxLength}.",
      minPrecision:
        "Die Antwort muss mindestens {minLength} Zeichen lang sein, um die erforderliche Praezision abzubilden.",
      maxPrecision:
        "Die Antwort darf {maxLength} Zeichen nicht ueberschreiten.",
      blank: "Die Antwort darf nicht leer sein.",
      valueNotEarlier: "Der Wert darf nicht frueher als {formatted} sein.",
      valueNotLater: "Der Wert darf nicht spaeter als {formatted} sein.",
      valueMin: "Der Wert muss groesser oder gleich {formatted} sein.",
      valueMax: "Der Wert muss kleiner oder gleich {formatted} sein.",
      valueDecimalPlaces:
        "Der Wert darf nicht mehr als {maxPlaces} Dezimalstellen haben.",
      quantityMin: "Die Menge muss groesser oder gleich {formatted} sein.",
      quantityMax: "Die Menge muss kleiner oder gleich {formatted} sein.",
      attachmentTypeRequired:
        "Der Anhang muss einen Inhaltstyp aus der erlaubten Liste ({allowed}) angeben.",
      attachmentTypeAllowed:
        "Der Anhang muss einer der erlaubten Inhaltstypen sein ({allowed}).",
      attachmentSizeMax: "Der Anhang darf {maxSize} Byte nicht ueberschreiten.",
    },
  },
};

export default strings;
