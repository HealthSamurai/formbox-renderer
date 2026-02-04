import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React__default from "react";
const emptyComponents = {};
const MDXContext = React__default.createContext(emptyComponents);
function useMDXComponents(components) {
  const contextComponents = React__default.useContext(MDXContext);
  return React__default.useMemo(
    function() {
      if (typeof components === "function") {
        return components(contextComponents);
      }
      return { ...contextComponents, ...components };
    },
    [contextComponents, components]
  );
}
function MDXProvider(properties) {
  let allComponents;
  if (properties.disableParentContext) {
    allComponents = typeof properties.components === "function" ? properties.components(emptyComponents) : properties.components || emptyComponents;
  } else {
    allComponents = useMDXComponents(properties.components);
  }
  return React__default.createElement(
    MDXContext.Provider,
    { value: allComponents },
    properties.children
  );
}
const frontmatter$7 = {
  "title": "Renderer",
  "order": 1,
  "icon": "rocket"
};
function _createMdxContent$7(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Formbox Renderer is a React renderer for HL7 FHIR R5 Questionnaires. It is headless. You must pass a theme object and include the theme CSS."
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/renderer"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/hs-theme"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# or"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " install"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/renderer"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/hs-theme"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Peer dependencies"
    }), "\n", jsx(_components.p, {
      children: "Install these in your app. Your package manager will usually warn you if any are missing."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "react, react-dom"
      }), "\n", jsx(_components.li, {
        children: "mobx, mobx-react-lite, mobx-utils"
      }), "\n", jsx(_components.li, {
        children: "classnames"
      }), "\n", jsx(_components.li, {
        children: "fhirpath"
      }), "\n", jsx(_components.li, {
        children: "@lhncbc/ucum-lhc"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Quick start"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/hs-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/hs-theme/style.css"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  resourceType: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"Questionnaire"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  item: ["
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    { linkId: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"first"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", text: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"First name"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", type: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"string"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", required: "
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    { linkId: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"consent"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", text: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"Consent to treatment"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", type: "
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"boolean"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ],"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />;"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["If you want strong typing, import FHIR types from ", jsx(_components.code, {
        children: "fhir/r5"
      }), " and add ", jsx(_components.code, {
        children: "@types/fhir"
      }), " as a dev dependency if your editor cannot resolve the module."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " type"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { Questionnaire, QuestionnaireResponse } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "fhir/r5"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Renderer props"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Required"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "questionnaire"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "Questionnaire"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "FHIR Questionnaire resource that drives the form."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "theme"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "Theme"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Theme contract implementation."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "initialResponse"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "QuestionnaireResponse"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Seed response used to initialize answers."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(response: QuestionnaireResponse) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Called with the latest response whenever state changes."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSubmit"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(response: QuestionnaireResponse) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Called after validation passes and the form is submitted."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "terminologyServerUrl"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Base URL for ValueSet ", jsx(_components.code, {
              children: "$expand"
            }), " requests."]
          })]
        })]
      })]
    }), "\n", jsx(_components.h2, {
      children: "Validation and submit"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "onSubmit"
      }), " fires only after validation passes. When validation fails, the renderer populates Errors slots so your theme can surface issues next to controls or in summaries."]
    }), "\n", jsx(_components.h2, {
      children: "ValueSet expansion"
    }), "\n", jsxs(_components.p, {
      children: ["When a question references a ValueSet, the renderer expands it through a terminology server. If you do not pass ", jsx(_components.code, {
        children: "terminologyServerUrl"
      }), ", the default server is ", jsx(_components.code, {
        children: "https://tx.fhir.org/r5"
      }), "."]
    }), "\n", jsx(_components.h2, {
      children: "Themes"
    }), "\n", jsxs(_components.p, {
      children: ["Themes live in ", jsx(_components.code, {
        children: "themes/*"
      }), " in this repo. Every theme exports a ", jsx(_components.code, {
        children: "theme"
      }), " object and a compiled CSS file."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "@formbox/hs-theme"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "@formbox/nshuk-theme"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "@formbox/antd-theme"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "@formbox/mantine-theme"
        })
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["To build your own theme, see the theme specification and reference in ", jsx(_components.code, {
        children: "packages/theme/doc"
      }), "."]
    }), "\n", jsx(_components.h2, {
      children: "Compatibility"
    }), "\n", jsx(_components.p, {
      children: "The published output targets ES2023. Use a modern browser or Node runtime, or add a transpile or polyfill step if you need to support older environments."
    })]
  });
}
function MDXContent$7(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$7, {
      ...props
    })
  }) : _createMdxContent$7(props);
}
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$7,
  frontmatter: frontmatter$7
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$6 = {
  "title": "Behavior",
  "order": 2,
  "icon": "settings"
};
function _createMdxContent$6(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "This page describes runtime behavior that every theme must respect. If you are unsure how a prop behaves, check here before guessing."
    }), "\n", jsx(_components.h2, {
      children: "Accessibility contract"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ariaLabelledBy"
        }), " and ", jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " are already-composed, space-separated id strings. Attach them verbatim to the focusable element."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "Label"
        }), " receives ", jsx(_components.code, {
          children: "id"
        }), " for the label element. Apply it to the element that wraps the visible label text so controls can reference it via ", jsx(_components.code, {
          children: "aria-labelledby"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["When ", jsx(_components.code, {
          children: "id"
        }), " is provided, set it on the primary focusable element. For composite widgets, pick the element that receives keyboard focus."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " references rendered ", jsx(_components.code, {
          children: "Help"
        }), " and ", jsx(_components.code, {
          children: "Errors"
        }), " ids. Keep those elements in the DOM when you render them."]
      }), "\n", jsxs(_components.li, {
        children: ["Legal and flyover content is not included in ", jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " by default. Keep those controls accessible in your layout."]
      }), "\n", jsxs(_components.li, {
        children: ["For ", jsx(_components.code, {
          children: "TabContainer"
        }), ", follow the WAI-ARIA tab pattern: ", jsx(_components.code, {
          children: 'role="tablist"'
        }), " on the container, ", jsx(_components.code, {
          children: 'role="tab"'
        }), " on each tab with ", jsx(_components.code, {
          children: "id={buttonId}"
        }), ", ", jsx(_components.code, {
          children: 'role="tabpanel"'
        }), " on each panel with ", jsx(_components.code, {
          children: "id={panelId}"
        }), ", and wire ", jsx(_components.code, {
          children: "aria-controls"
        }), " and ", jsx(_components.code, {
          children: "aria-labelledby"
        }), "."]
      }), "\n", jsx(_components.li, {
        children: "For custom select or multiselect widgets, follow combobox/listbox roles and keyboard interactions (Arrow keys, Enter or Space to select, Escape to close) when you are not using native inputs."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Controlled values"
    }), "\n", jsx(_components.p, {
      children: "All inputs are controlled; callbacks receive values, not DOM events."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "TextInput and TextArea: pass the raw string. Empty string stays empty string."
      }), "\n", jsxs(_components.li, {
        children: ["NumberInput, SpinnerInput, SliderInput: parse to ", jsx(_components.code, {
          children: "number"
        }), " or ", jsx(_components.code, {
          children: "undefined"
        }), ". Use ", jsx(_components.code, {
          children: "undefined"
        }), " when the field is empty or invalid."]
      }), "\n", jsx(_components.li, {
        children: "DateInput, DateTimeInput, TimeInput: treat the value as an opaque string and return it as entered. Do not normalize, format, or shift timezones."
      }), "\n", jsxs(_components.li, {
        children: ["Select and Radio: ", jsx(_components.code, {
          children: "selectedOption = undefined"
        }), " means no selection. Call ", jsx(_components.code, {
          children: "onChange(token | undefined)"
        }), " when the selection changes."]
      }), "\n", jsxs(_components.li, {
        children: ["CheckboxList and MultiSelect: treat ", jsx(_components.code, {
          children: "selectedOptions[].token"
        }), " as the selected set. Call ", jsx(_components.code, {
          children: "onSelect"
        }), " or ", jsx(_components.code, {
          children: "onDeselect"
        }), " once per user action and do not reorder the provided selections."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Disabled behavior"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["When ", jsx(_components.code, {
          children: "disabled"
        }), " is true, render the UI as disabled and suppress all callbacks."]
      }), "\n", jsxs(_components.li, {
        children: ["Native inputs: use the ", jsx(_components.code, {
          children: "disabled"
        }), " attribute."]
      }), "\n", jsxs(_components.li, {
        children: ["Custom widgets: set ", jsx(_components.code, {
          children: 'aria-disabled="true"'
        }), ", remove from the tab order (", jsx(_components.code, {
          children: "tabIndex={-1}"
        }), "), and ignore pointer and keyboard events."]
      }), "\n", jsx(_components.li, {
        children: "Disabled options should remain visible and announced as disabled."
      }), "\n", jsxs(_components.li, {
        children: ["If an add or remove action is provided with ", jsx(_components.code, {
          children: "canAdd={false}"
        }), " or ", jsx(_components.code, {
          children: "canRemove={false}"
        }), ", render it disabled rather than hiding it."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Options and custom options lifecycle"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Tokens are stable for a given option or selection; it is safe to use them as React keys."
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "SelectedOptionItem.label"
        }), " may not match the current options list (legacy or custom values). Render it as provided."]
      }), "\n", jsxs(_components.li, {
        children: ["The renderer may include disabled legacy options in ", jsx(_components.code, {
          children: "options"
        }), " to keep stored answers visible. Treat them as normal options, but disabled."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "specifyOtherOption"
        }), " is an extra option row. When the user selects it, the renderer enters a custom-entry state and provides ", jsx(_components.code, {
          children: "customOptionForm"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "customOptionForm"
        }), " is present only while custom entry is active. Render it near the options list or in place of it. Use its ", jsx(_components.code, {
          children: "submit"
        }), " and ", jsx(_components.code, {
          children: "cancel"
        }), " actions to finish or return to the list."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "isLoading"
        }), " can be true while options fetch. The renderer may also render ", jsx(_components.code, {
          children: "OptionsLoading"
        }), " in the question scaffold; handle both without duplicating spinners."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Repeating items contract"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "AnswerList"
        }), " renders one or more ", jsx(_components.code, {
          children: "AnswerScaffold"
        }), " entries; when ", jsx(_components.code, {
          children: "onAdd"
        }), " is provided it should render add-answer controls."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "AnswerScaffold.onRemove"
        }), " is provided for repeating questions. Render a remove action next to the control and disable it when ", jsx(_components.code, {
          children: "canRemove"
        }), " is false."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "AnswerScaffold.errors"
        }), " is provided for per-answer validation; render it near the answer content."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "GroupList"
        }), " renders a list of group instances (", jsx(_components.code, {
          children: "GroupScaffold"
        }), ") and can show an add control when ", jsx(_components.code, {
          children: "onAdd"
        }), " is provided."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "GroupScaffold"
        }), " should render a remove action when ", jsx(_components.code, {
          children: "onRemove"
        }), " is provided; use ", jsx(_components.code, {
          children: "canRemove"
        }), " to disable it."]
      }), "\n"]
    })]
  });
}
function MDXContent$6(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$6, {
      ...props
    })
  }) : _createMdxContent$6(props);
}
const behavior = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$6,
  frontmatter: frontmatter$6
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$5 = {
  "title": "Specification",
  "order": 1,
  "icon": "book-open"
};
function _createMdxContent$5(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { Diagram } = _components;
  if (!Diagram) _missingMdxReference("Diagram");
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "This package defines the theme contract for Formbox Renderer. Use it when you build a theme or want strict typing while customizing an existing theme."
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(_components.p, {
      children: "If you only need types in an app, install as a dev dependency:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -D"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "If you are publishing a theme package, add it as a dependency:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Quick start"
    }), "\n", jsxs(_components.p, {
      children: ["Create a theme by implementing the ", jsx(_components.code, {
        children: "Theme"
      }), " contract. The easiest path is to start from an existing theme and override the components you want to replace."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " type"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { Theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { theme "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " baseTheme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/hs-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  ..."
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "baseTheme,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  Label: MyLabel,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />;"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Theme contract"
    }), "\n", jsxs(_components.p, {
      children: ["A ", jsx(_components.code, {
        children: "Theme"
      }), " is a full object with React components for every slot listed in the reference. The renderer never touches DOM APIs directly; the theme owns markup, layout, and styling. Data flows only through props."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Theme"
      }), " type is strict. You must supply every component, either by building a complete theme from scratch or by extending a base theme."]
    }), "\n", jsx(_components.h2, {
      children: "Conventions"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Inputs are controlled. Callbacks receive values, not DOM events."
      }), "\n", jsxs(_components.li, {
        children: ["Use ", jsx(_components.code, {
          children: "disabled"
        }), " to indicate non-editable state; avoid ", jsx(_components.code, {
          children: "readOnly"
        }), " unless your component needs it."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ariaLabelledBy"
        }), " and ", jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " are id strings. Forward them directly to the focusable element."]
      }), "\n", jsxs(_components.li, {
        children: ["When ", jsx(_components.code, {
          children: "id"
        }), " is provided, apply it to the primary focusable element."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "children"
        }), " is the slot for rendered content. Option types use ", jsx(_components.code, {
          children: "label"
        }), " for display content."]
      }), "\n", jsxs(_components.li, {
        children: ["When a prop is optional, the renderer may omit it. Treat ", jsx(_components.code, {
          children: "undefined"
        }), " as not provided."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Renderer composition overview"
    }), "\n", jsx(_components.p, {
      children: "The renderer composes your theme in a predictable tree. You control layout, but the nesting describes where headers, errors, and actions appear."
    }), "\n", jsx(_components.p, {
      children: "Overview diagram (simplified):"
    }), "\n", jsx(Diagram, {
      svg: '<svg id="diagram-0" width="100%" xmlns="http://www.w3.org/2000/svg" class="flowchart" style="max-width: 616px" viewBox="-8 -8 616 428.4" role="graphics-document document" aria-roledescription="flowchart-v2"><style>#diagram-0{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#e1e4e8;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#diagram-0 .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#diagram-0 .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#diagram-0 .error-icon{fill:hsl(26.6666666667, 12.676056338%, 18.9215686275%);}#diagram-0 .error-text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);stroke:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-0 .edge-thickness-normal{stroke-width:1px;}#diagram-0 .edge-thickness-thick{stroke-width:3.5px;}#diagram-0 .edge-pattern-solid{stroke-dasharray:0;}#diagram-0 .edge-thickness-invisible{stroke-width:0;fill:none;}#diagram-0 .edge-pattern-dashed{stroke-dasharray:3;}#diagram-0 .edge-pattern-dotted{stroke-dasharray:2;}#diagram-0 .marker{fill:#586069;stroke:#586069;}#diagram-0 .marker.cross{stroke:#586069;}#diagram-0 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#diagram-0 p{margin:0;}#diagram-0 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#e1e4e8;}#diagram-0 .cluster-label text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-0 .cluster-label span{color:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-0 .cluster-label span p{background-color:transparent;}#diagram-0 .label text,#diagram-0 span{fill:#e1e4e8;color:#e1e4e8;}#diagram-0 .node rect,#diagram-0 .node circle,#diagram-0 .node ellipse,#diagram-0 .node polygon,#diagram-0 .node path{fill:#24292e;stroke:#1b1f23;stroke-width:1px;}#diagram-0 .rough-node .label text,#diagram-0 .node .label text,#diagram-0 .image-shape .label,#diagram-0 .icon-shape .label{text-anchor:middle;}#diagram-0 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#diagram-0 .rough-node .label,#diagram-0 .node .label,#diagram-0 .image-shape .label,#diagram-0 .icon-shape .label{text-align:center;}#diagram-0 .node.clickable{cursor:pointer;}#diagram-0 .root .anchor path{fill:#586069!important;stroke-width:0;stroke:#586069;}#diagram-0 .arrowheadPath{fill:#dbd6d1;}#diagram-0 .edgePath .path{stroke:#586069;stroke-width:2.0px;}#diagram-0 .flowchart-link{stroke:#586069;fill:none;}#diagram-0 .edgeLabel{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);text-align:center;}#diagram-0 .edgeLabel p{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-0 .edgeLabel rect{opacity:0.5;background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);fill:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-0 .labelBkg{background-color:rgba(36.0000000001, 40.0000000001, 31.0000000001, 0.5);}#diagram-0 .cluster rect{fill:hsl(26.6666666667, 12.676056338%, 18.9215686275%);stroke:hsl(26.6666666667, 0%, 8.9215686275%);stroke-width:1px;}#diagram-0 .cluster text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-0 .cluster span{color:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-0 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(26.6666666667, 12.676056338%, 18.9215686275%);border:1px solid hsl(26.6666666667, 0%, 8.9215686275%);border-radius:2px;pointer-events:none;z-index:100;}#diagram-0 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#e1e4e8;}#diagram-0 rect.text{fill:none;stroke-width:0;}#diagram-0 .icon-shape,#diagram-0 .image-shape{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);text-align:center;}#diagram-0 .icon-shape p,#diagram-0 .image-shape p{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);padding:2px;}#diagram-0 .icon-shape rect,#diagram-0 .image-shape rect{opacity:0.5;background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);fill:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-0 .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#diagram-0 .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#diagram-0 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker id="diagram-0_flowchart-v2-pointEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-0_flowchart-v2-pointStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="4.5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-0_flowchart-v2-circleEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-0_flowchart-v2-circleStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-0_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1,0;"/></marker><marker id="diagram-0_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1,0;"/></marker><g class="root"><g class="clusters"/><g class="edgePaths"><path d="M199.231,57.2L176.359,62.967C153.487,68.733,107.744,80.267,84.872,91.133C62,102,62,112.2,62,117.3L62,122.4" id="L_QS_QH_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_QS_QH_0" data-points="W3sieCI6MTk5LjIzMTA4MTA4MTA4MTA3LCJ5Ijo1Ny4yfSx7IngiOjYyLCJ5Ijo5MS44fSx7IngiOjYyLCJ5IjoxMjYuNH1d" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M296.8,57.2L296.8,62.967C296.8,68.733,296.8,80.267,296.8,91.133C296.8,102,296.8,112.2,296.8,117.3L296.8,122.4" id="L_QS_AL_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_QS_AL_0" data-points="W3sieCI6Mjk2LjgsInkiOjU3LjJ9LHsieCI6Mjk2LjgsInkiOjkxLjh9LHsieCI6Mjk2LjgsInkiOjEyNi40fV0=" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M296.8,175.6L296.8,181.367C296.8,187.133,296.8,198.667,296.8,209.533C296.8,220.4,296.8,230.6,296.8,235.7L296.8,240.8" id="L_AL_AS_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_AL_AS_0" data-points="W3sieCI6Mjk2LjgsInkiOjE3NS42fSx7IngiOjI5Ni44LCJ5IjoyMTAuMjAwMDAwMDAwMDAwMDJ9LHsieCI6Mjk2LjgsInkiOjI0NC44MDAwMDAwMDAwMDAwNH1d" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M225.161,294L208.367,299.767C191.574,305.533,157.987,317.067,141.193,327.933C124.4,338.8,124.4,349,124.4,354.1L124.4,359.2" id="L_AS_CTRL_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_AS_CTRL_0" data-points="W3sieCI6MjI1LjE2MDgxMDgxMDgxMDgsInkiOjI5NC4wMDAwMDAwMDAwMDAwNn0seyJ4IjoxMjQuNDAwMDAwMDAwMDAwMDIsInkiOjMyOC42fSx7IngiOjEyNC40MDAwMDAwMDAwMDAwMiwieSI6MzYzLjJ9XQ==" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M296.8,294L296.8,299.767C296.8,305.533,296.8,317.067,296.8,327.933C296.8,338.8,296.8,349,296.8,354.1L296.8,359.2" id="L_AS_AE_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_AS_AE_0" data-points="W3sieCI6Mjk2LjgsInkiOjI5NC4wMDAwMDAwMDAwMDAwNn0seyJ4IjoyOTYuOCwieSI6MzI4LjZ9LHsieCI6Mjk2LjgsInkiOjM2My4yfV0=" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M382.401,294L402.468,299.767C422.534,305.533,462.667,317.067,482.734,327.933C502.8,338.8,502.8,349,502.8,354.1L502.8,359.2" id="L_AS_CH_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_AS_CH_0" data-points="W3sieCI6MzgyLjQwMTM1MTM1MTM1MTM3LCJ5IjoyOTQuMDAwMDAwMDAwMDAwMDZ9LHsieCI6NTAyLjgsInkiOjMyOC42fSx7IngiOjUwMi44LCJ5IjozNjMuMn1d" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/><path d="M396.364,57.2L419.703,62.967C443.042,68.733,489.721,80.267,513.061,91.133C536.4,102,536.4,112.2,536.4,117.3L536.4,122.4" id="L_QS_QE_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_QS_QE_0" data-points="W3sieCI6Mzk2LjM2MzUxMzUxMzUxMzU3LCJ5Ijo1Ny4yfSx7IngiOjUzNi40MDAwMDAwMDAwMDAxLCJ5Ijo5MS44fSx7IngiOjUzNi40MDAwMDAwMDAwMDAxLCJ5IjoxMjYuNH1d" marker-end="url(#diagram-0_flowchart-v2-pointEnd)"/></g><g class="edgeLabels"><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g class="edgeLabel"><g class="label" data-id="L_QS_QH_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_QS_AL_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_AL_AS_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_AS_CTRL_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_AS_AE_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_AS_CH_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_QS_QE_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g></g><g class="nodes"><g class="node default" id="flowchart-QS-0" transform="translate(296.8, 32.6)"><rect class="basic label-container" style="" x="-106.8" y="-24.6" width="213.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">QuestionScaffold</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-QH-1" transform="translate(62, 151)"><rect class="basic label-container" style="" x="-54" y="-24.6" width="108" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Label</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-AL-3" transform="translate(296.8, 151)"><rect class="basic label-container" style="" x="-130.8" y="-24.6" width="261.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">AnswerList</tspan><tspan font-style="normal" class="text-inner-tspan" font-weight="normal"> or</tspan><tspan font-style="normal" class="text-inner-tspan" font-weight="normal"> control</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-AS-5" transform="translate(296.8, 269.40000000000003)"><rect class="basic label-container" style="" x="-97.2" y="-24.6" width="194.4" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">AnswerScaffold</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-CTRL-7" transform="translate(124.40000000000002, 387.8)"><rect class="basic label-container" style="" x="-63.6" y="-24.6" width="127.2" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Control</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-AE-9" transform="translate(296.8, 387.8)"><rect class="basic label-container" style="" x="-58.8" y="-24.6" width="117.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Errors</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-CH-11" transform="translate(502.8, 387.8)"><rect class="basic label-container" style="" x="-97.2" y="-24.6" width="194.4" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Children</tspan><tspan font-style="normal" class="text-inner-tspan" font-weight="normal"> Nodes</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-QE-13" transform="translate(536.4000000000001, 151)"><rect class="basic label-container" style="" x="-58.8" y="-24.6" width="117.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Errors</tspan></tspan></text></g></g></g></g></g></g></svg>'
    }), "\n", jsx(_components.p, {
      children: "Group list composition for repeating groups:"
    }), "\n", jsx(Diagram, {
      svg: '<svg id="diagram-1" width="100%" xmlns="http://www.w3.org/2000/svg" class="flowchart" style="max-width: 601.6px" viewBox="-8 -8 601.6 310.00000000000006" role="graphics-document document" aria-roledescription="flowchart-v2"><style>#diagram-1{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#e1e4e8;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#diagram-1 .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#diagram-1 .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#diagram-1 .error-icon{fill:hsl(26.6666666667, 12.676056338%, 18.9215686275%);}#diagram-1 .error-text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);stroke:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-1 .edge-thickness-normal{stroke-width:1px;}#diagram-1 .edge-thickness-thick{stroke-width:3.5px;}#diagram-1 .edge-pattern-solid{stroke-dasharray:0;}#diagram-1 .edge-thickness-invisible{stroke-width:0;fill:none;}#diagram-1 .edge-pattern-dashed{stroke-dasharray:3;}#diagram-1 .edge-pattern-dotted{stroke-dasharray:2;}#diagram-1 .marker{fill:#586069;stroke:#586069;}#diagram-1 .marker.cross{stroke:#586069;}#diagram-1 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#diagram-1 p{margin:0;}#diagram-1 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#e1e4e8;}#diagram-1 .cluster-label text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-1 .cluster-label span{color:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-1 .cluster-label span p{background-color:transparent;}#diagram-1 .label text,#diagram-1 span{fill:#e1e4e8;color:#e1e4e8;}#diagram-1 .node rect,#diagram-1 .node circle,#diagram-1 .node ellipse,#diagram-1 .node polygon,#diagram-1 .node path{fill:#24292e;stroke:#1b1f23;stroke-width:1px;}#diagram-1 .rough-node .label text,#diagram-1 .node .label text,#diagram-1 .image-shape .label,#diagram-1 .icon-shape .label{text-anchor:middle;}#diagram-1 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#diagram-1 .rough-node .label,#diagram-1 .node .label,#diagram-1 .image-shape .label,#diagram-1 .icon-shape .label{text-align:center;}#diagram-1 .node.clickable{cursor:pointer;}#diagram-1 .root .anchor path{fill:#586069!important;stroke-width:0;stroke:#586069;}#diagram-1 .arrowheadPath{fill:#dbd6d1;}#diagram-1 .edgePath .path{stroke:#586069;stroke-width:2.0px;}#diagram-1 .flowchart-link{stroke:#586069;fill:none;}#diagram-1 .edgeLabel{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);text-align:center;}#diagram-1 .edgeLabel p{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-1 .edgeLabel rect{opacity:0.5;background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);fill:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-1 .labelBkg{background-color:rgba(36.0000000001, 40.0000000001, 31.0000000001, 0.5);}#diagram-1 .cluster rect{fill:hsl(26.6666666667, 12.676056338%, 18.9215686275%);stroke:hsl(26.6666666667, 0%, 8.9215686275%);stroke-width:1px;}#diagram-1 .cluster text{fill:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-1 .cluster span{color:rgb(200.6338028168, 207.4295774647, 212.866197183);}#diagram-1 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(26.6666666667, 12.676056338%, 18.9215686275%);border:1px solid hsl(26.6666666667, 0%, 8.9215686275%);border-radius:2px;pointer-events:none;z-index:100;}#diagram-1 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#e1e4e8;}#diagram-1 rect.text{fill:none;stroke-width:0;}#diagram-1 .icon-shape,#diagram-1 .image-shape{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);text-align:center;}#diagram-1 .icon-shape p,#diagram-1 .image-shape p{background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);padding:2px;}#diagram-1 .icon-shape rect,#diagram-1 .image-shape rect{opacity:0.5;background-color:hsl(86.6666666667, 12.676056338%, 13.9215686275%);fill:hsl(86.6666666667, 12.676056338%, 13.9215686275%);}#diagram-1 .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#diagram-1 .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#diagram-1 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker id="diagram-1_flowchart-v2-pointEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-1_flowchart-v2-pointStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="4.5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-1_flowchart-v2-circleEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-1_flowchart-v2-circleStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1,0;"/></marker><marker id="diagram-1_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1,0;"/></marker><marker id="diagram-1_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1,0;"/></marker><g class="root"><g class="clusters"/><g class="edgePaths"><path d="M199.6,53.157L176.667,59.598C153.733,66.038,107.867,78.919,84.933,90.46C62,102,62,112.2,62,117.3L62,122.4" id="L_GLS_GLH_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_GLS_GLH_0" data-points="W3sieCI6MTk5LjYwMDAwMDAwMDAwMDAyLCJ5Ijo1My4xNTcxMTU3NDk1MjU2MTZ9LHsieCI6NjIsInkiOjkxLjh9LHsieCI6NjIsInkiOjEyNi40fV0=" marker-end="url(#diagram-1_flowchart-v2-pointEnd)"/><path d="M272.8,57.2L272.8,62.967C272.8,68.733,272.8,80.267,272.8,91.133C272.8,102,272.8,112.2,272.8,117.3L272.8,122.4" id="L_GLS_GS_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_GLS_GS_0" data-points="W3sieCI6MjcyLjgsInkiOjU3LjJ9LHsieCI6MjcyLjgsInkiOjkxLjh9LHsieCI6MjcyLjgsInkiOjEyNi40fV0=" marker-end="url(#diagram-1_flowchart-v2-pointEnd)"/><path d="M230.997,175.6L221.197,181.367C211.398,187.133,191.799,198.667,181.999,209.533C172.2,220.4,172.2,230.6,172.2,235.7L172.2,240.8" id="L_GS_GSE_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_GS_GSE_0" data-points="W3sieCI6MjMwLjk5NjYyMTYyMTYyMTY3LCJ5IjoxNzUuNn0seyJ4IjoxNzIuMjAwMDAwMDAwMDAwMDUsInkiOjIxMC4yMDAwMDAwMDAwMDAwMn0seyJ4IjoxNzIuMjAwMDAwMDAwMDAwMDUsInkiOjI0NC44MDAwMDAwMDAwMDAwNH1d" marker-end="url(#diagram-1_flowchart-v2-pointEnd)"/><path d="M314.603,175.6L324.403,181.367C334.202,187.133,353.801,198.667,363.601,209.533C373.4,220.4,373.4,230.6,373.4,235.7L373.4,240.8" id="L_GS_GSR_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_GS_GSR_0" data-points="W3sieCI6MzE0LjYwMzM3ODM3ODM3ODM1LCJ5IjoxNzUuNn0seyJ4IjozNzMuNCwieSI6MjEwLjIwMDAwMDAwMDAwMDAyfSx7IngiOjM3My40LCJ5IjoyNDQuODAwMDAwMDAwMDAwMDR9XQ==" marker-end="url(#diagram-1_flowchart-v2-pointEnd)"/><path d="M346,51.056L372.933,57.847C399.867,64.637,453.733,78.219,480.667,90.109C507.6,102,507.6,112.2,507.6,117.3L507.6,122.4" id="L_GLS_GLAdd_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_GLS_GLAdd_0" data-points="W3sieCI6MzQ2LCJ5Ijo1MS4wNTU4NzczNDI0MTkwN30seyJ4Ijo1MDcuNiwieSI6OTEuOH0seyJ4Ijo1MDcuNiwieSI6MTI2LjR9XQ==" marker-end="url(#diagram-1_flowchart-v2-pointEnd)"/></g><g class="edgeLabels"><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g><rect class="background" style="stroke: none"/></g><g class="edgeLabel"><g class="label" data-id="L_GLS_GLH_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_GLS_GS_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_GS_GSE_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_GS_GSR_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g><g class="edgeLabel"><g class="label" data-id="L_GLS_GLAdd_0" transform="translate(-4, -9.6)"><text y="-10.1"><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"/></text></g></g></g><g class="nodes"><g class="node default" id="flowchart-GLS-0" transform="translate(272.8, 32.6)"><rect class="basic label-container" style="" x="-73.19999999999999" y="-24.6" width="146.39999999999998" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">GroupList</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-GLH-1" transform="translate(62, 151)"><rect class="basic label-container" style="" x="-54" y="-24.6" width="108" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Label</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-GS-3" transform="translate(272.8, 151)"><rect class="basic label-container" style="" x="-106.8" y="-24.6" width="213.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">GroupScaffold...</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-GSE-5" transform="translate(172.20000000000005, 269.40000000000003)"><rect class="basic label-container" style="" x="-58.8" y="-24.6" width="117.6" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Errors</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-GSR-7" transform="translate(373.4, 269.40000000000003)"><rect class="basic label-container" style="" x="-92.4" y="-24.6" width="184.8" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Remove</tspan><tspan font-style="normal" class="text-inner-tspan" font-weight="normal"> action</tspan></tspan></text></g></g></g><g class="node default" id="flowchart-GLAdd-9" transform="translate(507.6, 151)"><rect class="basic label-container" style="" x="-78" y="-24.6" width="156" height="49.2"/><g class="label" style="" transform="translate(0, -9.6)"><rect/><g><rect class="background" style="stroke: none"/><text y="-10.1" style=""><tspan class="text-outer-tspan" x="0" y="-0.1em" dy="1.1em"><tspan font-style="normal" class="text-inner-tspan" font-weight="normal">Add</tspan><tspan font-style="normal" class="text-inner-tspan" font-weight="normal"> action</tspan></tspan></text></g></g></g></g></g></g></svg>'
    }), "\n", jsx(_components.p, {
      children: "Typical question node:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "QuestionScaffold"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Label"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  AnswerList (or a single control)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    AnswerScaffold (per answer)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      control (TextInput/Select/etc.)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      remove action (when onRemove is provided)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      children (nested nodes)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      errors (Errors)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Errors (question-level)"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Typical repeating group list:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GroupList"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Label (only when list has text)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  GroupScaffold (per instance)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    remove action (when onRemove is provided)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    errors"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  add action (when onAdd is provided)"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Typical non-repeating group:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GroupScaffold"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Label (when visible)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Stack (child nodes)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  Errors"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Renderer guarantees"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "id"
        }), ", ", jsx(_components.code, {
          children: "ariaLabelledBy"
        }), ", and ", jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " values are unique within a render and stable for a given node or answer."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " strings are already space-joined; use them as-is."]
      }), "\n", jsx(_components.li, {
        children: "Option tokens are stable across renders; selected options may remain when the options list changes."
      }), "\n", jsx(_components.li, {
        children: "When needed, the renderer passes disabled legacy options so stored answers still render."
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "label"
        }), " and ", jsx(_components.code, {
          children: "children"
        }), " props are ready-to-render ", jsx(_components.code, {
          children: "ReactNode"
        }), " values."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Next"
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.code, {
        children: "reference.md"
      }), " for component props and ", jsx(_components.code, {
        children: "behavior.md"
      }), " for runtime behavior details."]
    })]
  });
}
function MDXContent$5(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$5, {
      ...props
    })
  }) : _createMdxContent$5(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const index$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$5,
  frontmatter: frontmatter$5
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$4 = {
  "title": "Reference",
  "order": 3,
  "icon": "list"
};
function _createMdxContent$4(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "This reference lists every component in the Theme contract and the props the renderer passes at runtime."
    }), "\n", jsx(_components.h2, {
      children: "How to read this reference"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ['Optional column: "Yes" means the renderer may omit the prop. Treat ', jsx(_components.code, {
          children: "undefined"
        }), " as not provided."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ariaLabelledBy"
        }), " and ", jsx(_components.code, {
          children: "ariaDescribedBy"
        }), " are already space-joined strings. Forward them to the focusable element."]
      }), "\n", jsx(_components.li, {
        children: "Inputs are controlled. Callbacks receive values, not DOM events."
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "children"
        }), " and ", jsx(_components.code, {
          children: "label"
        }), " props are already rendered ", jsx(_components.code, {
          children: "ReactNode"
        }), " values."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Shared types"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "OptionItem"
      }), ", ", jsx(_components.code, {
        children: "SelectedOptionItem"
      }), ", ", jsx(_components.code, {
        children: "CustomOptionAction"
      }), ", and ", jsx(_components.code, {
        children: "Attachment"
      }), " are exported by ", jsx(_components.code, {
        children: "@formbox/theme"
      }), ". Import them when you need to type your components or helpers."]
    }), "\n", jsx(_components.h2, {
      children: "Component reference"
    }), "\n", jsx(_components.h3, {
      children: "Link"
    }), "\n", jsx(_components.p, {
      children: "General-purpose link for references and related actions surfaced by the renderer. Render as an anchor or equivalent\ncontrol with standard link behavior."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "href"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the anchor destination; the renderer passes a fully qualified or relative URL."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this content inside the link; it may be plain text or richer markup."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "target"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsxs(_components.td, {
            children: ["Set the anchor target when provided, for example ", jsx(_components.code, {
              children: "_blank"
            }), " for a new tab."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "rel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsxs(_components.td, {
            children: ["Set the anchor rel attribute; when using ", jsx(_components.code, {
              children: "_blank"
            }), ", prefer ", jsx(_components.code, {
              children: "noopener noreferrer"
            }), "."]
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "Use standard link behavior; avoid preventing default unless you provide equivalent navigation."
    }), "\n", jsx(_components.h3, {
      children: "Errors"
    }), "\n", jsx(_components.p, {
      children: "Inline list of validation messages for a specific control, answer, or form-level errors. Keep each message distinct and\nclose to the related input or summary area."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply as the container id so inputs can reference it via aria-describedby."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "messages"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render each string as a distinct message line."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Consider rendering messages as a list. If you use ", jsx(_components.code, {
        children: "aria-live"
      }), " or ", jsx(_components.code, {
        children: 'role="alert"'
      }), " to announce updates, prefer polite\nannouncements to avoid repeated reads."]
    }), "\n", jsx(_components.h3, {
      children: "OptionsLoading"
    }), "\n", jsx(_components.p, {
      children: "Loading UI for option-backed controls while options are fetching. Use it to show a spinner or skeleton where options\nwould appear."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsx(_components.tbody, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "When true, show a loading indicator instead of options."
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The renderer may render ", jsx(_components.code, {
        children: "OptionsLoading"
      }), " in the question scaffold or selection table while options are loading. Option\ncontrols also receive ", jsx(_components.code, {
        children: "isLoading"
      }), ", so avoid duplicating spinners if you render both."]
    }), "\n", jsx(_components.h3, {
      children: "Help"
    }), "\n", jsx(_components.p, {
      children: "Short help text associated with a node label. Usually rendered near the label and referenced by the control via\naria-describedby."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply as the element id so the control can reference it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this help content near the label or input."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as aria-label for the help region when needed."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Legal"
    }), "\n", jsx(_components.p, {
      children: "Legal or consent content tied to a node. It can be inline text or a trigger that reveals more detail, but should remain\naccessible."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply to the element that contains (or references) the legal text so other components can target it via aria-describedby."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the legal text or markup provided by the renderer."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as an aria-label when the legal UI is only an icon or otherwise lacks a visible label."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Flyover"
    }), "\n", jsx(_components.p, {
      children: "Supplementary context for a node, often presented as a tooltip or popover. Keep it discoverable from the header and\nreachable via aria-describedby."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply to the element that holds (or is referenced by) the flyover content so inputs can point to it via aria-describedby."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the informational content provided by the renderer."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as an aria-label when the flyover UI is an icon-only control."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Label"
    }), "\n", jsx(_components.p, {
      children: "Header block for questions and groups that owns label layout (prefix + label text), required marker, and optional\nhelp/legal/flyover slots. It also provides the labelled-by anchor for the main control."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "prefix"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render an optional prefix (for example, a question number)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the primary label content for the node."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the id on the label element so inputs can reference it via aria-labelledby."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "htmlFor"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to the label element to connect it to the primary control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "required"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, display a visual required indicator near the label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "help"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the help slot content next to or beneath the label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "legal"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the legal slot content within the header layout."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "flyover"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the flyover slot content within the header layout."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "as"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: '"legend" | "label" | "text"'
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Hint for the semantic role of the label; themes can select the appropriate tag."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "as"
      }), " is a semantic/styling hint; themes may render a ", jsx(_components.code, {
        children: "div"
      }), " for all values (including ", jsx(_components.code, {
        children: '"legend"'
      }), ") and should not assume\nfieldset/legend markup."]
    }), "\n", jsx(_components.h3, {
      children: "InputGroup"
    }), "\n", jsx(_components.p, {
      children: "Layout wrapper for multi-part inputs such as quantity and coding. Arrange the children as a single logical field using\na 12-column span system. Provide a span value per child; themes do not infer or default them. Keep the total at 12 to\navoid gaps or wrapping."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render each child input in order as a single grouped control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "spans"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Column spans in a 12-column system (for example, ", jsx(_components.code, {
              children: "[8, 4]"
            }), " for a 2/3 + 1/3 split). Provide one span per child."]
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TextInput"
    }), "\n", jsx(_components.p, {
      children: "Single-line text field for short string answers, URLs, or identifiers. Render a standard input and forward accessibility\nids and placeholder."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input element id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "type"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the HTML input type (defaults to text in most themes)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this string as the current input value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new string whenever the user edits the field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the input in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the input is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "inputMode"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: 'HTMLAttributes<Element>["inputMode"]'
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply to the inputmode attribute to influence virtual keyboard layouts."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "minLength"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Enforce a minimum character length when provided."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "maxLength"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Enforce a maximum character length when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TextArea"
    }), "\n", jsx(_components.p, {
      children: "Multi-line text field for longer narrative responses. Use a textarea or equivalent and forward accessibility ids and\nplaceholder."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the textarea id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this string as the current textarea value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new string whenever the user edits the text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the textarea in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the textarea is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the textarea with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the textarea with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "inputMode"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: 'HTMLAttributes<Element>["inputMode"]'
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply to the inputmode attribute to influence virtual keyboard layouts."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "minLength"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Enforce a minimum character length when provided."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "maxLength"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Enforce a maximum character length when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "NumberInput"
    }), "\n", jsx(_components.p, {
      children: "Numeric text field for integer, decimal, and quantity values. Accept undefined for empty and show a unit label when\nprovided."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this number as the current value; omit it to show an empty field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value?: number) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the parsed number when the user edits, or undefined when the field is cleared."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the input in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the field is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "step"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: 'number | "any"'
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the input step value to control increments and precision."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the minimum allowed value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the maximum allowed value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "unitLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render a static unit label alongside the input when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "DateInput"
    }), "\n", jsx(_components.p, {
      children: "Date-only field for calendar values. Use a date picker or text input but keep the value string intact."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Render this date string as the current value (typically ", jsx(_components.code, {
              children: "YYYY-MM-DD"
            }), ")."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new date string whenever the user edits the field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the input in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the field is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the minimum allowed date value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the maximum allowed date value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "DateTimeInput"
    }), "\n", jsx(_components.p, {
      children: "Date and time field for combined values. Use a datetime picker or text input but keep the value string intact."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Render this date-time string as the current value (typically ", jsx(_components.code, {
              children: "YYYY-MM-DDTHH:mm"
            }), ")."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new date-time string whenever the user edits the field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the input in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the field is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the minimum allowed date-time value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the maximum allowed date-time value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TimeInput"
    }), "\n", jsx(_components.p, {
      children: "Time-only field for hours and minutes. Use a time picker or text input but keep the value string intact."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Render this time string as the current value (typically ", jsx(_components.code, {
              children: "HH:mm"
            }), ")."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new time string whenever the user edits the field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the input in a disabled state and prevent edits."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the field is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the minimum allowed time value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the maximum allowed time value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "SliderInput"
    }), "\n", jsx(_components.p, {
      children: "Range control for bounded numeric values. Show bounds and current value when available, and treat undefined as no\nselection."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this number as the current slider position; omit it to represent an unset value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value?: number) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new numeric value whenever the slider moves, or undefined if cleared."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the slider in a disabled state and prevent interaction."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the lower bound for the slider range."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the upper bound for the slider range."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "step"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the slider step increment."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the slider with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the slider with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "lowerLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Display this label near the minimum value marker when provided."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "upperLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Display this label near the maximum value marker when provided."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "unitLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render a unit label alongside the current value when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "SpinnerInput"
    }), "\n", jsx(_components.p, {
      children: "Numeric control with stepper affordances for small ranges. It should support typing, step changes, and min/max rules."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this number as the current value; omit it to represent an empty field."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(value?: number) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the new numeric value when the user edits or uses the stepper, or undefined when cleared."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the control in a disabled state and prevent interaction."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "min"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the lower bound for the value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "max"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the upper bound for the value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "step"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Apply as the step increment for the control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the input with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the input with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint when the field is empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "unitLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render a unit label alongside the input when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "SelectInput"
    }), "\n", jsx(_components.p, {
      children: "Single-select dropdown for option lists. Include disabled legacy entries in the options list when needed and allow\nclearing the selection when applicable."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "options"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these entries as selectable options in the dropdown."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "selectedOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "SelectedOptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this option as the current selection, or omit it when empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token?: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the newly selected option token, or undefined when the selection is cleared."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSearch"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(query: string) => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Call with the search query when the user types into the control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "specifyOtherOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render an extra option (for example, “Specify other”) alongside the options list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "customOptionForm"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render UI associated with the custom option (for example, a custom value input row)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the select element id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the select with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the select with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the select in a disabled state and prevent changes."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, show a loading indicator or disable option interactions as needed."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this hint in the input when no option is selected."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The renderer always provides ", jsx(_components.code, {
        children: "id"
      }), " for option-backed controls. Use it on the primary focusable element and for any\ncombobox/listbox wiring in custom select UIs."]
    }), "\n", jsx(_components.h3, {
      children: "RadioButton"
    }), "\n", jsx(_components.p, {
      children: "Single radio input used for table/grid selections or custom radio layouts."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the radio input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "groupName"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the radio group name to keep options exclusive."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the radio value."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "checked"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the radio as selected when true."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the user selects this radio."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the radio with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the radio with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the radio disabled and prevent selection."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render optional inline label content when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "RadioButtonList"
    }), "\n", jsx(_components.p, {
      children: "Single-select option list presented as radio buttons. Include disabled legacy options in the options list when needed."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "options"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these entries as radio options."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "selectedOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "SelectedOptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this option as the current selection, or omit it when empty."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token?: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the newly selected option token, or undefined when the selection is cleared."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "specifyOtherOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render an extra option (for example, “Specify other”) alongside the options list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "customOptionForm"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render UI associated with the custom option (for example, a custom value input row)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the radio group name/id so options stay grouped."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the group with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the group with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render options as disabled and prevent selection changes."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, show a loading indicator or busy state for the list."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Checkbox"
    }), "\n", jsx(_components.p, {
      children: "Single checkbox used for table/grid selections or custom checkbox layouts."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the checkbox input id so labels can target it."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "checked"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the checkbox as checked when true."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the user toggles this checkbox."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the checkbox with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the checkbox with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the checkbox disabled and prevent toggling."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render optional inline label content when provided."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "CheckboxList"
    }), "\n", jsx(_components.p, {
      children: "Multi-select option list presented as checkboxes. Support per-option errors and optional custom-option content."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "options"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these entries as checkbox options."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "selectedOptions"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "SelectedOptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these selections as checked options and use their tokens to match state."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSelect"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the option token when the user checks a box."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onDeselect"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the option token when the user unchecks a box."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "specifyOtherOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render an extra option (for example, “Specify other”) alongside the options list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "customOptionForm"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render UI associated with the custom option (for example, a custom value input row)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the checkbox group name/id so inputs stay grouped."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby to associate the group with its label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby to associate the group with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render all options as disabled and prevent changes."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, show a loading indicator or busy state for the list."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["If a selected option provides ", jsx(_components.code, {
        children: "errors"
      }), " or ", jsx(_components.code, {
        children: "ariaDescribedBy"
      }), ", render the error content near that option and attach\n", jsx(_components.code, {
        children: "aria-describedby"
      }), " to the option's focusable element."]
    }), "\n", jsx(_components.h3, {
      children: "MultiSelectInput"
    }), "\n", jsx(_components.p, {
      children: "Composite multi-select UI that combines a picker, chips, and optional custom-option content. It should display\nselections\nas chips and allow removal when permitted."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "options"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these entries as options in the picker dropdown."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "selectedOptions"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "SelectedOptionItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these selections as chips and use their tokens to filter options."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSelect"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the selected option token when the user picks an option."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onDeselect"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(token: string) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call with the selected token when the user removes a selection."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSearch"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(query: string) => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Call with the search query when the user types into the picker input."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so the combobox and listbox can be referenced."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "specifyOtherOption"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "OptionItem"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render an extra option (for example, “Specify other”) alongside the options list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby for the picker so it associates with the label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby for the picker so it associates with help or error text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the picker and chip actions in a disabled state."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, show a loading indicator or busy state for the options."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "customOptionForm"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render UI associated with the custom option (for example, a custom value input row)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "placeholder"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Show this placeholder text in the picker when no value is selected."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["When rendering chips or selected rows, attach ", jsx(_components.code, {
        children: "SelectedOptionItem.ariaDescribedBy"
      }), " to the focusable element for that\nselection so per-selection errors can be announced."]
    }), "\n", jsx(_components.h3, {
      children: "CustomOptionForm"
    }), "\n", jsx(_components.p, {
      children: "Layout wrapper for custom option entry flows. Use it to present the custom input along with submit/cancel actions."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "content"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the custom input control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render validation or error content associated with the custom input."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "submit"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "CustomOptionAction"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Configure the primary submit action (label, handler, disabled state)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "cancel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "CustomOptionAction"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Configure the secondary cancel action (label, handler, disabled state)."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Use ", jsx(_components.code, {
        children: "cancel"
      }), ' as the "back to options" action and ', jsx(_components.code, {
        children: "submit"
      }), " to commit the custom value."]
    }), "\n", jsx(_components.h3, {
      children: "FileInput"
    }), "\n", jsx(_components.p, {
      children: "Attachment picker that handles file selection, display of the selected file, and clearing. Call onChange for the raw\nfile (or undefined when clearing) so the renderer can update the Attachment."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "Attachment"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render this attachment as the current value; omit it when no file is selected."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "id"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Set as the input id so labels can target the underlying file input."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaLabelledBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Forward to aria-labelledby for the file input and any summary region."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby for the file input and any summary region."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, disable file selection and related actions."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "accept"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to the file input accept attribute to limit selectable file types."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(file?: File) => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Call with the selected file, or undefined when clearing the current file."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "AnswerList"
    }), "\n", jsx(_components.p, {
      children: "Container that lays out one or more answers and an optional add control. It controls spacing and ordering of answer\nrows."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the list of answer rows supplied by the renderer."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onAdd"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When provided, render an add‑answer control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "canAdd"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When false, render the add control disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "addLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the add‑answer label for icon-only controls."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "AnswerScaffold"
    }), "\n", jsx(_components.p, {
      children: "Layout for a single answer row, combining the main control, an optional remove action, and nested content such as child\nnodes and errors."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "control"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the main input control for this answer instance."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When provided, render a remove action for this answer."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "canRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When false, render the remove action disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render per-answer validation errors (Errors)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render nested content such as child nodes."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "QuestionScaffold"
    }), "\n", jsx(_components.p, {
      children: "Wrapper around a question that organizes header, control, and validation feedback. Use it as the outer shell for\nquestion nodes."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "header"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the question header (label, help, legal, flyover)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the question body content, including controls and answer-level errors."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render question-level validation errors."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "GroupList"
    }), "\n", jsx(_components.p, {
      children: "Wrapper around a repeating group that holds the collection of instances and the add control."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "header"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the header for the repeating group list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render each group instance inside the list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onAdd"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When provided, render an add‑group control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "canAdd"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When false, render the add control disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "addLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the add‑group label for icon-only controls."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "GroupScaffold"
    }), "\n", jsx(_components.p, {
      children: "Layout shell for a group instance (repeating or not). It can also render an optional remove action and errors."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "header"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the group header (label, help, legal, flyover)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the group body content and nested nodes."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render per-instance validation errors."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When provided, render a remove action for this instance."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "canRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When false, render the remove action disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "removeLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the remove label for icon-only controls."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Header"
    }), "\n", jsxs(_components.p, {
      children: ["Layout wrapper for group nodes rendered with ", jsx(_components.code, {
        children: 'control="header"'
      }), ". Use it to style and place header content such as\nsummary blocks or callouts above a group body."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the header content provided by the renderer."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Footer"
    }), "\n", jsxs(_components.p, {
      children: ["Layout wrapper for group nodes rendered with ", jsx(_components.code, {
        children: 'control="footer"'
      }), ". Use it to style and place footer content such as\nsummaries or actions below a group body."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the footer content provided by the renderer."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "DisplayRenderer"
    }), "\n", jsx(_components.p, {
      children: "Renderer for display-only nodes such as static text or markdown. It should not expose input controls."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the display text or markup provided by the renderer."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Stack"
    }), "\n", jsx(_components.p, {
      children: "List container that renders nodes in order. It should handle spacing and grouping."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsx(_components.tbody, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the node items provided by the renderer in order."
          })]
        })
      })]
    }), "\n", jsx(_components.h3, {
      children: "Form"
    }), "\n", jsx(_components.p, {
      children: "Outer wrapper for the questionnaire. If you render a form element, prevent default and call onSubmit; otherwise invoke\nonSubmit from your own controls. When pagination is provided, render prev/next controls and keep them aligned with\nsubmit/cancel."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onSubmit"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Call when the user submits; prevent default yourself if you render a form."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onCancel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Call when the user cancels the form flow (e.g., resets or exits)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "children"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render the full form content inside the form element."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "pagination"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "FormPagination"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render pagination controls and the current/total page context."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "title"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the form title text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "description"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the form description text."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the provided error element near the top of the form."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "before"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render content before the main form body (pinned headers)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "after"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render content after the main form body (actions, footers)."
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "Example patterns:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "  onSubmit"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{("
            }), jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "event"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    event."
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    onSubmit"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "?.();"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }}"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  {children}"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  {children}"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " type"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"button"'
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " onClick"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{onSubmit}>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    Submit"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  </"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "Table"
    }), "\n", jsxs(_components.p, {
      children: ["Tabular layout used by grid-style groups. Render headers and rows based on column and row metadata. Render a row header\ncolumn for the row ", jsx(_components.code, {
        children: "content"
      }), " values. When ", jsx(_components.code, {
        children: "isLoading"
      }), " or ", jsx(_components.code, {
        children: "errors"
      }), " are provided on a column or row, place them alongside\nthe header content."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "columns"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "TableColumn[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these column definitions as table headers."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "rows"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "TableRow[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these row definitions, including optional row header content and cell content."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TabContainer"
    }), "\n", jsx(_components.p, {
      children: "Tabbed layout for group panels. Render the active panel, wire ids for aria, and show errors when relevant."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Prop"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "header"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render the tab set header content (often the group label)."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "items"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "TabItem[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render each tab item, including its label and panel content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "value"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the active tab index to show the selected panel."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onChange"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "(index: number) => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the user selects a different tab."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render validation or status content associated with the tab set."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "linkId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsxs(_components.td, {
            children: ["Use for debugging; typically render as a ", jsx(_components.code, {
              children: "data-linkId"
            }), " attribute and feel free to ignore it."]
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Implement tabs with the standard ARIA roles, using ", jsx(_components.code, {
        children: "buttonId"
      }), " and ", jsx(_components.code, {
        children: "panelId"
      }), " to wire ", jsx(_components.code, {
        children: "aria-controls"
      }), " and\n", jsx(_components.code, {
        children: "aria-labelledby"
      }), "."]
    }), "\n", jsx(_components.h2, {
      children: "Data types"
    }), "\n", jsx(_components.p, {
      children: "Shared data structures referenced by theme component props."
    }), "\n", jsx(_components.h3, {
      children: "FormPagination"
    }), "\n", jsxs(_components.p, {
      children: ["Pagination state used by ", jsx(_components.code, {
        children: "Form"
      }), " when rendering paged questionnaires."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "current"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this as the current page number in the navigation UI."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "total"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render this as the total page count in the navigation UI."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onPrev"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the user activates the previous-page control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onNext"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the user activates the next-page control."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabledPrev"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "When true, render the previous-page control disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabledNext"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "When true, render the next-page control disabled."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "OptionItem"
    }), "\n", jsx(_components.p, {
      children: "Base option shape used by option selectors such as select inputs and radio lists."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as the stable option token for selection and updates; safe as a React key."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the visible label for the option; the renderer provides display-ready content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the option as unavailable and prevent selection."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "SelectedOptionItem"
    }), "\n", jsx(_components.p, {
      children: "Represents a selected option rendered as a chip or a single selection."
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as a stable identifier when rendering and updating selections; safe as a React key."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the selection's visible label, which may differ from the current options list."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the selection as unavailable."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ariaDescribedBy"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Forward to aria-describedby on the focusable element for this selection."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render as error content associated with this selection, near the option."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "CustomOptionAction"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the action label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onClick"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Call when the action is activated."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "disabled"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render the action disabled and prevent interaction."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "Attachment"
    }), "\n", jsxs(_components.p, {
      children: ["Attachment shape used by ", jsx(_components.code, {
        children: "FileInput"
      }), " to display metadata and stored content."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "title"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Display name or title to show for the attachment."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "url"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Link target for downloaded or referenced files."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "size"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "number"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Byte size for the attachment used for display."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "contentType"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "MIME type used for labeling or preview decisions."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "data"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Base64-encoded file content for inline attachments."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TableColumn"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as a stable identifier for the column."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "content"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the column header content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render a loading indicator near the content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render errors associated with the column header content."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TableRow"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as a stable identifier for the row."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "content"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the row header content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "cells"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "TableCell[]"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render these cells for the row, aligned to columns."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "isLoading"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When true, render a loading indicator near the content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "errors"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render errors associated with the row header content."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "onRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "() => void"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Invoke when the remove action is activated for this row."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "canRemove"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "boolean"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "When false, render the remove action disabled."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "removeLabel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Use as the label for icon-only remove controls."
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["When any row provides ", jsx(_components.code, {
        children: "onRemove"
      }), ", render a trailing remove-action column for all rows."]
    }), "\n", jsx(_components.h3, {
      children: "TableCell"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as a stable identifier for the cell."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "content"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "Yes"
          }), jsx(_components.td, {
            children: "Render as the cell content."
          })]
        })]
      })]
    }), "\n", jsx(_components.h3, {
      children: "TabItem"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Field"
          }), jsx(_components.th, {
            children: "Type"
          }), jsx(_components.th, {
            children: "Optional"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "token"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Use as a stable identifier for the tab; safe as a React key."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "label"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the tab button label."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "buttonId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply as the tab button id and use it for aria-controls."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "panelId"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "string"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Apply as the tab panel id and use it for aria-labelledby."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "content"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "ReactNode"
            })
          }), jsx(_components.td, {
            children: "No"
          }), jsx(_components.td, {
            children: "Render as the panel content for this tab."
          })]
        })]
      })]
    })]
  });
}
function MDXContent$4(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4(props);
}
const reference = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$4,
  frontmatter: frontmatter$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$3 = {
  "title": "Ant Design",
  "order": 1
};
function _createMdxContent$3(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Ant Design theme for Formbox Renderer."
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/antd-theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Include the compiled CSS:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/antd-theme/style.css"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Usage"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/antd-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />;"
            })]
          })]
        })
      })
    })]
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3(props);
}
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$3,
  frontmatter: frontmatter$3
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$2 = {
  "title": "Health Samurai",
  "order": 2
};
function _createMdxContent$2(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Health Samurai-styled theme for Formbox Renderer."
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/hs-theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Include the compiled CSS:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/hs-theme/style.css"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Usage"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/hs-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />;"
            })]
          })]
        })
      })
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "Mantine",
  "order": 3
};
function _createMdxContent$1(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Mantine theme for Formbox Renderer."
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/mantine-theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Include the compiled CSS:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/mantine-theme/style.css"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Usage"
    }), "\n", jsxs(_components.p, {
      children: ["Mantine components require ", jsx(_components.code, {
        children: "MantineProvider"
      }), " in the React tree.\nThis package re-exports it as ", jsx(_components.code, {
        children: "Provider"
      }), " so you can pass any Mantine provider props."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { Provider, theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/mantine-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Provider"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Provider"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">;"
            })]
          })]
        })
      })
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "NHS Design",
  "order": 4
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://service-manual.nhs.uk/design-system",
        children: "NHS Design"
      }), " theme for Formbox Renderer."]
    }), "\n", jsx(_components.h2, {
      children: "Install"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "pnpm"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " add"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " @formbox/nshuk-theme"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Include the compiled CSS:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/nshuk-theme/style.css"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Usage"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Renderer "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/renderer"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { theme } "
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ' "@formbox/nshuk-theme"'
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Renderer"
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " questionnaire"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{questionnaire} "
            }), jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "theme"
            }), jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme} />;"
            })]
          })]
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const PATH_RE = /\/(packages|themes)\/([^/]+)\/(?:doc|docs)\/(.+)\.(md|mdx)$/i;
const modules = /* @__PURE__ */ Object.assign({
  "../../../packages/renderer/doc/index.md": () => Promise.resolve().then(() => index$5),
  "../../../packages/theme/doc/behavior.md": () => Promise.resolve().then(() => behavior),
  "../../../packages/theme/doc/index.md": () => Promise.resolve().then(() => index$4),
  "../../../packages/theme/doc/reference.md": () => Promise.resolve().then(() => reference),
  "../../../themes/antd-theme/doc/index.md": () => Promise.resolve().then(() => index$3),
  "../../../themes/hs-theme/doc/index.md": () => Promise.resolve().then(() => index$2),
  "../../../themes/mantine-theme/doc/index.md": () => Promise.resolve().then(() => index$1),
  "../../../themes/nshuk-theme/doc/index.md": () => Promise.resolve().then(() => index)
});
const frontmatterByPath = /* @__PURE__ */ Object.assign({
  "../../../packages/renderer/doc/index.md": frontmatter$7,
  "../../../packages/theme/doc/behavior.md": frontmatter$6,
  "../../../packages/theme/doc/index.md": frontmatter$5,
  "../../../packages/theme/doc/reference.md": frontmatter$4,
  "../../../themes/antd-theme/doc/index.md": frontmatter$3,
  "../../../themes/hs-theme/doc/index.md": frontmatter$2,
  "../../../themes/mantine-theme/doc/index.md": frontmatter$1,
  "../../../themes/nshuk-theme/doc/index.md": frontmatter
});
const toPosix = (value) => value.replaceAll("\\", "/");
const routes = /* @__PURE__ */ new Map();
const availableThemesRoute = "/docs/themes/";
const coreGroup = {
  label: "",
  pages: [],
  href: void 0,
  icon: void 0
};
const availableThemesGroup = {
  label: "Available Themes",
  pages: [],
  href: availableThemesRoute,
  icon: "palette"
};
const themeBuilderGroup = {
  label: "Custom Theme",
  pages: [],
  href: void 0,
  icon: "paintbrush"
};
const sidebarTemplate = [
  { label: "Core", groups: [coreGroup], href: void 0, icon: "rocket" },
  {
    label: "Themes",
    groups: [availableThemesGroup, themeBuilderGroup],
    href: void 0,
    icon: "palette"
  }
];
const comparePages = (left, right) => {
  const leftOrder = left.order ?? Number.POSITIVE_INFINITY;
  const rightOrder = right.order ?? Number.POSITIVE_INFINITY;
  if (leftOrder !== rightOrder) return leftOrder - rightOrder;
  return left.label.localeCompare(right.label, void 0, {
    sensitivity: "base"
  });
};
for (const [filePath, load] of Object.entries(modules)) {
  const normalized = toPosix(filePath);
  const match = PATH_RE.exec(normalized);
  if (!match) continue;
  const theme = match[1] === "themes";
  const packageName = match[2];
  const slug = match[3];
  const isIndex = slug.toLowerCase() === "index";
  const route = isIndex ? `/docs/${packageName}/` : `/docs/${packageName}/${slug}/`;
  const title = frontmatterByPath[filePath]?.title;
  if (!title) {
    throw new Error(`Missing frontmatter title for ${filePath}`);
  }
  const order = frontmatterByPath[filePath]?.order;
  const sourcePath = normalized.replace(/^(\.\.\/)+/, "");
  const entry = {
    title,
    description: frontmatterByPath[filePath]?.description,
    load,
    sourcePath,
    icon: frontmatterByPath[filePath]?.icon
  };
  routes.set(route, entry);
  if (theme) {
    if (isIndex) {
      availableThemesGroup.pages.push({
        label: entry.title,
        href: route,
        matchPrefix: true,
        order,
        icon: entry.icon
      });
    }
  } else if (packageName === "renderer") {
    coreGroup.pages.push({
      label: entry.title,
      href: route,
      matchPrefix: false,
      order,
      icon: entry.icon
    });
  } else if (packageName === "theme") {
    if (isIndex) {
      themeBuilderGroup.href = route;
    }
    themeBuilderGroup.pages.push({
      label: entry.title,
      href: route,
      matchPrefix: false,
      order,
      icon: entry.icon
    });
  }
}
coreGroup.pages.sort(comparePages);
availableThemesGroup.pages.sort(comparePages);
themeBuilderGroup.pages.sort(comparePages);
const resolveSectionHref = (section) => {
  return section.groups.find((group) => group.href)?.href ?? section.groups.flatMap((group) => group.pages)[0]?.href;
};
const sidebar = sidebarTemplate.map((section) => {
  const groups = section.groups.filter((group) => group.pages.length > 0);
  return {
    ...section,
    groups,
    href: resolveSectionHref({ ...section, groups })
  };
}).filter((section) => section.groups.length > 0);
const flattenedSidebar = sidebar.flatMap(
  (section) => section.groups.flatMap(
    (group) => group.pages.map((page) => ({
      ...page,
      sectionLabel: section.label,
      sectionHref: section.href,
      groupLabel: group.label,
      groupHref: group.href
    }))
  )
);
const manifest = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  flattenedSidebar,
  routes,
  sidebar
}, Symbol.toStringTag, { value: "Module" }));
export {
  MDXProvider as M,
  manifest as m,
  routes as r,
  sidebar as s
};
