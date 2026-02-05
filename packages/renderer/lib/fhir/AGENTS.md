# FHIR R4 and R5 Support Decisions

## TL;DR

We added R4 support by enforcing a strict adapter boundary and by generating shared FHIR types that include only fields common to R4 and R5 (no union intersections). Version-specific behavior lives in per-type adapters under `fhir/r4/*` and `fhir/r5/*`, surfaced through `fhir/fhir-adapter.ts`. The public API now exposes versioned types mapped directly to `fhir/r4` and `fhir/r5`, and `fhirVersion` is required at runtime.

## Constitutional Rules

These rules are the non-negotiable design constraints for R4/R5 support:

- **Adapter-only version logic**: Any version-specific behavior must live behind the adapter surface.
- **No adapter defaults**: Adapters return raw version data only. Renderer code owns all fallback/default decisions.
- **R5-shaped semantics**: Renderer logic assumes R5-style semantics (e.g., item types, constraints), even though it operates on common (R4∩R5) types.
- **R5 adapter must be pass-through**: For R5, adapters read/write fields as-is (no coercion).
- **R4 adapter is the converter**: For R4, adapters translate to/from R5-shaped semantics.
- **R5 is the type ground**: Generated common types are emitted using R5 typings and only include fields where the R4 type is assignable to the R5 type.
- **Optionality follows R5**: If R5 requires a field but R4 makes it optional, the field is excluded from common types and must go through the adapter. If R5 is optional and R4 is required, the field stays optional in common types.
- **Common types are enforced**: Renderer code must not import `fhir/*` or access version-only fields directly.
- **Explicit `fhirVersion`**: Version is always provided up front; nothing auto-detects or branches by field presence.
- **Generated types are the source of truth**: Internal FHIR types come only from the generated common set; do not hand-edit them.
- **No divergent unions**: If R4/R5 unions diverge, the field is excluded rather than intersected; renderer must go through the adapter.
- **Adapter adds new surface**: Any new version-specific field read/write requires a new adapter method (no direct reads or writes).
- **FHIRPath model is adapter-owned**: The renderer never imports or selects FHIRPath models directly.
- **Public API is versioned**: Exposed types are `*Of<V>` aliases from official `fhir/r4` and `fhir/r5`; internal common types never leak.

## Implementation Highlights

- `IFhirAdapter` / `createFhirAdapter(version)` is the only surface for version differences and exposes per-type adapters as properties.
- `scripts/gen-fhir-common-types.mjs` generates `generated-types.ts` from `@types/fhir` and excludes divergent unions.
- Renderer uses internal unions (`ItemType`) and adapter mapping for item type logic.
- Adapter owns diverging fields: `answerConstraint`, `disabledDisplay`, attachment size, FHIRPath model.
- Attachment size uses adapter get/set with **string** semantics (R5 pass-through, R4 stringify/parse).
- Lint enforces the adapter import boundary.
- Public API exports `*Of<V>` versioned types and requires `fhirVersion`.

## Public API Changes

- `@formbox/renderer` now re-exports versioned FHIR types from `packages/renderer/lib/index.tsx`.
- `fhir-runtime.ts` removed. Use `form.adapter.getFhirpathModel()` via `FormStore`.
- Renderer docs updated to recommend `@formbox/renderer` versioned types instead of `fhir/r5`.
- `fhirVersion` is required for the `Renderer` component and `FormStore` (first argument).

## Contributor Notes

- Do not import `fhir/*` outside the adapter.
- If you need a version-specific field, add a method to the generated `I<Type>Adapter` and implement it in both `fhir/r4/*` and `fhir/r5/*`. The umbrella adapter exposes it.
- If you add a new FHIR type to runtime usage, add it to `ROOT_TYPES` and regenerate.
- Any new version-specific logic must be adapter-only. Avoid `in` checks or field existence checks elsewhere.

## Files of Interest

- `packages/renderer/lib/fhir/fhir-adapter.ts`
- `packages/renderer/lib/fhir/generated-types.ts`
- `packages/renderer/lib/fhir/public-types.ts`
- `scripts/gen-fhir-common-types.mjs`
- `packages/renderer/lib/types.ts`
- `eslint.config.js`
