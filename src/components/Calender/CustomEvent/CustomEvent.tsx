import React, { useEffect, useState } from "react";
import { CalendarEvent } from "../CalenderInterface";
import EventInfo from "./EventInfo/EventInfo";
import MappedIndexClickOutSide from "../../../hooks/MapedIndexClickOutSide";
import DayViewEvent from "./DayViewEvent/DayViewEvent";
import WeekView from "./WeekView/WeekView";
import MonthView from "./MonthView/MonthView";

export interface CustomEventProps {
  event: CalendarEvent; // Custom event type with the "type" field,
  view?: string;
}

const CustomEvent: React.FC<CustomEventProps> = ({ event, view }) => {
  // const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
  //   null
  // );

  const backgroundColor =
    event.type === "survey"
      ? "#FFD700"
      : event.type === "quiz"
      ? "#FF4500"
      : "#87CEEB"; // Sky blue for other events
  // const clickOutsideRef = MappedIndexClickOutSide(() => setSelectedEvent(null));

  useEffect(() => {
    console.log("event are", event);
  }, [view]);
  return (
    <div
      style={{
        borderRadius: "5px",
        // padding: "5px",

        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "relative", // Keep this if you want the popup relative to this element
        overflow: "visible",
      }}
      // onClick={handleClick}
      // ref={clickOutsideRef}
    >
      {/* {selectedEvent && <EventInfo event={selectedEvent} />} */}
      {view === "day" ? (
        <DayViewEvent event={event} />
      ) : view === "month" ? (
        <MonthView event={event} />
      ) : view === "week" ? (
        <WeekView event={event} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomEvent;
