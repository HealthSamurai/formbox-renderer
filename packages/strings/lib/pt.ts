import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Mais informações",
    legal: "Informações legais",
    flyover: "Mais contexto",
  },
  value: {
    yes: "Sim",
    no: "Não",
    unanswered: "Sem resposta",
  },
  dialog: {
    cancel: "Cancelar",
    submit: "Aplicar",
  },
  errors: {
    unknown: "Erro desconhecido",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
  },
  group: {
    addSection: "Adicionar outro",
    removeSection: "Remover",
    noNodesYet: "Nenhum item ainda.",
  },
  gridTable: {
    headerActions: "Ações",
  },
  inputs: {
    referencePlaceholder: "Recurso/tipo/id",
    referenceDisplayPlaceholder: "Rótulo de exibição",
    codingSystemPlaceholder: "Sistema",
    codingCodePlaceholder: "Código",
    codingDisplayPlaceholder: "Exibição",
    quantityValuePlaceholder: "Valor",
    quantityUnitPlaceholder: "Unidade",
    attachmentSelected: "Anexo selecionado",
  },
  selection: {
    specifyOther: "Especificar outro",
    addAnother: "Adicionar outro",
    selectPlaceholder: "Selecione uma opção",
    removeSelection: "Remover seleção",
    removeCustomValue: "Remover valor personalizado",
  },
  language: {
    label: "Idioma",
    placeholder: "Selecione o idioma",
  },
  table: {
    noChoiceQuestionsHorizontal:
      "Nenhuma pergunta de escolha disponível para a tabela horizontal.",
    noChoiceQuestions: "Nenhuma pergunta de escolha disponível.",
    noAnswerOptionsHorizontal:
      "Nenhuma opção de resposta disponível para o layout de tabela horizontal.",
    noAnswerOptions:
      "Nenhuma opção de resposta disponível para o layout de tabela.",
  },
  collapsible: {
    expand: "Expandir",
    collapse: "Recolher",
  },
  tab: {
    empty: "Sem conteúdo na aba",
  },
  unsupported: {
    itemType: "Tipo não suportado: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Pelo menos uma resposta é obrigatória neste grupo.",
    },
    groupList: {
      minOccurs: "Pelo menos {minOccurs} ocorrência(s) é obrigatória.",
      maxOccurs: "Não são permitidas mais de {maxOccurs} ocorrência(s).",
    },
    question: {
      minOccursSingle: "Pelo menos uma resposta não vazia é obrigatória.",
      minOccursMultiple:
        "Pelo menos {minOccurs} respostas não vazias são obrigatórias.",
      maxOccurs: "Não são permitidas mais de {maxOccurs} respostas.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "A resposta deve ter pelo menos {minLength} caracteres.",
      maxLength: "A resposta excede o tamanho máximo de {maxLength}.",
      minPrecision:
        "A resposta deve ter pelo menos {minLength} caracteres para atender à precisão exigida.",
      maxPrecision: "A resposta não deve exceder {maxLength} caracteres.",
      blank: "A resposta não deve ficar em branco.",
      valueNotEarlier: "O valor não deve ser anterior a {formatted}.",
      valueNotLater: "O valor não deve ser posterior a {formatted}.",
      valueMin: "O valor deve ser maior ou igual a {formatted}.",
      valueMax: "O valor deve ser menor ou igual a {formatted}.",
      valueDecimalPlaces:
        "O valor não deve exceder {maxPlaces} casa(s) decimal(is).",
      quantityMin: "A quantidade deve ser maior ou igual a {formatted}.",
      quantityMax: "A quantidade deve ser menor ou igual a {formatted}.",
      attachmentTypeMissing:
        "O anexo deve declarar um tipo de conteúdo da lista permitida ({allowed}).",
      attachmentTypeNotAllowed:
        "O anexo deve ser um dos tipos de conteúdo permitidos ({allowed}).",
      attachmentSizeMax: "O anexo não deve exceder {maxSize} bytes.",
    },
  },
};

export default strings;
