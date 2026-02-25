import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Подробнее",
    legal: "Юридическая информация",
    flyover: "Больше контекста",
  },
  value: {
    yes: "Да",
    no: "Нет",
    unanswered: "Без ответа",
  },
  dialog: {
    cancel: "Отмена",
    submit: "Применить",
  },
  errors: {
    unknown: "Неизвестная ошибка",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
  },
  group: {
    addSection: "Добавить ещё",
    removeSection: "Удалить",
    noNodesYet: "Пока нет элементов.",
  },
  gridTable: {
    headerActions: "Действия",
  },
  inputs: {
    referencePlaceholder: "Ресурс/тип/id",
    referenceDisplayPlaceholder: "Отображаемая метка",
    codingSystemPlaceholder: "Система",
    codingCodePlaceholder: "Код",
    codingDisplayPlaceholder: "Отображение",
    quantityValuePlaceholder: "Значение",
    quantityUnitPlaceholder: "Единица",
    attachmentSelected: "Вложение выбрано",
  },
  selection: {
    specifyOther: "Указать другое",
    addAnother: "Добавить ещё",
    selectPlaceholder: "Выберите вариант",
    removeSelection: "Удалить выбор",
    removeCustomValue: "Удалить пользовательское значение",
  },
  language: {
    label: "Язык",
    placeholder: "Выберите язык",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Нет вопросов с выбором для горизонтальной таблицы.",
    noChoiceQuestions: "Нет доступных вопросов с выбором.",
    noAnswerOptionsHorizontal:
      "Нет вариантов ответа для горизонтальной табличной разметки.",
    noAnswerOptions: "Нет вариантов ответа для табличной разметки.",
  },
  collapsible: {
    expand: "Развернуть",
    collapse: "Свернуть",
  },
  tab: {
    empty: "Нет содержимого вкладки",
  },
  unsupported: {
    itemType: "Неподдерживаемый тип: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "В этой группе требуется хотя бы один ответ.",
    },
    groupList: {
      minOccurs: "Требуется минимум {minOccurs} повторений.",
      maxOccurs: "Допускается не более {maxOccurs} повторений.",
    },
    question: {
      minOccursSingle: "Требуется хотя бы один непустой ответ.",
      minOccursMultiple: "Требуется минимум {minOccurs} непустых ответов.",
      maxOccurs: "Допускается не более {maxOccurs} ответов.",
    },
    answer: {
      minLength: "Ответ должен содержать минимум {minLength} символов.",
      maxLength: "Ответ превышает максимальную длину {maxLength}.",
      minPrecision:
        "Ответ должен содержать минимум {minLength} символов для требуемой точности.",
      maxPrecision: "Ответ не должен превышать {maxLength} символов.",
      blank: "Ответ не должен быть пустым.",
      valueNotEarlier: "Значение не должно быть раньше {formatted}.",
      valueNotLater: "Значение не должно быть позже {formatted}.",
      valueMin: "Значение должно быть больше или равно {formatted}.",
      valueMax: "Значение должно быть меньше или равно {formatted}.",
      valueDecimalPlaces:
        "Значение не должно превышать {maxPlaces} десятичных знаков.",
      quantityMin: "Количество должно быть больше или равно {formatted}.",
      quantityMax: "Количество должно быть меньше или равно {formatted}.",
      attachmentTypeMissing:
        "Вложение должно указывать тип контента из разрешённого списка ({allowed}).",
      attachmentTypeNotAllowed:
        "Вложение должно быть одним из разрешённых типов контента ({allowed}).",
      attachmentSizeMax: "Вложение не должно превышать {maxSize} байт.",
    },
  },
};

export default strings;
