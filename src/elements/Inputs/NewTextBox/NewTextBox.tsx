import React from "react";
import {
  FliedTextInput,
  NewTBMaiContainer,
  TextInputPlace,
} from "./NewTextBoxStyle";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";

interface TextInputInterface {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  errorValue?: string;
  setErrorValue?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  type?: string;
  placeHolder?: string;
  mandatory?: boolean;
  inputBgColor?: string;
}

const NewTextBox = ({
  text,
  type = "text",
  value,
  setValue,
  errorValue = "",
  placeHolder,
  disabled = false,
  mandatory = false,
  setErrorValue,
  inputBgColor,
}: TextInputInterface) => {
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Update the parent state with the new value
    setValue(newValue);
    setErrorValue && setErrorValue("");
  };
  return (
    <NewTBMaiContainer>
      <TextInputPlace>
        <MediumTypography
          text={mandatory ? `${t(text)} *` : t(text)}
          color={
            value.trim() !== "" ? "#000" : errorValue ? `#FF6B6B` : "#A6A6A6"
          }
          fontWeight="400"
        />
      </TextInputPlace>
      <FliedTextInput
        errorValue={errorValue}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        id={text}
        disabled={disabled}
        background={inputBgColor}
        type={type}
        onBlur={() => {
          if (value.trim() === "" && setErrorValue && mandatory) {
            setErrorValue("This field is required"); // Set error if the field is empty on blur
          }
        }}
      />
    </NewTBMaiContainer>
  );
};

export default NewTextBox;
