import {
  IVariable,
  IScope,
  ExpressionEnvironment,
  IPresentableNode,
} from "../../../types.ts";
import { makeObservable, observable, ObservableMap } from "mobx";

export class DuplicateVariableNameError extends Error {
  constructor(public variableName: string) {
    super(`Variable name collision for "${variableName}".`);
  }
}

export class ReservedVariableNameError extends Error {
  constructor(public variableName: string) {
    super(`Variable name "${variableName}" is reserved by FHIRPath/SDC.`);
  }
}

const RESERVED_VARIABLE_NAMES = new Set([
  "resource",
  "context",
  "rootResource",
  "questionnaire",
  "qitem",
  "ucum",
  "sct",
  "loinc",
]);

export class Scope implements IScope {
  private parent: IScope | undefined;

  private readonly nodeRegistry:
    | ObservableMap<string, IPresentableNode>
    | undefined;

  private readonly variableRegistry = observable.map<string, IVariable>(
    {},
    { deep: false, name: "NodeScope.variableRegistry" },
  );

  constructor(ownsNodes: boolean) {
    makeObservable(this);

    this.nodeRegistry = ownsNodes
      ? observable.map<string, IPresentableNode>(
          {},
          { deep: false, name: "NodeScope.storeRegistry" },
        )
      : undefined;
  }

  mergeEnvironment(extra: ExpressionEnvironment): ExpressionEnvironment {
    // Proxy lets expressions read scoped variables as top-level properties while falling back to the provided extras.
    return new Proxy<ExpressionEnvironment>(extra, {
      get: (extra: ExpressionEnvironment, property: string) => {
        return Object.prototype.hasOwnProperty.call(extra, property)
          ? extra[property]
          : this.lookupVariable(property)?.value; // todo: exclude self name
      },
      has: (extra: ExpressionEnvironment, property: string) => {
        return (
          Object.prototype.hasOwnProperty.call(extra, property) ||
          !!this.lookupVariable(property) // todo: exclude self name
        );
      },
    });
  }

  extend(ownsNodes: boolean): IScope {
    const extended = new Scope(ownsNodes);
    extended.parent = this;
    return extended;
  }

  registerNode(node: IPresentableNode): void {
    if (this.nodeRegistry) {
      this.nodeRegistry.set(node.linkId, node);
      return;
    }
    this.parent?.registerNode(node);
  }

  lookupNode(linkId: string): IPresentableNode | undefined {
    if (this.nodeRegistry) {
      const node = this.nodeRegistry.get(linkId);
      if (node) {
        return node;
      }
    }
    return this.parent?.lookupNode(linkId);
  }

  lookupVariable(name: string): IVariable | undefined {
    return this.variableRegistry.get(name) ?? this.parent?.lookupVariable(name);
  }

  registerVariable(variable: IVariable): void {
    if (variable.name) {
      if (RESERVED_VARIABLE_NAMES.has(variable.name)) {
        throw new ReservedVariableNameError(variable.name);
      }

      const existing = this.variableRegistry.get(variable.name);
      if (existing && existing !== variable)
        throw new DuplicateVariableNameError(variable.name);

      this.variableRegistry.set(variable.name, variable);
    }
  }

  getParentScope(): IScope | undefined {
    return this.parent;
  }
}
