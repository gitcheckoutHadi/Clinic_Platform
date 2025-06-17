import { HadiProfile } from "../../../../constants/Pics/Pics";
import { DateFormate } from "../../../../utils/DateFormate";

interface PatientProfileInterface {
  id: string;
  name: string;
  profile: string;
  DateOfBirth?: Date;
  Nationality?: string;
  phoneNumber?: string;
  DigitalCardNumber?: string;
}

export const profileInfoData = {
  name: "Hadi Shouman",
  profile: HadiProfile,
  FileNb: "ewre4334",
  DateOfBirth: new Date(1998, 8, 3, 2, 0), // Keep as Date
  Nationality: "Iran",
  phoneNumber: "00961 76 837264",
  DigitalCardNumber: "1234567890123456",
  QRCodeLink: "http://facebook.com",
};

// Format for display
// console.log(DateFormate(profileInfo.DateOfBirth));
