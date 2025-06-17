import React, { useState } from "react";
import TimePickerComponent from "../../../elements/Inputs/TimePicker/TimePicker";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import ColoredButton from "../../../elements/Buttons/ColoredButton/ColoredButton";
import Button from "../../../elements/Buttons/Button/Button";
import { SvgAddIcon, SvgTrash } from "../../../elements/Icons";
import {
  IconStyle,
  SchedulePickerStyle,
  TimePickerContainer,
} from "./ClinicProfileEdit.style";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../../recoil/ThemeSelectors";
import CustomCheckbox from "../../../elements/customCheckbox/CustomCheckbox";

// Define a type for the time slots
interface TimeSlot {
  start: string;
  end: string;
}

// Define a type for the schedule
interface Schedule {
  [key: string]: TimeSlot[];
}

// Define the days of the week
const Days: { [key: string]: string } = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

const SchedulePicker: React.FC = () => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);

  const [schedule, setSchedule] = useState<Schedule>(
    Object.keys(Days).reduce((scheduleObject: Schedule, day) => {
      scheduleObject[day] = [];
      return scheduleObject;
    }, {} as Schedule)
  );

  const [selectedDays, setSelectedDays] = useState<{ [key: string]: boolean }>(
    Object.keys(Days).reduce((selectedDaysObject, day) => {
      selectedDaysObject[day] = false;
      return selectedDaysObject;
    }, {} as { [key: string]: boolean })
  );

  const [errorIndex, setErrorIndex] = useState<number | null>(null);

  const convertTo24Hour = (time: string): Date => {
    const [hourMinute, period] = time.split(" ");
    const [hour, minute] = hourMinute.split(":").map(Number);
    const isPM = period === "PM";
    const twentyFourHour = isPM ? hour + 12 : hour;

    const date = new Date();
    date.setHours(twentyFourHour, minute, 0, 0);
    return date;
  };

  const handleAddSlot = (day: string): void => {
    setSchedule((prev) => ({
      ...prev,
      [day]: [...prev[day], { start: "", end: "" }],
    }));
  };

  const handleRemoveSlot = (day: string, index: number): void => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
    setErrorIndex(null); // Reset error index when slot is removed
  };

  const handleChange = (
    day: string,
    index: number,
    field: "start" | "end",
    value: string
  ): void => {
    setSchedule((prev) => {
      const updatedSchedule = {
        ...prev,
        [day]: prev[day].map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        ),
      };

      if (field === "end") {
        // Check if end time is earlier than start time
        const startTime = convertTo24Hour(updatedSchedule[day][index].start);
        const endTime = convertTo24Hour(updatedSchedule[day][index].end);

        if (endTime < startTime) {
          setErrorIndex(index); // Set the index with an error
          return prev; // Don't update schedule if validation fails
        } else {
          setErrorIndex(null); // Clear error if validation passes
        }
      }
      return updatedSchedule;
    });
  };

  const handleCheckboxChange = (day: string): void => {
    setSelectedDays((prev) => {
      const isDaySelected = !prev[day];
      if (isDaySelected) {
        setSchedule((schedule) => ({
          ...schedule,
          [day]: [{ start: "", end: "" }],
        }));
      } else {
        setSchedule((schedule) => ({
          ...schedule,
          [day]: [],
        }));
      }
      return {
        ...prev,
        [day]: isDaySelected,
      };
    });
  };

  return (
    <>
      {Object.keys(Days).map((day) => (
        <SchedulePickerStyle key={day}>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <CustomCheckbox
              checked={selectedDays[day]}
              onChange={() => handleCheckboxChange(day)}
            />
            <Typography
              text={Days[day]}
              fontSize="1rem"
              fontWeight="300"
              color="#505355"
            />
          </div>
          {/*time slots for selected day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "1.75rem",
            }}
          >
            {selectedDays[day] &&
              schedule[day].map((slot, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.25rem",
                  }}
                >
                  <TimePickerContainer
                    key={index}
                    style={{ marginTop: index === 0 ? "0.5rem" : "0" }}
                  >
                    <TimePickerComponent
                      width="100%"
                      height="3.5rem"
                      value={slot.start}
                      onChange={(value: string) =>
                        handleChange(day, index, "start", value)
                      }
                    />
                    <TimePickerComponent
                      width="100%"
                      padding="0.25rem 1.25rem"
                      height="3.5rem"
                      value={slot.end}
                      onChange={(value: string) =>
                        handleChange(day, index, "end", value)
                      }
                    />
                    {index > 0 && (
                      <IconStyle onClick={() => handleRemoveSlot(day, index)}>
                        <SvgTrash
                          fill={"#FF6B6B"}
                          stroke="#FF6B6B"
                          strokeWidth={"0.0125rem"}
                          height={"1.25rem"}
                        />
                      </IconStyle>
                    )}
                    {index === 0 && (
                      <IconStyle onClick={() => handleAddSlot(day)}>
                        <SvgAddIcon fill={secondaryColor} />
                      </IconStyle>
                    )}
                  </TimePickerContainer>
                  {errorIndex === index && (
                    <div style={{ color: "red", marginLeft: "1rem" }}>
                      End time cannot be earlier than start time
                    </div>
                  )}
                </div>
              ))}
          </div>
        </SchedulePickerStyle>
      ))}
    </>
  );
};

export default SchedulePicker;
