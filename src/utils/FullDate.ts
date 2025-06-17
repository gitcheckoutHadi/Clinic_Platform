import { toArabicDigits } from "./translates";

export const FullDate = (date: Date): string => {
  const language = localStorage.getItem("language");

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(date);

  const day = parts.find((part) => part.type === "day")?.value || "";
  const month = parts.find((part) => part.type === "month")?.value || "";
  const year = parts.find((part) => part.type === "year")?.value || "";
  const hour = parts.find((part) => part.type === "hour")?.value || "";
  const minute = parts.find((part) => part.type === "minute")?.value || "";
  const ampm =
    parts.find((part) => part.type === "dayPeriod")?.value?.toUpperCase() || "";

  const translatedDate = `${month}/${day}/${year} | ${hour}:${minute}${ampm}`;

  // Translate the entire date string into Arabic if the language is set to "ar"
  return language === "ar" ? toArabicDigits(translatedDate) : translatedDate;
};
