import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Más información",
    legal: "Información legal",
    flyover: "Más contexto",
  },
  value: {
    yes: "Sí",
    no: "No",
    unanswered: "Sin respuesta",
  },
  dialog: {
    cancel: "Cancelar",
    submit: "Aplicar",
  },
  form: {
    submit: "Enviar",
    cancel: "Cancelar",
  },
  errors: {
    unknownMessage: "Error desconocido",
    issuesTitle: "Problemas",
    issueMessage: "Error: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Elegir archivo",
    changeAction: "Cambiar archivo",
    replaceAction: "Reemplazar archivo",
    clearAction: "Borrar",
    noFileChosen: "Ningún archivo seleccionado",
  },
  group: {
    addSection: "Agregar otro",
    removeSection: "Eliminar",
    noNodesYet: "Aún no hay elementos.",
  },
  gridTable: {
    headerActions: "Acciones",
  },
  inputs: {
    referencePlaceholder: "Recurso/tipo/id",
    referenceDisplayPlaceholder: "Etiqueta",
    codingSystemPlaceholder: "Sistema",
    codingCodePlaceholder: "Código",
    codingDisplayPlaceholder: "Descripción",
    quantityValuePlaceholder: "Valor",
    quantityUnitPlaceholder: "Unidad",
    attachmentSelected: "Adjunto seleccionado",
    attachmentLabel: "Adjunto",
  },
  selection: {
    specifyOther: "Especificar otro",
    addAnother: "Agregar otro",
    selectPlaceholder: "Seleccione una opción",
    removeSelection: "Quitar selección",
    removeCustomValue: "Quitar valor personalizado",
    searchPlaceholder: "Buscar",
    noOptions: "Sin opciones",
    loadingOptions: "Cargando opciones...",
    dividerOr: "o",
  },
  pagination: {
    navigation: "Paginación",
    previous: "Anterior",
    next: "Siguiente",
    pageLabel: "Página {page}",
    previousTargetPage: "Página anterior {page}",
    nextTargetPage: "Página siguiente {page}",
  },
  language: {
    label: "Idioma",
    placeholder: "Seleccione idioma",
  },
  table: {
    empty: "Nada para mostrar.",
    noChoiceQuestionsHorizontal:
      "No hay preguntas de opción para la tabla horizontal.",
    noChoiceQuestions: "No hay preguntas de opción disponibles.",
    noAnswerOptionsHorizontal:
      "No hay opciones de respuesta para la tabla horizontal.",
    noAnswerOptions: "No hay opciones de respuesta para el diseño de tabla.",
  },
  collapsible: {
    expand: "Expandir",
    collapse: "Contraer",
  },
  tab: {
    empty: "Sin contenido en la pestaña",
    scrollLeft: "Desplazar pestañas a la izquierda",
    scrollRight: "Desplazar pestañas a la derecha",
  },
  signature: {
    sign: "Firmar",
    signed: "Firmado",
    clearAction: "Borrar firma",
  },
  spinner: {
    decrease: "Disminuir valor",
    increase: "Aumentar valor",
  },
  unsupported: {
    itemType: "Tipo no compatible: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Se requiere al menos una respuesta en este grupo.",
    },
    groupList: {
      minOccurs: "Se requiere al menos {minOccurs} ocurrencia(s).",
      maxOccurs: "No se permiten más de {maxOccurs} ocurrencia(s).",
    },
    question: {
      minOccursSingle: "Se requiere al menos una respuesta no vacía.",
      minOccursMultiple:
        "Se requieren al menos {minOccurs} respuestas no vacías.",
      maxOccurs: "No se permiten más de {maxOccurs} respuestas.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "La respuesta debe tener al menos {minLength} caracteres.",
      maxLength: "La respuesta supera la longitud máxima de {maxLength}.",
      minPrecision:
        "La respuesta debe tener al menos {minLength} caracteres para capturar la precisión requerida.",
      maxPrecision: "La respuesta no debe superar {maxLength} caracteres.",
      blank: "La respuesta no debe estar vacía.",
      valueNotEarlier: "El valor no debe ser anterior a {formatted}.",
      valueNotLater: "El valor no debe ser posterior a {formatted}.",
      valueMin: "El valor debe ser mayor o igual que {formatted}.",
      valueMax: "El valor debe ser menor o igual que {formatted}.",
      valueDecimalPlaces: "El valor no debe exceder {maxPlaces} decimales.",
      quantityMin: "La cantidad debe ser mayor o igual que {formatted}.",
      quantityMax: "La cantidad debe ser menor o igual que {formatted}.",
      attachmentTypeMissing:
        "El adjunto debe declarar un tipo de contenido de la lista permitida ({allowed}).",
      attachmentTypeNotAllowed:
        "El adjunto debe ser uno de los tipos de contenido permitidos ({allowed}).",
      attachmentSizeMax: "El adjunto no debe exceder {maxSize} bytes.",
    },
  },
};

export default strings;
