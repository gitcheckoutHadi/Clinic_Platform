import { FirstIVF } from "../../../constants/Pics/Pics";

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

export const ClinicInfo = {
  Id: "asdfghygfcdsxd",
  Prf: FirstIVF,
  Name: "FIRST IVF",
  Email: "contact@firstivf.com",
  PhoneNumber: "+971 987-6543",
  WebURL: "sunshinefertility.com",
  Address:
    "123 Sheikh Zayed Road Al Wasl Building, Suite 405 Dubai, UAE PO Box 12345",
  OpeningHours: {
    Monday: ["08:00 AM - 11:00AM", "01:00 PM - 06:00PM"],
    Tuesday: ["01:00 PM - 06:00PM"],
    Wednesday: ["01:00 PM - 06:00PM"],
    Thursday: ["01:00 PM - 06:00PM"],
    Friday: ["01:00 PM - 06:00PM"],
  },
};

export const CorrectClinicInfo = {
  Id: "asdfghygfcdsxd",
  Prf: FirstIVF,
  Name: "FIRST IVF",
  Email: "contact@firstivf.com",
  PhoneNumber: "+971 987-6543",
  WebURL: "sunshinefertility.com",
  Address:
    "123 Sheikh Zayed Road Al Wasl Building, Suite 405 Dubai, UAE PO Box 12345",
  Availabilities: [
    {
      day: "Monday",
      TimeSlots: [
        { start: "12:12 PM", end: "12:35 PM" },
        { start: "3:12 PM", end: "5:35 PM" },
      ],
    },
    {
      day: "Tuesday",
      TimeSlots: [
        { start: "12:12 PM", end: "12:35 PM" },
        { start: "2:12 PM", end: "3:35 PM" },
        { start: "3:45 PM", end: "5:35 PM" },
      ],
    },
    {
      day: "Wednesday",
      TimeSlots: [
        { start: "12:12 PM", end: "12:35 PM" },
        { start: "3:12 PM", end: "5:35 PM" },
      ],
    },
    {
      day: "Thrusday",
      TimeSlots: [
        { start: "12:12 PM", end: "12:35 PM" },
        { start: "2:12 PM", end: "3:35 PM" },
        { start: "3:45 PM", end: "5:35 PM" },
      ],
    },
    {
      day: "Friday",
      TimeSlots: [
        { start: "12:12 PM", end: "12:35 PM" },
        { start: "3:12 PM", end: "5:35 PM" },
      ],
    },
  ],
};
