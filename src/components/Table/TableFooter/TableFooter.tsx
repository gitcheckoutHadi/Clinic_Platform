/**
 * TableFooter Component
 *
 * This component is responsible for rendering the table footer,
 * which includes pagination controls and a slicer for table data filtering.
 */

import React from "react";
import { TableFooterMainContainer } from "./TableFooter.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import TableSlicer from "./TableSlicer/TableSlicer";
import { SlicerInterface } from "../../../elements/Slicer/Slicer";
import Pagination from "../../../elements/pagination/Pagination";

// Interface for component props
interface TableFooterInterface {
  /**
   * Data for the table slicer component.
   * Must adhere to the SlicerInterface.
   */
  slicerData: SlicerInterface;

  /**
   * Pagination configuration for controlling table navigation.
   */
  PaginationData: {
    /**
     * Number of rows displayed per page.
     */
    PerPage: number;

    /**
     * Current active page.
     */
    currentPage: number;

    /**
     * Total number of rows in the table.
     */
    rows: number;

    /**
     * Function to handle page changes.
     *
     * @param page - The new page number to navigate to.
     */
    handlePageChange: (page: number) => void;
  };
}

// Main TableFooter component
const TableFooter = ({ slicerData, PaginationData }: TableFooterInterface) => {
  return (
    <TableFooterMainContainer>
      {/* Render Pagination component only if rows exceed the rows-per-page limit */}
      {PaginationData.rows > PaginationData.PerPage && (
        <Pagination
          postsPerPage={PaginationData.PerPage} // Number of rows per page
          currentPage={PaginationData.currentPage} // Current page
          totalPosts={PaginationData.rows} // Total number of rows
          setCurrentPage={PaginationData.handlePageChange} // Function to change page
        />
      )}

      {/* Render TableSlicer for additional filtering */}
      <TableSlicer slicerData={slicerData} />
    </TableFooterMainContainer>
  );
};

export default TableFooter;
