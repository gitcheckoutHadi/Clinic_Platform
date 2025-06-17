import React, { useEffect } from "react";
import { CustomEventProps } from "../CustomEvent";
import {
  EventContactCell,
  EventContactInfoContainer,
  EventContactInfoRow,
  EventHeaderContainer,
  EventInfoCell,
  EventInfoPopupContainer,
  EventInfoRow,
  EventProfileContainer,
  EventReasonContainer,
  ReminderBtnCell,
} from "./EventInfo.style";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { Prf1 } from "../../../../constants/Pics/Pics";

import {
  MediumTypography,
  Typography,
} from "../../../../elements/textElement/fonts/Fonts";
import {
  SvgCorrectTick,
  SvgEmail,
  SvgOptionDots,
  SvgPhone,
} from "../../../../elements/Icons";
import { StartEndTime } from "../../../../utils/StartEndTime";
import MappedIndexClickOutSide from "../../../../hooks/MapedIndexClickOutSide";
import { CalendarEvent } from "../../CalenderInterface";

interface EventInfoInterface extends CustomEventProps {
  position: { top: number; left: number } | null;
  onClose: () => void;
  setSelectedEvent: React.Dispatch<React.SetStateAction<number | null>>;
  data: CalendarEvent;
}

const EventInfo: React.FC<EventInfoInterface> = ({
  event,
  position,
  onClose,
  setSelectedEvent,
  data,
}) => {
  useEffect(() => {
    console.log("event :", event);
  }, [event]);
  const clickOutsideRef = MappedIndexClickOutSide(() => setSelectedEvent(null));
  return (
    <div
      className="event-info-modal"
      style={{
        position: "absolute",
        top: position?.top || 0,
        left: position?.left || 0,
        backgroundColor: "#F9F9F9",
        padding: "10px",
        border: "1px solid #ccc",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
      ref={clickOutsideRef}
    >
      <EventInfoPopupContainer>
        <EventHeaderContainer>
          <EventProfileContainer>
            <CircularImage size="1.875rem" src={data.patientProfile || ""} />
            <EventContactInfoContainer>
              <MediumTypography
                text={data.patientName}
                fontWeight="700"
                lineHeight="120%"
              />

              <EventContactInfoRow>
                <EventContactCell>
                  {/* <SvgPhone /> */}
                  <MediumTypography
                    text={`${data.patient_phoneNumber}  |  ${data.patient_email}`}
                    color="#a6a6a6"
                  />
                </EventContactCell>
              </EventContactInfoRow>
            </EventContactInfoContainer>
            {/* {data.done ? <SvgCorrectTick /> : <SvgOptionDots />} */}
          </EventProfileContainer>
        </EventHeaderContainer>
        <EventInfoRow>
          <EventInfoCell>
            <MediumTypography text={"Doctor"} color="#a6a6a6" />
            <MediumTypography text={data.doctorName} fontWeight="700" />
          </EventInfoCell>
          <EventInfoCell>
            <MediumTypography text={"Time"} color="#a6a6a6" />
            <MediumTypography
              text={StartEndTime(data.start, data.end)}
              fontWeight="700"
            />
          </EventInfoCell>

          {data.reason && (
            <EventInfoCell>
              <MediumTypography text={"Reason"} color="#a6a6a6" />
              <MediumTypography fontWeight="700" text={data.reason} />
            </EventInfoCell>
          )}
        </EventInfoRow>
        {data.Note && (
          <EventReasonContainer>
            <MediumTypography text={"Note"} color="#898DDA" fontWeight="700" />
            <MediumTypography text={data.Note} color="#a6a6a6" />
          </EventReasonContainer>
        )}
        {/* Add more event details here */}
        {!data.done ? (
          <ReminderBtnCell>
            <MediumTypography
              fontSize="0.875rem"
              text={"Send reminder"}
              fontWeight="700"
              color="#fff"
            />
          </ReminderBtnCell>
        ) : (
          <></>
        )}
      </EventInfoPopupContainer>
    </div>
  );
};

export default EventInfo;
