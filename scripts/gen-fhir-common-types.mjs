import { Project } from "ts-morph";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const r4Path = path.join(
  repoRoot,
  "packages/renderer/node_modules/@types/fhir/r4.d.ts",
);
const r5Path = path.join(
  repoRoot,
  "packages/renderer/node_modules/@types/fhir/r5.d.ts",
);
const outPath = path.join(
  repoRoot,
  "packages/renderer/lib/fhir/generated-types.ts",
);

const ROOT_TYPES = [
  "BackboneElement",
  "Element",
  "Extension",
  "Meta",
  "Coding",
  "CodeableConcept",
  "Reference",
  "Quantity",
  "Attachment",
  "Period",
  "Range",
  "Ratio",
  "Timing",
  "UsageContext",
  "RelatedArtifact",
  "DataRequirement",
  "ParameterDefinition",
  "ContactDetail",
  "ContactPoint",
  "Identifier",
  "Annotation",
  "HumanName",
  "Address",
  "Age",
  "Count",
  "Distance",
  "Duration",
  "Money",
  "SampledData",
  "Signature",
  "Expression",
  "TriggerDefinition",
  "ValueSetExpansionContains",
  "ValueSetExpansion",
  "ValueSet",
  "QuestionnaireItemEnableWhen",
  "QuestionnaireItemAnswerOption",
  "QuestionnaireItemInitial",
  "QuestionnaireItem",
  "Questionnaire",
  "QuestionnaireResponseItemAnswer",
  "QuestionnaireResponseItem",
  "QuestionnaireResponse",
  "OperationOutcomeIssue",
];
const COMMON_TYPE_NAMES = new Set(ROOT_TYPES);
const BUILTIN_TYPE_NAMES = new Set([
  "Array",
  "Record",
  "Map",
  "Set",
  "ReadonlyArray",
  "ReadonlyMap",
  "ReadonlySet",
]);
const EXCLUSION_REASONS = {
  missingInR4: "r5-only-field",
  optionalMismatch: "optional-mismatch",
  typeNotAssignable: "type-not-assignable",
  unsafeType: "r5-only-type",
};

function extractTypeNames(text) {
  const scrubbed = text.replaceAll(/"[^"]*"|'[^']*'/g, "");
  const matches = scrubbed.match(/\b[A-Z][A-Za-z0-9_]*\b/g) ?? [];
  return matches.filter((name) => !BUILTIN_TYPE_NAMES.has(name));
}

function isTypeTextSafe(text, allowedNames) {
  const scrubbed = text.replaceAll(/"[^"]*"|'[^']*'/g, "");
  const matches = scrubbed.match(/\b[A-Z][A-Za-z0-9_]*\b/g) ?? [];
  return matches.every(
    (name) => allowedNames.has(name) || BUILTIN_TYPE_NAMES.has(name),
  );
}

function getR5DeclarationOrThrow(name) {
  const iface = r5File.getInterface(name);
  if (iface) {
    return { kind: "interface", decl: iface };
  }
  const alias = r5File.getTypeAlias(name);
  if (alias) {
    return { kind: "type", decl: alias };
  }
  const enumDecl = r5File.getEnum(name);
  if (enumDecl) {
    return { kind: "enum", decl: enumDecl };
  }
  throw new Error(`Missing type ${name} in ${r5File.getBaseName()}`);
}

const project = new Project({
  compilerOptions: {
    allowJs: false,
    skipLibCheck: true,
    strict: true,
  },
});

const r4File = project.addSourceFileAtPath(r4Path);
const r5File = project.addSourceFileAtPath(r5Path);
const checker = project.getTypeChecker();

function getInterfaceOrThrow(sourceFile, name) {
  const iface = sourceFile.getInterface(name);
  if (!iface) {
    throw new Error(`Missing interface ${name} in ${sourceFile.getBaseName()}`);
  }
  return iface;
}

