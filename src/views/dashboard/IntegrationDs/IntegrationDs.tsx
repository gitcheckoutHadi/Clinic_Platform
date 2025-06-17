import React from "react";
import { NormalFlex, SubMainFlex } from "../../../globalStyles";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import {
  SvgCall,
  SvgEmail,
  SvgNoAnswer,
  SvgSMS,
} from "../../../elements/Icons";
import { IntegrationDATA } from "./IntegrationDsData";
import IntegrationCard from "../../../components/IntegrationCard/IntegrationCard";

const IntegrationDs = () => {
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
    <SubMainFlex>
      <Typography
        fontSize="1.125rem"
        fontWeight="700"
        lineHeight="120%"
        text={"Interactions"}
      />
      <NormalFlex>
        {formattedData.map((item, index) => (
          <IntegrationCard data={item} key={index} />
        ))}
      </NormalFlex>
    </SubMainFlex>
  );
};

export default IntegrationDs;
