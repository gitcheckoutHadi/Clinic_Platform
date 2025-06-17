import styled from "styled-components";

export interface CircularProgressProps {
  progress: number; // Progress percentage (0-100)
  size?: number; // Size of the chart
  strokeWidth?: number; // Thickness of the progress stroke
  color?: string; // Color of the progress stroke
  trackColor?: string; // Color of the background track
}

export const CircularProgressContainer = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
`;

export const SvgWrapper = styled.svg`
  transform: rotate(-235deg);
  position: relative;
`;

export const CircleTrack = styled.circle<{
  strokeWidth: number;
  trackColor: string;
}>`
  fill: none;
  stroke: ${(props) => props.trackColor};
  /* stroke: rebeccapurple; */
  stroke-linecap: round;
  /* stroke: red; */
  stroke-width: ${(props) => props.strokeWidth};

  stroke-dasharray: 470;
`;

export const ProgressCircle = styled.circle<{
  strokeWidth: number;
  color: string;
  progress: number;
}>`
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dashoffset: ${(props) =>
    470 - (props.progress / 100) * 470}; // Adjusted offset based on progress
  transition: stroke-dashoffset 0.5s ease-in-out;
  stroke-linecap: round;
  stroke-dasharray: 470;
`;

export const ProgressText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

export const PieSvgContainer = styled.div`
  position: absolute;
  display: flex;
  top: 1.5rem;
`;

export const NullContainer = styled.div`
  position: absolute;
  display: flex;
  top: 2.5rem;
`;
