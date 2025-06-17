import { toArabicDigits } from "./translates";

export const StartEndTime = (start: Date, end: Date): string => {
  const language = localStorage.getItem("language");
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);

  // Format the start and end times
  const startTime = formatter.format(start);
  const endTime = formatter.format(end);

  // Extract AM/PM for start and end
  const startPeriod = startTime.slice(-2); // Last two characters (AM/PM)
  const endPeriod = endTime.slice(-2);

  let result: string;

  // If periods are the same, only show it at the end
  if (startPeriod === endPeriod) {
    result = `${startTime.slice(0, -3)}-${endTime}`;
  } else {
    // If periods differ, display both
    result = `${startTime}-${endTime}`;
  }

  // Translate result to Arabic digits if language is Arabic
  return language === "ar" ? toArabicDigits(result) : result;
};

// Example Usage
// const start = new Date(2024, 11, 30, 9, 0);
// const end = new Date(2024, 11, 30, 10, 0);
// console.log(StartEndTime(start, end));
// Output: "9:00-10:00 AM"
