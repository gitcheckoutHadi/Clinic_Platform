import React from "react";
import {
  ButtonsRowPatientProfileContainer,
  ColoredRowInfoPatientProfileContainer,
  ColumnPatientProfileContainer,
  MainPatientProfileContainerContainer,
  MainRowPatientProfileContainer,
  RowInfoPatientProfileContainer,
} from "./PatientProfile.style";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { IdProfileData } from "./PatientProfileData";
import TitleTextInfo from "../../../../components/TitleTextInfo/TitleTextInfo";
import { DateFormate, DateNumberFormat } from "../../../../utils/DateFormate";
import QRCodeDisplay from "../../../../elements/QrDisplay/QrDisplay";
import FilterTag from "../../../../components/Table/FiltersAndActions/FilterTag/FilterTag";
import ReminderButton from "../../../../elements/Buttons/ReminderButton/ReminderButton";
import { useNavigate } from "react-router-dom";

const PatientProfile = () => {
  const navigate = useNavigate();
  return (
    <MainPatientProfileContainerContainer>
      <MainRowPatientProfileContainer>
        <CircularImage src={IdProfileData.profile} size="6.375rem" />
        <ColumnPatientProfileContainer>
          <RowInfoPatientProfileContainer>
            <TitleTextInfo title="Name" text={IdProfileData.Name} />
            <TitleTextInfo title="FileNb" text={IdProfileData.FileNb} />
            <TitleTextInfo title="ID number" text={IdProfileData.id} />
            <TitleTextInfo
              title="Date Of Birth"
              text={DateFormate(IdProfileData.DateOfBirth)}
            />
            <TitleTextInfo
              title="Nationality"
              text={IdProfileData.Nationality}
            />
            <TitleTextInfo
              title="Phone number"
              text={IdProfileData.phoneNumber}
            />
            <TitleTextInfo
              title="Digital Card Number"
              text={IdProfileData.DigitalCardNumber}
            />
            <TitleTextInfo title="Amount due" text={IdProfileData.AmountDue} />
          </RowInfoPatientProfileContainer>
          <ButtonsRowPatientProfileContainer>
            <FilterTag
              text="Edit Profile"
              onClickFunction={() => navigate("/PatientsList/edit/:id")}
              border
            />
            <FilterTag text="Payment History" />
            <ReminderButton />
          </ButtonsRowPatientProfileContainer>
        </ColumnPatientProfileContainer>
        <QRCodeDisplay
          type="url"
          // title="Digital Card Number"
          value={IdProfileData.website}
        />
      </MainRowPatientProfileContainer>
      <ColoredRowInfoPatientProfileContainer>
        <TitleTextInfo
          title="Initial consultation"
          text={DateNumberFormat(IdProfileData.InitialConsultation)}
        />
        <TitleTextInfo
          title="Medical History"
          text={DateNumberFormat(IdProfileData.MedicalHistory)}
        />
        <TitleTextInfo
          title="Att. Clinician"
          text={IdProfileData.AttClinician}
        />
        <TitleTextInfo title="Indic" text={IdProfileData.Indic} />
        <TitleTextInfo title="LMP" text={IdProfileData.LMP} />
      </ColoredRowInfoPatientProfileContainer>
    </MainPatientProfileContainerContainer>
  );
};

export default PatientProfile;
