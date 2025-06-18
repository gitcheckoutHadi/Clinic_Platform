import React, { useEffect, useState } from "react";
import { ContainerTable, TableDisplay } from "./Table.style";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import { TableHeaderDataInterface } from "../../Interface/TableInterface/TableInterface";
import TableFooter from "./TableFooter/TableFooter";
import TitleAndSearch from "./TitleAndSearch/TitleAndSearch";
import FiltersAndActions from "./FiltersAndActions/FiltersAndActions";
import { ExcelDownload } from "../../assets/utils/excel";
import { Action } from "./TableInterface";
import { useTranslation } from "react-i18next";
import ScrollLeftAndRight from "../ScrollLeftAndRight/ScrollLeftAndRight";
import UseResponsive from "../../hooks/useResponsive";

/**
 * Props interface for the Table component.
 */
type InterfaceTextFilterShow = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

interface TableInterface {
  TableTitle: string; // Title of the table
  DeleteFunction?: (sourceId: string) => void; // Optional function to handle row deletion
  columns: TableHeaderDataInterface[]; // Array of column definitions
  rows: any[]; // Array of table rows
  AddButtonText?: string; // Text for the "Add" button
  ExcelTableName?: string; // Optional name for the Excel export
  IndexShows?: number[]; // Indices of columns to display
  onFilterIndexClick?: (index: number) => void; // Callback for index-based filtering
  RefreshClick?: () => void; // Callback to refresh the table data
  Action?: Action[]; //Displays the Actions need with functionality
  SecondArrayText?: string;
  flexWidths?: number[];
  minWidth?: string[];
  ExpandClick?: () => void;
  showExpand?: boolean;
  setShowExpand?: React.Dispatch<React.SetStateAction<boolean>>;
  PopUpContent?: any;
  PropsObjectId?: number | null;
  setPropsObjectId?: React.Dispatch<React.SetStateAction<number | null>>;
  EyeShow?: boolean;
  PopUpTitle?: string;
  PopUpContentWidth?: string;
  IdLoading?: any;
  ResponsiveColumns?: TableHeaderDataInterface[];
  TextFilterShows?: InterfaceTextFilterShow[];
}

