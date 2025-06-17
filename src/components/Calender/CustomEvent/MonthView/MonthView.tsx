import React from "react";
import { CustomEventProps } from "../CustomEvent";
import { MonthViewMainContainer, MonthViewFlexGap } from "./MonthView.style";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { MediumTypography } from "../../../../elements/textElement/fonts/Fonts";
import { SvgCorrectTick } from "../../../../elements/Icons";
import { formatTime } from "../../../../utils/Time";

const MonthView = ({ event }: CustomEventProps) => {
  return (
    <MonthViewMainContainer>
      <MonthViewFlexGap>
        <CircularImage size="1.25rem" src={event.patientProfile || ""} />

        <MediumTypography
          text={event.patientName}
          fontSize="0.75rem"
          fontWeight="700"
          lineHeight="120%"
        />
      </MonthViewFlexGap>
      {event.done ? (
        <SvgCorrectTick />
      ) : (
        <MediumTypography
          text={formatTime(event.start)}
          fontSize="0.75rem"
          fontWeight="700"
          lineHeight="1rem"
          letter_spacing=" 0.03125rem"
          color="#898DDA"
        />
      )}
    </MonthViewMainContainer>
  );
};

export default MonthView;
