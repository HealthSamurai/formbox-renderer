import type {
  CodeableConcept,
  Element,
  ITriggerDefinitionAdapter,
  TriggerDefinition,
} from "../generated-types.ts";
import type { TriggerDefinition as R5TriggerDefinition } from "fhir/r5";

export class TriggerDefinitionAdapter implements ITriggerDefinitionAdapter {
  getSubscriptionTopicElement(trigger: TriggerDefinition): Element | undefined {
    return (trigger as R5TriggerDefinition)._subscriptionTopic as
      | Element
      | undefined;
  }

  setSubscriptionTopicElement(
    trigger: TriggerDefinition,
    value: Element | undefined,
  ): void {
    (trigger as R5TriggerDefinition)._subscriptionTopic =
      value as R5TriggerDefinition["_subscriptionTopic"];
  }

  getCode(trigger: TriggerDefinition): CodeableConcept | undefined {
    return (trigger as R5TriggerDefinition).code as CodeableConcept | undefined;
  }

  setCode(
    trigger: TriggerDefinition,
    value: CodeableConcept | undefined,
  ): void {
    (trigger as R5TriggerDefinition).code =
      value as R5TriggerDefinition["code"];
  }

  getSubscriptionTopic(trigger: TriggerDefinition): string | undefined {
    return (trigger as R5TriggerDefinition).subscriptionTopic as
      | string
      | undefined;
  }

  setSubscriptionTopic(
    trigger: TriggerDefinition,
    value: string | undefined,
  ): void {
    (trigger as R5TriggerDefinition).subscriptionTopic =
      value as R5TriggerDefinition["subscriptionTopic"];
  }
}
