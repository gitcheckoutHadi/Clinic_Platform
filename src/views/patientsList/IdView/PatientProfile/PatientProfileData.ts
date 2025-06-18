import { HadiProfile, MadonaImg } from "../../../../constants/Pics/Pics";

export const IdProfileData = {
  id: "AE-342SWQEQW", // More structured ID
  Name: "Sally Fawwaz",
  FileNb: "AE-2024-ZZ123", // Example structured file number
  profile: MadonaImg,
  DateOfBirth: new Date(1994, 7, 15, 2, 0),
  website: "https://www.facebook.com/shadia.shouman",
  Nationality: "UAE",
  phoneNumber: "+971 55 123 4567", // UAE phone number format
  DigitalCardNumber: "4567 3342 5234 7890", // More structured card number

  InitialConsultation: new Date(2025, 8, 3, 2, 0),
  MedicalHistory: new Date(2025, 8, 3, 2, 0),
  AttClinician: "Dr. Ahmad Fakih",
  Indic: "New patient / Infertility, Family Balancing",
  LMP: "06/01/2024 for IVF-ICSI + NGS Standard Boy", // Date format adjusted
  AmountDue: "2,000 AED", // Proper currency formatting
};
