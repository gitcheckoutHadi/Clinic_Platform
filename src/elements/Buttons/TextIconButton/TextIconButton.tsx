import React from "react";
import { TextIconContainer } from "./TextIconButton.style";
import { MediumTypography } from "../../textElement/fonts/Fonts";

interface TextIconButtonInterface {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}
const TextIconButton = ({ text, Icon, onClick }: TextIconButtonInterface) => {
  return (
    // U call it
    // <TextIconButton text="Example" Icon={ExampleIcon} />;
    <TextIconContainer onClick={onClick}>
      <Icon className="icon-style" />
      <MediumTypography
        text={text}
        fontWeight="500"
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
        color="inherit"
      />
    </TextIconContainer>
  );
};

export default TextIconButton;
