import React from "react";
import { CustomEventProps } from "../CustomEvent";
import {
  DoctorCell,
  WeekInfoCell,
  WeekViewMainCell,
  WeekViewMainContainer,
  WeekViewMainRow,
} from "./WeekView.style";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import {
  MediumTypography,
  Typography,
} from "../../../../elements/textElement/fonts/Fonts";
import {
  SvgClockIcon,
  SvgCorrectTick,
  SvgDoctorIcon,
  SvgOptionDots,
} from "../../../../elements/Icons";
import { StartEndTime } from "../../../../utils/StartEndTime";
import { ModifyColorOnType } from "../../../../utils/TypeModifyBgColor";

const WeekView = ({ event }: CustomEventProps) => {
  return (
    <WeekViewMainContainer>
      <WeekViewMainRow>
        <WeekViewMainCell>
          <CircularImage size="1.875rem" src={event.patientProfile || ""} />

          <MediumTypography
            text={event.patientName}
            fontSize="0.6875rem"
            fontWeight="700"
            lineHeight="120%"
          />
        </WeekViewMainCell>
        {event.done ? <SvgCorrectTick /> : <SvgOptionDots height={18} />}
      </WeekViewMainRow>

      <WeekInfoCell>
        <MediumTypography text={"Time"} color="#a6a6a6" fontSize="0.75rem" />
        <MediumTypography
          text={StartEndTime(event.start, event.end)}
          fontSize="0.75rem"
          fontWeight="700"
        />
      </WeekInfoCell>
      <WeekInfoCell>
        <MediumTypography text={"Reason"} color="#a6a6a6" fontSize="0.75rem" />

        {/* </DayViewEventText>{" "} */}
        <MediumTypography
          text={event.reason}
          fontSize="0.75rem"
          fontWeight="700"
        />
      </WeekInfoCell>
      <DoctorCell bgcolor={ModifyColorOnType(event.type)}>
        <MediumTypography
          text={event.doctorName}
          fontSize="0.75rem"
          fontWeight="700"
        />
      </DoctorCell>
    </WeekViewMainContainer>
  );
};

export default WeekView;
