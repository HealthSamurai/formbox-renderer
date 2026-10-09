import { styled } from "@linaria/react";
import type { OptionColumn } from "@formbox/theme";

function gridTemplate(columns: readonly OptionColumn[]) {
  return columns.map((column) => column.width ?? "minmax(0, 1fr)").join(" ");
}

export function OptionColumnsHeader({
  columns,
}: {
  columns: readonly OptionColumn[];
}) {
  if (columns.every((column) => column.label === undefined)) {
    return;
  }

  return (
    <Header
      aria-hidden="true"
      style={{ gridTemplateColumns: gridTemplate(columns) }}
    >
      {columns.map((column, index) => (
        <Cell key={index} title={column.label}>
          {column.label}
        </Cell>
      ))}
    </Header>
  );
}

export function OptionCells({
  columns,
  cells,
}: {
  columns: readonly OptionColumn[];
  cells: readonly string[];
}) {
  return (
    <Row style={{ gridTemplateColumns: gridTemplate(columns) }}>
      {columns.map((_, index) => (
        <Cell key={index} title={cells[index]}>
          {cells[index]}
        </Cell>
      ))}
    </Row>
  );
}

const Row = styled.span`
  display: grid;
  gap: 0.75rem;
  width: 100%;
`;

const Header = styled.div`
  display: grid;
  gap: 0.75rem;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0.5rem 0.75rem;
  background: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
`;

const Cell = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
