import React, { useState } from "react";
import TextInput from "../../../elements/Inputs/TextInput/TextInput";
import { FormEmptySpace, PageFlex } from "../../../globalStyles";
import HeaderNavigator from "../../../elements/headerNavigator/HeaderNavigator";
import SaveButton from "../../../elements/Buttons/SaveButton/SaveButton";
import CancelButton from "../../../elements/Buttons/Button/CancelButton/CancelButton";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import FormActions from "../../../components/FormActions/FormActions";
import DateTimePicker from "../../../elements/Inputs/DateTimePicker/DateTimePicker";
import PhoneNumber from "../../../elements/Inputs/PhoneNumber/PhoneNumber";
import CountrySelector from "../../../elements/CountrySelector/CountrySelector";

const PatientListEdit = () => {
  const data = {
    FirstName: "Hadi",
    LastName: "Shouman",
    DateOfBirth: new Date(1998, 8, 3, 2, 0), // Keep as Date
    Nationality: "Lebanese",
    Email: "hadishouman484@gmail.com",
    phoneNumber: "00961 76 837264",
    DigitalCardNumber: "1234567890123456",
    qrLink: "www.FaceBook.com",
  };
  const [StartDate, seStartDate] = useState<Date>();
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);
  // State for fields
  const [formData, setFormData] = useState({
    FirstName: data.FirstName,
    LastName: data.LastName,
    DateOfBirth: data.DateOfBirth,
    Nationality: data.Nationality,
    Email: data.Email,
    phoneNumber: data.phoneNumber,
    DigitalCardNumber: data.DigitalCardNumber,
    qrLink: data.qrLink,
  });

  // Centralized error state for all fields
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    phoneNumber: "",
  });

  // Handle input change for form fields
  const handleChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Validate function
  const validate = () => {
    let valid = true;
    let newErrors = { ...errors };

    // Validate FirstName
    if (formData.FirstName.trim() === "") {
      newErrors.FirstName = "First name is required";
      console.log("errors", errors.FirstName);
      valid = false;
    } else {
      newErrors.FirstName = ""; // Clear error if valid
    }

    // Validate LastName
    if (formData.LastName.trim() === "") {
      newErrors.LastName = "Last name is required";
      valid = false;
    } else {
      newErrors.LastName = ""; // Clear error if valid
    }

    // Validate Email
    if (formData.Email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Valid email is required";
      valid = false;
    } else {
      newErrors.Email = ""; // Clear error if valid
    }

    // Validate phoneNumber
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else {
      newErrors.phoneNumber = ""; // Clear error if valid
    }

    setErrors(newErrors); // Update the error state
    return valid;
  };
  const handleDateChange = (date: Date | null) => {
    console.log("Selected Date:", date);
  };
  return (
    <PageFlex>
      <HeaderNavigator text="patients.Edit Profile" />
      <ShadowBox flexDirection="row">
        <TextInput
          value={formData.FirstName}
          setValue={(value: any) => handleChange("FirstName", value)}
          text="general.First Name"
          errorValue={errors.FirstName}
          setErrorValue={(newError: any) =>
            setErrors((prev) => ({ ...prev, FirstName: newError }))
          }
        />
        <TextInput
          value={formData.LastName}
          setValue={(value: any) => handleChange("LastName", value)}
          text="general.Last Name"
          errorValue={errors.LastName}
          setErrorValue={(newError: any) =>
            setErrors((prev) => ({ ...prev, LastName: newError }))
          }
        />
        <TextInput
          value={formData.Email}
          setValue={(value: any) => handleChange("Email", value)}
          text="general.Email"
          errorValue={errors.Email}
          setErrorValue={(newError: any) =>
            setErrors((prev) => ({ ...prev, Email: newError }))
          }
        />
        <DateTimePicker
          value={StartDate}
          // minDate={new Date("2023-01-01")}
          // maxDate={new Date("2025-12-31")}
          onChange={handleDateChange}
          text="general.Date of Birth"
        />
        <PhoneNumber value={phoneNumber} setValue={setPhoneNumber} />
        <CountrySelector
          value={selectedCountry}
          setValue={setSelectedCountry}
        />
        <FormActions onSubmit={validate} />
      </ShadowBox>
    </PageFlex>
  );
};

export default PatientListEdit;
