import React from "react";

import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { ShadowBoxContainer } from "./ShadowBox.style";

const ShadowBox = ({
  children,
  gap,
  flexDirection,
  padding,
}: {
  children: React.ReactNode;
  gap?: string;
  padding?: string;
  flexDirection?: string;
}) => {
  const { mainBackgroundColor, mainBoxShadow } =
    useRecoilValue(MainColorSelector);

  return (
    <ShadowBoxContainer
      background={mainBackgroundColor}
      boxShadow={mainBoxShadow}
      gap={gap}
      flexdirection={flexDirection}
      padding={padding}
    >
      {children}
    </ShadowBoxContainer>
  );
};

export default ShadowBox;
