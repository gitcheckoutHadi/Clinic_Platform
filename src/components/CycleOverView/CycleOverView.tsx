import React, { useState } from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import {
  NormalFlex,
  PointerContainer,
  SpaceBetweenFlex,
} from "../../globalStyles";
import {
  MediumTypography,
  TitleTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import {
  BoxCycleOverProfile,
  BoxCycleOverViewShadow,
  CycleOverFreezingCircle,
  CycleOverFreezingContainer,
  CycleOverFreezingData,
  CycleOverFreezingDetails,
  CycleOverFreezingParentDetails,
  CycleOverPaginatedBox,
  CycleOverPaginatedContainer,
  MainCycleOverContainer,
} from "./CycleOverView.style";
import { CycleOverviewInterface } from "./CycleOverViewData";
import CircularImage from "../../elements/circularImage/CircularImage";
import { SvgArrowDownIcon, SvgNavigatorArrow } from "../../elements/Icons";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import MultiSeriesRadialBarChart from "../Charts/MultiSeriesRadialBarChart/MultiSeriesRadialBarChart";
import { TransformDirection } from "../../utils/Direction";
import { useTranslation } from "react-i18next";
import { toArabicDigits } from "../../utils/translates";

interface CycleOverViewInterface {
  data: CycleOverviewInterface[];
}

const CycleOverView = ({ data }: CycleOverViewInterface) => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const { t } = useTranslation();
  const [Slicer, setSlicer] = useState<number>(0);
  // const [SlicerPlus, setSlicerPlus] = useState<number>(2);

  // Slice the data

  // Navigation Handlers
  const handlePrevious = () => {
    if (Slicer > 0) {
      setSlicer((prev) => prev - 1);
      // setSlicerPlus((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (Slicer + 1 < data.length) {
      setSlicer((prev) => prev + 1);
    }
  };

  const slicedData = data.slice(Slicer, Slicer + 1);
  const colorPalette = ["#a331ed", "#13346f", "#56d21d"];

  const addColorsToEggFreezing = (eggFreezing: any[]) =>
    eggFreezing.map((item, index) => ({
      ...item,
      color: colorPalette[index % colorPalette.length], // Cycle through colors
    }));

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        minWidth: "30rem",
      }}
    >
      <ShadowBox>
        <SpaceBetweenFlex>
          <TitleTypography text={t("dashboard.Cycle Overview")} />
          <PointerContainer>
            <MediumTypography
              text={t("general.View More")}
              lineHeight="1.125rem"
              fontWeight="500"
              color={secondaryColor}
              cursor="pointer"
            />
          </PointerContainer>
        </SpaceBetweenFlex>

        {slicedData.length > 0 ? (
          slicedData.map((item, index) => (
            <MainCycleOverContainer key={index}>
              <BoxCycleOverViewShadow>
                <SpaceBetweenFlex>
                  <BoxCycleOverProfile>
                    <CircularImage size="2.1875rem" src={item.PatientProfile} />
                    <MediumTypography text={item.PatientName} />
                  </BoxCycleOverProfile>
                  <CycleOverPaginatedContainer>
                    <CycleOverPaginatedBox
                      disable={Slicer === 0}
                      dir={TransformDirection()}
                      onClick={handlePrevious}
                    >
                      <SvgNavigatorArrow className="icon-stylePev" />
                    </CycleOverPaginatedBox>
                    <CycleOverPaginatedBox
                      disable={Slicer + 1 === data.length}
                      dir={TransformDirection()}
                      onClick={handleNext}
                    >
                      <SvgNavigatorArrow className="icon-styleNext" />
                    </CycleOverPaginatedBox>
                  </CycleOverPaginatedContainer>
                </SpaceBetweenFlex>
              </BoxCycleOverViewShadow>

              <NormalFlex>
                <CycleOverFreezingParentDetails>
                  <TitleTypography text={t("dashboard.Egg Freezing")} />
                  {item.EggFreezing &&
                    addColorsToEggFreezing(item.EggFreezing).map(
                      (freezingItem, freezingIndex) => (
                        <CycleOverFreezingContainer key={freezingIndex}>
                          <CycleOverFreezingDetails>
                            <SpaceBetweenFlex>
                              <CycleOverFreezingData>
                                <CycleOverFreezingCircle
                                  background={freezingItem.color || "#fff"}
                                />
                                <Typography
                                  text={toArabicDigits(
                                    freezingItem.value.toString()
                                  )}
                                />{" "}
                              </CycleOverFreezingData>
                              <Typography text={t(freezingItem.label)} />{" "}
                            </SpaceBetweenFlex>

                            {/* Assuming `value` is another property */}
                          </CycleOverFreezingDetails>
                        </CycleOverFreezingContainer>
                      )
                    )}
                </CycleOverFreezingParentDetails>
                <CycleOverFreezingParentDetails>
                  <MultiSeriesRadialBarChart
                    data={addColorsToEggFreezing(item.EggFreezing)}
                  />
                </CycleOverFreezingParentDetails>
              </NormalFlex>
            </MainCycleOverContainer>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ShadowBox>
    </div>
  );
};

export default CycleOverView;
