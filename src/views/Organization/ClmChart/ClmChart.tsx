import React from "react";
import { ClmChartData, Properties } from "./ClmChartData";
import ColumnChart from "../../../components/Charts/ColumnChart/ColumnChart";
// const sampleSeries: ApexAxisChartSeries = [
//   {
//     name: "Collected",
//     data: [44, 55, 57],
//   },
//   {
//     name: "Pending collection",
//     data: [76, 114, 94],
//   },
//   {
//     name: "Overdue",
//     data: [35, 41, 36],
//   },
// ];

// const sampleCategories: string[] = ["Clinic 1", "Clinic 2", "Clinic 3"];
// const data = {
//   series: sampleSeries,
//   categories: sampleCategories,
// };

const formatToChartData = () => {
  const categories = ClmChartData.map((clinic) => clinic.name);

  const keyMap: Record<string, keyof (typeof ClmChartData)[0]> = {
    Collected: "collected",
    "Pending collection": "PendingCollection",
    Overdue: "Overdue",
  };

  const series = Properties.map((property) => ({
    name: property,
    data: ClmChartData.map(
      (clinic) => Number(clinic[keyMap[property]]) // 👈 cast to number
    ),
  }));

  return { categories, series };
};

const data = formatToChartData();

const ClmChart = () => {
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <ColumnChart data={data} />
    </div>
  );
};

export default ClmChart;
