import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Mas informacion",
    legal: "Informacion legal",
    flyover: "Mas contexto",
  },
  value: {
    yes: "Si",
    no: "No",
    undefined: "Sin respuesta",
  },
  dialog: {
    cancel: "Cancelar",
    add: "Aplicar",
  },
  errors: {
    unknown: "Error desconocido",
  },
  file: {
    sizeLabelKb: "{sizeKb} KB",
  },
  group: {
    addSection: "Agregar otro",
    removeSection: "Eliminar",
    noNodesYet: "Aun no hay elementos.",
  },
  gridTable: {
    headerActions: "Acciones",
  },
  inputs: {
    referencePlaceholder: "Recurso/tipo/id",
    referenceDisplayPlaceholder: "Etiqueta",
    codingSystemPlaceholder: "Sistema",
    codingCodePlaceholder: "Codigo",
    codingDisplayPlaceholder: "Descripcion",
    quantityValuePlaceholder: "Valor",
    quantityUnitPlaceholder: "Unidad",
    attachmentSelected: "Adjunto seleccionado",
  },
  selection: {
    specifyOther: "Especificar otro",
    addAnother: "Agregar otro",
    selectPlaceholder: "Seleccione una opcion",
    removeSelection: "Quitar seleccion",
    removeCustomValue: "Quitar valor personalizado",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "No hay preguntas de opcion para la tabla horizontal.",
    noChoiceQuestions: "No hay preguntas de opcion disponibles.",
    noAnswerOptionsHorizontal:
      "No hay opciones de respuesta para la tabla horizontal.",
    noAnswerOptions: "No hay opciones de respuesta para el diseno de tabla.",
  },
  collapsible: {
    expand: "Expandir",
    collapse: "Contraer",
  },
  tab: {
    empty: "Sin contenido en la pestana",
  },
  unsupported: {
    itemType: "Tipo no compatible:",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Se requiere al menos una respuesta en este grupo.",
    },
    groupList: {
      minOccurs: "Se requiere al menos {minOccurs} ocurrencia(s).",
      maxOccurs: "No se permiten mas de {maxOccurs} ocurrencia(s).",
    },
    question: {
      minOccursSingle: "Se requiere al menos una respuesta no vacia.",
      minOccursMultiple:
        "Se requieren al menos {minOccurs} respuestas no vacias.",
      maxOccurs: "No se permiten mas de {maxOccurs} respuestas.",
    },
    answer: {
      minLength: "La respuesta debe tener al menos {minLength} caracteres.",
      maxLength: "La respuesta supera la longitud maxima de {maxLength}.",
      minPrecision:
        "La respuesta debe tener al menos {minLength} caracteres para capturar la precision requerida.",
      maxPrecision: "La respuesta no debe superar {maxLength} caracteres.",
      blank: "La respuesta no debe estar vacia.",
      valueNotEarlier: "El valor no debe ser anterior a {formatted}.",
      valueNotLater: "El valor no debe ser posterior a {formatted}.",
      valueMin: "El valor debe ser mayor o igual que {formatted}.",
      valueMax: "El valor debe ser menor o igual que {formatted}.",
      valueDecimalPlaces: "El valor no debe exceder {maxPlaces} decimales.",
      quantityMin: "La cantidad debe ser mayor o igual que {formatted}.",
      quantityMax: "La cantidad debe ser menor o igual que {formatted}.",
      attachmentTypeRequired:
        "El adjunto debe declarar un tipo de contenido de la lista permitida ({allowed}).",
      attachmentTypeAllowed:
        "El adjunto debe ser uno de los tipos de contenido permitidos ({allowed}).",
      attachmentSizeMax: "El adjunto no debe exceder {maxSize} bytes.",
    },
  },
};

export default strings;
