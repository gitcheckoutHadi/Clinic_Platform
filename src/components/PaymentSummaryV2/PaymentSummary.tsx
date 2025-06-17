import React, { useEffect, useState } from "react";
import {
  BTNRowsPaymentSummary,
  ChartPaymentSummary,
  PaymentSummaryMainContainer,
  PaymentSummaryRowContainer,
  RenderChartsPaymentSummary,
  TotalBoxPaymentSummary,
  TotalMainContPaymentSummary,
} from "./PaymentSummary.styled";
import {
  MediumTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";

import { TitleAndSearchRefreshContainer } from "../Table/TitleAndSearch/TitleAndSearch.style";
import { SvgExpandIcon, SvgFilterIcon } from "../../elements/Icons";
import DollarLineCart from "../Charts/DollarLineCart/DollarLineCart";
import FilterBox from "../FilterBox/FilterBox";
import { TextBoxsFiltersInterface } from "../TextBoxsFilters/TextBoxsFilters";
import CurrentMonth from "../../elements/CurrentMonth/CurrentMonth";
interface PaymentSummaryInterface extends TextBoxsFiltersInterface {
  PaymentSummaryData: {
    data: {
      title: string;
      percentValue: string;
      salaryValue: string;
    }[];
    Total: string;
  };
}
const PaymentSummary = ({
  PaymentSummaryData,
  actions,
}: PaymentSummaryInterface) => {
  const colorPalette = [
    { id: 1, hex: "#6A0DAD" }, // Deep Purple (brand anchor)
    { id: 2, hex: "#FF6F61" }, // Soft Red Coral – energetic & distinct
    { id: 3, hex: "#00BFA6" }, // Teal – cool contrast, modern feel
    { id: 4, hex: "#F39C12" }, // Golden Amber – warm, lively
    { id: 5, hex: "#5DADE2" }, // Sky Blue – fresh and calming
    { id: 6, hex: "#E91E63" }, // Pink – vibrant and bold
  ];

  const formattedData = PaymentSummaryData.data.map((item, index) => ({
    title: item.title,
    percentValue: item.percentValue,
    color: colorPalette[index].hex,
    salaryValue: item.salaryValue,
  }));

  return (
    <PaymentSummaryMainContainer>
      <PaymentSummaryRowContainer>
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <Typography
            fontSize="1.125rem"
            text="Transaction Summary Report"
            fontWeight="700"
            lineHeight="120%"
          />
          <CurrentMonth />
        </div>
        <BTNRowsPaymentSummary>
          <FilterBox actions={actions} />
          <TitleAndSearchRefreshContainer>
            <SvgExpandIcon className="IconStrokeTable" />
          </TitleAndSearchRefreshContainer>
        </BTNRowsPaymentSummary>
      </PaymentSummaryRowContainer>

      <ChartPaymentSummary>
        <RenderChartsPaymentSummary>
          {formattedData.map((item, index) => (
            <DollarLineCart
              title={item.title}
              salaryValue={item.salaryValue}
              percentValue={item.percentValue}
              background={item.color}
              key={index}
            />
          ))}
        </RenderChartsPaymentSummary>
      </ChartPaymentSummary>
      <TotalMainContPaymentSummary>
        <TotalBoxPaymentSummary>
          <MediumTypography
            text="Total amount due"
            fontWeight="700"
            color="#898DDA"
          />
        </TotalBoxPaymentSummary>
        <Typography
          text={PaymentSummaryData.Total}
          fontSize="2.25rem"
          fontWeight="700"
          lineHeight="120%"
        />
      </TotalMainContPaymentSummary>
    </PaymentSummaryMainContainer>
  );
};

export default PaymentSummary;
