import React, { useEffect, useState } from "react";
import {
  CircleTrack,
  CircularProgressContainer,
  CircularProgressProps,
  PieSvgContainer,
  ProgressCircle,
  ProgressText,
  SvgWrapper,
} from "./PieChart.style";
import { SvgPie } from "../../../elements/Icons";
import { Typography } from "../../../elements/textElement/fonts/Fonts";

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 200,
  strokeWidth = 12,
  color = "#8C8CFF",
  trackColor = "#F1F1F1",
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the circle
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
  }, []);
  return (
    <CircularProgressContainer size={size}>
      <PieSvgContainer>
        <SvgPie />
      </PieSvgContainer>

      <SvgWrapper width={size} height={size}>
        <CircleTrack
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
        />
        <ProgressCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          color={color}
          progress={ProgressTime}
        />
      </SvgWrapper>
      <ProgressText>
        <div>
          <Typography
            fontWeight="400"
            fontSize="1.375"
            lineHeight="1.75rem"
            text={`${progress}%`}
          />
        </div>
        <Typography
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          letter_spacing="0.01563rem"
          text={"Complete"}
        />
      </ProgressText>
    </CircularProgressContainer>
  );
};

export default CircularProgress;
