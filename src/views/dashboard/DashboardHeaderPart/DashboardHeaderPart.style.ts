import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../../theme";

const glowAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const DashboardHeaderPartMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  /* background: blue; */
  @media (max-width: ${breakpoints.tablets}) {
    flex-wrap: wrap;
    gap: 0.2rem;
  }
`;

export const DashboardHeaderPartInfoCon = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  /* align-self: stretch; */
  /* background: green; */
  @media (max-width: ${breakpoints.tablets}) {
    width: 100%;
    justify-content: flex-end;
    /* background: yellow; */
  }
`;

export const BTNDashboardExport = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.62rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
