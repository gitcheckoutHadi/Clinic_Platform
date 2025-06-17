import React from "react";
import { FormEmptySpace, NormalFlex, PageFlex } from "../../../globalStyles";
import DashboardHeaderPart from "../DashboardHeaderPart/DashboardHeaderPart";
import ClinicPerformance from "../ClinicPerformance/ClinicPerformance";
import DSPaymentSummery from "../DSPaymentSummery/DSPaymentSummery";
import DSRenewalsLog from "../DSRenewalsLog/DSRenewalsLog";
import DsFreezingLog from "../FreezingLog/FreezingLog";
import IntegrationDs from "../IntegrationDs/IntegrationDs";
import { DSEmptySpace } from "../Dashboard.style";

const Dashboard = () => {
  return (
    <PageFlex>
      <DashboardHeaderPart />
      <ClinicPerformance />
      <NormalFlex>
        <DSPaymentSummery />
        <DSRenewalsLog />
        <DSEmptySpace>
          <DsFreezingLog />
        </DSEmptySpace>
        {/* <DSEmptySpace /> */}
        {/* <DSEmptySpace> */}
        <IntegrationDs />
        {/* </DSEmptySpace> */}
      </NormalFlex>
    </PageFlex>
  );
};

export default Dashboard;
