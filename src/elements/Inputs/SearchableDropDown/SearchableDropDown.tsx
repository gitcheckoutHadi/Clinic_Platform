import React, { useEffect, useState } from "react";

import { OptionInterface } from "../../../Interface/options/option";
import { SvgArrowVector, SvgNavigatorArrow } from "../../Icons";
import {
  ArrowIcon,
  DropdownSearchableContainer,
  DropdownSearchableHeader,
  DropdownSearchableList,
  DropdownSearchableListItem,
} from "./SearchableDrobDownStyle";
import { TitleDatePickerContainer } from "../DateTimePicker/DateTimePicker.style";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { TextInputPlace } from "../NewTextBox/NewTextBoxStyle";

interface SearchableDropDownInterface {
  options: OptionInterface[]; // Array of objects with label and value
  SelectedValue: string; // The currently selected value
  onChange: (optionValue: string) => void; // Callback when an option is selected
  text: string; // Optional label for the dropdown
  mandatory?: boolean;
  errorValue?: string;
  setErrorValue?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchableDropDown = ({
  SelectedValue,
  onChange,
  options,
  text,
  mandatory = false,
  errorValue = "",
  setErrorValue,
}: SearchableDropDownInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {}, [SelectedValue]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setErrorValue?.("");
    closeDropdown();
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabel = options.find(
    (option) => option.value === SelectedValue
  )?.label;
  useEffect(() => {
    setSearchTerm(selectedLabel ? selectedLabel : "");
  }, [SelectedValue]);
  // useEffect(() => {}, [filteredOptions]);
  const containerRef = useClickOutside(isOpen, () => setIsOpen(false));
  const { t } = useTranslation();
  return (
    <DropdownSearchableContainer ref={containerRef}>
      <TextInputPlace>
        <MediumTypography
          text={mandatory ? `${t(text)} *` : t(text)}
          color={
            SelectedValue.trim() !== ""
              ? "#000"
              : errorValue
              ? `#FF6B6B`
              : "#A6A6A6"
          }
          fontWeight="400"
        />
      </TextInputPlace>
      <DropdownSearchableHeader isOpen={isOpen}>
        <input
          type="text"
          value={isOpen ? searchTerm : selectedLabel}
          onClick={(e) => {
            e.stopPropagation();
            toggleDropdown();
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={"Search..."}
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",

            background: "transparent",
            color: selectedLabel ? "#000" : "#333",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        />
        <ArrowIcon isOpen={isOpen}>
          <SvgArrowVector className="icon-style" />
        </ArrowIcon>
      </DropdownSearchableHeader>
      {isOpen && (
        <DropdownSearchableList>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <DropdownSearchableListItem
                selected={SelectedValue === option.value}
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                <MediumTypography text={option.label} color="inherit" />
              </DropdownSearchableListItem>
            ))
          ) : (
            <DropdownSearchableListItem>
              <MediumTypography text="No options found" />
            </DropdownSearchableListItem>
          )}
        </DropdownSearchableList>
      )}
    </DropdownSearchableContainer>
  );
};

export default SearchableDropDown;
