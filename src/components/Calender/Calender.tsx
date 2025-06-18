import React, { useEffect, useState } from "react";
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  View,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderToolBar from "./CalenderToolBar/CalenderToolBar";

// import "./Calender.css";
import CustomEvent from "./CustomEvent/CustomEvent";

import "moment/locale/tr"; // Import Turkish locale data
import "moment/locale/ar";
import "moment/locale/fr";
import { myEventsList } from "./CalenderDummyData";
import EventInfo from "./CustomEvent/EventInfo/EventInfo";

import { useTranslation } from "react-i18next";
import { MainCalenderContainer } from "./CalenderStyle";
import CustomHeader from "./Header/Header";
import { isToday } from "date-fns";
import CustomHeaderToday from "./Header/CustomHeaderToday";
import { TimeGutterHeader } from "./TimeGutterHeader";

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  const [view, setView] = useState<View>("week");
  const { t } = useTranslation();
  const localStorageLanguage = localStorage.getItem("language");

  const [selectedEvent, setSelectedEvent] = useState<any>(null); // State for selected event
  const [updatedLocalizer, setUpdatedLocalizer] =
    useState<DateLocalizer>(localizer);
  const [eventPosition, setEventPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [language, setLanguage] = useState<string>("");
  // Handle view change
  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const handleSelectEvent = (event: any, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = window.innerWidth / 2; // Determine center of the screen horizontally
    const centerY = window.innerHeight / 2; // Determine center of the screen vertically

    const isLeftCenter = e.clientX < centerX && e.clientY > centerY;

    setEventPosition({
      top: rect.top + window.scrollY + (isLeftCenter ? -135 : -135),
      left: rect.left + window.scrollX + (isLeftCenter ? 170 : -230),
    });

    setSelectedEvent(event);
  };
  // console.log("selectedEvent",selectedEvent)
  // Handle closing the EventInfo component
  const handleCloseEventInfo = () => {
    setSelectedEvent(null); // Reset selected event state
  };

  useEffect(() => {
    localStorageLanguage === "tr"
      ? setLanguage("tr")
      : localStorageLanguage === "ar"
      ? setLanguage("ar")
      : localStorageLanguage === "fr"
      ? setLanguage("fr")
      : setLanguage("en");
  }, [t]);
  useEffect(() => {
    const setLocalizer = () => {
      // Set moment locales
      moment.locale(language);
      // Return the appropriate momentLocalizer
      return momentLocalizer(moment);
    };

    // Update the localizer when the language changes in localStorage
    const localizer = setLocalizer();
    setUpdatedLocalizer(localizer);
  }, [language]);
  return (
    <MainCalenderContainer>
      <Calendar
        localizer={updatedLocalizer}
        events={myEventsList}
        tooltipAccessor={null}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        style={{ height: 1600 }}
        min={new Date(1970, 1, 1, 8, 0)} // Start from 8:00 AM
        max={new Date(1970, 1, 1, 20, 0)} // End at 8:00 PM
        view={view}
        onView={(newView) => handleViewChange(newView)}
        onSelectEvent={(event, e) =>
          handleSelectEvent(event, e as unknown as React.MouseEvent)
        }
        components={{
          header: ({ date, localizer }) =>
            isToday(date) ? (
              <CustomHeaderToday date={date} localizer={localizer} />
            ) : (
              <CustomHeader date={date} localizer={localizer} />
            ),
          event: ({ event }) => <CustomEvent event={event} view={view} />,
          toolbar: (props) => (
            <CalenderToolBar
              onView={handleViewChange}
              onNavigate={props.onNavigate}
              propView={view}
              label={props.label}
            />
          ),
          timeGutterHeader: TimeGutterHeader,
        }}
      />

      {selectedEvent && eventPosition && (
        <EventInfo
          event={selectedEvent}
          position={eventPosition}
          onClose={handleCloseEventInfo}
          setSelectedEvent={setSelectedEvent}
          data={selectedEvent}
        />
      )}
    </MainCalenderContainer>
  );
};

export default MyCalendar;