function chooseCommonType(r4Prop, r5Prop) {
  const r4Type = r4Prop.getType();
  const r5Type = r5Prop.getType();
  const r4Text = r4Type.getText(r4Prop);
  const r5Text = r5Type.getText(r5Prop);

  const r4Optional = r4Prop.hasQuestionToken();
  const r5Optional = r5Prop.hasQuestionToken();
  if (r4Optional && !r5Optional) {
    // R5 required but R4 optional -> must go through adapter.
    return { reason: EXCLUSION_REASONS.optionalMismatch };
  }

  if (r4Text === r5Text) {
    return { text: r5Text };
  }

  const r4AssignableToR5 = checker.isTypeAssignableTo(r4Type, r5Type);

  // R5 is the ground. Keep only when R4 fits into R5, and emit R5 typing.
  if (!r4AssignableToR5) {
    // Do not generate intersections of divergent unions. Force adapter usage.
    return { reason: EXCLUSION_REASONS.typeNotAssignable };
  }

  return { text: r5Text };
}

function getAdapterOptional(r4Prop, r5Prop) {
  if (!r4Prop) {
    return true;
  }
  return r4Prop.hasQuestionToken() || r5Prop.hasQuestionToken();
}

function analyzeInterface(name) {
  const r4Iface = getInterfaceOrThrow(r4File, name);
  const r5Iface = getInterfaceOrThrow(r5File, name);

  const r4Props = collectProperties(r4Iface);
  const r5Props = collectProperties(r5Iface);

  const commonNames = [...r4Props.keys()].filter((name) => r5Props.has(name));
  commonNames.sort();

  const lines = [];
  const excluded = new Map();
  for (const propName of commonNames) {
    const r4Prop = r4Props.get(propName);
    const r5Prop = r5Props.get(propName);
    if (!r4Prop || !r5Prop) continue;

    const commonType = chooseCommonType(r4Prop, r5Prop);
    if (!commonType?.text) {
      excluded.set(propName, {
        typeText: r5Prop.getType().getText(r5Prop),
        optional: getAdapterOptional(r4Prop, r5Prop),
        reason: commonType?.reason ?? EXCLUSION_REASONS.typeNotAssignable,
      });
      continue;
    }

    const optional = r5Prop.hasQuestionToken() ? "?" : "";
    if (!isTypeTextSafe(commonType.text, COMMON_TYPE_NAMES)) {
      excluded.set(propName, {
        typeText: r5Prop.getType().getText(r5Prop),
        optional: getAdapterOptional(r4Prop, r5Prop),
        reason: EXCLUSION_REASONS.unsafeType,
      });
      continue;
    }
    lines.push(`  ${propName}${optional}: ${commonType.text};`);
  }

  const missingInR4 = [...r5Props.keys()].filter(
    (propName) => !r4Props.has(propName),
  );
  missingInR4.sort();
  for (const propName of missingInR4) {
    const r5Prop = r5Props.get(propName);
    if (!r5Prop) continue;
    excluded.set(propName, {
      typeText: r5Prop.getType().getText(r5Prop),
      optional: true,
      reason: EXCLUSION_REASONS.missingInR4,
    });
  }

  return {
    name,
    commonInterface: `export interface ${name} {\n${lines.join("\n")}\n}`,
    excluded,
  };
}

function collectProperties(iface, seen = new Set()) {
  const props = new Map();
  const name = iface.getName();
  if (name && seen.has(name)) {
    return props;
  }
  if (name) {
    seen.add(name);
  }

  for (const base of iface.getBaseTypes()) {
    const decl = base
      .getSymbol()
      ?.getDeclarations()
      .find((candidate) => candidate.getKindName() === "InterfaceDeclaration");
    if (decl) {
      const baseProps = collectProperties(decl, seen);
      for (const [key, value] of baseProps) {
        props.set(key, value);
      }
    }
  }

  for (const prop of iface.getProperties()) {
    props.set(prop.getName(), prop);
  }

  return props;
}

