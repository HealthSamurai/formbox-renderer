import { useStrings, type TableProperties } from "@formbox/theme";
import type { ReactElement, ReactNode } from "react";
import { Trash } from "../icons/trash.tsx";
import { IconButton } from "./icon-button.tsx";
import { LoadingSpinner } from "./loading-spinner.tsx";

export function Table({
  columns,
  rows,
}: TableProperties): ReactElement | undefined {
  const strings = useStrings();

  if (rows.length === 0 || columns.length === 0) {
    return <p className="italic text-slate-400">{strings.table.empty}</p>;
  }

  const hasRowHeader = rows.some((row) => row.content != undefined);
  const hasRowAction = rows.some((row) => row.onRemove != undefined);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {hasRowHeader && (
              <th
                scope="col"
                aria-hidden="true"
                className="border border-slate-200 p-2 text-left font-normal"
              />
            )}
            {columns.map((column) => (
              <th
                key={column.token}
                scope="col"
                style={{ width: column.width }}
                className="border border-slate-200 p-2 text-left font-normal"
              >
                {renderHeaderContent(column.content, column)}
              </th>
            ))}
            {hasRowAction && (
              <th
                scope="col"
                aria-hidden="true"
                className="border border-slate-200 p-2 text-left font-normal"
              />
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.token}>
              {hasRowHeader && (
                <th
                  scope="row"
                  className="min-w-40 border border-slate-200 p-2 text-left font-normal"
                >
                  {renderHeaderContent(row.content, row)}
                </th>
              )}
              {row.cells.map((cell, index) => (
                <td
                  key={cell.token}
                  style={{ width: columns[index]?.width }}
                  className="border border-slate-200 p-2 align-top"
                >
                  {cell.content}
                </td>
              ))}
              {hasRowAction && (
                <td className="border border-slate-200 p-2 align-top">
                  {row.onRemove && (
                    <IconButton
                      icon={<Trash />}
                      onClick={row.onRemove}
                      disabled={row.canRemove === false}
                      label={strings.group.removeSection}
                    />
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type TableMeta = {
  isLoading?: boolean | undefined;
  errors?: ReactNode | undefined;
};

function renderHeaderContent(content: ReactNode, meta: TableMeta) {
  if (!meta.isLoading && !meta.errors) {
    return content;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="inline-flex flex-wrap items-center gap-1.5">
        {content}
        {meta.isLoading && <LoadingSpinner />}
      </div>
      {meta.errors ? (
        <div className="flex flex-col gap-1">{meta.errors}</div>
      ) : undefined}
    </div>
  );
}
