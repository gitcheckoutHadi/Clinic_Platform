import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";
import { FullDate } from "../../../utils/FullDate";

export interface PatientsCardsInterface {
  val1: number | string;
  val2?: number | string;
  text: string;
}

export const PatientsCardsData: PatientsCardsInterface[] = [
  { val1: "125", val2: "200", text: "Active" },
  { val1: "10", text: "Renewals" },
  { val1: "5", text: "Pending" },
];

export const PatientsSimpleTableHeaderData: TableHeaderDataInterface[] = [
  { id: "Type", label: "Type" },
  { id: "DateAndTime", label: "Date and Time" },
  { id: "Message", label: "Message" },
];

export const PatientsSimpleTableBodyData = [
  {
    Type: "Renewal",
    DateAndTime: FullDate(new Date(2025, 0, 2, 2, 0)),
    Message: "Patient Jane Doe has a renewal due on November 15, 2024",
  },
  {
    Type: "Follow-Up",
    DateAndTime: FullDate(new Date(2025, 0, 3, 10, 30)),
    Message: "Patient John Smith has a follow-up scheduled for January 3, 2025",
  },
  {
    Type: "Appointment",
    DateAndTime: FullDate(new Date(2025, 0, 5, 9, 0)),
    Message: "Patient Emily Davis has an appointment on January 5, 2025",
  },
  {
    Type: "Check-Up",
    DateAndTime: FullDate(new Date(2025, 0, 6, 14, 15)),
    Message: "Patient Michael Brown is due for a check-up on January 6, 2025",
  },
  {
    Type: "Renewal",
    DateAndTime: FullDate(new Date(2025, 0, 7, 11, 45)),
    Message: "Patient Sarah Wilson has a renewal due on January 7, 2025",
  },
  // {
  //   Type: "Consultation",
  //   DateAndTime: FullDate(new Date(2025, 0, 8, 16, 0)),
  //   Message: "Patient Robert Johnson has a consultation on January 8, 2025",
  // },
  // {
  //   Type: "Vaccination",
  //   DateAndTime: FullDate(new Date(2025, 0, 10, 13, 0)),
  //   Message:
  //     "Patient Sophia Martinez is scheduled for a vaccination on January 10, 2025",
  // },
];
