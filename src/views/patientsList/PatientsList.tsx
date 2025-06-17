import React from "react";
import PatientTable from "./PatientTable/PatientTable";
import { PageFlex } from "../../globalStyles";
import PatientsListTopPart from "./patientsListTopPart/PatientsListTopPart";
import HeaderText from "../../elements/headerText/HeaderText";
import { useTranslation } from "react-i18next";

const PatientsList = () => {
  const { t } = useTranslation();
  return (
    <PageFlex>
      <HeaderText title={"patients.Patients list"} />
      {/* <PatientsListTopPart /> */}
      <PatientTable />
    </PageFlex>
  );
};

export default PatientsList;
