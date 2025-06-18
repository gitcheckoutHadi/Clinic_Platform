import React from "react";
import OrganizationTable from "../OrganizationTable/OrganizationTable";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import { FlexOneWidth, NormalFlex, PageFlex } from "../../../globalStyles";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import IntegrationCard from "../../../components/IntegrationCard/IntegrationCard";
import {
  SvgCall,
  SvgEmail,
  SvgNoAnswer,
  SvgSMS,
} from "../../../elements/Icons";
import { IntegrationDATA } from "../../dashboard/IntegrationDs/IntegrationDsData";

import ClmChart from "../ClmChart/ClmChart";
import OrgBarChart from "../OrgBarChart/OrgBarChart";
import ClinicsPerformanceStats from "../ClinicsPerformanceStats/ClinicsPerformanceStats";
import DashboardHeaderPart from "../../dashboard/DashboardHeaderPart/DashboardHeaderPart";

const Organization = () => {
  const DummyIconData = [
    { id: 1, hex: "#ABAEE533", Icon: SvgEmail },
    { id: 2, hex: "#29ACAE33", Icon: SvgCall },
    { id: 3, hex: "#ABAEE533", Icon: SvgSMS },
    { id: 4, hex: "#EC595733", Icon: SvgNoAnswer },
  ];

  const formattedData = IntegrationDATA.map((item, index) => ({
    title: item.title,
    value: item.value,
    totalValue: item.totalValue,
    IconBgColor: DummyIconData[index].hex,
    Icon: DummyIconData[index].Icon,
  }));
  return (
    <PageFlex>
      <DashboardHeaderPart title="LAU Group Org Chart  " />
      <ClinicsPerformanceStats />
      <NormalFlex>
        <FlexOneWidth>
          <ShadowBox>
            <Typography
              text={"Click Data"}
              fontSize="1.125rem"
              fontWeight="700"
              lineHeight="120%"
            />{" "}
            <ClmChart />
          </ShadowBox>
        </FlexOneWidth>
        <FlexOneWidth>
          <ShadowBox>
            <OrgBarChart></OrgBarChart>
          </ShadowBox>
        </FlexOneWidth>
      </NormalFlex>

      <ShadowBox>
        <PageFlex>
          <Typography
            text={"Clinic Data"}
            fontSize="1.125rem"
            fontWeight="700"
            lineHeight="120%"
          />

          <NormalFlex>
            {formattedData.map((item, index) => (
              <IntegrationCard data={item} key={index} />
            ))}
          </NormalFlex>
          <OrganizationTable />
        </PageFlex>
      </ShadowBox>
    </PageFlex>
  );
};

export default Organization;
