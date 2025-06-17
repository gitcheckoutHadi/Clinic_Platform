import React from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import {
  TitleTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import { PatientsCardsInterface } from "../../views/patientsList/patientsListTopPart/PatientsListTopPartData";

interface SmallCardShadowInterface {
  data: PatientsCardsInterface;
}
export const SmallCardShadow = ({ data }: SmallCardShadowInterface) => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  return (
    <>
      {data.val1 && (
        <ShadowBox>
          <TitleTypography
            text={`${data.val1 ? data.val1 : ""}${
              data.val1 && data.val2 ? ` / ${data.val2}` : ""
            }`}
            fontSize="2.125rem"
            fontWeight="700"
            color={secondaryColor}
          />
          <Typography lineHeight="1.125rem" text={data.text} />
        </ShadowBox>
      )}
    </>
  );
};
