import { TitleValueInterface } from "../../../Interface/HeaderCompInterface/HeaderCompInterface";
import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";

export const PaymentDetailTableHeader: TableHeaderDataInterface[] = [
  { id: "Treatment", label: "Treatment" },
  { id: "Doctor", label: "Doctor" },
  { id: "Date", label: "Date" },
  { id: "Amount_AED", label: "Amount (AED)" },
  { id: "Status", label: "Status" },
];

export const PaymentDetailTableBody = [
  {
    Treatment: "Tooth Filling",
    Doctor: "Dr. Ahmad Ali",
    Date: "01-10-2024",
    Amount_AED: "100",
    Status: "Paid",
  },
  {
    Treatment: "Root Canal",
    Doctor: "Dr. Sarah Mahmoud",
    Date: "02-15-2024",
    Amount_AED: "500",
    Status: "Unpaid",
  },
  {
    Treatment: "Teeth Cleaning",
    Doctor: "Dr. Kareem Fadl",
    Date: "03-20-2024",
    Amount_AED: "150",
    Status: "Paid",
  },
  {
    Treatment: "Braces Adjustment",
    Doctor: "Dr. Layla Shams",
    Date: "04-05-2024",
    Amount_AED: "200",
    Status: "Paid",
  },
  {
    Treatment: "Wisdom Tooth Extraction",
    Doctor: "Dr. Omar Youssef",
    Date: "05-12-2024",
    Amount_AED: "300",
    Status: "Unpaid",
  },
  {
    Treatment: "Cavity Filling",
    Doctor: "Dr. Reem Hadi",
    Date: "06-18-2024",
    Amount_AED: "120",
    Status: "Paid",
  },
  {
    Treatment: "Dental Checkup",
    Doctor: "Dr. Yasmin Nasser",
    Date: "07-10-2024",
    Amount_AED: "80",
    Status: "Paid",
  },
  {
    Treatment: "Teeth Whitening",
    Doctor: "Dr. Mustafa Sami",
    Date: "08-25-2024",
    Amount_AED: "250",
    Status: "Unpaid",
  },
  {
    Treatment: "Veneers Placement",
    Doctor: "Dr. Zainab Adil",
    Date: "09-02-2024",
    Amount_AED: "400",
    Status: "Paid",
  },
  {
    Treatment: "Gum Surgery",
    Doctor: "Dr. Hasan Farid",
    Date: "10-14-2024",
    Amount_AED: "600",
    Status: "Unpaid",
  },
  {
    Treatment: "Dental Implant",
    Doctor: "Dr. Amal Saeed",
    Date: "11-20-2024",
    Amount_AED: "1500",
    Status: "Paid",
  },
];

export const PaymentHeaderProperties: TitleValueInterface[] = [
  { title: "Treatment Type", value: "Egg Freezing" },
  { title: "Payment Schedule", value: "Monthly" },
  { title: "Upcoming Payment Date", value: "2 Feb, 2025" },
];
