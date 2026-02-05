import type {
  CodeableConcept,
  Element,
  ITriggerDefinitionAdapter,
  TriggerDefinition,
} from "../generated-types.ts";

export class TriggerDefinitionAdapter implements ITriggerDefinitionAdapter {
  getSubscriptionTopicElement(trigger: TriggerDefinition): Element | undefined {
    void trigger;
    return undefined;
  }

  setSubscriptionTopicElement(
    trigger: TriggerDefinition,
    value: Element | undefined,
  ): void {
    void trigger;
    void value;
  }

  getCode(trigger: TriggerDefinition): CodeableConcept | undefined {
    void trigger;
    return undefined;
  }

  setCode(
    trigger: TriggerDefinition,
    value: CodeableConcept | undefined,
  ): void {
    void trigger;
    void value;
  }

  getSubscriptionTopic(trigger: TriggerDefinition): string | undefined {
    void trigger;
    return undefined;
  }

  setSubscriptionTopic(
    trigger: TriggerDefinition,
    value: string | undefined,
  ): void {
    void trigger;
    void value;
  }
}
