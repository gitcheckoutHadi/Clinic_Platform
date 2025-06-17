import React from "react";
import { ButtonContainer } from "./Button.style";
import { Typography } from "../../textElement/fonts/Fonts";

interface ButtonInterface {
  text: string;
  onClick?: () => void;
  background?: string;
}
const Button = ({ text, onClick, background }: ButtonInterface) => {
  return (
    <ButtonContainer onClick={onClick} background={background}>
      <Typography
        text={text}
        fontSize="0.875rem"
        lineHeight="1.25rem"
        fontWeight="500"
        letter_spacing="0.00625rem"
      />
    </ButtonContainer>
  );
};

export default Button;