const Table = ({
  DeleteFunction,
  columns,
  rows,
  TableTitle,
  AddButtonText,
  IndexShows,
  ExcelTableName,
  RefreshClick,
  onFilterIndexClick,
  Action,
  SecondArrayText,
  flexWidths = [],
  minWidth = [],
  showExpand = true,
  setShowExpand,
  ExpandClick,
  PropsObjectId,
  setPropsObjectId,
  EyeShow,
  PopUpContent,
  PopUpTitle,
  PopUpContentWidth,
  IdLoading,
  ResponsiveColumns,
  TextFilterShows,
}: TableInterface) => {
  const { t } = useTranslation();
  const breakpoint = 800; // You can make this a prop too
  const isMobile = UseResponsive(breakpoint);
  // State to manage the number of items per page
  const [PerPage, setPerPage] = useState(10);
  // State to manage the current active page
  const [currentPage, setCurrentPage] = useState<number>(1);
  // State to manage the search input value
  const [SearchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<number>(0);
  const [columnOrder, setColumnOrder] = useState<TableHeaderDataInterface[]>(
    isMobile ? ResponsiveColumns ?? columns : columns
  );

  // Filter rows based on the search text
  const [columnWidths, setColumnWidths] = useState<string[]>(
    minWidth.length > 0 ? [...minWidth] : columnOrder.map(() => "8rem")
  );
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(SearchText.toLowerCase())
    )
  );

  // Calculate indices for slicing the filtered rows
  const startIdx = (currentPage - 1) * PerPage;
  const endIdx = startIdx + PerPage;

  // Slice the rows for the current page
  const slicedRows = filteredRows.slice(startIdx, endIdx);
  const ExpandedSlicedRow = filteredRows.slice(0, 8); //if for sliced data when showExpand i strue

  const sortedRows = [...(showExpand ? slicedRows : ExpandedSlicedRow)].sort(
    (a, b) => {
      const valueA = a[columnOrder[sortColumn].id];
      const valueB = b[columnOrder[sortColumn].id];

      const getValue = (value: any[] | null | undefined) => {
        if (Array.isArray(value)) {
          return value.join(", ");
        }
        return value === null || value === undefined ? "" : value;
      };

      const valA = getValue(valueA);
      const valB = getValue(valueB);

      if (
        columnOrder[sortColumn].id === "created_at" ||
        columnOrder[sortColumn].id === "updated_at" ||
        columnOrder[sortColumn].id === "deleted_at" ||
        columnOrder[sortColumn].id === "createdAt"
      ) {
        const dateA = new Date(valA).getTime();
        const dateB = new Date(valB).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }

      return sortOrder === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    }
  );
  /**
   * Handles pagination page change.
   * @param page - The new page number
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  /**
   * Handles the refresh button click.
   * Clears the search text and triggers the provided `RefreshClick` function if available.
   */
  const handleRefreshClick = () => {
    setSearchText(""); // Clear the search input
    if (RefreshClick) {
      RefreshClick(); // Trigger the provided refresh callback
    }
  };

  // Map indices to the corresponding column keys (if `IndexShows` is provided)
  const DataKeys = IndexShows && IndexShows.map((index) => columnOrder[index]);
  console.log("DataKeys are", DataKeys);
  useEffect(() => {
    setCurrentPage(1);
  }, [PerPage]);
  const handleSort = (columnIndex: number) => {
    if (columnIndex === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnIndex);
      setSortOrder("asc");
    }
  };
  useEffect(() => {
    setColumnOrder(isMobile ? ResponsiveColumns ?? columns : columns); // Sync with props
    setColumnWidths(
      minWidth.length > 0 ? [...minWidth] : columns.map(() => "8rem")
    );
  }, [columns, ResponsiveColumns]);
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startWidth = parseInt(columnWidths[index], 10);

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(startWidth + moveEvent.clientX - startX, 50);
      const updatedWidths = [...columnWidths];
      updatedWidths[index] = `${newWidth}px`;
      setColumnWidths(updatedWidths);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <TableDisplay>
      {/* Header section with title and search input */}
      <TitleAndSearch
        title={TableTitle}
        value={SearchText}
        RefreshClick={handleRefreshClick}
        onChange={(e) => setSearchText(e.target.value)}
        ExpandClick={ExpandClick}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
      />

      {/* Actions section with Add button, Excel export, and filtering options */}
      <FiltersAndActions
        AddText={AddButtonText}
        ExcelDownload={() =>
          ExcelDownload(filteredRows, ExcelTableName || "Table", t)
        }
        ExcelTableName={ExcelTableName}
        IndexKeyShows={DataKeys}
        onTagClick={onFilterIndexClick}
        TextFilterShows={TextFilterShows}
      />
      <ScrollLeftAndRight
        content={
          <ContainerTable>
            {/* Table header displaying column titles */}
            <TableHeader
              columns={columns}
              flexWidths={flexWidths}
              minWidth={minWidth}
              sortOrder={sortOrder}
              sortColumn={sortColumn}
              onSort={handleSort}
              showExpand={showExpand}
              Action={Action}
              columnOrder={columnOrder}
              setColumnOrder={setColumnOrder}
              // columnWidths={columnWidths}
              handleMouseDown={handleMouseDown}
            />

            {/* Table body displaying rows with optional delete functionality */}
            <TableBody
              flexWidths={flexWidths}
              minWidth={minWidth}
              SecondArrayText={SecondArrayText}
              columns={columnOrder}
              rows={sortedRows}
              DeleteFunction={DeleteFunction}
              Action={Action}
              PropsObjectId={PropsObjectId}
              setPropsObjectId={setPropsObjectId}
              EyeShow={EyeShow}
              PopUpContent={PopUpContent}
              PopUpTitle={PopUpTitle}
              PopUpContentWidth={PopUpContentWidth}
              IdLoading={IdLoading}
              columnWidths={columnWidths}
              handleMouseDown={handleMouseDown}
            />
          </ContainerTable>
        }
      />
      {showExpand && (
        <TableFooter
          slicerData={{
            SlicerValue: PerPage,
            setSlicerValue: setPerPage,
          }}
          PaginationData={{
            PerPage,
            currentPage,
            rows: filteredRows.length, // Total number of filtered rows
            handlePageChange,
          }}
        />
      )}
    </TableDisplay>
  );
};

export default Table;
