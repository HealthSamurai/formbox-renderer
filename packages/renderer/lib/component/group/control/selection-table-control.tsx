import { observer } from "mobx-react-lite";
import type { IGroupNode } from "../../../types.ts";
import { NodeHeader } from "../../node/node-header.tsx";
import { renderErrors } from "../../node/errors.tsx";
import { useTheme } from "../../../ui/theme.tsx";
import { ValueDisplay } from "../../question/fhir/value-display.tsx";
import { SelectionTableCell } from "../component/selection-table-cell.tsx";
import { buildId } from "../../../utilities.ts";

export const SelectionTableControl = observer(function SelectionTableControl({
  node,
}: {
  node: IGroupNode;
}) {
  const { Table, Label, OptionDisplay } = useTheme();

  return node.control === "htable" ? (
    <Table
      columns={node.table.questions.map((question) => ({
        token: question.token,
        content: <NodeHeader node={question} as="text" />,
        isLoading: question.answerOption.select.isLoading,
        errors: renderErrors(question),
      }))}
      rows={node.table.optionAxis.map((option) => ({
        token: option.token,
        content: (
          <Label id={buildId(node.token, option.token)}>
            <OptionDisplay prefix={option.prefix}>
              <ValueDisplay type={option.answerType} value={option.value} />
            </OptionDisplay>
          </Label>
        ),
        cells: node.table.questions.map((question) => ({
          token: buildId(question.token, option.token),
          content: (
            <SelectionTableCell
              store={node.table}
              question={question}
              option={option}
              ariaLabelledBy={buildId(node.token, option.token)}
            />
          ),
        })),
      }))}
    />
  ) : (
    <Table
      columns={node.table.optionAxis.map((option) => ({
        token: option.token,
        content: (
          <Label id={buildId(node.token, option.token)}>
            <OptionDisplay prefix={option.prefix}>
              <ValueDisplay type={option.answerType} value={option.value} />
            </OptionDisplay>
          </Label>
        ),
      }))}
      rows={node.table.questions.map((question) => ({
        token: question.token,
        content: <NodeHeader node={question} as="text" />,
        isLoading: question.answerOption.select.isLoading,
        errors: renderErrors(question),
        cells: node.table.optionAxis.map((option) => ({
          token: buildId(question.token, option.token),
          content: (
            <SelectionTableCell
              store={node.table}
              question={question}
              option={option}
              ariaLabelledBy={buildId(node.token, option.token)}
            />
          ),
        })),
      }))}
    />
  );
});
