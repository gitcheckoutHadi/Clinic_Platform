import React, { useEffect } from "react";
import {
  ClinicPerformanceStatsTableContainer,
  ColumnClinicPerformanceStatsContainer,
  PaymentsRowClinicPerformanceStatsBox,
  PaymentsRowClinicPerformanceStatsContainer,
  RowClinicPerformanceStatsContainer,
} from "./ClinicPerformanceStatsPopUpStyle";
import PatientCard from "../../../components/PatientCard/PatientCard";
import {
  ClinicPerformanceStatsData,
  EggHeader,
  AppointmentHeader,
} from "./ClinicPerformanceStatsPopUpData";
import { calculateAge } from "../../../utils/AgeDate";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import VerySimpleTable from "../../../components/SimpleTable/VerySimpleTable";
interface ClinicPerformanceStatsPopUpInterface {
  SourceId: number | string | null;
}
const ClinicPerformanceStatsPopUp = ({
  SourceId,
}: ClinicPerformanceStatsPopUpInterface) => {
  useEffect(() => {
    console.log("SourceId", SourceId);
  }, [SourceId]);
  return (
    <ColumnClinicPerformanceStatsContainer>
      <RowClinicPerformanceStatsContainer>
        <PatientCard
          Pic={ClinicPerformanceStatsData.PatientMainData.PatientProfile}
          Name={ClinicPerformanceStatsData.PatientMainData.PatientName}
          FileNb={ClinicPerformanceStatsData.PatientMainData.FileNb}
          age={calculateAge(
            ClinicPerformanceStatsData.PatientMainData.DateOfBirth
          )}
        />
        <PatientCard
          Pic={ClinicPerformanceStatsData.Husband.HusbandProfile}
          Name={ClinicPerformanceStatsData.Husband.HusbandName}
          FileNb={ClinicPerformanceStatsData.Husband.FileNb}
          age={calculateAge(ClinicPerformanceStatsData.Husband.DateOfBirth)}
        />
      </RowClinicPerformanceStatsContainer>
      <RowClinicPerformanceStatsContainer
        style={{ justifyContent: "space-between" }}
      >
        <MediumTypography
          text={"Gametes"}
          fontSize="1.125rem"
          fontWeight="700"
          lineHeight="120%"
        />
        <PaymentsRowClinicPerformanceStatsContainer
        // style={{ marginBottom: "1rem" }}
        >
          <PaymentsRowClinicPerformanceStatsBox bgcolor="rgba(41, 172, 174, 0.20)">
            <MediumTypography
              text={`Collected: ${ClinicPerformanceStatsData.PaymentSummary.collect}`}
              fontWeight="700"
              lineHeight="120%"
            />
          </PaymentsRowClinicPerformanceStatsBox>
          <PaymentsRowClinicPerformanceStatsBox bgcolor="rgba(161, 95, 228, 0.20)">
            <MediumTypography
              text={`Pending: ${ClinicPerformanceStatsData.PaymentSummary.Pending}`}
              fontWeight="700"
              lineHeight="120%"
            />
          </PaymentsRowClinicPerformanceStatsBox>
          <PaymentsRowClinicPerformanceStatsBox bgcolor="rgba(236, 89, 87, 0.20)">
            <MediumTypography
              text={`Overdue: ${ClinicPerformanceStatsData.PaymentSummary.Overdue}`}
              fontWeight="700"
              lineHeight="120%"
            />
          </PaymentsRowClinicPerformanceStatsBox>
        </PaymentsRowClinicPerformanceStatsContainer>
      </RowClinicPerformanceStatsContainer>
      <ClinicPerformanceStatsTableContainer>
        <MediumTypography
          text={`Appointments (${ClinicPerformanceStatsData.Appointments.length})`}
          fontWeight="700"
          color="#898DDA"
        />
        <VerySimpleTable
          Header={AppointmentHeader}
          data={ClinicPerformanceStatsData.Appointments}
        />
      </ClinicPerformanceStatsTableContainer>
    </ColumnClinicPerformanceStatsContainer>
  );
};

export default ClinicPerformanceStatsPopUp;
