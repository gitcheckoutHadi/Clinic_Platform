import React, { useState } from "react";
import FormLayout from "../../FormLayout/FormLayout";
import { isValidEmail } from "../../../utils/IsValidEmail.";
import { isValidInternationalPhoneNumber } from "../../../utils/ValidPhoneNumber";
import NewTextBox from "../../../elements/Inputs/NewTextBox/NewTextBox";
import DOBPicker from "../../../elements/Inputs/DOB/DOB";
import CountrySelector from "../../../elements/CountrySelector/CountrySelector";
import { useTranslation } from "react-i18next";

interface PatientFormInterface {
  data: {
    FirstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    LastName: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    Email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    PhoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    DigitalCardNum: string;
    setDigitalCardNum: React.Dispatch<React.SetStateAction<string>>;
    QrLink: string;
    setQrLink: React.Dispatch<React.SetStateAction<string>>;
    DOB: string;
    setDOB: React.Dispatch<React.SetStateAction<string>>;
    SelectedCountry: { label: string; value: string } | null;
    setSelectedCountry: React.Dispatch<
      React.SetStateAction<{ label: string; value: string } | null>
    >;
  };
  handleSubmit: () => void;
  title?: string;
}

const PatientForm = ({ data, handleSubmit, title }: PatientFormInterface) => {
  const { t } = useTranslation();
  const [ErrorDOB, setErrorDOB] = useState<string>("");

  const [ErrorPhoneNumber, setErrorPhoneNumber] = useState<string>("");
  const [ErrorEmail, setErrorEmail] = useState<string>("");
  const [ErrorLastName, setErrorLastName] = useState<string>("");
  const [ErrorFirstName, setErrorFirstName] = useState<string>("");
  const [ErrorSelectedCountry, setErrorSelectedCountry] = useState<string>("");

  const handleValidations = () => {
    if (
      data.FirstName.trim() === "" ||
      data.LastName.trim() === "" ||
      !isValidEmail(data.Email) || // Ensure logical operator is present
      !isValidInternationalPhoneNumber(data.PhoneNumber) || // Added missing logical operator
      data.DOB.trim() === "" ||
      !data.SelectedCountry || // Ensure the country is selected
      data.SelectedCountry.value.trim() === "" // Validate the country value
    ) {
      if (data.FirstName.trim() === "") setErrorFirstName("ERROR");
      if (data.LastName.trim() === "") setErrorLastName("ERROR");
      if (!isValidEmail(data.Email)) setErrorEmail("ERROR");
      if (!isValidInternationalPhoneNumber(data.PhoneNumber))
        setErrorPhoneNumber("ERROR");
      if (data.DOB.trim() === "") setErrorDOB("ERROR");
      if (!data.SelectedCountry || data.SelectedCountry.value.trim() === "")
        setErrorSelectedCountry("ERROR");
    } else {
      handleSubmit();
    }
  };
  return (
    <FormLayout title={t(title)} onSubmit={handleValidations}>
      <NewTextBox
        value={data.FirstName}
        setValue={data.setFirstName}
        text="general.First Name"
        errorValue={ErrorFirstName}
        setErrorValue={setErrorFirstName}
        mandatory={true}
        placeHolder="Enter First name"
      />
      <NewTextBox
        value={data.LastName}
        setValue={data.setLastName}
        text="general.Last Name"
        errorValue={ErrorLastName}
        setErrorValue={setErrorLastName}
        mandatory={true}
        placeHolder="Enter last name"
      />
      <DOBPicker
        value={data.DOB}
        setValue={data.setDOB}
        errorValue={ErrorDOB}
        setErrorValue={setErrorDOB}
        text="Date Of Birth"
        mandatory={true}
      />
      <CountrySelector
        value={data.SelectedCountry}
        setValue={data.setSelectedCountry}
        errorValue={ErrorSelectedCountry}
      />

      <NewTextBox
        value={data.Email}
        setValue={data.setEmail}
        text="general.Email"
        errorValue={ErrorEmail}
        setErrorValue={setErrorEmail}
        mandatory={true}
        placeHolder="Enter your Email"
      />
      {/* <PhoneNumber value={phoneNumber} setValue={setPhoneNumber} /> */}
      <NewTextBox
        value={data.PhoneNumber}
        setValue={data.setPhoneNumber}
        text="Phone Number"
        errorValue={ErrorPhoneNumber}
        setErrorValue={setErrorPhoneNumber}
        mandatory={true}
        placeHolder="Enter your phone number"
      />
      <NewTextBox
        value={data.DigitalCardNum}
        setValue={data.setDigitalCardNum}
        text="Digital card number"
        placeHolder="Enter your digital card number"
      />
      <NewTextBox
        type="link"
        value={data.QrLink}
        setValue={data.setQrLink}
        text="QR code Link"
        placeHolder="Enter QR code link"
      />
    </FormLayout>
  );
};

export default PatientForm;
