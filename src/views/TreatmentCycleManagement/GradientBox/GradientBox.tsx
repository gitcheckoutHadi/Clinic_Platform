import React from "react";
import {
  ManagementBoxGroup,
  ManagementColumnBox,
  ManagementGradientBox,
} from "../TreatmentCycleManagement.style";
import {
  MediumTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import { EggFreezingInterface } from "../TreatmentCycleManagementData";
import { DateFormate } from "../../../utils/DateFormate";
import CirclePieChart from "../../../components/Charts/CircleChart/CircleChart";
import { useTranslation } from "react-i18next";

interface GradientBoxInterface {
  data: EggFreezingInterface;
}
const GradientBox = ({ data }: GradientBoxInterface) => {
  const { t } = useTranslation();
  return (
    <ManagementGradientBox>
      <ManagementBoxGroup>
        <Typography
          text={t("treatmentCycle.Cycle Progress")}
          fontSize="1.5rem"
          fontWeight="400"
          lineHeight="2rem"
        />
        <ManagementColumnBox>
          <MediumTypography
            text={t("treatmentCycle.Treatment Day")}
            fontSize="1.25rem"
            fontWeight="400"
            lineHeight="1.25rem"
            letter_spacing="0.01563rem"
            opacity="0.5"
          />
          <Typography
            text={DateFormate(data.TreatmentDay)}
            fontSize="1.25rem"
            fontWeight="400"
            lineHeight="1.5rem"
            letter_spacing="0.03125rem"
          />
        </ManagementColumnBox>
        <ManagementColumnBox>
          <MediumTypography
            text={t("treatmentCycle.LMP Date")}
            fontSize="1.25rem"
            fontWeight="400"
            lineHeight="1.25rem"
            letter_spacing="0.01563rem"
            opacity="0.5"
          />
          <Typography
            text={DateFormate(data.LMPDate)}
            fontSize="1.25rem"
            fontWeight="400"
            lineHeight="1.5rem"
            letter_spacing="0.03125rem"
          />
        </ManagementColumnBox>
      </ManagementBoxGroup>
      <ManagementBoxGroup>
        <CirclePieChart progress={data.Progress} size={70} strokeWidth={7} />
      </ManagementBoxGroup>
    </ManagementGradientBox>
  );
};

export default GradientBox;
