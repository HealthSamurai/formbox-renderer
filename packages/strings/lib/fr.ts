import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Plus d'information",
    legal: "Informations legales",
    flyover: "Plus de contexte",
  },
  value: {
    yes: "Oui",
    no: "Non",
    undefined: "Sans reponse",
  },
  dialog: {
    cancel: "Annuler",
    add: "Appliquer",
  },
  errors: {
    unknown: "Erreur inconnue",
  },
  file: {
    sizeLabelKb: "{sizeKb} KB",
  },
  group: {
    addSection: "Ajouter un autre",
    removeSection: "Supprimer",
    noNodesYet: "Aucun element pour le moment.",
  },
  gridTable: {
    headerActions: "Actions",
  },
  inputs: {
    referencePlaceholder: "Ressource/type/id",
    referenceDisplayPlaceholder: "Libelle d'affichage",
    codingSystemPlaceholder: "Systeme",
    codingCodePlaceholder: "Code",
    codingDisplayPlaceholder: "Affichage",
    quantityValuePlaceholder: "Valeur",
    quantityUnitPlaceholder: "Unite",
    attachmentSelected: "Piece jointe selectionnee",
  },
  selection: {
    specifyOther: "Specifier un autre",
    addAnother: "Ajouter un autre",
    selectPlaceholder: "Selectionnez une option",
    removeSelection: "Supprimer la selection",
    removeCustomValue: "Supprimer la valeur personnalisee",
  },
  language: {
    label: "Langue",
    placeholder: "Selectionnez la langue",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Aucune question a choix disponible pour le tableau horizontal.",
    noChoiceQuestions: "Aucune question a choix disponible.",
    noAnswerOptionsHorizontal:
      "Aucune option de reponse disponible pour la mise en page de tableau horizontal.",
    noAnswerOptions:
      "Aucune option de reponse disponible pour la mise en page de tableau.",
  },
  collapsible: {
    expand: "Developper",
    collapse: "Reduire",
  },
  tab: {
    empty: "Aucun contenu d'onglet",
  },
  unsupported: {
    itemType: "Type non pris en charge :",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Au moins une reponse est requise dans ce groupe.",
    },
    groupList: {
      minOccurs: "Au moins {minOccurs} occurrence(s) requise(s).",
      maxOccurs: "Pas plus de {maxOccurs} occurrence(s) autorisee(s).",
    },
    question: {
      minOccursSingle: "Au moins une reponse non vide est requise.",
      minOccursMultiple:
        "Au moins {minOccurs} reponses non vides sont requises.",
      maxOccurs: "Pas plus de {maxOccurs} reponses autorisees.",
    },
    answer: {
      minLength: "La reponse doit comporter au moins {minLength} caracteres.",
      maxLength: "La reponse depasse la longueur maximale de {maxLength}.",
      minPrecision:
        "La reponse doit comporter au moins {minLength} caracteres pour respecter la precision requise.",
      maxPrecision: "La reponse ne doit pas depasser {maxLength} caracteres.",
      blank: "La reponse ne doit pas etre vide.",
      valueNotEarlier: "La valeur ne doit pas etre anterieure a {formatted}.",
      valueNotLater: "La valeur ne doit pas etre posterieure a {formatted}.",
      valueMin: "La valeur doit etre superieure ou egale a {formatted}.",
      valueMax: "La valeur doit etre inferieure ou egale a {formatted}.",
      valueDecimalPlaces:
        "La valeur ne doit pas depasser {maxPlaces} decimales.",
      quantityMin: "La quantite doit etre superieure ou egale a {formatted}.",
      quantityMax: "La quantite doit etre inferieure ou egale a {formatted}.",
      attachmentTypeRequired:
        "La piece jointe doit declarer un type de contenu issu de la liste autorisee ({allowed}).",
      attachmentTypeAllowed:
        "La piece jointe doit etre l'un des types de contenu autorises ({allowed}).",
      attachmentSizeMax:
        "La piece jointe ne doit pas depasser {maxSize} octets.",
    },
  },
};

export default strings;
