import React, { isValidElement, useState } from "react";
import { PageFlex } from "../../../../globalStyles";

import ClinicInfo from "../ClinicInfo/ClinicInfo";
import AvailableDays from "../AviableDays/AviableDays";
import ProfileMainClick from "../ProfileMainClick/ProfileMainClick";
import { isValidInternationalPhoneNumber } from "../../../../utils/ValidPhoneNumber";
import { isValidEmail } from "../../../../utils/IsValidEmail.";

const ClinicEditProfile = () => {
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
  const [Name, setName] = useState("");
  const [WebURL, setWebURL] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ClinicAddress, setClinicAddress] = useState("");
  const [ErrorName, setErrorName] = useState("");
  const [ErrorWebURL, setErrorWebURL] = useState("");
  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [ErrorClinicAddress, setErrorClinicAddress] = useState("");
  const ValidateFunction = () => {
    if (
      Name.trim() === "" ||
      WebURL.trim() === "" ||
      Email.trim() === "" ||
      ClinicAddress.trim() === "" ||
      !isValidEmail(Email) || // Ensure logical operator is present
      !isValidInternationalPhoneNumber(PhoneNumber)
    ) {
      if (Name.trim() === "") {
        setErrorName("Error");
      }
      if (WebURL.trim() === "") {
        setErrorWebURL("Error");
      }
      if (ClinicAddress.trim() === "") {
        setErrorClinicAddress("Error");
      }
      if (!isValidEmail(Email)) setErrorEmail("ERROR");
      if (!isValidInternationalPhoneNumber(PhoneNumber))
        setErrorPhoneNumber("ERROR");
      return;
    }
  };
  return (
    <PageFlex>
      <ProfileMainClick
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <ClinicInfo
        Name={Name}
        setName={setName}
        WebURL={WebURL}
        setWebURL={setWebURL}
        Email={Email}
        setEmail={setEmail}
        PhoneNumber={PhoneNumber}
        setPhoneNumber={setPhoneNumber}
        ClinicAddress={ClinicAddress}
        setClinicAddress={setClinicAddress}
        ErrorName={ErrorName}
        setErrorName={setErrorName}
        ErrorWebURL={ErrorWebURL}
        setErrorWebURL={setErrorWebURL}
        ErrorEmail={ErrorEmail}
        setErrorEmail={setErrorEmail}
        ErrorPhoneNumber={ErrorPhoneNumber}
        setErrorPhoneNumber={setErrorPhoneNumber}
        ErrorClinicAddress={ErrorClinicAddress}
        setErrorClinicAddress={setErrorClinicAddress}
      />
      <AvailableDays
        PrevCondition={ValidateFunction}
        Name={Name}
        WebURL={WebURL}
        Email={Email}
        PhoneNumber={PhoneNumber}
        ClinicAddress={ClinicAddress}
        selectedFile={selectedFile}
      />
    </PageFlex>
  );
};

export default ClinicEditProfile;
