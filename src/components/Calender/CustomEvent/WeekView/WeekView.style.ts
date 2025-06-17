import styled from "styled-components";
import { breakpoints } from "../../../../theme";

export const WeekViewMainContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  display: flex;
  width: 104.5%;
  padding: 0.52rem 0 0.62rem 0.62rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;
  background: #fff !important;
  z-index: 1000;
  overflow: hidden;
  @media (min-width: ${breakpoints.BigMonitor}) {
    width: 102.5%;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    width: 101.5%;
  }

  /* @media (min-width: ${breakpoints.TvScreen}) {
    width: 100%;
  } */
`;

export const WeekViewMainRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 0;
  align-items: center;
`;

export const WeekViewMainCell = styled.div`
  display: flex;
  gap: 0.31rem;
  align-items: center;
  flex-wrap: wrap;
  /* background: green; */
  max-width: 8rem;
  /* @media (max-width: calc(${breakpoints.Laptop} - 50px)) {
    flex-direction: column;
    align-items: flex-start;

  } */
`;

export const WeekInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  /* align-items: center;
  flex-wrap: wrap; */
  /* background: green; */
  align-items: flex-start;
`;

export const DoctorCell = styled.div<{ bgcolor: string }>`
  display: flex;
  width: 97%;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 6.25rem;
  /* background: rgba(41, 172, 174, 0.2); */
  background: ${(props) => props.bgcolor};
`;
