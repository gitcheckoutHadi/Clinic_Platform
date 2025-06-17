import {
  HeaderCompInterfaceInterface,
  TitleValueInterface,
} from "../../../Interface/HeaderCompInterface/HeaderCompInterface";
import { toArabicDigits } from "../../../utils/translates";

export const DashboardHeaderData: TitleValueInterface[] = [
  { value: toArabicDigits("125 / 200"), title: "general.Active" },
  { value: toArabicDigits("10"), title: "patients.Upcoming Renewals" },
  { value: toArabicDigits("15"), title: "patients.Pending onboarding" },
];
