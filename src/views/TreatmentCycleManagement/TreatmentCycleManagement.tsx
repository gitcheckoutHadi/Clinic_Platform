import React from "react";
import { PageFlex, SpaceBetweenFlex } from "../../globalStyles";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import ColoredButton from "../../elements/Buttons/ColoredButton/ColoredButton";
import { SvgAddIcon } from "../../elements/Icons";
import GradientBox from "./GradientBox/GradientBox";
import { EggFreezingData, ProgressData } from "./TreatmentCycleManagementData";
import PieChartCard from "./PieChartCard/PieChartCard";
import { useTranslation } from "react-i18next";

const TreatmentCycleManagement = () => {
  const { t } = useTranslation();
  return (
    <PageFlex>
      <Typography
        text={"Treatment Cycle Management"}
        fontSize="1.5rem"
        fontWeight="700"
        lineHeight="120%"
      />
      <ShadowBox>
        <SpaceBetweenFlex>
          <Typography
            text={t("treatmentCycle.Cycle Progress")}
            fontSize="1.5rem"
            fontWeight="400"
            lineHeight="2rem"
          />
          <ColoredButton
            text={t("treatmentCycle.Add new Cycle")}
            Icon={SvgAddIcon}
            borderRadius=" 0.9375rem"
          />
        </SpaceBetweenFlex>
        <GradientBox data={EggFreezingData} />
        <PieChartCard data={ProgressData} />
      </ShadowBox>
    </PageFlex>
  );
};

export default TreatmentCycleManagement;
