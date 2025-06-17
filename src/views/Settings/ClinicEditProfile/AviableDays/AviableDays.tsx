import React, { useState } from "react";
import ShadowBox from "../../../../components/ShadowBox/ShadowBox";
import {
  DaysRenderColumn,
  TimesActionShows,
  TimesRowShows,
} from "./AvailableDaysStyle";
import CheckWithSvg from "../../../../elements/Inputs/CheckWithSvg/CheckWithSvg";
import { NormalFlex } from "../../../../globalStyles";

import {
  handleAddTimePicker,
  handleCheckboxChange,
  handleDeleteTimePicker,
  handleUpdateTime,
} from "./Function";
import TimePickerComponent from "../../../../elements/Inputs/TimePicker/TimePicker";
import { SvgAddIcon, SvgPlus, SvgTrash } from "../../../../elements/Icons";
import FormActions from "../../../../components/FormActions/FormActions";

interface AvailableDaysInterface {
  PrevCondition: () => void;
  selectedFile: FileList | null;
  Name: string;
  WebURL: string;
  Email: string;
  PhoneNumber: string;
  ClinicAddress: string;
}

const AvailableDays = ({
  PrevCondition,
  selectedFile,
  Name,
  WebURL,
  PhoneNumber,
  ClinicAddress,
  Email,
}: AvailableDaysInterface) => {
  interface TimeSlot {
    start: string;
    end: string;
  }

  interface OfficeHour {
    day: string;
    timeSlots: TimeSlot[];
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [isCheckedArray, setIsCheckedArray] = useState(
    new Array(daysOfWeek.length).fill(false)
  );
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(
    Array(7).fill(false)
  );
  const [timeColumnCounts, setTimeColumnCounts] = useState<number[]>(
    Array(7).fill(1)
  );
  const [startTime, setStartTime] = useState<string[][]>(Array(7).fill([]));
  const [endTime, setEndTime] = useState<string[][]>(Array(7).fill([]));
  const [ErrorStartTime, setErrorStartTime] = useState<string[][]>(
    Array(7).fill([])
  );
  const [ErrorEndTime, setErrorEndTime] = useState<string[][]>(
    Array(7).fill([])
  );

  // Validation function to check if all time slots are valid
  const validateTimes = () => {
    let isValid = true;
    const newErrorStartTime = Array(7)
      .fill([])
      .map(() => [] as string[]);
    const newErrorEndTime = Array(7)
      .fill([])
      .map(() => [] as string[]);

    daysOfWeek.forEach((day, index) => {
      if (isCheckedArray[index]) {
        const timeSlots = startTime[index].map((start, timeIndex) => ({
          start,
          end: endTime[index][timeIndex],
        }));

        // Check for empty or invalid time slots
        timeSlots.forEach((slot, timeIndex) => {
          if (!slot.start || !slot.end) {
            newErrorStartTime[index][timeIndex] = "Error";
            newErrorEndTime[index][timeIndex] = "Error";
            isValid = false;
          } else if (slot.start >= slot.end) {
            newErrorStartTime[index][timeIndex] = "Error";
            newErrorEndTime[index][timeIndex] = "Error";
            isValid = false;
          }
        });

        // Check for overlapping time intervals
        for (let i = 0; i < timeSlots.length; i++) {
          for (let j = i + 1; j < timeSlots.length; j++) {
            const slotA = timeSlots[i];
            const slotB = timeSlots[j];

            if (
              (slotA.start >= slotB.start && slotA.start < slotB.end) || // Slot A starts during Slot B
              (slotA.end > slotB.start && slotA.end <= slotB.end) || // Slot A ends during Slot B
              (slotA.start <= slotB.start && slotA.end >= slotB.end) // Slot A completely overlaps Slot B
            ) {
              newErrorStartTime[index][i] = "Error";
              newErrorEndTime[index][i] = "Error";
              newErrorStartTime[index][j] = "Error";
              newErrorEndTime[index][j] = "Error";
              isValid = false;
            }
          }
        }
      }
    });

    setErrorStartTime(newErrorStartTime);
    setErrorEndTime(newErrorEndTime);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Construct the final data object
    const finalData = {
      selectedFile: selectedFile, // FileList or null
      Name: Name,
      WebURL: WebURL,
      Email: Email,
      PhoneNumber: PhoneNumber,
      ClinicAddress: ClinicAddress,
      availability: daysOfWeek.map((day, index) => ({
        day: day,
        timeSlots: startTime[index].map((start, timeIndex) => ({
          start: start,
          end: endTime[index][timeIndex],
        })),
      })),
    };

    // Log the final data to the console
    console.log("Final Data:", finalData);

    // Validate the time slots
    if (validateTimes()) {
      // Call the parent function to proceed
      PrevCondition();
    } else {
      console.error(
        "Validation failed. Please fix the errors in the time slots."
      );
    }
  };

  return (
    <ShadowBox>
      <DaysRenderColumn>
        {daysOfWeek.map((day, index) => (
          <DaysRenderColumn key={day}>
            <CheckWithSvg
              state={isCheckedArray[index]}
              setState={() =>
                handleCheckboxChange(
                  index,
                  isCheckedArray,
                  setIsCheckedArray,
                  setIsTimePickerVisible,
                  setStartTime,
                  setEndTime
                )
              }
              text={day}
              name={`day-${day}`}
            />
            {isTimePickerVisible[index] && (
              <NormalFlex>
                {Array.from({ length: timeColumnCounts[index] }).map(
                  (_, timeIndex) => (
                    <TimesRowShows key={`time_${index}_${timeIndex}`}>
                      <TimePickerComponent
                        borderColor={ErrorStartTime[index][timeIndex] || ""}
                        placeholder="Start Time"
                        value={startTime[index][timeIndex] || ""}
                        onChange={(newValue: string) =>
                          handleUpdateTime(
                            index,
                            timeIndex,
                            newValue,
                            "start",
                            setStartTime,
                            setEndTime
                          )
                        }
                      />
                      <TimePickerComponent
                        borderColor={ErrorEndTime[index][timeIndex] || ""}
                        placeholder="End Time"
                        value={endTime[index][timeIndex] || ""}
                        onChange={(newValue: string) =>
                          handleUpdateTime(
                            index,
                            timeIndex,
                            newValue,
                            "end",
                            setStartTime,
                            setEndTime
                          )
                        }
                      />
                      {timeIndex === 0 && (
                        <TimesActionShows
                          onClick={() =>
                            handleAddTimePicker(
                              index,
                              setTimeColumnCounts,
                              setStartTime,
                              setEndTime
                            )
                          }
                        >
                          <SvgPlus className="ClassStroke" />
                        </TimesActionShows>
                      )}
                      {timeIndex > 0 && (
                        <TimesActionShows
                          onClick={() =>
                            handleDeleteTimePicker(
                              index,
                              setTimeColumnCounts,
                              setStartTime,
                              setEndTime
                            )
                          }
                        >
                          <SvgTrash className="ClassFill" />
                        </TimesActionShows>
                      )}
                    </TimesRowShows>
                  )
                )}
              </NormalFlex>
            )}
          </DaysRenderColumn>
        ))}
      </DaysRenderColumn>
      <FormActions onSubmit={handleSubmit} />
    </ShadowBox>
  );
};

export default AvailableDays;
