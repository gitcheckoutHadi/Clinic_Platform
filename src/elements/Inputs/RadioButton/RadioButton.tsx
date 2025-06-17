import React from "react";
import styled from "styled-components";

// Styled components
const RadioContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
`;

const RadioCustom = styled.span`
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  transition: all 0.3s ease;

  ${RadioLabel}:hover & {
    background-color: #ccc;
  }

  ${RadioInput}:checked ~ & {
    background-color: #2196f3;
  }

  ${RadioInput}:checked ~ &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
  }

  ${RadioLabel}:hover ${RadioInput}:checked ~ & {
    background-color: #1e88e5;
  }
`;

// RadioButton Component
interface RadioButtonProps {
  options: string[];
  selectedOption: string | null;
  onChange: (option: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <RadioContainer>
      {options.map((option) => (
        <RadioLabel key={option}>
          <RadioInput
            type="radio"
            name="radio"
            checked={selectedOption === option}
            onChange={() => onChange(option)}
          />
          <RadioCustom />
          {option}
        </RadioLabel>
      ))}
    </RadioContainer>
  );
};
