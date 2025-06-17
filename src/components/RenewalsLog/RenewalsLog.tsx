import React from "react";
import {
  BTNRowsPaymentSummary,
  PaymentSummaryMainContainer,
  PaymentSummaryRowContainer,
} from "../PaymentSummaryV2/PaymentSummary.styled";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import { TitleAndSearchRefreshContainer } from "../Table/TitleAndSearch/TitleAndSearch.style";
import { SvgExpandIcon, SvgFilterIcon } from "../../elements/Icons";
import DonutChartWithIcons, {
  DonutChartWithIconsInterface,
} from "../Charts/DonutChartWithIcons/DonutChartWithIcons";
import FilterBox from "../FilterBox/FilterBox";
interface RenewalsLogInterface extends DonutChartWithIconsInterface {
  actions: {
    text: string;
    action: () => void;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}
const RenewalsLog = ({ data, actions }: RenewalsLogInterface) => {
  console.log("Data", data);
  return (
    <PaymentSummaryMainContainer style={{ gap: "0rem" }}>
      <PaymentSummaryRowContainer>
        <Typography
          fontSize="1.125rem"
          text="Storage Activity Log"
          fontWeight="700"
          lineHeight="120%"
          whiteSpace="nowrap"
        />
        <BTNRowsPaymentSummary>
          <FilterBox actions={actions} />
          <TitleAndSearchRefreshContainer>
            <SvgExpandIcon className="IconStrokeTable" />
          </TitleAndSearchRefreshContainer>
        </BTNRowsPaymentSummary>
      </PaymentSummaryRowContainer>
      <DonutChartWithIcons data={data} />
    </PaymentSummaryMainContainer>
  );
};

export default RenewalsLog;
