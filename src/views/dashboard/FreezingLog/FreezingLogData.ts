import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";

export const getCurrencySymbol = (locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(0)
    .replace(/\d/g, "")
    .trim();
};

// Usage in your component or data file
const userLocale = navigator.language || "en-US"; // Default to 'en-US' if not detected
export const currencySymbol = getCurrencySymbol(userLocale, "USD"); // Default to USD

export const FreezingLogHeaderDData: TableHeaderDataInterface[] = [
  { id: "PatientName", label: "Patient Name" },
  { id: "DateAndTime", label: "Date And time" },
  { id: "Status", label: "Status" },
  { id: "Amount", label: `Amount (${currencySymbol})` }, // e.g., "Amount ($)" for USD
];

export const FreezingLogData = [
  {
    SourceId: "abc123xyz",
    PatientName: "Ali Mansour",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 2, 1, 0),
    Status: "Pending",
    Amount: "200",
  },
  {
    SourceId: "xyz456abc",
    PatientName: "Omar Khaled",
    FileNb: "asdfrt",
    DateAndTime: new Date(2025, 0, 5, 14, 45),
    Status: "Completed",
    Amount: "150",
  },
  {
    SourceId: "pqr789lmn",
    PatientName: "Hassan Ahmed",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 10, 16, 10),
    Status: "Active",
    Amount: "175",
  },
  {
    SourceId: "lmn987pqr",
    PatientName: "Kareem Nasser",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 12, 11, 20),
    Status: "Overdue",
    Amount: "250",
  },
  {
    SourceId: "rst654uvw",
    PatientName: "Ziad Farouk",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 15, 9, 50),
    Status: "Pending",
    Amount: "120",
  },
  {
    SourceId: "uvw321rst",
    PatientName: "Samir Adel",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 18, 13, 15),
    Status: "Completed",
    Amount: "300",
  },
  {
    SourceId: "ghi852jkl",
    PatientName: "Tariq Mahmoud",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 20, 17, 40),
    Status: "Active",
    Amount: "180",
  },
  {
    SourceId: "jkl741ghi",
    PatientName: "Youssef Hassan",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 22, 10, 5),
    Status: "Overdue",
    Amount: "275",
  },
  {
    SourceId: "mno369xyz",
    PatientName: "Nour Hani",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 25, 12, 30),
    Status: "Pending",
    Amount: "220",
  },
  {
    SourceId: "xyz258mno",
    PatientName: "Faris Omar",
    FileNb: "dsfgthygtf",
    DateAndTime: new Date(2025, 0, 28, 14, 55),
    Status: "Completed",
    Amount: "350",
  },
];
