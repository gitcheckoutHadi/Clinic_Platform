import React from "react";
import {
  DayViewEventCell,
  DayViewEventMainContainer,
} from "./DayViewEvent.style";
import { CustomEventProps } from "../CustomEvent";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { MediumTypography } from "../../../../elements/textElement/fonts/Fonts";
import {
  SvgClockIcon,
  SvgCorrectTick,
  SvgDoctorIcon,
} from "../../../../elements/Icons";
import { StartEndTime } from "../../../../utils/StartEndTime";
import { DoctorCell, WeekInfoCell } from "../WeekView/WeekView.style";
import { ModifyColorOnType } from "../../../../utils/TypeModifyBgColor";

const DayViewEvent = ({ event }: CustomEventProps) => {
  return (
    <DayViewEventMainContainer>
      {/* <MediumTypography text="hadi" /> */}
      <DayViewEventCell>
        <CircularImage size="1.875rem" src={event.patientProfile || ""} />

        <MediumTypography
          text={event.patientName}
          fontSize="0.75rem"
          fontWeight="700"
          lineHeight="120%"
        />
      </DayViewEventCell>
      {/* <DayViewEventCell>
        <SvgDoctorIcon />

        <MediumTypography
          text={event.doctorName}
          fontSize="0.6875rem"
          fontWeight="500"
          lineHeight="1rem"
          letter_spacing="0.03125rem"
        />
      </DayViewEventCell> */}
      <DayViewEventCell>
        <WeekInfoCell>
          <MediumTypography text={"Time"} color="#a6a6a6" fontSize="0.75rem" />
          <MediumTypography
            text={StartEndTime(event.start, event.end)}
            fontSize="0.75rem"
            fontWeight="700"
          />
        </WeekInfoCell>
      </DayViewEventCell>
      <DayViewEventCell>
        <WeekInfoCell>
          <MediumTypography
            text={"Reason"}
            color="#a6a6a6"
            fontSize="0.75rem"
          />

          {/* </DayViewEventText>{" "} */}
          <MediumTypography
            text={event.reason}
            fontSize="0.75rem"
            fontWeight="700"
          />
        </WeekInfoCell>
      </DayViewEventCell>
      <DayViewEventCell>
        <DoctorCell bgcolor={ModifyColorOnType(event.type)}>
          <MediumTypography
            text={event.doctorName}
            fontSize="0.75rem"
            fontWeight="700"
          />
        </DoctorCell>
        {event.done ? <SvgCorrectTick /> : ""}
      </DayViewEventCell>
    </DayViewEventMainContainer>
  );
};

export default DayViewEvent;
