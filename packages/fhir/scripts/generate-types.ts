/* eslint-disable unicorn/prevent-abbreviations */
import {
  Node,
  Project,
  type EnumDeclaration,
  type InterfaceDeclaration,
  type PropertySignature,
  type SourceFile,
  type TypeAliasDeclaration,
  type TypeParameterDeclaration,
} from "ts-morph";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const r4Path = path.join(packageRoot, "node_modules/@types/fhir/r4.d.ts");
const r5Path = path.join(packageRoot, "node_modules/@types/fhir/r5.d.ts");
const outPath = path.join(packageRoot, "lib/generated-types.ts");

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

type ExclusionReason =
  (typeof EXCLUSION_REASONS)[keyof typeof EXCLUSION_REASONS];
type CommonTypeChoice = { text: string } | { reason: ExclusionReason };
type ExcludedField = {
  typeText: string;
  optional: boolean;
  reason: ExclusionReason;
};
type InterfaceInfo = {
  name: string;
  commonInterface: string;
  excluded: Map<string, ExcludedField>;
};
type R5DeclarationInfo =
  | { kind: "interface"; decl: InterfaceDeclaration }
  | { kind: "type"; decl: TypeAliasDeclaration }
  | { kind: "enum"; decl: EnumDeclaration };

function extractTypeNames(text: string): string[] {
  const scrubbed = text.replaceAll(/"[^"]*"|'[^']*'/g, "");
  const matches = scrubbed.match(/\b[A-Z][A-Za-z0-9_]*\b/g) ?? [];
  return matches.filter((name) => !BUILTIN_TYPE_NAMES.has(name));
}

function isTypeTextSafe(text: string, allowedNames: Set<string>): boolean {
  const scrubbed = text.replaceAll(/"[^"]*"|'[^']*'/g, "");
  const matches = scrubbed.match(/\b[A-Z][A-Za-z0-9_]*\b/g) ?? [];
  return matches.every(
    (name) => allowedNames.has(name) || BUILTIN_TYPE_NAMES.has(name),
  );
}

