import React from "react";
import { StyleHeaderNavigator } from "./HeaderNavigator.style";
import { Typography } from "../textElement/fonts/Fonts";
import { SvgNavigatorArrow } from "../Icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface HeaderNavigatorInterface {
  text: string;
  ExpandClick?: () => void;
  showExpand?: boolean;
  setShowExpand?: React.Dispatch<React.SetStateAction<boolean>>;
}
const TableExpandNavigator = ({
  text,
  ExpandClick,
}: HeaderNavigatorInterface) => {
  const { t } = useTranslation();

  return (
    <StyleHeaderNavigator onClick={ExpandClick}>
      <SvgNavigatorArrow className="icon-style" />
      <Typography
        text={t(text)}
        fontSize="1.75rem"
        fontWeight="400"
        lineHeight="2.25rem"
        cursor="pointer"
        color="inherit"
      />
    </StyleHeaderNavigator>
  );
};

export default TableExpandNavigator;
