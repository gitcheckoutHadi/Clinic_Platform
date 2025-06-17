import React, { useState, useEffect } from "react";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { SimpleHeaderColumns } from "../../../components/SimpleTable/SimpleDummyTableData";
import {
  currencySymbol,
  FreezingLogData,
  FreezingLogHeaderDData,
} from "./FreezingLogData";
import { DateTimeFormat } from "../../../utils/DateFormate";
import { ViewDetailsAndProfiles } from "../../../components/Table/AbsoluteTableActions/ViewDetailsAndProfiles";
import ClinicPerformanceStatsPopUp from "../ClinicPerformanceStatsPopUp/ClinicPerformanceStatsPopUp";

const DsFreezingLog = () => {
  const [ObjectId, setObjectId] = useState<number | null>(null);
  const formattedData = FreezingLogData.map((item) => ({
    SourceId: item.SourceId,
    PatientName: [item.PatientName, item.FileNb],
    DateAndTime: new Date(item.DateAndTime), // Convert to Date object for filtering
    Status: item.Status,
    Amount: `${item.Amount} (${currencySymbol})`,
  })).sort((a, b) => b.DateAndTime.getTime() - a.DateAndTime.getTime()); // Sort from newest to oldest

  const [filteredData, setFilteredData] = useState(formattedData);

  const filterData = (type: "Monthly" | "Weekly") => {
    const now = new Date();
    const startDate = new Date();

    if (type === "Monthly") {
      startDate.setMonth(now.getMonth() - 1); // Filter last 1 month
    } else if (type === "Weekly") {
      startDate.setDate(now.getDate() - 7); // Filter last 7 days
    }

    const newData = formattedData.filter(
      (item) => item.DateAndTime >= startDate
    );
    setFilteredData(newData);
  };

  const actions = [
    { text: "Monthly", action: () => filterData("Monthly") },
    { text: "Weekly", action: () => filterData("Weekly") },
  ];

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        minWidth: "28rem",
        // background: "aqua",
      }}
    >
      <SimpleTable
        title="Upcoming freezing renewals log"
        Header={FreezingLogHeaderDData}
        data={filteredData.map((item) => ({
          ...item,
          DateAndTime: DateTimeFormat(item.DateAndTime), // Format the date before rendering
        }))}
        actions={actions}
        SecondArrayText="File:"
        // Action={ViewDetailsAndProfiles()}
        EyeShow={true}
        PropsObjectId={ObjectId}
        setPropsObjectId={setObjectId}
        PopUpContent={<ClinicPerformanceStatsPopUp SourceId={ObjectId} />}
        // flexWidths={[1, 1, 0.7, 0.7]}
      />
    </div>
  );
};

export default DsFreezingLog;
