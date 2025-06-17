import React from "react";
import { RenderStatsDonutCom, StatsDonutCom } from "../main/OrganizationStyle";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import { ClinicsPerformanceStatsData } from "./ClinicsPerformanceStatsData";
import DonutchartWithoutLegend from "../../../components/DonutchartWithoutLegend/DonutchartWithoutLegend";

const ClinicsPerformanceStats = () => {
  const formatMonthYear = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <StatsDonutCom>
      <Typography
        text={`${formatMonthYear()} Clinic performance stats`}
        fontSize="1.125rem"
        fontWeight="700"
        lineHeight="120%"
      />
      <RenderStatsDonutCom>
        {ClinicsPerformanceStatsData &&
          ClinicsPerformanceStatsData.map((item, ind) => (
            <DonutchartWithoutLegend
              charts={item.charts}
              title={item.title}
              titlebgcolor={item.titlebgcolor}
            />
          ))}
      </RenderStatsDonutCom>
    </StatsDonutCom>
  );
};

export default ClinicsPerformanceStats;
