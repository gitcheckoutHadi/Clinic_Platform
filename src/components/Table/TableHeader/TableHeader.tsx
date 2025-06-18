import React, { SetStateAction, useEffect, useState } from "react";
import {
  CellCust,
  ResizeHandle,
  TableDNd,
  TableHeaderActionCell,
  TableHeaderCell,
  TableHeaderRow,
} from "./TableHeader.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";
import { useTranslation } from "react-i18next";
import { SvgAsc, SvgDes, SvgDND } from "../../../elements/Icons";
import { Action } from "../TableInterface";

interface TableHeaderInterface {
  columns: TableHeaderDataInterface[];

  flexWidths?: number[];
  minWidth?: string[];
  sortOrder: "asc" | "desc";
  sortColumn: number;
  onSort: (columnIndex: number) => void;
  showExpand?: boolean;
  Action?: Action[];
  columnOrder: TableHeaderDataInterface[];
  setColumnOrder: React.Dispatch<SetStateAction<TableHeaderDataInterface[]>>;
  // columnWidths: string[];
  handleMouseDown: any;
}

const TableHeader = ({
  columns,
  columnOrder,
  setColumnOrder,
  flexWidths = [],
  minWidth = [],
  sortOrder,
  sortColumn,
  onSort,
  showExpand,
  Action,
  // columnWidths,
  handleMouseDown,
}: TableHeaderInterface) => {
  const { t } = useTranslation();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    if (index > 0) {
      setDraggedIndex(index);
    }
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    if (index > 0) {
      e.preventDefault();
    }
  };

  const handleDrop = (dropIndex: number) => {
    if (
      draggedIndex === 0 ||
      draggedIndex === null ||
      draggedIndex === dropIndex
    )
      return;
    const newOrder = [...columnOrder];
    const [draggedItem] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(dropIndex, 0, draggedItem);
    setColumnOrder(newOrder);
    setDraggedIndex(null);
  };

  return (
    <TableHeaderRow>
      {columnOrder.map((col, index) => {
        const colIndexInOriginal = columns.findIndex((c) => c.id === col.id);
        return (
          <TableHeaderCell
            key={col.id}
            flexWidth={flexWidths[colIndexInOriginal] || 1}
            // minWidth={columnWidths[colIndexInOriginal] || "30rem"}
            onClick={() => showExpand && onSort(colIndexInOriginal)}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            style={{
              cursor: index > 0 ? "move" : "default",
              // opacity: draggedIndex === index ? 0.5 : 1,
            }}
          >
            <MediumTypography
              text={t(col.label)}
              letter_spacing="0.00625rem"
              fontWeight="700"
              lineHeight="1.25rem"
              color="#7E22CE"
            />
            <CellCust>
              {showExpand && colIndexInOriginal === sortColumn && (
                <span style={{ marginLeft: "0.4rem", color: "#7E22CE" }}>
                  {sortOrder === "asc" ? <SvgAsc /> : <SvgDes />}
                </span>
              )}
            </CellCust>
            {/* <ResizeHandle
              onMouseDown={(e) => handleMouseDown(e, colIndexInOriginal)}
            /> */}
          </TableHeaderCell>
        );
      })}
      {Action && <TableHeaderActionCell />}
    </TableHeaderRow>
  );
};

export default TableHeader;
