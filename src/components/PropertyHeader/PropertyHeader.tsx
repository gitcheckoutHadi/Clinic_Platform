import React from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import ColoredBoxShadow from "../ColoredBoxShadow/ColoredBoxShadow";
import { TitleTypography } from "../../elements/textElement/fonts/Fonts";
import { NormalFlex } from "../../globalStyles";
import { HeaderCompInterfaceInterface } from "../../Interface/HeaderCompInterface/HeaderCompInterface";
import { useTranslation } from "react-i18next";

const PropertyHeader = ({ data, title }: HeaderCompInterfaceInterface) => {
  const { t } = useTranslation();
  return (
    <ShadowBox>
      <TitleTypography text={t(title)} />
      <NormalFlex>
        {data.map((item, index) => (
          <ColoredBoxShadow
            key={index}
            title={t(item.title)}
            value={t(item.value)}
          />
        ))}
      </NormalFlex>
    </ShadowBox>
  );
};

export default PropertyHeader;
