import React from "react";

import { MediumTypography } from "../../textElement/fonts/Fonts";

import { CalenderToolBarGapedRow } from "../../../components/Calender/CalenderToolBar/CalenderToolBar.style";
import { ReminderButtonContainer } from "./ReminderButton.style";
import { SvgReminderIcon } from "../../Icons";

interface ColoredButtonInterface {
  text?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  borderRadius?: string;
  width?: string;
}
const ReminderButton = ({
  text = "Send Reminder",
  Icon = SvgReminderIcon,
  onClick,
  borderRadius,
  width,
}: ColoredButtonInterface) => {
  return (
    // U call it
    // <ColoredButton text="Example" Icon={ExampleIcon} />;
    <ReminderButtonContainer
      onClick={onClick}
      borderRadius={borderRadius}
      width={width}
    >
      <MediumTypography
        text={text || "Send Reminder"}
        fontWeight="700"
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
        color="inherit"
      />
      <CalenderToolBarGapedRow>
        <Icon className="icon-style" />
      </CalenderToolBarGapedRow>
    </ReminderButtonContainer>
  );
};

export default ReminderButton;
