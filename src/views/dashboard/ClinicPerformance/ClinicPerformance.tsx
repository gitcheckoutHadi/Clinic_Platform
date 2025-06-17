import React from "react";
import { ClinicPerformanceTitles, FetchesData } from "./ClinicPerformanceData";
import {
  ClinicPerformanceCardsContainer,
  ClinicPerformanceMainContainer,
} from "./ClinicPerformance.style";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import ClinicColoredBox from "../../../components/ClinicColoredBox/ClinicColoredBox";

const ClinicPerformance = () => {
  const formatedData = ClinicPerformanceTitles.map((item, index) => ({
    title: item.title, // Include only `title`
    bgColor: item.bgColor, // Include only `bgColor`
    id: FetchesData[index]?.id, // Include only `id`
    value: item.value, // Include only `value`
  }));
  const formatMonthYear = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <ClinicPerformanceMainContainer>
      <Typography
        text={`${formatMonthYear()} Clinic performance stats`}
        fontSize="1.125rem"
        fontWeight="700"
        lineHeight="120%"
      />
      <ClinicPerformanceCardsContainer>
        {formatedData.map((data, index) => (
          <ClinicColoredBox
            key={data.id}
            title={data.title}
            value={data.value}
            titleBgColor={data.bgColor}
          />
        ))}
      </ClinicPerformanceCardsContainer>
    </ClinicPerformanceMainContainer>
  );
};

export default ClinicPerformance;
