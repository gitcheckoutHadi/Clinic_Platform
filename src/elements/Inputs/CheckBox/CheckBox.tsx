import React from "react";
import styled from "styled-components";
import { MediumTypography } from "../../textElement/fonts/Fonts";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #6a0dad;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  position: relative;
  border: ${(props) => (props.checked ? "#6a0dad" : "1px solid #ccc")};
  background-color: ${(props) => (props.checked ? "#6a0dad" : "transparent")};

  &:after {
    content: "✔";
    color: white;
    font-size: 14px;
    font-weight: bold;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }
`;

const LabelText = styled.span`
  cursor: pointer;
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      {label && (
        <LabelText>
          <MediumTypography text={label} cursor="pointer" />
        </LabelText>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;

// how to call it

// const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setIsChecked(event.target.checked);
//   };

//   <Checkbox checked={isChecked} onChange={handleCheckboxChange} label="Accept Terms & Conditions" />
