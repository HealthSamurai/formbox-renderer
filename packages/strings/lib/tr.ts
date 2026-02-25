import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Daha fazla bilgi",
    legal: "Yasal bilgiler",
    flyover: "Daha fazla bağlam",
  },
  value: {
    yes: "Evet",
    no: "Hayır",
    unanswered: "Yanıtsız",
  },
  dialog: {
    cancel: "İptal",
    submit: "Uygula",
  },
  errors: {
    unknown: "Bilinmeyen hata",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
  },
  group: {
    addSection: "Bir tane daha ekle",
    removeSection: "Kaldır",
    noNodesYet: "Henüz öğe yok.",
  },
  gridTable: {
    headerActions: "Eylemler",
  },
  inputs: {
    referencePlaceholder: "Kaynak/tür/id",
    referenceDisplayPlaceholder: "Görünen etiket",
    codingSystemPlaceholder: "Sistem",
    codingCodePlaceholder: "Kod",
    codingDisplayPlaceholder: "Görünüm",
    quantityValuePlaceholder: "Değer",
    quantityUnitPlaceholder: "Birim",
    attachmentSelected: "Ek seçildi",
  },
  selection: {
    specifyOther: "Diğerini belirt",
    addAnother: "Bir tane daha ekle",
    selectPlaceholder: "Bir seçenek seçin",
    removeSelection: "Seçimi kaldır",
    removeCustomValue: "Özel değeri kaldır",
  },
  language: {
    label: "Dil",
    placeholder: "Dil seçin",
  },
  table: {
    noChoiceQuestionsHorizontal: "Yatay tablo için seçimli soru bulunamadı.",
    noChoiceQuestions: "Seçimli soru bulunamadı.",
    noAnswerOptionsHorizontal:
      "Yatay tablo düzeni için yanıt seçeneği bulunamadı.",
    noAnswerOptions: "Tablo düzeni için yanıt seçeneği bulunamadı.",
  },
  collapsible: {
    expand: "Genişlet",
    collapse: "Daralt",
  },
  tab: {
    empty: "Sekme içeriği yok",
  },
  unsupported: {
    itemType: "Desteklenmeyen tür: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Bu grupta en az bir yanıt gereklidir.",
    },
    groupList: {
      minOccurs: "En az {minOccurs} tekrar gereklidir.",
      maxOccurs: "En fazla {maxOccurs} tekrara izin verilir.",
    },
    question: {
      minOccursSingle: "En az bir boş olmayan yanıt gereklidir.",
      minOccursMultiple: "En az {minOccurs} boş olmayan yanıt gereklidir.",
      maxOccurs: "En fazla {maxOccurs} yanıta izin verilir.",
    },
    answer: {
      minLength: "Yanıt en az {minLength} karakter olmalıdır.",
      maxLength: "Yanıt {maxLength} azami uzunluğunu aşıyor.",
      minPrecision:
        "Yanıt, gerekli hassasiyeti karşılamak için en az {minLength} karakter olmalıdır.",
      maxPrecision: "Yanıt {maxLength} karakteri aşmamalıdır.",
      blank: "Yanıt boş olmamalıdır.",
      valueNotEarlier: "Değer {formatted} tarihinden daha erken olmamalıdır.",
      valueNotLater: "Değer {formatted} tarihinden daha geç olmamalıdır.",
      valueMin: "Değer {formatted} değerinden büyük veya eşit olmalıdır.",
      valueMax: "Değer {formatted} değerinden küçük veya eşit olmalıdır.",
      valueDecimalPlaces: "Değer {maxPlaces} ondalık basamağı aşmamalıdır.",
      quantityMin: "Miktar {formatted} değerinden büyük veya eşit olmalıdır.",
      quantityMax: "Miktar {formatted} değerinden küçük veya eşit olmalıdır.",
      attachmentTypeMissing:
        "Ek, izin verilen listeden ({allowed}) bir içerik türü bildirmelidir.",
      attachmentTypeNotAllowed:
        "Ek, izin verilen içerik türlerinden ({allowed}) biri olmalıdır.",
      attachmentSizeMax: "Ek {maxSize} baytı aşmamalıdır.",
    },
  },
};

export default strings;
