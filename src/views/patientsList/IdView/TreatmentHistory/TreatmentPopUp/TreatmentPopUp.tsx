import React from "react";
import {
  MainTreatmentPopUpContainer,
  TableTreatmentPopUpContainer,
  TreatmentPopUpBody,
  TreatmentPopUpBodyRow,
  TreatmentPopUpTableCell,
  TreatmentPopUpTableHeader,
} from "./TreatmentPopUp.styled";
import { TreatmentData, TreatmentPopUpDataHeader } from "./TreatmentPopUpData";
import { MediumTypography } from "../../../../../elements/textElement/fonts/Fonts";
import { SvgDoneProgress, SvgInProgress } from "../../../../../elements/Icons";
import { DateNumberFormat } from "../../../../../utils/DateFormate";
import BlurredDonutChart from "../../../../../components/Charts/BlurDonatChart/BlurDonatChart";
interface TreatmentPopUpInterface {
  SourceId: number | string | null;
}
const TreatmentPopUp = ({ SourceId }: TreatmentPopUpInterface) => {
  return (
    <MainTreatmentPopUpContainer>
      <TableTreatmentPopUpContainer>
        <TreatmentPopUpTableHeader>
          {TreatmentPopUpDataHeader &&
            TreatmentPopUpDataHeader.map((item) => (
              <TreatmentPopUpTableCell key={item.id}>
                <MediumTypography
                  text={item.label}
                  color="#898DDA"
                  wordWrap="normal"
                />
              </TreatmentPopUpTableCell>
            ))}
        </TreatmentPopUpTableHeader>
        <TreatmentPopUpBody>
          {TreatmentData.map((item, index) => (
            <TreatmentPopUpBodyRow key={item.id}>
              <TreatmentPopUpTableCell>
                <p className="ptext">{item.Milestone}</p>
              </TreatmentPopUpTableCell>
              <TreatmentPopUpTableCell>
                <MediumTypography text={DateNumberFormat(item.StartDate)} />
              </TreatmentPopUpTableCell>
              <TreatmentPopUpTableCell>
                <MediumTypography text={DateNumberFormat(item.EndDate)} />
              </TreatmentPopUpTableCell>
              <TreatmentPopUpTableCell>
                {item.Done ? <SvgDoneProgress /> : <SvgInProgress />}
              </TreatmentPopUpTableCell>
            </TreatmentPopUpBodyRow>
          ))}
        </TreatmentPopUpBody>
      </TableTreatmentPopUpContainer>
      <BlurredDonutChart percentage={80} day={15} />
    </MainTreatmentPopUpContainer>
  );
};

export default TreatmentPopUp;
