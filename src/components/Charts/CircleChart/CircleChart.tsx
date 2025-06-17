import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import { toArabicDigits } from "../../../utils/translates";

interface SemiCircularProgressProps {
  progress: number; // Progress percentage (0-100)
  size?: number; // Size of the chart (diameter of the full circle)
  strokeWidth?: number; // Thickness of the progress stroke
  color?: string; // Color of the progress stroke
  trackColor?: string; // Color of the background track
}

const SemiCircularProgressContainerSmall = styled.div<{ size: number }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size / 2}px;
  position: relative;
`;

const SvgWrapperSmall = styled.svg`
  transform: rotate(-270deg);
`;

const CircleTrackSmall = styled.circle<{
  strokeWidth: number;
  trackColor: string;
}>`
  fill: none;
  stroke: ${(props) => props.trackColor};
  stroke-width: ${(props) => props.strokeWidth};
`;

const ProgressCircleSmall = styled.circle<{
  strokeWidth: number;
  color: string;
  progress: number;
}>`
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: 203.5; /* Circumference of the semi-circle (PI * r) */
  stroke-dashoffset: ${(props) => 203.5 - (203.5 * props.progress) / 100};
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

const ProgressTextSmall = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

const CirclePieChart: React.FC<SemiCircularProgressProps> = ({
  progress,
  size = 120,
  strokeWidth = 10,
  color = "#8C8CFF",
  trackColor = "#F1F1F1",
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the semi-circle
  const [ProgressTime, setProgressTime] = useState(0);

  useEffect(() => {
    const increment = progress / 100; // Adjust increment to match your desired speed
    const interval = setInterval(() => {
      setProgressTime((prev) => {
        if (prev < progress) {
          return Math.min(prev + increment, progress); // Ensure it doesn't exceed progress
        } else {
          clearInterval(interval);
          return progress;
        }
      });
    }); // Adjust interval time for smoothness

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, [progress]);
  return (
    <SemiCircularProgressContainerSmall size={size}>
      <SvgWrapperSmall width={size} height={size}>
        <CircleTrackSmall
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
        />
        <ProgressCircleSmall
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          color={color}
          progress={ProgressTime}
        />
      </SvgWrapperSmall>
      <ProgressTextSmall>
        <div>
          <Typography
            fontWeight="400"
            fontSize="1"
            lineHeight="1.5rem"
            letter_spacing="0.03125rem"
            text={`${toArabicDigits(progress.toString())}%`}
          />
        </div>
      </ProgressTextSmall>
    </SemiCircularProgressContainerSmall>
  );
};

export default CirclePieChart;
