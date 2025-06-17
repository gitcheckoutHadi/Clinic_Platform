import React, { isValidElement, useState } from "react";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import NewTextBox from "../../../../elements/Inputs/NewTextBox/NewTextBox";
import { FormEmptySpace } from "../../../../globalStyles";
import { isValidInternationalPhoneNumber } from "../../../../utils/ValidPhoneNumber";

interface ClinicInfoInterface {
  Name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  WebURL: string;
  setWebURL: React.Dispatch<React.SetStateAction<string>>;
  Email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  PhoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  ClinicAddress: string;
  setClinicAddress: React.Dispatch<React.SetStateAction<string>>;
  ErrorName: string;
  setErrorName: React.Dispatch<React.SetStateAction<string>>;
  ErrorWebURL: string;
  setErrorWebURL: React.Dispatch<React.SetStateAction<string>>;
  ErrorEmail: string;
  setErrorEmail: React.Dispatch<React.SetStateAction<string>>;
  ErrorPhoneNumber: string;
  setErrorPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  ErrorClinicAddress: string;
  setErrorClinicAddress: React.Dispatch<React.SetStateAction<string>>;
}
const ClinicInfo = ({
  Name,
  setName,
  WebURL,
  setWebURL,
  Email,
  setEmail,
  PhoneNumber,
  setPhoneNumber,
  ClinicAddress,
  setClinicAddress,
  ErrorName,
  setErrorName,
  ErrorWebURL,
  setErrorWebURL,
  ErrorEmail,
  setErrorEmail,
  ErrorPhoneNumber,
  setErrorPhoneNumber,
  ErrorClinicAddress,
  setErrorClinicAddress,
}: ClinicInfoInterface) => {
  // ValidateFunction = () => {
  //   if (
  //     Name.trim() === "" ||
  //     WebURL.trim() === "" ||
  //     Email.trim() === "" ||
  //     ClinicAddress.trim() === "" ||
  //     !isValidElement(Email) || // Ensure logical operator is present
  //     !isValidInternationalPhoneNumber(PhoneNumber)
  //   ) {
  //     if (Name.trim() === "") {
  //       setErrorName("Error");
  //     }
  //     if (WebURL.trim() === "") {
  //       setErrorWebURL("Error");
  //     }
  //     if (ClinicAddress.trim() === "") {
  //       setErrorClinicAddress("Error");
  //     }
  //     if (!isValidElement(Email)) setErrorEmail("ERROR");
  //     if (!isValidInternationalPhoneNumber(PhoneNumber))
  //       setErrorPhoneNumber("ERROR");
  //     return;
  //   }
  // };
  return (
    <FormLayout>
      <NewTextBox
        value={Name}
        setValue={setName}
        text="Name"
        errorValue={ErrorName}
        setErrorValue={setErrorName}
        mandatory={true}
      />
      <NewTextBox
        value={WebURL}
        setValue={setWebURL}
        text="Website URL"
        errorValue={ErrorWebURL}
        setErrorValue={setErrorWebURL}
        mandatory={true}
      />
      <NewTextBox
        value={Email}
        setValue={setEmail}
        text="Email"
        errorValue={ErrorEmail}
        setErrorValue={setErrorEmail}
        mandatory={true}
      />
      <NewTextBox
        value={PhoneNumber}
        setValue={setPhoneNumber}
        text="Phone Number"
        errorValue={ErrorPhoneNumber}
        setErrorValue={setErrorPhoneNumber}
        mandatory={true}
      />
      <NewTextBox
        value={ClinicAddress}
        setValue={setClinicAddress}
        text="Clinic Address"
        errorValue={ErrorClinicAddress}
        setErrorValue={setErrorClinicAddress}
        mandatory={true}
      />
      <FormEmptySpace />
    </FormLayout>
  );
};

export default ClinicInfo;