function getR5OnlyName(name) {
  return name;
}

function toPascalCase(value) {
  if (!value) {
    return value;
  }
  return value[0].toUpperCase() + value.slice(1);
}

function getAdapterMethodBase(propName) {
  if (propName.startsWith("_")) {
    return `${toPascalCase(propName.slice(1))}Element`;
  }
  return toPascalCase(propName);
}

function rewriteTypeText(typeText, r5OnlyTypes) {
  let rewritten = typeText;
  for (const name of r5OnlyTypes) {
    if (COMMON_TYPE_NAMES.has(name)) {
      continue;
    }
    const renamed = getR5OnlyName(name);
    rewritten = rewritten.replaceAll(new RegExp(`\\b${name}\\b`, "g"), renamed);
  }
  return rewritten;
}

function collectR5OnlyTypesFromText(typeText, r5OnlyTypes, ignoredNames) {
  const names = extractTypeNames(typeText);
  for (const name of names) {
    if (ignoredNames?.has(name)) {
      continue;
    }
    if (COMMON_TYPE_NAMES.has(name)) {
      continue;
    }
    if (
      !r5File.getInterface(name) &&
      !r5File.getTypeAlias(name) &&
      !r5File.getEnum(name)
    ) {
      continue;
    }
    r5OnlyTypes.add(name);
  }
}

function collectDependenciesFromDeclaration(info, r5OnlyTypes) {
  const ignoredNames = new Set(
    info.decl.getTypeParameters?.().map((param) => param.getName()) ?? [],
  );
  if (info.kind === "interface") {
    const props = collectProperties(info.decl);
    for (const prop of props.values()) {
      const typeText = prop.getType().getText(prop);
      collectR5OnlyTypesFromText(typeText, r5OnlyTypes, ignoredNames);
    }
    return;
  }

  if (info.kind === "type") {
    const node = info.decl.getTypeNode();
    const typeText = node ? node.getText() : info.decl.getType().getText();
    collectR5OnlyTypesFromText(typeText, r5OnlyTypes, ignoredNames);
  }
}

function formatR5OnlyDeclaration(name, r5OnlyTypes, allowedNames) {
  const info = getR5DeclarationOrThrow(name);
  const aliasName = getR5OnlyName(name);
  const typeParams = info.decl.getTypeParameters?.() ?? [];
  const typeParamNames = typeParams.map((param) => param.getName());
  const allowedWithParams = new Set([...allowedNames, ...typeParamNames]);
  const typeParamText =
    typeParams.length > 0
      ? `<${typeParams
          .map((param) => {
            const name = param.getName();
            const constraint = param.getConstraint();
            const defaultType = param.getDefault();
            const constraintText = constraint
              ? rewriteTypeText(constraint.getText(), r5OnlyTypes)
              : undefined;
            const defaultText = defaultType
              ? rewriteTypeText(defaultType.getText(), r5OnlyTypes)
              : undefined;
            let text = name;
            if (constraintText) {
              text += ` extends ${constraintText}`;
            }
            if (defaultText) {
              text += ` = ${defaultText}`;
            }
            return text;
          })
          .join(", ")}>`
      : "";

  if (info.kind === "interface") {
    const props = collectProperties(info.decl);
    const propNames = [...props.keys()];
    propNames.sort();
    const lines = [];
    for (const propName of propNames) {
      const prop = props.get(propName);
      if (!prop) continue;
      const rawText = prop.getType().getText(prop);
      const typeText = rewriteTypeText(rawText, r5OnlyTypes);
      if (!isTypeTextSafe(typeText, allowedWithParams)) {
        throw new Error(
          `Unsafe type in R5-only ${name}.${propName}: ${rawText}`,
        );
      }
      const optional = prop.hasQuestionToken() ? "?" : "";
      lines.push(`  ${propName}${optional}: ${typeText};`);
    }
    return `export interface ${aliasName}${typeParamText} {\n${lines.join("\n")}\n}`;
  }

  if (info.kind === "type") {
    const node = info.decl.getTypeNode();
    const rawText = node ? node.getText() : info.decl.getType().getText();
    const typeText = rewriteTypeText(rawText, r5OnlyTypes);
    if (!isTypeTextSafe(typeText, allowedWithParams)) {
      throw new Error(`Unsafe type alias in R5-only ${name}: ${rawText}`);
    }
    return `export type ${aliasName}${typeParamText} = ${typeText};`;
  }

  const members = info.decl
    .getMembers()
    .map((member) => {
      const value = member.getValue();
      if (typeof value === "string") {
        return `"${value}"`;
      }
      if (typeof value === "number") {
        return `${value}`;
      }
      return `"${member.getName()}"`;
    })
    .join(" | ");
  return `export type ${aliasName} = ${members};`;
}

