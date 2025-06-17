import React from "react";
import {
  DollarLineCartFullLine,
  DollarLineCartMainContainer,
  DollarLineCartOpacityLine,
  TextShow,
} from "./DollarLineCart.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

interface DollarLineCartInterface {
  title: string;
  background: string;
  percentValue: string;
  salaryValue: string;
}
const DollarLineCart = ({
  title,
  background,
  percentValue,
  salaryValue,
}: DollarLineCartInterface) => {
  return (
    <DollarLineCartMainContainer>
      <MediumTypography text={title} fontWeight="400" color="#fff" />
      <DollarLineCartFullLine background={background}>
        <MediumTypography
          text={percentValue}
          fontSize="0.625rem"
          fontWeight="400"
          lineHeight="120%"
          color="#fff"
        />
        <DollarLineCartOpacityLine width={percentValue}>
          {" "}
          <TextShow>
            <MediumTypography
              text={salaryValue}
              fontWeight="700"
              whiteSpace="nowrap"
              color=""
            />
          </TextShow>
        </DollarLineCartOpacityLine>
      </DollarLineCartFullLine>
    </DollarLineCartMainContainer>
  );
};

export default DollarLineCart;
