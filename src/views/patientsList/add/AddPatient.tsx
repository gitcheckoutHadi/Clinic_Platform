import React, { useState } from "react";
import PatientForm from "../../../components/Forms/Patient/PatientForm";
import { PageFlex } from "../../../globalStyles";
import HeaderNavigator from "../../../elements/headerNavigator/HeaderNavigator";

const AddPatient = () => {
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [DigitalCardNum, setDigitalCardNum] = useState<string>("");
  const [QrLink, setQrLink] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [SelectedCountry, setSelectedCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const handleSubmit = () => {};
  return (
    <>
      <PageFlex>
        <HeaderNavigator text="Add Patient" />
        <PatientForm
          handleSubmit={handleSubmit}
          data={{
            FirstName,
            setFirstName,
            LastName,
            setLastName,
            Email,
            setEmail,
            PhoneNumber,
            setPhoneNumber,
            DigitalCardNum,
            setDigitalCardNum,
            QrLink,
            setQrLink,
            DOB,
            setDOB,
            SelectedCountry,
            setSelectedCountry,
          }}
        />
      </PageFlex>
    </>
  );
};

export default AddPatient;
