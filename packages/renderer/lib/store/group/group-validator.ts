import { computed, makeObservable } from "mobx";
import type { OperationOutcomeIssue } from "@formbox/fhir";

import { makeIssue } from "../../utilities.ts";
import type { IGroupNode, INodeValidator } from "../../types.ts";

export class GroupValidator implements INodeValidator {
  private readonly group: IGroupNode;

  constructor(group: IGroupNode) {
    this.group = group;

    makeObservable(this);
  }

  @computed
  get issues(): OperationOutcomeIssue[] {
    if (this.group.readOnly || !this.group.isEnabled) {
      return [];
    }

    if (!this.group.form.isSubmitAttempted || this.group.minOccurs === 0) {
      return [];
    }

    const hasResponses = this.group.nodes.some(
      (child) => child.responseItems.length > 0,
    );

    if (hasResponses) {
      return [];
    }

    const strings = this.group.form.strings;
    return [makeIssue("required", strings.validation.group.atLeastOneAnswer)];
  }
}
