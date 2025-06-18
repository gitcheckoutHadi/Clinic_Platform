/**
 * TableSlicer Component
 *
 * This component integrates a slicer control for selecting the number of items per page in a table.
 * It uses the `Slicer` component to handle the value changes and displays a label indicating items per page.
 */

import React, { useState } from "react";
import { TableSlicerMainContainer } from "./TableSlicer.style";
import { MediumTypography } from "../../../../elements/textElement/fonts/Fonts";
import Slicer, { SlicerInterface } from "../../../../elements/Slicer/Slicer";
import { ChevronContainer } from "../../../../elements/Slicer/Slicer.style";
import { SvgChevronDown } from "../../../../elements/Icons";
import useClickOutside from "../../../../hooks/useClickOutside";

// Interface defining the props for the TableSlicer component
interface TableSlicerInterface {
  /**
   * Data and functions required for the slicer.
   * - `SlicerValue`: Current value of the slicer (number of items per page).
   * - `setSlicerValue`: Function to update the slicer value.
   */
  slicerData: SlicerInterface;
}

// TableSlicer Functional Component
const TableSlicer = ({ slicerData }: TableSlicerInterface) => {
  const [ShowAbs, setShowAbs] = useState(false);
  const containerRef = useClickOutside(ShowAbs, () => setShowAbs(false));
  return (
    <TableSlicerMainContainer
      onClick={() => setShowAbs(!ShowAbs)}
      ref={containerRef}
    >
      {/* Slicer Component: Controls items per page */}
      <Slicer
        SlicerValue={slicerData.SlicerValue} // Current slicer value
        setSlicerValue={slicerData.setSlicerValue} // Function to update the slicer value
        setShowAbs={setShowAbs}
        ShowAbs={ShowAbs}
      />
      {/* Label indicating "/Page" */}
      <MediumTypography
        lineHeight="1.25rem"
        letter_spacing="0.01563rem"
        text={"/ Page"}
        color="#460d6e"
      />
      <ChevronContainer isrotateddetected={ShowAbs}>
        <SvgChevronDown />
      </ChevronContainer>
    </TableSlicerMainContainer>
  );
};

export default TableSlicer;
