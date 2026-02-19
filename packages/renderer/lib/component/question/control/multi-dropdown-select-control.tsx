import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import type { AnswerType, IQuestionNode, OptionItem } from "../../../types.ts";
import { useTheme } from "../../../ui/theme.tsx";
import { renderErrors } from "../../node/errors.tsx";
import { getValueControl } from "../fhir/value-control.ts";
import { ValueDisplay } from "../fhir/value-display.tsx";
import { strings } from "../../../strings.ts";
import {
  buildId,
  concatIds,
  getIssueErrorId,
  getNodeHelpId,
  getNodeLabelId,
} from "../../../utilities.ts";

export const MultiDropdownSelectControl = observer(
  function MultiDropdownSelectControl<T extends AnswerType>({
    node,
  }: {
    node: IQuestionNode<T>;
  }) {
    const { MultiSelectInput, CustomOptionForm, OptionDisplay } = useTheme();
    const store = node.answerOption.select;
    const CustomControl = getValueControl(store.customType);

    const selectedOptions = store.selectedOptions.map((selection) => ({
      token: selection.token,
      label: (
        <OptionDisplay prefix={selection.prefix}>
          <ValueDisplay type={selection.answerType} value={selection.value} />
        </OptionDisplay>
      ),
      ariaDescribedBy: getIssueErrorId(selection.answer),
      errors: renderErrors(selection.answer),
      disabled: selection.disabled,
    }));

    const formState = store.customOptionFormState;

    const customOptionForm = formState ? (
      <CustomOptionForm
        content={
          <CustomControl
            answer={formState.answer}
            id={buildId(formState.answer.token, "custom-input")}
            ariaLabelledBy={getNodeLabelId(node)}
            ariaDescribedBy={getIssueErrorId(formState.answer)}
          />
        }
        errors={renderErrors(formState.answer)}
        cancel={{
          label: strings.dialog.cancel,
          onClick: store.cancelCustomOptionForm,
        }}
        submit={{
          label: strings.dialog.add,
          onClick: store.submitCustomOptionForm,
          disabled: !formState.canSubmit,
        }}
      />
    ) : undefined;

    const options = useMemo<OptionItem[]>(() => {
      return store.filteredOptions.map((entry) => ({
        token: entry.token,
        disabled: entry.disabled,
        label: (
          <OptionDisplay prefix={entry.prefix}>
            <ValueDisplay type={entry.answerType} value={entry.value} />
          </OptionDisplay>
        ),
      }));
    }, [OptionDisplay, store.filteredOptions]);

    const specifyOtherOption = store.allowCustom
      ? {
          token: store.specifyOtherToken,
          label: node.openLabel ?? strings.selection.specifyOther,
          disabled: !store.canAddSelection || store.isLoading,
        }
      : undefined;

    return (
      <MultiSelectInput
        options={options}
        onSelect={store.selectOption}
        onDeselect={store.deselectOption}
        onSearch={store.setSearchQuery}
        specifyOtherOption={specifyOtherOption}
        id={buildId(node.token, "multi-select")}
        ariaLabelledBy={getNodeLabelId(node)}
        ariaDescribedBy={concatIds(getNodeHelpId(node), getIssueErrorId(node))}
        disabled={node.readOnly}
        isLoading={store.isLoading}
        selectedOptions={selectedOptions}
        customOptionForm={customOptionForm}
        placeholder={strings.selection.selectPlaceholder}
      />
    );
  },
);
