import React from "react";
import styled from "styled-components";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

const CustomToolTipMainContainer = styled.div<{ background: string }>`
  width: 8rem;
  height: 2.5rem;
  display: flex;
  gap: 0.62rem;
  padding: 0.82rem 0.62rem;
  align-items: center;

  /* svg {
    width: 1.3rem !important;
    height: 1.3rem !important;
    background: yellow !important;
  } */
`;

const CustomToolTipLabelColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

interface CustomToolTipInterface {
  svgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  series: any;
  background: string;
}

const CustomToolTip = ({
  svgIcon: SvgIcon, // Renaming to use as component
  label,
  series,
  background,
}: CustomToolTipInterface) => {
  return (
    <CustomToolTipMainContainer background={background}>
      <SvgIcon /> {/* ✅ Correct usage of a React component */}
      <CustomToolTipLabelColumn>
        <MediumTypography
          text={series}
          fontWeight="700"
          lineHeight="90%"
          whiteSpace="nowrap"
        />
        <MediumTypography
          text={label}
          fontWeight="400"
          lineHeight="90%"
          whiteSpace="nowrap"
        />
      </CustomToolTipLabelColumn>
    </CustomToolTipMainContainer>
  );
};

export default CustomToolTip;
