import React, { useRef, useState } from "react";
import { ShadowBoxContainer } from "../../../components/ShadowBox/ShadowBox.style";
import CircularImage from "../../../elements/circularImage/CircularImage";
import FilterTag from "../../../components/Table/FiltersAndActions/FilterTag/FilterTag";
import ColoredButton from "../../../elements/Buttons/ColoredButton/ColoredButton";
import { SvgAddIcon } from "../../../elements/Icons";
import Button from "../../../elements/Buttons/Button/Button";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import {
  ClinicProfileDataStyle,
  EditProfileHeader,
} from "../clinicProfile/ClinicProfile.style";
import TextInput from "../../../elements/Inputs/TextInput/TextInput";
import TimePickerComponent from "../../../elements/Inputs/TimePicker/TimePicker";
import SchedulePicker from "./SchedulePicker";
import StyledButton from "../../../elements/styledButton/StyledButton";
import SaveButton from "../../../elements/Buttons/SaveButton/SaveButton";
interface ClinicProfileEditProps {
  data: {
    id: string;
  };
}
const ClinicProfileEdit = ({ data }: ClinicProfileEditProps) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const Days = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file);
      // Add your upload logic here
    }
  };

  return (
    <ShadowBoxContainer
      background={"transparent"}
      boxShadow="0px 4px 14px 0px rgba(185, 185, 185, 0.25)"
    >
      <EditProfileHeader>
        <CircularImage
          size="6.25rem"
          src="/images/clinicProfile.jpeg"
          boxShadow
        />
        <div onClick={handleUploadClick}>
          <input
            type="file"
            ref={fileInputRef}
            accept=".png, .jpg, .jpeg, .pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <FilterTag text="Upload new picture" width="11.6rem" />
        </div>
        <FilterTag
          text={"Delete picture"}
          width="8.5rem"
          backgroundcolor="#FFEDEA"
          color="#FF6B6B"
          border={false}
        />
      </EditProfileHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1.75rem",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography text={"Information"} fontSize="1.5rem" />
        <ClinicProfileDataStyle>
          <TextInput text="Name" value={name} setValue={setName} />
          <TextInput text="Website URL" value={url} setValue={setUrl} />
          <TextInput text="Email" value={email} setValue={setEmail} />
          <TextInput text="Phone Number" value={phone} setValue={setPhone} />
        </ClinicProfileDataStyle>
        <TextInput
          text="Clinic Address"
          value={address}
          setValue={setAddress}
        />
      </div>

      <Typography text={"Opening hours"} fontSize="1.5rem" />
      <SchedulePicker />
      <div style={{ display: "Flex", marginLeft: "auto" }}>
        <SaveButton />
      </div>
    </ShadowBoxContainer>
  );
};

export default ClinicProfileEdit;
