import { TableHeaderDataInterface } from "../../Interface/TableInterface/TableInterface";
import { formatPhoneNumberLTR, toArabicDigits } from "../../utils/translates";

export const HeaderColumns: TableHeaderDataInterface[] = [
  { id: "Name", label: "table.Name" },
  { id: "ID", label: "table.ID" },
  { id: "ContactDetails", label: "table.Contact Details" },
  { id: "CurrentStatus", label: "table.Current Status" },
  { id: "Status", label: "table.Status" },
];
