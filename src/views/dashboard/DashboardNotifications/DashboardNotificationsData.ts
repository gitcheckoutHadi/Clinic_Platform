import {
  TableHeaderDataInterface,
  TableRowInterface,
} from "../../../Interface/TableInterface/TableInterface";
import { FullDate } from "../../../utils/FullDate";

// Header data
export const NotificationHeaderData: TableHeaderDataInterface[] = [
  { id: "Type", label: "Type" },
  { id: "DateAndTime", label: "Date And Time" },
  { id: "Message", label: "Message" },
];

// Correct usage of TableRowInterface
export const NotificationTableData: TableRowInterface<
  (typeof NotificationHeaderData)[number]
>[] = [
  {
    Type: "Renewal",
    DateAndTime: FullDate(new Date(2025, 0, 3, 1, 30)),
    Message: "Patient Jane Doe has a renewal due on November 15, 2024",
  },
  {
    Type: "Scheduled",
    DateAndTime: FullDate(new Date(2025, 1, 10, 9, 0)),
    Message: "Patient John Smith has an appointment on January 10, 2025",
  },
  {
    Type: "Consultation",
    DateAndTime: FullDate(new Date(2025, 2, 12, 14, 30)),
    Message: "Consultation scheduled with Dr. Brown for Patient Alice Green",
  },
  {
    Type: "Follow-up",
    DateAndTime: FullDate(new Date(2025, 3, 5, 11, 15)),
    Message: "Patient Michael White requires a follow-up on March 5, 2025",
  },
  {
    Type: "Emergency",
    DateAndTime: FullDate(new Date(2025, 4, 18, 16, 0)),
    Message: "Emergency case for Patient Sarah Miller on April 18, 2025",
  },
  {
    Type: "Referral",
    DateAndTime: FullDate(new Date(2025, 5, 25, 10, 0)),
    Message: "Referral received for Patient James Johnson",
  },
  {
    Type: "Treatment",
    DateAndTime: FullDate(new Date(2025, 6, 3, 13, 45)),
    Message: "Treatment plan updated for Patient Robert Lee",
  },
  {
    Type: "Check-up",
    DateAndTime: FullDate(new Date(2025, 7, 9, 8, 30)),
    Message: "Routine check-up scheduled for Patient Emma Davis",
  },
  {
    Type: "Surgery",
    DateAndTime: FullDate(new Date(2025, 8, 15, 7, 0)),
    Message:
      "Surgery scheduled for Patient William Harris on September 15, 2025",
  },
  {
    Type: "Prescription",
    DateAndTime: FullDate(new Date(2025, 9, 22, 12, 30)),
    Message: "Prescription updated for Patient Olivia Clark",
  },
];
