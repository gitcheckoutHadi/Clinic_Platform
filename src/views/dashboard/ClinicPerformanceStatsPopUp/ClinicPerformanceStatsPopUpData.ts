import { HadiProfile, MadonaImg, ManImg } from "../../../constants/Pics/Pics";
import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";

export const ClinicPerformanceStatsData = {
  PatientMainData: {
    PatientId: "dcefewfwefwef",
    PatientProfile: MadonaImg,
    PatientName: "Souzan Fido",
    DateOfBirth: new Date(1995, 0, 3, 1, 30),
    FileNb: "sadasdsad",
  },

  Husband: {
    HusbandId: "sdasdas",
    HusbandProfile: HadiProfile,
    HusbandName: "Hadi Shouman",
    DateOfBirth: new Date(1992, 0, 3, 1, 30),
    FileNb: "sefrt5frdsds",
  },
  PaymentSummary: {
    collect: "1500$",
    Pending: "700$",
    Overdue: "700$",
  },
  Appointments: [
    {
      appointmentId: "APT-20250103-001",
      appointmentDateTime: new Date("2025-01-03T09:30:00"),
      Status: "Scheduled",
      durationMinutes: 30,
    },
    {
      appointmentId: "APT-20250205-002",
      appointmentDateTime: new Date("2025-02-05T11:00:00"),
      Status: "Completed",
      durationMinutes: 45,
    },
    {
      appointmentId: "APT-20250308-003",
      appointmentDateTime: new Date("2025-03-08T14:00:00"),
      Status: "No Show",
      durationMinutes: 60,
    },
    {
      appointmentId: "APT-20250412-004",
      appointmentDateTime: new Date("2025-04-12T08:30:00"),
      Status: "Cancelled",
      durationMinutes: 30,
    },
    {
      appointmentId: "APT-20250515-005",
      appointmentDateTime: new Date("2025-05-15T15:00:00"),
      Status: "Scheduled",
      durationMinutes: 90,
    },
    {
      appointmentId: "APT-20250620-006",
      appointmentDateTime: new Date("2025-06-20T10:45:00"),
      Status: "Rescheduled",
      durationMinutes: 60,
    },
  ],
};

export const AppointmentHeader: TableHeaderDataInterface[] = [
  { id: "appointmentId", label: "Appointment ID" },
  { id: "appointmentDateTime", label: "Appointment Date Time" },
  { id: "durationMinutes", label: "durationMinutes" },
  { id: "Status", label: "Status" },
];

export const EggHeader: TableHeaderDataInterface[] = [
  { id: "ID", label: "ID" },
  { id: "DateOfFreezing", label: "Date of Freezing" },
  { id: "RenewalDue", label: "Renewal Due" },
  { id: "Cryo", label: "Cryo" },
];
