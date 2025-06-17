import { TableHeaderDataInterface } from "../../Interface/TableInterface/TableInterface";

export const SimpleHeaderColumns: TableHeaderDataInterface[] = [
  { id: "Type", label: "Name" },
  { id: "Date and Time", label: "DateTime" },
  { id: "Message", label: "Message" },
];
export const SimpleDummyData = [
  {
    Type: "Renewal",
    DateTime: "-15 10:30",
    Message: "Renewal Request for ID: 1234567890",
  },
  {
    Type: "Appointment",
    DateTime: "-15 14:00",
    Message: "Appointment Request for ID: 9876543210",
  },
  {
    Type: "Payment",
    DateTime: "-15 16:00",
    Message: "Payment Request for ID: 3456789012",
  },
  {
    Type: "Invoice",
    DateTime: "-15 16:00",
    Message: "Payment Request for ID: 3456789012",
  },
];
