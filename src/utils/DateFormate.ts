import { toArabicDigits } from "./translates";

export const DateFormate = (date: Date): string => {
  const language = localStorage.getItem("language") || "en";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Use "ar" locale for Arabic and "en-US" for English
  const formattedDate = date.toLocaleDateString(
    language === "ar" ? "ar" : "en-US",
    options
  );

  // If the language is Arabic, translate numbers to Arabic digits
  return language === "ar" ? toArabicDigits(formattedDate) : formattedDate;
};

export const DateNumberFormat = (date: Date): string => {
  const language = localStorage.getItem("language") || "en";

  // Extract day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  // Format as "DD/MM/YYYY"
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  // Convert numbers to Arabic digits if language is "ar"
  return language === "ar" ? toArabicDigits(formattedDate) : formattedDate;
};

export const DateTimeFormat = (date: Date): string => {
  const year = date.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format

  return `${day} ${month}, ${hours}:${minutes}${ampm}`;
};
