/**
 * FiltersAndActions Component
 *
 * This component provides a UI for displaying filters as tags and action buttons for exporting data or navigating to a new page.
 * It integrates filtering functionality with tag-click handlers and supports downloading Excel files or adding new entries.
 */

import React from "react";
import {
  FiltersAndActionsButtonsPlace,
  FiltersAndActionsMainContainer,
} from "./FiltersAndActions.style";
import TextIconButton from "../../../elements/Buttons/TextIconButton/TextIconButton";
import { SvgAddIcon, SvgDownload } from "../../../elements/Icons";
import { useNavigate } from "react-router-dom";
import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";
import FilterTag from "./FilterTag/FilterTag";
import { useTranslation } from "react-i18next";
import TableButtons from "../../../elements/Buttons/TableButtons/TableButtons";
type InterfaceTextFilterShow = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// Interface for component props
interface FiltersAndActionsInterface {
  /**
   * Function to handle downloading an Excel file.
   */
  ExcelDownload: () => void;

  /**
   * Text displayed on the "Add" button.
   */
  AddText?: string;

  /**
   * Optional name for the Excel table (used for export functionality).
   */
  ExcelTableName?: string;

  /**
   * Optional list of index keys with labels to display as filter tags.
   */
  IndexKeyShows?: TableHeaderDataInterface[];
  TextFilterShows?: InterfaceTextFilterShow[];
  /**
   * Optional function to handle clicks on filter tags.
   *
   * @param index - The index of the clicked tag.
   */
  onTagClick?: (index: number) => void;
}

// Main FiltersAndActions component
const FiltersAndActions = ({
  ExcelDownload,
  AddText,
  ExcelTableName,
  IndexKeyShows,
  TextFilterShows,

  onTagClick,
}: FiltersAndActionsInterface) => {
  const navigate = useNavigate();

  /**
   * Handles navigation when the "Add" button is clicked.
   *
   * Removes spaces from `AddText` and constructs a sanitized route for navigation.
   */
  const handelNavigateTitle = () => {
    const RemoveDot = AddText && AddText.split(".").pop()?.trim();
    const sanitizedText = RemoveDot && RemoveDot.replace(/\s+/g, ""); // Remove spaces from AddText
    navigate(`${sanitizedText}`); // Navigate to the sanitized route
  };
  const { t } = useTranslation();
  return (
    <FiltersAndActionsMainContainer>
      {/* Section for displaying filter tags */}
      <FiltersAndActionsButtonsPlace>
        {IndexKeyShows &&
          IndexKeyShows.map((tag, index) => (
            <FilterTag
              key={index}
              text={`${t(tag.label)}`}
              filteredText={TextFilterShows?.[index].value ?? ""}
              onClickFunction={() => onTagClick && onTagClick(index)} // Trigger onTagClick if defined
              deleteClick={() => TextFilterShows?.[index].setValue("")}
            />
          ))}
      </FiltersAndActionsButtonsPlace>

      {/* Section for action buttons */}
      <FiltersAndActionsButtonsPlace>
        {/* Add button */}
        {AddText && (
          // <TextIconButton
          //   text={t(AddText)}
          //   Icon={SvgAddIcon}
          //   onClick={handelNavigateTitle} // Trigger navigation on click
          // />
          <TableButtons text={t(AddText)} onClick={handelNavigateTitle} />
        )}
        {/* Conditional rendering for Excel export button */}
        {ExcelTableName && (
          // <TextIconButton
          //   text={t("sidebar.Export")}
          //   Icon={SvgDownload}
          //   onClick={ExcelDownload} // Trigger ExcelDownload function
          // />
          <TableButtons text={t("sidebar.Export")} onClick={ExcelDownload} />
        )}
      </FiltersAndActionsButtonsPlace>
    </FiltersAndActionsMainContainer>
  );
};

export default FiltersAndActions;
