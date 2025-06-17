import React from "react";

import { MediumTypography } from "../../textElement/fonts/Fonts";
import { ColoredButtonContainer } from "./ColoredButton.style";
import { CalenderToolBarGapedRow } from "../../../components/Calender/CalenderToolBar/CalenderToolBar.style";

interface ColoredButtonInterface {
  text: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  borderRadius?: string;
}
const ColoredButton = ({
  text,
  Icon,
  onClick,
  borderRadius,
}: ColoredButtonInterface) => {
  return (
    // U call it
    // <ColoredButton text="Example" Icon={ExampleIcon} />;
    <ColoredButtonContainer onClick={onClick} borderRadius={borderRadius}>
      <MediumTypography
        text={text}
        fontWeight="500"
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
        color="inherit"
        whiteSpace="nowrap"
      />
      {Icon && (
        <CalenderToolBarGapedRow>
          <Icon className="icon-style" />
        </CalenderToolBarGapedRow>
      )}
    </ColoredButtonContainer>
  );
};

export default ColoredButton;
