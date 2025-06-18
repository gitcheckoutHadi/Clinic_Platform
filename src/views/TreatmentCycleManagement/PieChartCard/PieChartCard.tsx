import React from "react";
import {
  PieChartCarBottomContainer,
  PieChartCarDates,
  PieChartCardMainContainer,
  PieChartCardRowContainer,
  PieChartCarTitle,
  PieChartCarTopContainer,
} from "./PieChartCard.style";
import {
  MediumTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import CircularProgress from "../../../components/Charts/Piechart/Piechart";
import { ProgressInfoInterface } from "../TreatmentCycleManagementData";
import { DateFormate } from "../../../utils/DateFormate";
import ApexPieChart from "../../../components/Charts/ApexPieChart/ApexPieChart";
import { useTranslation } from "react-i18next";
interface PieChartCardInterface {
  data: ProgressInfoInterface[];
}
const PieChartCard = ({ data }: PieChartCardInterface) => {
  const { t } = useTranslation();
  return (
    <PieChartCardRowContainer>
      {data.map((item) => (
        <PieChartCardMainContainer>
          <PieChartCarTopContainer>
            <PieChartCarTitle>
              <Typography
                text={item.title}
                fontSize="1.125rem"
                fontWeight="700"
                lineHeight="1.625rem"
                letter_spacing="0.03125rem"
              />
            </PieChartCarTitle>
            <ApexPieChart progress={item.progress} />
          </PieChartCarTopContainer>
          <PieChartCarBottomContainer>
            <PieChartCarDates>
              <MediumTypography
                text={t("general.Start Date")}
                opacity="0.5"
                lineHeight="1.25rem"
                letter_spacing="0.01563rem"
              />
              <Typography
                text={DateFormate(item.startDate)}
                lineHeight="1.5rem"
                letter_spacing="0.03125rem"
              />
            </PieChartCarDates>
            <PieChartCarDates>
              <MediumTypography
                text={t("general.End Date")}
                opacity="0.5"
                lineHeight="1.25rem"
                letter_spacing="0.01563rem"
              />
              <Typography
                text={DateFormate(item.endDate)}
                lineHeight="1.5rem"
                letter_spacing="0.03125rem"
              />
            </PieChartCarDates>
          </PieChartCarBottomContainer>
        </PieChartCardMainContainer>
      ))}
    </PieChartCardRowContainer>
  );
};

export default PieChartCard;
