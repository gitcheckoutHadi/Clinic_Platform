import React from "react";
import styled from "styled-components";
import { MediumTypography } from "../../../textElement/fonts/Fonts";
interface Styles {
  width?: string;
  borderRadius?: string;
}
const ButtonCancelStyle = styled.button<Styles>`
  display: flex;
  width: ${(props) => props.color || "12.5rem"};
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: ${(props) => props.borderRadius || " 6.25rem"};
  border: 1px solid #6a0dad;
  background: white;
  color: #6a0dad;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* border-radius: 6.25rem; */
  &:hover {
    /* background: #6a0dad;
    color: white; */
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(#6a0dad49);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
`;

interface CancelButtonInterface {
  text?: string;
  onClick?: () => void;
}

const CancelButton = ({ text, onClick }: CancelButtonInterface) => {
  return (
    <ButtonCancelStyle onClick={onClick}>
      <MediumTypography
        text={text || "Cancel"}
        fontWeight="500"
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        color="inherit"
        cursor="pointer"
      />
    </ButtonCancelStyle>
  );
};

export default CancelButton;
