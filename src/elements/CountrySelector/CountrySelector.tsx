import React, { useMemo } from "react";
import Select, { StylesConfig } from "react-select";
import countryList from "react-select-country-list";
import {
  MainCountrySelectorContainer,
  TitleCountrySelector,
} from "./CountrySelector.style";
import { MediumTypography } from "../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";
import { TextInputPlace } from "../Inputs/NewTextBox/NewTextBoxStyle";

interface CountryOption {
  label: string;
  value: string;
}

interface CountrySelectorProps {
  value: CountryOption | null;
  setValue: (value: CountryOption | null) => void;
  text?: string | null;
  mandatory?: boolean;
  errorValue?: string;
  setErrorValue?: React.Dispatch<React.SetStateAction<string>>;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  setValue,
  text,
  mandatory = false,
  errorValue,
  setErrorValue,
}) => {
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption: CountryOption | null) => {
    setValue(selectedOption);
    if (setErrorValue) setErrorValue("");
  };

  const customStyles: StylesConfig<CountryOption, false> = {
    control: (base, state) => ({
      ...base,
      width: "100%",
      borderRadius: "0.3125rem",
      boxShadow: state.isFocused ? "0 0 4px #231d4670" : "none",
      borderColor: state.isFocused ? "#231d46" : base.borderColor,
      height: "100%",
      padding: document.dir === "rtl" ? "0 7px" : "0 7px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 5, // Ensure the menu appears above other elements
      borderRadius: "0.3125rem",
      marginTop: "0.5rem",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for dropdown
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px", // Limit the height of the dropdown
      overflowY: "auto", // Add scroll for long lists
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#231d46"
        : state.isSelected
        ? "#505355"
        : "white",
      color: state.isSelected ? "white" : state.isFocused ? "#fff" : "#333",
      padding: "10px 15px",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#8a8cc0",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#A6A6A6",
      fontWeight: "400",
      fontFamily: "Primary Font",
      fontSize: "0.875rem",
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "#231d46", // Custom color for selected value
      fontSize: "0.875rem",
      fontWeight: "700",
    }),
  };

  const { t } = useTranslation();

  return (
    <MainCountrySelectorContainer errorValue={errorValue}>
      <TextInputPlace>
        <MediumTypography
          text={text ? (mandatory ? `${t(text)} *` : t(text)) : "Nationality *"}
          color={errorValue ? "#FF6B6B" : "#A6A6A6"}
          fontWeight="400"
        />
      </TextInputPlace>
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        styles={customStyles}
        placeholder={t("general.Select")}
      />
    </MainCountrySelectorContainer>
  );
};

export default CountrySelector;