function getR5DeclarationOrThrow(name: string): R5DeclarationInfo {
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

function getInterfaceOrThrow(
  sourceFile: SourceFile,
  name: string,
): InterfaceDeclaration {
  const iface = sourceFile.getInterface(name);
  if (!iface) {
    throw new Error(`Missing interface ${name} in ${sourceFile.getBaseName()}`);
  }
  return iface;
}

function chooseCommonType(
  r4Prop: PropertySignature,
  r5Prop: PropertySignature,
): CommonTypeChoice {
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

function getAdapterOptional(
  r4Prop: PropertySignature | undefined,
  r5Prop: PropertySignature,
): boolean {
  if (!r4Prop) {
    return true;
  }
  return r4Prop.hasQuestionToken() || r5Prop.hasQuestionToken();
}

function analyzeInterface(name: string): InterfaceInfo {
  const r4Iface = getInterfaceOrThrow(r4File, name);
  const r5Iface = getInterfaceOrThrow(r5File, name);

  const r4Props = collectProperties(r4Iface);
  const r5Props = collectProperties(r5Iface);

  const commonNames = [...r4Props.keys()].filter((name) => r5Props.has(name));
  commonNames.sort();

  const lines: string[] = [];
  const excluded = new Map<string, ExcludedField>();
  for (const propName of commonNames) {
    const r4Prop = r4Props.get(propName);
    const r5Prop = r5Props.get(propName);
    if (!r4Prop || !r5Prop) continue;

    const commonType = chooseCommonType(r4Prop, r5Prop);
    if (!("text" in commonType)) {
      excluded.set(propName, {
        typeText: r5Prop.getType().getText(r5Prop),
        optional: getAdapterOptional(r4Prop, r5Prop),
        reason: commonType.reason,
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

function collectProperties(
  iface: InterfaceDeclaration,
  seen = new Set<string>(),
): Map<string, PropertySignature> {
  const properties = new Map<string, PropertySignature>();
  const name = iface.getName();
  if (name && seen.has(name)) {
    return properties;
  }
  if (name) {
    seen.add(name);
  }

  for (const base of iface.getBaseTypes()) {
    const declarations = base.getSymbol()?.getDeclarations() ?? [];
    for (const declaration of declarations) {
      if (!Node.isInterfaceDeclaration(declaration)) {
        continue;
      }
      const baseProps = collectProperties(declaration, seen);
      for (const [key, value] of baseProps) {
        properties.set(key, value);
      }
    }
  }

  for (const prop of iface.getProperties()) {
    properties.set(prop.getName(), prop);
  }

  return properties;
}

function getR5OnlyName(name: string): string {
  return name;
}

function toPascalCase(value: string): string {
  if (!value) {
    return value;
  }
  return value[0].toUpperCase() + value.slice(1);
}

function getAdapterMethodBase(propName: string): string {
  if (propName.startsWith("_")) {
    return `${toPascalCase(propName.slice(1))}Element`;
  }
  return toPascalCase(propName);
}

function rewriteTypeText(typeText: string, r5OnlyTypes: Set<string>): string {
  let rewritten = typeText;
  for (const name of r5OnlyTypes) {
    if (COMMON_TYPE_NAMES.has(name)) {
      continue;
    }
    const renamed = getR5OnlyName(name);
    rewritten = rewritten.replaceAll(
      new RegExp(String.raw`\b${name}\b`, "g"),
      renamed,
    );
  }
  return rewritten;
}

function collectR5OnlyTypesFromText(
  typeText: string,
  r5OnlyTypes: Set<string>,
  ignoredNames?: Set<string>,
): void {
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

function collectDependenciesFromDeclaration(
  info: R5DeclarationInfo,
  r5OnlyTypes: Set<string>,
): void {
  const typeParameters: TypeParameterDeclaration[] =
    info.kind === "enum" ? [] : info.decl.getTypeParameters();
  const ignoredNames = new Set(
    typeParameters.map((parameter) => parameter.getName()),
  );
  if (info.kind === "interface") {
    const properties = collectProperties(info.decl);
    for (const property of properties.values()) {
      const typeText = property.getType().getText(property);
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

function formatR5OnlyDeclaration(
  name: string,
  r5OnlyTypes: Set<string>,
  allowedNames: Set<string>,
): string {
  const info = getR5DeclarationOrThrow(name);
  const aliasName = getR5OnlyName(name);
  const typeParams: TypeParameterDeclaration[] =
    info.kind === "enum" ? [] : info.decl.getTypeParameters();
  const typeParamNames = typeParams.map((parameter) => parameter.getName());
  const allowedWithParams = new Set([...allowedNames, ...typeParamNames]);
  const typeParamText =
    typeParams.length > 0
      ? `<${typeParams
          .map((parameter) => {
            const parameterName = parameter.getName();
            const constraint = parameter.getConstraint();
            const defaultType = parameter.getDefault();
            const constraintText = constraint
              ? rewriteTypeText(constraint.getText(), r5OnlyTypes)
              : undefined;
            const defaultText = defaultType
              ? rewriteTypeText(defaultType.getText(), r5OnlyTypes)
              : undefined;
            let text = parameterName;
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
    const properties = collectProperties(info.decl);
    const propNames = [...properties.keys()];
    propNames.sort();
    const lines: string[] = [];
    for (const propName of propNames) {
      const property = properties.get(propName);
      if (!property) continue;
      const rawText = property.getType().getText(property);
      const typeText = rewriteTypeText(rawText, r5OnlyTypes);
      if (!isTypeTextSafe(typeText, allowedWithParams)) {
        throw new Error(
          `Unsafe type in R5-only ${name}.${propName}: ${rawText}`,
        );
      }
      const optional = property.hasQuestionToken() ? "?" : "";
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

const interfaceInfos = ROOT_TYPES.map((rootType) => analyzeInterface(rootType));

const r5OnlyTypes = new Set<string>();
for (const info of interfaceInfos) {
  for (const field of info.excluded.values()) {
    collectR5OnlyTypesFromText(field.typeText, r5OnlyTypes);
  }
}

const pending = [...r5OnlyTypes];
const processed = new Set<string>();
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
  "// Run: pnpm --filter @formbox/fhir generate-types",
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
      "",
    );
  }
}

await fs.writeFile(outPath, `${outputLines.join("\n")}\n`);