const interfaceInfos = ROOT_TYPES.map(analyzeInterface);

const r5OnlyTypes = new Set();
for (const info of interfaceInfos) {
  for (const field of info.excluded.values()) {
    collectR5OnlyTypesFromText(field.typeText, r5OnlyTypes);
  }
}

const pending = [...r5OnlyTypes];
const processed = new Set();
while (pending.length > 0) {
  const name = pending.pop();
  if (!name) continue;
  if (processed.has(name)) {
    continue;
  }
  processed.add(name);
  const info = getR5DeclarationOrThrow(name);
  const beforeSize = r5OnlyTypes.size;
  collectDependenciesFromDeclaration(info, r5OnlyTypes);
  if (r5OnlyTypes.size > beforeSize) {
    for (const depName of r5OnlyTypes) {
      if (processed.has(depName)) {
        continue;
      }
      if (!pending.includes(depName)) {
        pending.push(depName);
      }
    }
  }
}

const r5OnlyAliasNames = new Set(
  [...r5OnlyTypes].map((name) => getR5OnlyName(name)),
);
const adapterAllowedNames = new Set([
  ...COMMON_TYPE_NAMES,
  ...r5OnlyAliasNames,
]);

const outputLines = [
  "// This file is auto-generated. Do not edit directly.",
  "// Run: pnpm --filter @formbox/renderer gen:fhir-types",
  "",
  'export type FhirVersion = "r4" | "r5";',
  "",
];

for (const info of interfaceInfos) {
  outputLines.push(info.commonInterface);

  if (info.excluded.size > 0) {
    const adapterLines = [];
    const excludedNames = [...info.excluded.keys()];
    excludedNames.sort();
    for (const propName of excludedNames) {
      const field = info.excluded.get(propName);
      if (!field) continue;
      const typeText = rewriteTypeText(field.typeText, r5OnlyTypes);
      if (!isTypeTextSafe(typeText, adapterAllowedNames)) {
        throw new Error(
          `Unsafe excluded type in ${info.name}.${propName}: ${field.typeText}`,
        );
      }
      const methodBase = getAdapterMethodBase(propName);
      const targetName = `${info.name[0].toLowerCase()}${info.name.slice(1)}`;
      adapterLines.push(
        `  get${methodBase}(${targetName}: ${info.name}): ${typeText}; // ${field.reason}`,
      );
      adapterLines.push(
        `  set${methodBase}(${targetName}: ${info.name}, value: ${typeText}): void;`,
      );
    }

    const adapterName = `I${info.name}Adapter`;
    outputLines.push(
      `export interface ${adapterName} {\n${adapterLines.join("\n")}\n}`,
    );
  }

  outputLines.push("");
}

if (r5OnlyTypes.size > 0) {
  const sortedR5Only = [...r5OnlyTypes];
  sortedR5Only.sort();
  for (const name of sortedR5Only) {
    outputLines.push(
      formatR5OnlyDeclaration(name, r5OnlyTypes, adapterAllowedNames),
    );
    outputLines.push("");
  }
}

await fs.writeFile(outPath, `${outputLines.join("\n")}\n`);
