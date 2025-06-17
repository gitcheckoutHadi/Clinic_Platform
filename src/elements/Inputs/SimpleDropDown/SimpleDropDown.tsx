import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListItem,
  ArrowIcon,
} from "./SimpleDropDown.style";
import { OptionInterface } from "../../../Interface/options/option";
import { SvgNavigatorArrow } from "../../Icons";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

interface SimpleDropDownInterface {
  options: OptionInterface[]; // Array of objects with label and value
  value: string; // The currently selected value
  onChange: (optionValue: string) => void; // Callback when an option is selected
}

const SimpleDropDown = ({
  value,
  onChange,
  options,
}: SimpleDropDownInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    closeDropdown();
  };
  const containerRef = useClickOutside(isOpen, () => setIsOpen(false));

  const selectedLabel = options.find((option) => option.value === value)?.label;
  const { t } = useTranslation();
  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown} ref={containerRef}>
        {t(selectedLabel) || "Select an option"}
        <ArrowIcon isOpen={isOpen}>
          <SvgNavigatorArrow className="icon-style" />
        </ArrowIcon>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {t(option.label)}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default SimpleDropDown;
