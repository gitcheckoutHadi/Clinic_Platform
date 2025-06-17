import React from "react";
import BarChart from "../../../components/Charts/BarChart/BarChart";

const OrgBarChart = () => {
  return (
    <>
      <BarChart
        series={[
          { name: "cl1", data: [44, 44, 44, 43] },
          { name: "cl2", data: [44, 44, 44, 42] },
          { name: "cl3", data: [12, 17, 15, 24] },
        ]}
        categories={["OCC", "Zygotes", "Sperm", "Embryos"]}
        title="Daily Gametes Renewals log"
      />
    </>
  );
};

export default OrgBarChart;
