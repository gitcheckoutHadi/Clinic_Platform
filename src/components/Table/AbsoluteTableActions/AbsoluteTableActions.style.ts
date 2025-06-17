import styled from "styled-components";

export const AbsoluteTableActionsContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 3rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.9375rem;
  border-radius: 0.9375rem;
  background: var(--Ektolife-Web-App-white, #fff);
  box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25);
  cursor: pointer;
  border-radius: 0.625rem;
  background: var(--dark-blue, #231d46);
  border-radius: 0.625rem;
  &:dir(ltr) {
    right: 2rem;
  }
  &:dir(rtl) {
    left: 2rem;
  }
`;
interface StyleInterface {
  stroke?: boolean;
  fill?: boolean;
  hoverStroke?: boolean;
  hoverFill?: boolean;
}
export const AbsoluteTableActionsCells = styled.div<StyleInterface>`
  display: flex;
  gap: 0.62rem;
  padding: 0.62rem 1.25rem;
  width: fit-content;
  border-radius: 6.25rem;
  color: #fff;
  cursor: pointer;
  align-items: center;

  &:dir(ltr) {
    min-width: 10rem;
  }
  &:dir(rtl) {
    min-width: 11rem;
  }

  .icon-style {
    fill: ${(props) => (props.fill ? "#FFF" : "#231D46")};
    stroke: ${(props) => (props.stroke ? "#FFF" : "#231D46")};
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
  }

  &:hover {
    background: #fff;
    color: #231d46 !important;

    .icon-style {
      fill: ${(props) =>
        props.hoverFill ? "#231D46" : props.fill ? "#231D46" : "#FFF"};
      stroke: ${(props) =>
        props.hoverStroke ? "#231D46" : props.stroke ? "#231D46" : "#FFF"};
      animation: scale-bold 0.6s ease-in-out infinite; /* Add animation here */
    }
  }

  /* &:first-child {
    border-radius: 0.9375rem 0.9375rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.9375rem 0.9375rem;
  } */

  /* Keyframes for the scale and bold animation */
  @keyframes scale-bold {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2); /* Bold scaling effect */
    }
    100% {
      transform: scale(1);
    }
  }
`;
