import React from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import { SpaceBetweenFlex } from "../../globalStyles";
import {
  MediumTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import {
  GraphCenter,
  GroupPaymentSummary,
  GroupPaymentSummaryInfo,
  GroupPaymentSummaryLine,
} from "./PaymentSummary.style";
import { PaymentSummaryData } from "./PaymentSummaryData";
import SemiCircleCharts from "../Charts/SimiCircleCharts/SimiCircleCharts";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";

const PaymentSummary = () => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const completionPercentage = parseFloat(
    ((PaymentSummaryData.Income / PaymentSummaryData.total) * 100).toFixed(2)
  ); // Ensures 2 decimal places

  const pendingPercentage = parseFloat(
    (PaymentSummaryData.total - PaymentSummaryData.Income).toFixed(2)
  ); // The remaining percentage

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        minWidth: "30rem",
      }}
    >
      <ShadowBox>
        <SpaceBetweenFlex>
          <Typography text="Payment Summary" />
          <MediumTypography
            text="View Report"
            color={secondaryColor}
            cursor="pointer"
          />
        </SpaceBetweenFlex>
        <SpaceBetweenFlex>
          <GroupPaymentSummary>
            <GroupPaymentSummaryLine background="#9F75FF" />
            <GroupPaymentSummaryInfo>
              <Typography
                text={`${PaymentSummaryData.Income} $`}
                color="#9F75FF"
                fontSize="1.75rem"
              />
              <MediumTypography text="Income" opacity="0.5" />
            </GroupPaymentSummaryInfo>
          </GroupPaymentSummary>
          <GroupPaymentSummary>
            <GroupPaymentSummaryLine background="#E19DFF" />
            <GroupPaymentSummaryInfo>
              <Typography
                text={`${pendingPercentage} $`}
                fontSize="1.75rem"
                color="#E19DFF"
              />
              <MediumTypography text="Pending" opacity="0.5" />
            </GroupPaymentSummaryInfo>
          </GroupPaymentSummary>
          <GroupPaymentSummary>
            <GroupPaymentSummaryLine background="#231D46" />
            <GroupPaymentSummaryInfo>
              <Typography
                text={`${PaymentSummaryData.total} $`}
                fontSize="1.75rem"
                color="#231D46"
              />
              <MediumTypography text="Total" opacity="0.5" />
            </GroupPaymentSummaryInfo>
          </GroupPaymentSummary>
        </SpaceBetweenFlex>
        <GraphCenter>
          <SemiCircleCharts series={[completionPercentage]} />
        </GraphCenter>
      </ShadowBox>
    </div>
  );
};

export default PaymentSummary;
