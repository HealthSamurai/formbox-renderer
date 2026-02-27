import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Plus d'information",
    legal: "Informations légales",
    flyover: "Plus de contexte",
  },
  value: {
    yes: "Oui",
    no: "Non",
    unanswered: "Sans réponse",
  },
  dialog: {
    cancel: "Annuler",
    submit: "Appliquer",
  },
  errors: {
    unknown: "Erreur inconnue",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
  },
  group: {
    addSection: "Ajouter un autre",
    removeSection: "Supprimer",
    noNodesYet: "Aucun élément pour le moment.",
  },
  gridTable: {
    headerActions: "Actions",
  },
  inputs: {
    referencePlaceholder: "Ressource/type/id",
    referenceDisplayPlaceholder: "Libellé d'affichage",
    codingSystemPlaceholder: "Système",
    codingCodePlaceholder: "Code",
    codingDisplayPlaceholder: "Affichage",
    quantityValuePlaceholder: "Valeur",
    quantityUnitPlaceholder: "Unité",
    attachmentSelected: "Pièce jointe sélectionnée",
  },
  selection: {
    specifyOther: "Spécifier un autre",
    addAnother: "Ajouter un autre",
    selectPlaceholder: "Sélectionnez une option",
    removeSelection: "Supprimer la sélection",
    removeCustomValue: "Supprimer la valeur personnalisée",
  },
  language: {
    label: "Langue",
    placeholder: "Sélectionnez la langue",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Aucune question à choix disponible pour le tableau horizontal.",
    noChoiceQuestions: "Aucune question à choix disponible.",
    noAnswerOptionsHorizontal:
      "Aucune option de réponse disponible pour la mise en page de tableau horizontal.",
    noAnswerOptions:
      "Aucune option de réponse disponible pour la mise en page de tableau.",
  },
  collapsible: {
    expand: "Développer",
    collapse: "Réduire",
  },
  tab: {
    empty: "Aucun contenu d'onglet",
  },
  unsupported: {
    itemType: "Type non pris en charge : {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Au moins une réponse est requise dans ce groupe.",
    },
    groupList: {
      minOccurs: "Au moins {minOccurs} occurrence(s) requise(s).",
      maxOccurs: "Pas plus de {maxOccurs} occurrence(s) autorisée(s).",
    },
    question: {
      minOccursSingle: "Au moins une réponse non vide est requise.",
      minOccursMultiple:
        "Au moins {minOccurs} réponses non vides sont requises.",
      maxOccurs: "Pas plus de {maxOccurs} réponses autorisées.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "La réponse doit comporter au moins {minLength} caractères.",
      maxLength: "La réponse dépasse la longueur maximale de {maxLength}.",
      minPrecision:
        "La réponse doit comporter au moins {minLength} caractères pour respecter la précision requise.",
      maxPrecision: "La réponse ne doit pas dépasser {maxLength} caractères.",
      blank: "La réponse ne doit pas être vide.",
      valueNotEarlier: "La valeur ne doit pas être antérieure à {formatted}.",
      valueNotLater: "La valeur ne doit pas être postérieure à {formatted}.",
      valueMin: "La valeur doit être supérieure ou égale à {formatted}.",
      valueMax: "La valeur doit être inférieure ou égale à {formatted}.",
      valueDecimalPlaces:
        "La valeur ne doit pas dépasser {maxPlaces} décimales.",
      quantityMin: "La quantité doit être supérieure ou égale à {formatted}.",
      quantityMax: "La quantité doit être inférieure ou égale à {formatted}.",
      attachmentTypeMissing:
        "La pièce jointe doit déclarer un type de contenu issu de la liste autorisée ({allowed}).",
      attachmentTypeNotAllowed:
        "La pièce jointe doit être l'un des types de contenu autorisés ({allowed}).",
      attachmentSizeMax:
        "La pièce jointe ne doit pas dépasser {maxSize} octets.",
    },
  },
};

export default strings;
