export type RendererDefinitionLike<TNode> = {
  priority: number;
  matcher: (node: TNode) => boolean;
};

export class RendererRegistry<
  TNode,
  TDefinition extends RendererDefinitionLike<TNode>,
> {
  private readonly definitions: TDefinition[];

  constructor(initialDefinitions: TDefinition[] = []) {
    this.definitions = initialDefinitions.toSorted(
      (a, b) => b.priority - a.priority,
    );
  }

  resolve(node: TNode): TDefinition | undefined {
    return this.definitions.find((definition) => definition.matcher(node));
  }
}
