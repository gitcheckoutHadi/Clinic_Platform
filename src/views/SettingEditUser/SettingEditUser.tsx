import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormLayout from "../../components/FormLayout/FormLayout";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import SearchableDropDown from "../../elements/Inputs/SearchableDropDown/SearchableDropDown";
import { FormEmptySpace } from "../../globalStyles";
import TextInput from "../../elements/Inputs/TextInput/TextInput";
import PhoneNumber from "../../elements/Inputs/PhoneNumber/PhoneNumber";

const SettingEditUser = () => {
  const data = {
    FirstName: "Hadi",
    LastName: "Farahani",
    Email: "farahani@example.com",
    Phone: "+96176837264",
    Role: "ssder55344",
  };
  const { id } = useParams();

  const options = [
    { label: "Clinician", value: "ssder55344" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];

  const [FirstName, setFirstName] = useState(data.FirstName);
  const [LastName, setLastName] = useState("second");
  const [Email, setEmail] = useState(data.Email);
  const [PhoneName, setPhoneName] = useState<string | undefined>(data.Phone);

  const [Role, setRole] = useState(data.Role);

  const handleDropdownChange = (value: string) => {
    console.log("Selected value:", value);
    setRole(value);
    console.log(" Role value is", Role);
  };
  return (
    <div>
      <FormLayout>
        <TextInput
          text="First Name"
          value={FirstName}
          setValue={setFirstName}
        />
        <TextInput text="Last Name" value={LastName} setValue={setLastName} />
        <TextInput text="Email" value={Email} setValue={setEmail} />
        <PhoneNumber value={PhoneName} setValue={setPhoneName} />
        <SearchableDropDown
          options={options}
          SelectedValue={Role}
          onChange={handleDropdownChange}
          text="Role"
        />
        <FormEmptySpace />
      </FormLayout>
    </div>
  );
};

export default SettingEditUser;
