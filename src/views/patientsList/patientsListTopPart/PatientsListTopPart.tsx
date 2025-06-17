import React from "react";
import {
  PatientsListTopPartBoxesContainer,
  PatientsListTopPartGroupContainer,
  PatientsListTopPartMainContainer,
} from "./PatientsListTopPart.style";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import {
  PatientsCardsData,
  PatientsSimpleTableBodyData,
  PatientsSimpleTableHeaderData,
} from "./PatientsListTopPartData";
import { SmallCardShadow } from "../../../components/SmallCardShadow/SmallCardShadow";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import PropertyHeader from "../../../components/PropertyHeader/PropertyHeader";
import { TitleValueInterface } from "../../../Interface/HeaderCompInterface/HeaderCompInterface";
import { useTranslation } from "react-i18next";
import { toArabicDigits } from "../../../utils/translates";

const PatientsListHeaderData: TitleValueInterface[] = [
  { value: toArabicDigits("125 / 200"), title: "general.Active" },
  { value: toArabicDigits("10"), title: "patients.Upcoming Renewals" },
  { value: toArabicDigits("5"), title: "patients.Pending onboarding" },
];

const PatientsListTopPart = () => {
  return (
    <PropertyHeader
      title={"patients.Patient Statistics"}
      data={PatientsListHeaderData}
    />
  );
};

export default PatientsListTopPart;
