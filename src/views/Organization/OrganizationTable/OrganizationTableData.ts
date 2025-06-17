import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";

export const OrganizationHeader: TableHeaderDataInterface[] = [
  { id: "ClinicName", label: "Clinic name" },
  { id: "Emails", label: "Emails" },
  { id: "SMS", label: "SMS" },
  { id: "Calls", label: "Calls" },
  { id: "No Answer", label: "No Answer" },
];

export const OrganizationData = [
  {
    SourceId: "sghygtfdsf",
    ClinicName: "Clinic 1",
    Emails: "8/10",
    SMS: "18",
    Calls: "22/30",
    NoAnswer: "8/30",
  },
  {
    SourceId: "abc123xyz",
    ClinicName: "Clinic 2",
    Emails: "7/12",
    SMS: "15",
    Calls: "20/28",
    NoAnswer: "5/28",
  },
  {
    SourceId: "def456uvw",
    ClinicName: "Clinic 3",
    Emails: "6/9",
    SMS: "10",
    Calls: "18/25",
    NoAnswer: "7/25",
  },
  {
    SourceId: "ghi789rst",
    ClinicName: "Clinic 4",
    Emails: "9/11",
    SMS: "20",
    Calls: "25/32",
    NoAnswer: "6/32",
  },
];
