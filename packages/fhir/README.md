# @formbox/fhir

FHIR R4/R5 adapter implementations and shared types used by Formbox packages.

## When to use

Use this package if you need direct access to Formbox FHIR adapters or versioned FHIR type helpers outside `@formbox/renderer`.

If you are only rendering forms, install `@formbox/renderer` and a theme package instead.

## Install

```bash
pnpm add @formbox/fhir
# or
npm install @formbox/fhir
```

## TypeScript note

If you use versioned type helpers (`QuestionnaireOf`, `QuestionnaireResponseOf`, etc.), install `@types/fhir` in your app as a dev dependency.

```bash
pnpm add -D @types/fhir
# or
npm install -D @types/fhir
```

## Exports

This package exports:

- R4 and R5 adapter classes for supported datatypes/resources
- Adapter contracts and shared FHIR types used by the adapter layer
- Versioned public type helpers such as:
  - `FhirVersion`
  - `QuestionnaireOf<V>`
  - `QuestionnaireResponseOf<V>`
  - `QuestionnaireItemOf<V>`
  - `AttachmentOf<V>`

## Usage

### Choose versioned types

```ts
import type { QuestionnaireOf } from "@formbox/fhir";

const questionnaire: QuestionnaireOf<"r5"> = {
  resourceType: "Questionnaire",
  status: "active",
  item: [{ linkId: "name", text: "Name", type: "string" }],
};
```

### Use adapters for version-specific fields

```ts
import {
  R4AttachmentAdapter,
  R5AttachmentAdapter,
  type Attachment,
} from "@formbox/fhir";

const r4 = new R4AttachmentAdapter();
const r5 = new R5AttachmentAdapter();

const r4Attachment: Attachment = {};
const r5Attachment: Attachment = {};

r4.setSize(r4Attachment, "128");
r5.setSize(r5Attachment, "128");

// R4 stores numeric size, adapter bridges as string
// R5 stores string size directly
```

## Design notes

- R5 adapters are pass-through for R5-native fields.
- R4 adapters handle conversion for R4/R5 structural differences.
- Shared generated types are intentionally conservative and exclude divergent unions.

## Contributor workflow

Run from repo root:

```bash
pnpm --filter @formbox/fhir lint
pnpm --filter @formbox/fhir typecheck
pnpm --filter @formbox/fhir test
pnpm --filter @formbox/fhir build
```

## Regenerating common types

`generated-types.ts` is generated. Do not edit it by hand.

```bash
pnpm --filter @formbox/fhir generate-types
```
