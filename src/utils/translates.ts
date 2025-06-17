export const translateNumbers = (translate: any, number: number) => {
  return number
    .toString()
    .split("")
    .map((digit) => translate(`numbers.${digit}`) || digit)
    .join("");
};

export const translateNumbersDigit = (translate: any, number: string) => {
  return number
    .split("")
    .map((digit) => translate(`numbers.${digit}`) || digit)
    .join("");
};

export const toArabicDigits = (str: string) => {
  const language = localStorage.getItem("language");
  const englishToArabic: { [key: string]: string } = {
    "0": "٠",
    "1": "١",
    "2": "٢",
    "3": "٣",
    "4": "٤",
    "5": "٥",
    "6": "٦",
    "7": "٧",
    "8": "٨",
    "9": "٩",
  };

  return language === "ar"
    ? str.replace(/\d/g, (digit) => englishToArabic[digit])
    : str;
};

export const formatDayContents = (day: number) => {
  return toArabicDigits(day.toString());
};

export const formatPhoneNumberLTR = (phoneNumber: any) => {
  const LRM = "\u200E"; // Unicode Left-to-Right Mark
  return `${LRM}+961 ${LRM}${phoneNumber.slice(4)}`;
};
