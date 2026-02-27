import { computed, makeObservable } from "mobx";
import type { OperationOutcomeIssue } from "@formbox/fhir";

import { groupHasResponses, makeIssue } from "../../utilities.ts";
import type { IGroupNode, INodeValidator } from "../../types.ts";

export class GroupValidator implements INodeValidator {
  private readonly group: IGroupNode;

  constructor(group: IGroupNode) {
    this.group = group;

    makeObservable(this);
  }

  @computed
  get issues(): OperationOutcomeIssue[] {
    const strings = this.group.form.strings;

    if (this.group.readOnly || !this.group.isEnabled) {
      return [];
    }

    if (!this.group.form.isSubmitAttempted) {
      return [];
    }

    const hasResponses = groupHasResponses(this.group);

    const issues: OperationOutcomeIssue[] = [];

    if (this.group.minOccurs > 0 && !hasResponses) {
      issues.push(
        makeIssue("required", strings.validation.group.atLeastOneAnswer),
      );
    }

    if (
      this.group.signatureRequired &&
      this.group.signature == undefined &&
      hasResponses
    ) {
      issues.push(makeIssue("required", strings.validation.signature.required));
    }

    return issues;
  }
}
