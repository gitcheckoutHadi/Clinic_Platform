import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../theme";
const wiggle = keyframes`
  0%, 100% {
    transform: rotate(0deg);
    transform-origin: left center;
  }
  50% {
    transform: rotate(5deg);
    transform-origin: left center;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;
export const MainLoginContainer = styled.div`
  display: flex;
  background: transparent;
  position: relative;
  overflow: hidden;
  background: #f7f7fc;
  /* align-items: flex-start; */
`;

export const QuarterLoginContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;

  &:nth-child(1) {
    flex: 1;
    flex-direction: column;
    z-index: 0;
    padding: 30vh 4.4vw;
    gap: 7.25rem;
    background: #6a0dad;
    .styled-SVG {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 21.5rem;
      margin-left: -1rem;
    }
    .styled-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .styled-text span {
      color: #fff;
      font-family: "Rossanova";
      font-size: 5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 5.75rem; /* 125% */
      font-family: "Rossanova";
    }
    @media (max-width: calc(${breakpoints.small} + 80px)) {
      display: none !important;
    }
  }
  &:nth-child(2) {
    flex: 2;
    z-index: 10;
    position: relative;
    align-items: center;
  }
`;
export const CupLoginLogo = styled.div`
  position: absolute;
  /* background: gray; */
`;

export const AbsoluteLoginLogo = styled.div`
  position: absolute;
  right: -2rem;
  bottom: -2rem;
  .logoImgS {
    height: 150px;
    /* max-height: 20px; */
    width: auto;
    object-fit: contain;
    display: block;
  }
  svg {
    animation: ${float} 2s infinite ease-in-out;
  }
  svg .tail {
    animation: ${wiggle} 1s infinite ease-in-out;
  }
`;
export const AbsoluteLoginEktoLogo = styled.div`
  display: none;
  @media (max-width: calc(${breakpoints.small} + 80px)) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1.2rem;
  }
`;

export const ABSLine = styled.div`
  background: #6a0dad;
  width: 1.1rem;
  height: 100vh;
  top: 0rem;
  right: -0.05rem;
  z-index: 3;
  position: absolute;
  @media (min-width: 1700px) {
    right: -0.1rem;
  }
  @media (min-width: ${breakpoints.TvScreen}) {
    right: -0.1rem;
  }
`;
export const ABSWidthLine = styled.div`
  background: #6a0dad;
  display: flex;
  flex: 1;
  width: 30vw;
  height: 1.1rem;
  bottom: -1rem;
  right: 0%;
  z-index: 3;
  position: absolute;
`;
export const FormContainer = styled.div`
  margin-left: 9rem;
  margin-top: -40%;
  display: flex;
  min-width: 5rem;
  position: relative;

  @media (min-width: ${breakpoints.TvScreen}) {
    margin-top: -30%;
  }

  @media (max-width: ${breakpoints.large}) {
    margin-top: -46%;
  }
  @media (max-width: calc(${breakpoints.medium} + 50px)) {
    margin-top: -33.5%;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-top: -40%;
  }
  @media (max-width: ${breakpoints.small}) {
    margin-top: -40%;
  }
  @media (max-width: ${breakpoints.tablets}) {
    margin-top: -50%;
  }
`;
