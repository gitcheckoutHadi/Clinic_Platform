import { FirstIVF, LogoPic } from "../../../constants/Pics/Pics";

interface ScheduleInterface {
  day: string;
  time: string[];
}
export const CLINIC_PROFILE_LABELS = {
  EMAIL: "Email",
  WEBSITE_URL: "Website URL",
  PHONE_NUMBER: "Phone Number",
  CLINIC_ADDRESS: "Clinic Address",
};

export const scheduleDetails: ScheduleInterface[] = [
  {
    day: "Monday",
    time: ["08:00 AM - 06:00PM"],
  },
  {
    day: "Tuesday",
    time: ["08:00 AM - 12:00PM", "03:00PM - 06:00PM"],
  },
];

export const CorrectClinicInfo = {
  Id: "clinic_98765abcde",
  Prf: LogoPic, // replace with actual image/logo import
  Name: "Harmony Health Center",
  Email: "info@harmonyhealth.com",
  PhoneNumber: "+971 555-1234",
  WebURL: "harmonyhealth.com",
  Address:
    "456 Marina Boulevard, Office 210, Jumeirah Lakes Towers, Dubai, UAE, PO Box 67890",
  Availabilities: [
    {
      day: "Monday",
      TimeSlots: [
        { start: "09:00 AM", end: "11:30 AM" },
        { start: "01:00 PM", end: "03:00 PM" },
      ],
    },
    {
      day: "Tuesday",
      TimeSlots: [
        { start: "10:00 AM", end: "12:00 PM" },
        { start: "02:30 PM", end: "04:00 PM" },
      ],
    },
    {
      day: "Wednesday",
      TimeSlots: [
        { start: "08:30 AM", end: "11:00 AM" },
        { start: "01:30 PM", end: "04:30 PM" },
      ],
    },
    {
      day: "Thursday",
      TimeSlots: [
        { start: "09:15 AM", end: "11:45 AM" },
        { start: "12:30 PM", end: "02:00 PM" },
      ],
    },
    {
      day: "Friday",
      TimeSlots: [{ start: "10:00 AM", end: "12:30 PM" }],
    },
  ],
};
