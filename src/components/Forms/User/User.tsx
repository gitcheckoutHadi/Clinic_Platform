import React, { isValidElement, useState } from "react";
import ShadowBox from "../../ShadowBox/ShadowBox";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import { FormEmptySpace, NormalFlex } from "../../../globalStyles";
import NewTextBox from "../../../elements/Inputs/NewTextBox/NewTextBox";
import { isValidInternationalPhoneNumber } from "../../../utils/ValidPhoneNumber";
import FormActions from "../../FormActions/FormActions";
import SearchableDropDown from "../../../elements/Inputs/SearchableDropDown/SearchableDropDown";
interface FormUserData {
  data: {
    FirstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    LastName: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    PhoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    Email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    // Role: string;
    // setRole: React.Dispatch<React.SetStateAction<string>>;
  };
  handleSave?: () => void;
}
const User = ({ data, handleSave }: FormUserData) => {
  const [ErrorLastName, setErrorLastName] = useState<string>("");
  const [ErrorFirstName, setErrorFirstName] = useState<string>("");
  const [ErrorEmail, setErrorEmail] = useState<string>("");
  const [ErrorPhoneNumber, setErrorPhoneNumber] = useState<string>("");

  // const options = [
  //   { label: "Clinician", value: "ssder55344" },
  //   { label: "Option 2", value: "option2" },
  //   { label: "Option 3", value: "option3" },
  //   { label: "Option 4", value: "option4" },
  // ];
  // const handleDropdownChange = (value: string) => {
  //   console.log("Selected value:", value);
  //   data.setRole(value);
  //   console.log(" Role value is", data.Role);
  // };
  const handleSubmit = () => {
    if (
      data.FirstName.trim() === "" ||
      data.LastName.trim() === "" ||
      !isValidElement(data.Email) || // Ensure logical operator is present
      !isValidInternationalPhoneNumber(data.PhoneNumber)
    ) {
      if (data.FirstName.trim() === "") setErrorFirstName("ERROR");
      if (data.LastName.trim() === "") setErrorLastName("ERROR");
      if (!isValidElement(data.Email)) setErrorEmail("ERROR");
      if (!isValidInternationalPhoneNumber(data.PhoneNumber))
        setErrorPhoneNumber("ERROR");
    } else {
      handleSave?.();
    }
  };
  return (
    <ShadowBox>
      <div style={{ minHeight: "50vh" }}>
        <Typography
          text="Information"
          fontSize="1.125rem"
          fontWeight="700"
          lineHeight="120%"
        />
        <NormalFlex style={{ marginTop: "1.25rem " }}>
          <NewTextBox
            value={data.FirstName}
            setValue={data.setFirstName}
            text="general.First Name"
            errorValue={ErrorFirstName}
            setErrorValue={setErrorFirstName}
            mandatory={true}
            placeHolder="Enter First Name"
          />
          <NewTextBox
            value={data.LastName}
            setValue={data.setLastName}
            text="general.Last Name"
            errorValue={ErrorLastName}
            setErrorValue={setErrorLastName}
            mandatory={true}
            placeHolder="Enter Last Name"
          />
          <NewTextBox
            value={data.Email}
            setValue={data.setEmail}
            text="general.Email"
            errorValue={ErrorEmail}
            setErrorValue={setErrorEmail}
            mandatory={true}
            placeHolder="Enter The Email"
          />
          {/* <PhoneNumber value={phoneNumber} setValue={setPhoneNumber} /> */}
          <NewTextBox
            value={data.PhoneNumber}
            setValue={data.setPhoneNumber}
            text="Phone Number"
            errorValue={ErrorPhoneNumber}
            setErrorValue={setErrorPhoneNumber}
            mandatory={true}
            placeHolder="Enter Phone Number"
          />
          {/* <SearchableDropDown
            text={"Role"}
            options={options}
            SelectedValue={data.Role}
            onChange={handleDropdownChange}
            mandatory={true}
          />
          <FormEmptySpace /> */}
        </NormalFlex>
      </div>
      <FormActions onSubmit={handleSubmit} />
    </ShadowBox>
  );
};

export default User;
