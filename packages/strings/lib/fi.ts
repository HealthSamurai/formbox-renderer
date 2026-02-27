import type { Strings } from "@formbox/theme";

const strings: Strings = {
  aria: {
    help: "Lisätietoja",
    legal: "Oikeudelliset tiedot",
    flyover: "Lisäkonteksti",
  },
  value: {
    yes: "Kyllä",
    no: "Ei",
    unanswered: "Ei vastausta",
  },
  dialog: {
    cancel: "Peruuta",
    submit: "Käytä",
  },
  form: {
    submit: "Lähetä",
    cancel: "Peruuta",
  },
  errors: {
    unknownMessage: "Tuntematon virhe",
    issuesTitle: "Ongelmat",
    issueMessage: "Virhe: {message}",
  },
  file: {
    sizeLabel: "{sizeKb} KB",
    chooseAction: "Valitse tiedosto",
    changeAction: "Vaihda tiedosto",
    replaceAction: "Korvaa tiedosto",
    clearAction: "Tyhjennä",
    noFileChosen: "Tiedostoa ei valittu",
  },
  group: {
    addSection: "Lisää toinen",
    removeSection: "Poista",
    noNodesYet: "Ei vielä kohteita.",
  },
  gridTable: {
    headerActions: "Toiminnot",
  },
  inputs: {
    referencePlaceholder: "Resurssi/tyyppi/id",
    referenceDisplayPlaceholder: "Näyttöteksti",
    codingSystemPlaceholder: "Järjestelmä",
    codingCodePlaceholder: "Koodi",
    codingDisplayPlaceholder: "Näyttö",
    quantityValuePlaceholder: "Arvo",
    quantityUnitPlaceholder: "Yksikkö",
    attachmentSelected: "Liite valittu",
    attachmentLabel: "Liite",
  },
  selection: {
    specifyOther: "Määritä muu",
    addAnother: "Lisää toinen",
    selectPlaceholder: "Valitse vaihtoehto",
    removeSelection: "Poista valinta",
    removeCustomValue: "Poista mukautettu arvo",
    searchPlaceholder: "Haku",
    noOptions: "Ei vaihtoehtoja",
    loadingOptions: "Ladataan vaihtoehtoja...",
    dividerOr: "tai",
  },
  pagination: {
    navigation: "Sivutus",
    previous: "Edellinen",
    next: "Seuraava",
    pageLabel: "Sivu {page}",
    previousTargetPage: "Edellinen sivu {page}",
    nextTargetPage: "Seuraava sivu {page}",
  },
  language: {
    label: "Kieli",
    placeholder: "Valitse kieli",
  },
  table: {
    empty: "Ei näytettävää.",
    noChoiceQuestionsHorizontal:
      "Vaakasuoraan taulukkoon ei ole saatavilla valintakysymyksiä.",
    noChoiceQuestions: "Valintakysymyksiä ei ole saatavilla.",
    noAnswerOptionsHorizontal:
      "Vaakasuoraan taulukkoasetteluun ei ole saatavilla vastausvaihtoehtoja.",
    noAnswerOptions:
      "Taulukkoasetteluun ei ole saatavilla vastausvaihtoehtoja.",
  },
  collapsible: {
    expand: "Laajenna",
    collapse: "Pienennä",
  },
  tab: {
    empty: "Välilehdellä ei ole sisältöä",
    scrollLeft: "Vieritä välilehtiä vasemmalle",
    scrollRight: "Vieritä välilehtiä oikealle",
  },
  signature: {
    sign: "Allekirjoita",
    signed: "Allekirjoitettu",
    clearAction: "Tyhjennä allekirjoitus",
  },
  spinner: {
    decrease: "Pienennä arvoa",
    increase: "Suurenna arvoa",
  },
  unsupported: {
    itemType: "Tukematon tyyppi: {type}",
  },
  validation: {
    group: {
      atLeastOneAnswer: "Tässä ryhmässä vaaditaan vähintään yksi vastaus.",
    },
    groupList: {
      minOccurs: "Vähintään {minOccurs} esiintymä(ä) vaaditaan.",
      maxOccurs: "Enintään {maxOccurs} esiintymä(ä) sallitaan.",
    },
    question: {
      minOccursSingle: "Vähintään yksi ei-tyhjä vastaus vaaditaan.",
      minOccursMultiple: "Vähintään {minOccurs} ei-tyhjää vastausta vaaditaan.",
      maxOccurs: "Enintään {maxOccurs} vastausta sallitaan.",
    },
    signature: {
      required: "Signature is required.",
    },
    answer: {
      minLength: "Vastauksen pituuden on oltava vähintään {minLength} merkkiä.",
      maxLength: "Vastaus ylittää enimmäispituuden {maxLength}.",
      minPrecision:
        "Vastauksen on oltava vähintään {minLength} merkkiä, jotta vaadittu tarkkuus saavutetaan.",
      maxPrecision: "Vastaus ei saa ylittää {maxLength} merkkiä.",
      blank: "Vastaus ei saa olla tyhjä.",
      valueNotEarlier: "Arvo ei saa olla ennen {formatted}.",
      valueNotLater: "Arvo ei saa olla jälkeen {formatted}.",
      valueMin: "Arvon on oltava vähintään {formatted}.",
      valueMax: "Arvon on oltava enintään {formatted}.",
      valueDecimalPlaces: "Arvossa saa olla enintään {maxPlaces} desimaalia.",
      quantityMin: "Määrän on oltava vähintään {formatted}.",
      quantityMax: "Määrän on oltava enintään {formatted}.",
      attachmentTypeMissing:
        "Liitteen on ilmoitettava sallittujen sisältötyyppien luettelosta ({allowed}) sisältötyyppi.",
      attachmentTypeNotAllowed:
        "Liitteen on oltava yksi sallituista sisältötyypeistä ({allowed}).",
      attachmentSizeMax: "Liitteen koko ei saa ylittää {maxSize} tavua.",
    },
  },
};

export default strings;
