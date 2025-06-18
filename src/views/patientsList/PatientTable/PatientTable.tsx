import React, { useEffect, useState } from "react";
import PopUp from "../../../components/PupUps/PopUp/PopUp";
import { SvgFilterIcon } from "../../../elements/Icons";
import Table from "../../../components/Table/Table";
import GeneralFilterPopUp from "../../../components/PupUps/FilterPopUp/FilterPopUp";
import { handleCheckStoreValue } from "../../../utils/ObjectFuctions";
import {
  PatientHeaderTableData,
  PatientResponsiveHeaderTableData,
  PatientTableData,
} from "./PatientTableData";
import { toArabicDigits } from "../../../utils/translates";
import { DummyActions } from "../../../components/Table/AbsoluteTableActions/DummyActions";
import useResponsive from "../../../hooks/useResponsive";

const PatientTable = () => {
  const [Show, setShow] = useState<boolean>(true);
  const [popUpText, setPopUpText] = useState("");
  const IndexShows = [1, 3];
  const [NationalityVal, setNationalityVal] = useState<string>("");
  const [PrimaryPhysicianValue, setPrimaryPhysicianValue] =
    useState<string>("");
  // You can make this a prop too

  // Filter DummyData based on selected values

  const handleTagClick = (index: number) => {
    if (index === 0) {
      setPopUpText("hadi");
    } else if (index === 1) {
      setPopUpText("Soul");
    }
  };
  const handleRefresh = () => {
    setNationalityVal(""); // Reset NationalityVal
    setPrimaryPhysicianValue(""); // Reset PrimaryPhysicianValue
  };

  const handleDelete = async (sourceId: string) => {
    try {
      // Replace `sourceId` with the backend-specific ID in the DELETE endpoint.
      // await axios.delete(`/api/items/${sourceId}`);
      // Add any state update or notification logic here
      console.log("sourceId deleted:", sourceId);
    } catch (error) {
      console.error(`Failed to delete item with ID ${sourceId}:`, error);
      // Optionally notify the user about the error
    }
  };
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calculateAge = (dob: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const formattedData = PatientTableData.map((patient: any, index: number) => ({
    SourceId: patient.SourceId,
    Name: [patient.Name, patient.FileId],

    DateOfBirth: toArabicDigits(
      `${formatDate(patient.DateOfBirth)} (${calculateAge(
        patient.DateOfBirth
      )})`
    ),
    Nationality: patient.Nationality,
    PhoneNumber: toArabicDigits(patient.PhoneNumber),
    EmailAddress: patient.EmailAddress,
    Cycles: toArabicDigits(patient.Cycles),
    DueAmount: toArabicDigits(patient.DueAmount),
    LastVisitDate: toArabicDigits(`${formatDate(patient.LastVisitDate)}`),
    PrimaryPhysician: patient.PrimaryPhysician,
  }));

  console.log(formattedData);
  const filteredData = formattedData.filter((item) => {
    const matchesID = NationalityVal
      ? item.Nationality === NationalityVal
      : true;
    const matchesPrimaryPhysician = PrimaryPhysicianValue
      ? item.PrimaryPhysician === PrimaryPhysicianValue
      : true;
    return matchesID && matchesPrimaryPhysician; // Both filters are applied simultaneously
  });
  return (
    <div>
      <Table
        TableTitle="patients.Patient’s Details"
        columns={PatientHeaderTableData}
        rows={filteredData} // Pass the filtered data here
        DeleteFunction={handleDelete}
        AddButtonText="patients.Add Patient"
        SecondArrayText="File:"
        ExcelTableName="Patient"
        ResponsiveColumns={PatientResponsiveHeaderTableData}
        Action={DummyActions()}
        onFilterIndexClick={handleTagClick}
        IndexShows={[2, 7]}
        RefreshClick={handleRefresh}
        TextFilterShows={[
          { value: NationalityVal, setValue: setNationalityVal },
          { value: PrimaryPhysicianValue, setValue: setPrimaryPhysicianValue },
        ]}
      />

      {popUpText === "hadi" && (
        <GeneralFilterPopUp
          title={"Class"}
          ContextValue={NationalityVal}
          RenderedValueKey="Nationality"
          show={Show}
          setShow={setShow}
          data={formattedData}
          RadioChanges={(e) => handleCheckStoreValue(e, setNationalityVal)}
          closeClick={() => setPopUpText("")}
        />
      )}
      {popUpText === "Soul" && (
        <GeneralFilterPopUp
          title={"Current Status"}
          ContextValue={PrimaryPhysicianValue}
          RenderedValueKey="PrimaryPhysician"
          show={Show}
          setShow={setShow}
          data={formattedData}
          RadioChanges={(e) =>
            handleCheckStoreValue(e, setPrimaryPhysicianValue)
          }
          closeClick={() => setPopUpText("")}
        />
      )}
    </div>
  );
};

export default PatientTable;
