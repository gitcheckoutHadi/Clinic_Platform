import React, { useState } from "react";
import {
  ChevronContainer,
  SlicerContainer,
  SliderAbsContainer,
  SliderAbsContainerCells,
} from "./Slicer.style";
import { MediumTypography } from "../textElement/fonts/Fonts";
import { SvgChevronDown } from "../Icons";
import { DefaultSlicerData } from "./SlicerDummyData";
import useClickOutside from "../../hooks/useClickOutside";
import { toArabicDigits } from "../../utils/translates";
export interface SlicerInterface {
  SlicerValue: number;
  setSlicerValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface SlicerInterfacePlusShowAbs {
  SlicerValue: number;
  setSlicerValue: React.Dispatch<React.SetStateAction<number>>;
  ShowAbs: boolean;
  setShowAbs: React.Dispatch<React.SetStateAction<boolean>>;
}

const Slicer = ({
  SlicerValue,
  setSlicerValue,
  ShowAbs,
  setShowAbs,
}: SlicerInterfacePlusShowAbs) => {
  const handleSliderChange = (newValue: number) => {
    setSlicerValue(newValue);
    setShowAbs(false);
  };
  return (
    <SlicerContainer>
      <MediumTypography
        text={toArabicDigits(SlicerValue.toString())}
        fontWeight="700"
        lineHeight="1.25rem"
        letter_spacing="0.01563rem"
        cursor="pointer"
        color="inherit"
      />
      {/* <ChevronContainer isrotateddetected={ShowAbs}>
        <SvgChevronDown />
      </ChevronContainer> */}
      {ShowAbs && (
        <SliderAbsContainer isVisible={ShowAbs}>
          {DefaultSlicerData.numbers.map((item) => (
            <SliderAbsContainerCells
              key={item}
              onClick={() => handleSliderChange(item)}
            >
              <MediumTypography
                text={toArabicDigits(item.toString())}
                color="inherit"
              />
            </SliderAbsContainerCells>
          ))}
        </SliderAbsContainer>
      )}
    </SlicerContainer>
  );
};

export default Slicer;
