import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

interface CircularProgressProps {
  percentage: number;
  day: number;
  TitleText?: string;
}

const MainCircularContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  width: fit-content;
`;

const TitleCircularContainer = styled.div`
  display: flex;
  width: fit-content;
  align-self: center;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: rgba(161, 95, 228, 0.2);
`;

const CircularContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GradientBackground = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 135px;
  background: #a15fe4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleView = styled.div`
  background-color: #f4f3f2;
  width: 180px;
  height: 180px;
  border-radius: 100px;
  fill: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 31.04%,
    rgba(217, 217, 217, 0.3) 60.24%
  );
  stroke-width: 0.778px;
  fill: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 31.04%,
    rgba(217, 217, 217, 0.3) 60.24%
  );

  stroke-width: 0.778px;
  stroke: #fff;
  backdrop-filter: blur(6.010244846343994px);
`;

const SVGContainer = styled.svg`
  position: absolute;
  width: 300px;
  height: 300px;
  transform: rotate(-90deg);
`;

const ProgressCircle = styled.circle<{
  circumference: number;
  strokeDashoffset: number;
}>`
  stroke: rgba(255, 255, 255, 0.7);
  stroke-width: 60;
  border-radius: 50% !important;
  /* fill: greenyellow; */
  fill: transparent;
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.strokeDashoffset};
  stroke-linecap: butt;
  filter: url(#blurFilter);
  transition: stroke-dashoffset 0.6s ease-in-out;
`;

const PercentageText = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: white;
  transition: left 0.6s ease-in-out, top 0.6s ease-in-out;
`;

const TextContainer = styled.div`
  position: absolute;
  text-align: center;
  font-size: 16px;
  color: black;
`;

const DayText = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  color: #231d46;
  font-weight: 700;
  line-height: 120%;
  /* margin-top: -20px; */
`;

const BlurredDonutChart: React.FC<CircularProgressProps> = ({
  percentage,
  day,
  TitleText = "Egg Freezing",
}) => {
  const radius = 112;
  const strokeWidth = 70;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  const [angle, setAngle] = useState(
    (-102 + percentage * 3.6) * (Math.PI / 180)
    //  102 is the key
  );
  const [x, setX] = useState(150 + radius * Math.cos(angle));
  const [y, setY] = useState(150 + radius * Math.sin(angle));

  useEffect(() => {
    // Update strokeDashoffset for ProgressCircle animation
    setStrokeDashoffset(circumference * (1 - percentage / 100));

    // Update angle, x, and y for PercentageText animation
    const newAngle = (-102 + percentage * 3.6) * (Math.PI / 180);
    setAngle(newAngle);
    setX(150 + radius * Math.cos(newAngle));
    setY(150 + radius * Math.sin(newAngle));
  }, [percentage, circumference, radius]);

  return (
    <MainCircularContainer>
      <TitleCircularContainer>
        <MediumTypography text={TitleText} fontWeight="700" />
      </TitleCircularContainer>
      <CircularContainer>
        {/* Gradient Background */}
        <GradientBackground>
          <MiddleView />
        </GradientBackground>

        {/* Blurred Ring Progress */}
        <SVGContainer width="300" height="300" viewBox="0 0 300 300">
          <defs>
            <filter
              id="blurFilter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
            </filter>
          </defs>
          <ProgressCircle
            cx="150"
            cy="150"
            r={radius}
            circumference={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </SVGContainer>

        {/* Percentage Text Positioned at the End of the Ring */}
        <PercentageText x={x} y={y}>
          {percentage}%
        </PercentageText>

        {/* Text Content */}
        <TextContainer>
          <div>Day in cycle</div>
          <DayText>{day}</DayText>
        </TextContainer>
      </CircularContainer>
    </MainCircularContainer>
  );
};

export default BlurredDonutChart;
