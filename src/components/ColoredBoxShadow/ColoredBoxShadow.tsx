import React from "react";
import { ContainerColoredBoxShadow } from "./ColoredBoxShadow.style";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import { TitleValueInterface } from "../../Interface/HeaderCompInterface/HeaderCompInterface";

const ColoredBoxShadow = ({ title, value }: TitleValueInterface) => {
  const { secondaryColor, greyColor, mainBoxShadow } =
    useRecoilValue(MainColorSelector);
  return (
    <ContainerColoredBoxShadow>
      <Typography
        text={value}
        fontWeight="700"
        fontSize="2.125rem"
        color={secondaryColor}
      />
      <Typography text={title} fontWeight="400" color={greyColor} />
    </ContainerColoredBoxShadow>
  );
};

export default ColoredBoxShadow;
