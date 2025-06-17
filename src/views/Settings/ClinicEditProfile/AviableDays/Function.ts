import axios from "axios";
import moment from "moment";
import "moment-timezone";
import { useNavigate, useParams } from "react-router-dom";

/**
 * Handles the checkbox change for a specific day.
 * Toggles the checkbox state, sets visibility of time picker, and manages start and end time states.
 * @param index The index of the checkbox.
 * @param isCheckedArray The state array of checkbox values.
 * @param setIsCheckedArray Function to set the checkbox state array.
 * @param setIsTimePickerVisible Function to set the visibility of the time picker.
 * @param setStartTime Function to set the start time array.
 * @param setEndTime Function to set the end time array.
 */
export const handleCheckboxChange = (
  index: number,
  isCheckedArray: boolean[],
  setIsCheckedArray: React.Dispatch<React.SetStateAction<boolean[]>>,
  setIsTimePickerVisible: React.Dispatch<React.SetStateAction<boolean[]>>,
  setStartTime: React.Dispatch<React.SetStateAction<string[][]>>,
  setEndTime: React.Dispatch<React.SetStateAction<string[][]>>
) => {
  setIsCheckedArray((prevState) => {
    const newState = [...prevState];
    newState[index] = !newState[index];
    return newState;
  });

  setIsTimePickerVisible((prevState) => {
    const newVisibility = [...prevState];
    newVisibility[index] = !newVisibility[index];
    return newVisibility;
  });

  if (!isCheckedArray[index]) {
    setStartTime((prevState) => {
      const newStartTime = [...prevState];
      newStartTime[index] = ["00:00"];
      return newStartTime;
    });

    setEndTime((prevState) => {
      const newEndTime = [...prevState];
      newEndTime[index] = ["00:00"];
      return newEndTime;
    });
  } else {
    setStartTime((prevState) => {
      const newStartTime = [...prevState];
      newStartTime[index] = []; // Reset start time when unchecked
      return newStartTime;
    });

    setEndTime((prevState) => {
      const newEndTime = [...prevState];
      newEndTime[index] = []; // Reset end time when unchecked
      return newEndTime;
    });
  }
};
// End of function

/**
 * Updates the start or end time for a specific day and time slot.
 * @param dayIndex The index of the day.
 * @param timeIndex The index of the time slot.
 * @param newValue The new value of the time.
 * @param type Indicates whether it's the start or end time.
 * @param setStartTime Function to set the start time array.
 * @param setEndTime Function to set the end time array.
 */
export const handleUpdateTime = (
  dayIndex: number,
  timeIndex: number,
  newValue: string,
  type: "start" | "end",
  setStartTime: React.Dispatch<React.SetStateAction<string[][]>>,
  setEndTime: React.Dispatch<React.SetStateAction<string[][]>>
) => {
  if (type === "start") {
    setStartTime((prevState) => {
      const newStartTime = [...prevState];
      newStartTime[dayIndex][timeIndex] = newValue;
      return newStartTime;
    });
  } else if (type === "end") {
    setEndTime((prevState) => {
      const newEndTime = [...prevState];
      newEndTime[dayIndex][timeIndex] = newValue;
      return newEndTime;
    });
  }
};
// End of function

/**
 * Adds a new time picker for a specific day.
 * @param dayIndex The index of the day.
 * @param setTimeColumnCounts Function to set the time column counts.
 * @param setStartTime Function to set the start time array.
 * @param setEndTime Function to set the end time array.
 */
export const handleAddTimePicker = (
  dayIndex: number,
  setTimeColumnCounts: React.Dispatch<React.SetStateAction<number[]>>,
  setStartTime: React.Dispatch<React.SetStateAction<string[][]>>,
  setEndTime: React.Dispatch<React.SetStateAction<string[][]>>
) => {
  setTimeColumnCounts((prevState) => {
    const newCounts = [...prevState];
    newCounts[dayIndex] += 1;
    return newCounts;
  });

  setStartTime((prevState) => {
    const newStartTime = [...prevState];
    newStartTime[dayIndex].push(""); // Add new empty time slot
    return newStartTime;
  });

  setEndTime((prevState) => {
    const newEndTime = [...prevState];
    newEndTime[dayIndex].push(""); // Add new empty time slot
    return newEndTime;
  });
};
// End of function

/**
 * Deletes the last time picker for a specific day.
 * @param dayIndex The index of the day.
 * @param setTimeColumnCounts Function to set the time column counts.
 * @param setStartTime Function to set the start time array.
 * @param setEndTime Function to set the end time array.
 */
