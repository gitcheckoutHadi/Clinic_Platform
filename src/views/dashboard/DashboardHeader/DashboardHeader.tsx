import React from "react";
import PropertyHeader from "../../../components/PropertyHeader/PropertyHeader";
import { DashboardHeaderData } from "./DashboardHeader.Data";

const DashboardHeader = () => {
  return (
    <div style={{ minWidth: "100%" }}>
      <PropertyHeader
        data={DashboardHeaderData}
        title="patients.Patient Statistics"
      />
    </div>
  );
};

export default DashboardHeader;
