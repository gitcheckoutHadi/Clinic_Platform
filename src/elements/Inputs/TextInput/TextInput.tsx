import React, { useState, useRef } from "react";
import { InputWrapper, PlaceholderLabel, StyledInput } from "./TextInput.style";
import { useTranslation } from "react-i18next";

/**
 * Interface for the TextInput component props.
 *
 * @property {string} value - The current value of the input field.
 * @property {React.Dispatch<React.SetStateAction<string>>} setValue - The function to update the input value.
 * @property {string} text - The label text for the input field.
 * @property {string} [errorValue] - Optional error message to display when the input is invalid.
 */
interface TextInputInterface {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  errorValue?: string;
  setErrorValue?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  type?: string;
}

/**
 * TextInput component that renders a styled input with an adaptive placeholder.
 * It also displays an error message when the input is empty and `errorValue` is provided.
 *
 * @param {TextInputInterface} props - The properties passed to the component.
 * @returns {JSX.Element} The TextInput component.
 */
const TextInput: React.FC<TextInputInterface> = ({
  text,
  type = "text",
  value,
  setValue,
  errorValue = "",
  disabled = false,
  setErrorValue,
}: TextInputInterface) => {
  // Ref to store the previous error value

  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Update the parent state with the new value
    setValue(newValue);
    setErrorValue && setErrorValue("");
  };

  return (
    <InputWrapper>
      <StyledInput
        type={type}
        id={text}
        placeholder="" // Keeps the placeholder adaptive
        value={value}
        onChange={handleChange}
        errorValue={errorValue} // Custom attribute for styling based on error
        disabled={disabled}
      />
      <PlaceholderLabel
        errorValue={errorValue}
        htmlFor={text}
        disabled={disabled}
      >
        {/* i met this value in focus */}
        {t(text)}
        {/* //// */}
      </PlaceholderLabel>
    </InputWrapper>
  );
};

export default TextInput;
