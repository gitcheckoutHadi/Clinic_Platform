/**
 * Pagination Component
 *
 * This component provides pagination controls to navigate through pages of content.
 * It displays page numbers, and "Previous" and "Next" buttons for navigation.
 */

import React, { FC } from "react";
import {
  PaginationContainer,
  PageButton,
  PaginationRender,
  PaginationBox,
} from "./Pagination.style";
import { PaginationProps } from "./PaginationInterface";
import { SvgArrowDownIcon, SvgPaginatorArrow } from "../Icons";
import { toArabicDigits } from "../../utils/translates";
import { TransformDirection } from "../../utils/Direction";

// Helper function to format page numbers (adds leading zero for single digits)
// const formatNumber = (num: number) =>
//   num < 10
//     ? `0${toArabicDigits(num.toString())}`
//     : `${toArabicDigits(num.toString())}`;
const formatNumber = (num: number) =>
  num < 10
    ? `${toArabicDigits(num.toString())}`
    : `${toArabicDigits(num.toString())}`;

// Pagination component
const Pagination: FC<PaginationProps> = ({
  totalPosts, // Total number of items/posts
  postsPerPage, // Number of items/posts displayed per page
  setCurrentPage, // Function to update the current page
  currentPage, // Currently active page
  justifyContent = "center", // Justification for pagination alignment
}) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <PaginationContainer style={{ justifyContent }}>
      {/* Previous Page Button */}
      <PaginationBox
        cursor={currentPage === 1 ? "no-drop" : "pointer"} // Disable cursor for the first page
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} // Navigate to the previous page
        style={{
          opacity: currentPage === 1 ? 0.4 : 1, // Dim button when on the first page
        }}
        bordercolor="#6a0dad"
      >
        <SvgPaginatorArrow
          style={{
            transform:
              TransformDirection() === "ltr"
                ? "rotate(90deg)"
                : "rotate(-90deg)",
            stroke: "#6a0dad",
          }}
        />
      </PaginationBox>

      {/* Page Numbers */}
      <PaginationRender>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1; // Page number (1-indexed)
          return (
            <PageButton
              key={page} // Unique key for each page
              active={page === currentPage ? 1 : 0} // Highlight the active page
              onClick={() => setCurrentPage(page)} // Navigate to the selected page
              borderColor="#231d46c5"
            >
              {formatNumber(page)} {/* Display formatted page number */}
            </PageButton>
          );
        })}
      </PaginationRender>

      {/* Next Page Button */}
      <PaginationBox
        bordercolor="#6a0dad"
        cursor={currentPage === totalPages ? "no-drop" : "pointer"} // Disable cursor for the last page
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))} // Navigate to the next page
        style={{
          opacity: currentPage === totalPages ? 0.4 : 1, // Dim button when on the last page
        }}
      >
        <SvgPaginatorArrow
          style={{
            transform:
              TransformDirection() === "ltr"
                ? "rotate(-90deg)"
                : "rotate(90deg)",
            stroke: "#6a0dad",
          }}
        />
      </PaginationBox>
    </PaginationContainer>
  );
};

export default Pagination;
