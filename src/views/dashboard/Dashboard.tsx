import React, { useState } from "react";
import Table from "../../components/Table/Table";
import {
  DummyData,
  HeaderColumns,
} from "../../components/Table/TableDummyData";
import PopUp from "../../components/PupUps/PopUp/PopUp";
import { SvgFilterIcon } from "../../elements/Icons";
import ApexPieChart from "../../components/Charts/ApexPieChart/ApexPieChart";
import CycleOverView from "../../components/CycleOverView/CycleOverView";
import { CycleOverviewData } from "../../components/CycleOverView/CycleOverViewData";
import { FormEmptySpace } from "../../globalStyles";
import DashboardNotifications from "./DashboardNotifications/DashboardNotifications";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100% ",
        flexWrap: "wrap",
        gap: "1.25rem",
      }}
    >
      <DashboardHeader /> <CycleOverView data={CycleOverviewData} />
      <DashboardNotifications />
      <PaymentSummary />
      <FormEmptySpace />
    </div>
  );
};

export default Dashboard;
