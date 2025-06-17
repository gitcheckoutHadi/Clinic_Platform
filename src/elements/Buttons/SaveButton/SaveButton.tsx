import React from "react";
import styled from "styled-components";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import { ButtonSaveStyle } from "./SaveButton.style";

interface SaveButtonInterface {
  text?: string;
  onClick?: () => void;
}
const SaveButton = ({ text, onClick }: SaveButtonInterface) => {
  return (
    <ButtonSaveStyle onClick={onClick}>
      <MediumTypography
        text={text || "Save"}
        fontWeight="500"
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
        color="inherit"
      />
    </ButtonSaveStyle>
  );
};

export default SaveButton;
