import React from "react";
import {
  InfoPatientCardContainer,
  MainPatientCardContainer,
} from "./PatientCardStyle";
import CircularImage from "../../elements/circularImage/CircularImage";
import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

interface PatientCardInterface {
  Pic: any;
  Name: string;
  age: string;
  FileNb: string;
}
const PatientCard = ({ Pic, Name, age, FileNb }: PatientCardInterface) => {
  return (
    <MainPatientCardContainer>
      <CircularImage size=" 6.25rem" src={Pic} />
      <InfoPatientCardContainer>
        <MediumTypography text={Name} fontWeight="700" />
        <MediumTypography text={age} fontWeight="700" color="#A6A6A6" />

        <MediumTypography text={FileNb} fontWeight="700" color="#A6A6A6" />
      </InfoPatientCardContainer>
    </MainPatientCardContainer>
  );
};

export default PatientCard;
