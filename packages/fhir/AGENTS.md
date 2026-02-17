# FHIR R4 and R5 Support Decisions

## TL;DR

`@formbox/fhir` owns shared R4/R5-compatible types and per-version adapters under `lib/r4/*` and `lib/r5/*`.

## Constitutional Rules

These rules are non-negotiable for work in this package:

- **Adapter-only version logic**: Version-specific behavior must live in adapters.
- **R5 adapter is pass-through**: R5 adapters read/write fields as-is.
- **R4 adapter is converter**: R4 adapters convert to/from R5-shaped semantics where needed.
- **R5 is type ground**: Generated common types use R5 typing and keep fields only when R4 is assignable to R5.
- **Optionality follows R5**: If R5 requires a field but R4 does not, the field must be adapter-only.
- **No divergent unions in common types**: Divergent unions are excluded and handled via adapter methods.
- **Generated types are source of truth**: Do not hand-edit `generated-types.ts`.
- **Public API is versioned**: Expose versioned aliases via `*Of<V>`; keep internals encapsulated.

## Implementation Highlights

- `scripts/generate-types.ts` generates `lib/generated-types.ts` from `@types/fhir`.
- `lib/r4/*` and `lib/r5/*` provide concrete implementations for generated adapter interfaces.
- `lib/index.ts` exports adapter classes and public type surface.
- Adapter methods cover version-differing fields such as attachment size, questionnaire item constraints/display behavior, and other R4/R5 structural differences.

## Public API

- Package: `@formbox/fhir`
- Runtime exports: adapter classes for R4 and R5 resource/datatype handling.
- Type exports:
  - Generated common/internal types from `lib/generated-types.ts`
  - Versioned public aliases from `lib/public-types.ts`

## Contributor Notes

- Do not import `fhir/*` outside adapter implementation files.
- For any new R4/R5 divergence, add generated adapter methods and implement both `r4` and `r5` variants.
- If a new FHIR type is needed at runtime, add it to `ROOT_TYPES` in `scripts/generate-types.ts` and regenerate.

## Files of Interest

- `packages/fhir/lib/index.ts`
- `packages/fhir/lib/generated-types.ts`
- `packages/fhir/lib/public-types.ts`
- `packages/fhir/lib/r4/`
- `packages/fhir/lib/r5/`
- `packages/fhir/scripts/generate-types.ts`
