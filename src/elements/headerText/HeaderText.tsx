import React from "react";
import { BigText } from "./HeaderText.style";
import { Typography } from "../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";

interface HeaderTextInterface {
  // children?: React.ReactNode;
  title: string;
}
const HeaderText = ({ title }: HeaderTextInterface) => {
  const { t } = useTranslation();
  return (
    <BigText>
      <Typography
        text={t(title)}
        fontSize="1.5rem"
        fontWeight="700"
        lineHeight="120%"
      />
    </BigText>
  );
};

export default HeaderText;
