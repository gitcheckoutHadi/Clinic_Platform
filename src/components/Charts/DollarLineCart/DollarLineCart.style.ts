import styled, { keyframes } from "styled-components";

// Keyframes to animate the width of the opacity line
const fillLineAnimation = (width: string) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${width};
  }
`;

export const DollarLineCartMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const DollarLineCartFullLine = styled.div<{ background: string }>`
  display: flex;
  width: 100%;
  height: 1.25rem;
  border-radius: 1.875rem;
  background: ${(props) => props.background || "#29acae"};
  padding-right: 0.625rem;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const DollarLineCartOpacityLine = styled.div<{ width: string }>`
  position: absolute;
  left: 0;
  top: -0.25rem;
  display: flex;
  width: 0%; /* Start from 0% width */
  height: 1.75rem;
  padding: 0.25rem 0.625rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 1px solid #fff;
  background: linear-gradient(
    220deg,
    rgba(255, 255, 255, 0.3) 9.49%,
    rgba(217, 217, 217, 0.3) 85.28%
  );
  backdrop-filter: blur(3.9378323554992676px);

  animation: ${(props) => fillLineAnimation(props.width)} 2s ease-out forwards;
`;

export const TextShow = styled.div`
  min-width: 5rem;
  height: 100%;
  /* background: blue; */
`;
