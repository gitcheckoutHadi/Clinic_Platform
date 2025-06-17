import styled, { keyframes } from "styled-components";

// Define keyframes for hover animations
const hoverAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(5px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyleHeaderNavigator = styled.div`
  display: flex;
  gap: 0.62rem;
  cursor: pointer;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease, transform 0.3s ease;
  margin-left: 0.7rem;
  z-index: 14000 !important;
  &:hover {
    color: #231d46;
    transform: scale(1.1); /* Slight zoom effect */
  }

  &:hover .icon-style {
    animation: ${hoverAnimation} 0.5s ease-in-out;

    stroke: #231d46;
  }

  .icon-style {
    stroke: #231d46;

    width: 1.75rem;
    height: 1.75rem;
    transition: fill 0.3s ease, stroke 0.3s ease;
  }
`;
