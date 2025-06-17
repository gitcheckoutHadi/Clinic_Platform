import { HadiProfile, MadonaImg } from "../../../../constants/Pics/Pics";

export const IdProfileData = {
  id: "AE-342SWQEQW", // More structured ID
  Name: "Shadia Shouman",
  FileNb: "AE-2024-00123", // Example structured file number
  profile: MadonaImg,
  DateOfBirth: new Date(1998, 8, 3, 2, 0),
  website: "https://www.facebook.com/shadia.shouman",
  Nationality: "UAE",
  phoneNumber: "+971 50 123 4567", // UAE phone number format
  DigitalCardNumber: "4567 8912 3456 7890", // More structured card number
  Cycles: 9, // Defaults to 0 if not available
  InitialConsultation: new Date(2025, 8, 3, 2, 0),
  MedicalHistory: new Date(2025, 8, 3, 2, 0),
  AttClinician: "Dr. Ahmad Fakih",
  Indic: "New patient / Infertility, Family Balancing",
  LMP: "06/01/2024 for IVF-ICSI + NGS Standard Boy", // Date format adjusted
  AmountDue: "2,000 AED", // Proper currency formatting
};
