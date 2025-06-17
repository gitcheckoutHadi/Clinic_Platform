import { toArabicDigits } from "./translates";

export function formatTime(date: Date): string {
  const language = localStorage.getItem("language");
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert to 12-hour format and determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  // Translate the time string into Arabic if the language is set to "ar"
  return language === "ar" ? toArabicDigits(formattedTime) : formattedTime;
}

// Example usage
const date = new Date(2025, 0, 2, 1, 0); // January 2, 2025, 1:00 AM
console.log(formatTime(date)); // Outputs: "1:00 AM"
