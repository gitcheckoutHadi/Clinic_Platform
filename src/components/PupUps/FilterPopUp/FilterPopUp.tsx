import React, { useState } from "react";

import PopUp from "../PopUp/PopUp";
import { SvgFilterIcon } from "../../../elements/Icons";
import {
  FilterLayout,
  FilterMaps,
  FilterMapsLine,
  SearchTab,
} from "./FilterPopUp.style";
import SearchInput from "../../../elements/Inputs/SearchInput/SearchInput";
import RadioButtonElement from "../../../elements/Radio/Radio";

/**
 * GeneralFilterPopUpInterface extends the FilterInterface and includes additional properties
 * for managing the display and functionality of the filter popup component.
 */
interface GeneralFilterPopUpInterface {
  RadioChanges?: (selectedProgram: string) => void | any;
  data: any[];
  ContextValue: any; // The current value selected in the filter.
  RenderedValueKey: string; // The key to be used from data objects for rendering.
  show: boolean; // Controls visibility of the popup.
  setShow: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle popup visibility.
  translatedKeyText?: string; // Optional prefix for translated text labels.
  title?: string; // Optional title for the popup.
  translated?: boolean; // Optional
  closeClick?: () => void;
  submit?: () => void;
}

/**
 * GeneralFilterPopUp is a functional React component that displays a filter popup.
 * It includes a search element and a list of radio buttons generated from filtered data.
 *
 * @param {GeneralFilterPopUpInterface} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const GeneralFilterPopUp = ({
  data,
  ContextValue,
  RadioChanges,
  RenderedValueKey,
  show,
  setShow,
  translatedKeyText = "",
  title,
  translated = true,
  closeClick,
  submit,
}: GeneralFilterPopUpInterface) => {
  const [searchText, setSearchText] = useState(""); // State to manage the search input text.

  console.log("data in filter PUPuPopup", data);
  // Filter out data items that have a null or empty value for RenderedValueKey.
  const nonEmptyData = data?.filter(
    (item) => item[RenderedValueKey] !== null && item[RenderedValueKey] !== ""
  );

  // Create a unique list of items to be displayed in the filter.
  const uniqueData = Array.from(
    new Set(nonEmptyData?.map((item) => item[RenderedValueKey] || ""))
  );

  // Filter programs based on search text input by the user.
  const filteredPrograms = uniqueData.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  /**
   * handleProgramSelection is a function that handles the selection of a program.
   * It calls the RadioChanges function if provided.
   *
   * @param {string} selectedProgram - The program selected by the user.
   */
  const handleProgramSelection = (selectedProgram: string) => {
    RadioChanges && RadioChanges(selectedProgram);
  };

  return (
    <>
      {show && (
        <PopUp
          showPopUp={show}
          setShowPopUp={setShow}
          title="Filter"
          Icon={SvgFilterIcon}
          closeClick={closeClick}
          submit={submit}
          content={
            <FilterLayout>
              <SearchTab>
                {" "}
                <SearchInput
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </SearchTab>
              <FilterMaps>
                {filteredPrograms &&
                  filteredPrograms.map((program, index) => (
                    <FilterMapsLine key={index}>
                      <RadioButtonElement
                        value={program}
                        onChange={() => handleProgramSelection(program)} // Handle radio button change.
                        checked={ContextValue === program ? true : false} // Check if the current program is selected.
                        textLabel={
                          // translated
                          //   ? t(`${translatedKeyText}${program}`)
                          //   : program
                          program
                        }
                      />
                    </FilterMapsLine>
                  ))}
              </FilterMaps>
            </FilterLayout>
          }
        />
      )}
    </>
  );
};

export default GeneralFilterPopUp;
