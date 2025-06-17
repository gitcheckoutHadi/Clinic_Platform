import React from "react";
import { StyleHeaderNavigator } from "./HeaderNavigator.style";
import { Typography } from "../textElement/fonts/Fonts";
import { SvgNavigatorArrow } from "../Icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface HeaderNavigatorInterface {
  text: string;
  Navigate?: string;
}
const HeaderNavigator = ({ text, Navigate }: HeaderNavigatorInterface) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (Navigate) {
      navigate(Navigate);
    } else {
      navigate(-1);
    }
  };
  return (
    <StyleHeaderNavigator onClick={handleNavigate}>
      <SvgNavigatorArrow className="icon-style" />
      <Typography
        text={t(text)}
        fontSize="1.5rem"
        fontWeight="700"
        lineHeight="120%"
        cursor="pointer"
        color="inherit"
      />
    </StyleHeaderNavigator>
  );
};

export default HeaderNavigator;
