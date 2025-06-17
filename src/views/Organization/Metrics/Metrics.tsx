import React from "react";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import { ClinicItem, ClinicsSpace, OrgSpace } from "./MetricsStyle";
import CircularImage from "../../../elements/circularImage/CircularImage";
import { MetricsData } from "./MetricsData";
import {
  MediumTypography,
  TitleTypography,
} from "../../../elements/textElement/fonts/Fonts";
import ClinicProfileLogo from "../../../elements/ClinicProfile/ClinicProfile";
import { PageFlex } from "../../../globalStyles";
import useResponsive from "../../../hooks/useResponsive";

const Metrics = () => {
  const isMobile = useResponsive();
  return (
    <PageFlex>
      <TitleTypography text={"Metrics"} fontWeight="700" lineHeight="120%" />
      <ShadowBox flexDirection={isMobile ? "column" : "row"}>
        <OrgSpace>
          <CircularImage size="3.125rem" src={MetricsData.OrganizationImg} />
          <MediumTypography
            text={MetricsData.Organization}
            color="#a6a6a6"
            fontWeight="700"
          />
        </OrgSpace>
        <ClinicsSpace>
          {MetricsData.Clinics.map((item, index) => (
            <ClinicItem key={index}>
              <ClinicProfileLogo data={item} />
              <MediumTypography
                text={item.ClinicName}
                color="#a6a6a6"
                fontWeight="700"
              />
            </ClinicItem>
          ))}
        </ClinicsSpace>
      </ShadowBox>
    </PageFlex>
  );
};

export default Metrics;
