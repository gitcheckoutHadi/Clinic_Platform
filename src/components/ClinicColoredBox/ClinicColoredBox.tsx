import React from "react";
import {
  ClinicColoredBoxMainCont,
  ClinicColoredTitle,
} from "./ClinicColoredBox.style";
import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

interface ClinicColoredBox {
  title: string;
  value: string;
  titleBgColor?: string;
}
const ClinicColoredBox = ({ title, value, titleBgColor }: ClinicColoredBox) => {
  return (
    <ClinicColoredBoxMainCont>
      <ClinicColoredTitle background={titleBgColor}>
        <MediumTypography text={title} fontWeight="700" />
      </ClinicColoredTitle>
      <MediumTypography
        color="#000"
        fontSize="2.25rem"
        text={value}
        fontWeight="700"
        lineHeight="120%"
      />
    </ClinicColoredBoxMainCont>
  );
};

export default ClinicColoredBox;