export const handleDeleteTimePicker = (
  dayIndex: number,
  setTimeColumnCounts: React.Dispatch<React.SetStateAction<number[]>>,
  setStartTime: React.Dispatch<React.SetStateAction<string[][]>>,
  setEndTime: React.Dispatch<React.SetStateAction<string[][]>>
) => {
  setTimeColumnCounts((prevState) => {
    const newCounts = [...prevState];
    newCounts[dayIndex] -= 1;
    return newCounts.map((count) => Math.max(count, 1)); // Ensure at least one time picker remains
  });

  setStartTime((prevState) => {
    const newStartTime = [...prevState];
    newStartTime[dayIndex].pop(); // Remove the last item
    return newStartTime;
  });

  setEndTime((prevState) => {
    const newEndTime = [...prevState];
    newEndTime[dayIndex].pop(); // Remove the last item
    return newEndTime;
  });
};
// End of function

/**
 * Generates data based on selected options.
 * @param daysOfWeek Array of days of the week.
 * @param isCheckedArray Array representing the checked state of each day.
 * @param startDate Selected start date.
 * @param endDate Selected end date.
 * @param startTime Array representing the start time for each day.
 * @param endTime Array representing the end time for each day.
 * @param toast Toast component for displaying messages.
 */

// Function to convert 24-hour time to AM/PM format
const convertToAmPm = (time: string): string => {
  // Check if the time is in 24-hour format by looking for ':' and ensuring it's not already in AM/PM format
  if (
    time.includes(":") &&
    !time.toUpperCase().includes("AM") &&
    !time.toUpperCase().includes("PM")
  ) {
    return moment(time, "HH:mm").format("hh:mm A");
  }
  return time;
};

// Do not change anything in this function
export const handleGenerate = async (
  daysOfWeek: string[],
  isCheckedArray: boolean[],
  startDate: Date | null,
  endDate: Date | null,
  startTime: string[][],
  endTime: string[][],
  toast: any, // Adjust the type of toast as per your Toast component library
  SessionId: any,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
  Navigate: (path: string) => void
) => {
  setIsLoading(true);

  const checkedDays = daysOfWeek.filter((_, index) => isCheckedArray[index]);
  if (
    startDate &&
    endDate &&
    checkedDays.every((day) => startTime[daysOfWeek.indexOf(day)].length > 0) &&
    checkedDays.every((day) => endTime[daysOfWeek.indexOf(day)].length > 0)
  ) {
    const start = moment(startDate);
    const end = moment(endDate);

    if (start.isAfter(end)) {
      toast.error("Start date cannot be greater than end date.");
      setIsLoading(false);
      return;
    }
    if (start.isSame(end, "day")) {
      toast.error("Start date cannot be equal to end date.");
      setIsLoading(false);
      return;
    }

    const tenantName = localStorage.getItem("tenant");
    const sessionDays = checkedDays.map((day) => {
      const index = daysOfWeek.indexOf(day);
      return {
        day: day,
        timeSlots: startTime[index].map((start, idx) => {
          let startAmPm = start;
          let endAmPm = endTime[index][idx];
          let startMoment = moment(`${startAmPm}`, "hh:mm A");
          let endMoment = moment(`${endAmPm}`, "hh:mm A");

          return {
            start: startMoment,
            end: endMoment,
          };
        }),
      };
    });

    // Validate each session day's time slots before converting to UTC
    for (const sessionDay of sessionDays) {
      for (const timeSlot of sessionDay.timeSlots) {
        const startMoment = timeSlot.start;
        const endMoment = timeSlot.end;

        console.log("Start -->", startMoment);
        console.log("end -->", endMoment);

        if (startMoment.isSameOrAfter(endMoment)) {
          toast.error(
            `Invalid time range for ${sessionDay.day}: Start time cannot be greater than or equal to end time.`
          );
          setIsLoading(false);
          return;
        }
      }
    }

    // Convert times to UTC after validation
    const sessionDaysUtc = sessionDays.map((sessionDay) => ({
      ...sessionDay,
      timeSlots: sessionDay.timeSlots.map((timeSlot) => ({
        start: timeSlot.start.utc().toISOString(), // Send full ISO string
        end: timeSlot.end.utc().toISOString(), // Send full ISO string
      })),
    }));

    console.log("Session in  utc --->", sessionDaysUtc);

    const data = {
      data: {
        classSourceId: SessionId.classId,
        startDate: start.format("ddd MMM DD YYYY "),
        endDate: end.format("ddd MMM DD YYYY"),
        sessionDays: sessionDaysUtc,
      },
    };

    axios
      .post(
        `https://k58wrky089.execute-api.eu-west-1.amazonaws.com/dev/sessions/create/${tenantName}`,
        data
      )
      .then((response) => {
        toast.success("Attendance generated successfully");
        setIsLoading(false);
        Navigate(
          `/courseview/Gradebook/AttendanceAllSessions/${SessionId.classId}`
        );
        // Handle any further actions after successful generation
      })
      .catch((error) => {
        console.error("Failed to generate attendance:", error);
        toast.error("Failed to generate attendance");
        setIsLoading(false);
      });
  } else {
    toast.error(
      "Please select start date, end date, and all start/end times for the checked days."
    );
    setIsLoading(false);
  }
};

// End of function
