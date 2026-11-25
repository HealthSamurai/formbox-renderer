---
"@formbox/renderer": minor
"@formbox/htmx": minor
---

Delegate expression-based population to the host. The renderer no longer evaluates `initialExpression`; `itemPopulationContext` remains ignored. Populate the QuestionnaireResponse before rendering, for example with a server-side `Questionnaire/$populate` operation.

This removes previously supported client-side `initialExpression` behavior. Static `Questionnaire.item.initial` defaults and runtime expressions remain supported.
