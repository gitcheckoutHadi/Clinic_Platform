import styled from "styled-components";
import { breakpoints } from "../../../theme";

export const PieChartCardRowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const PieChartCardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;

  align-items: center;

  &:dir(ltr) {
    border-right: 2px solid #50535530;
  }
  &:dir(rtl) {
    border-left: 2px solid #50535530;
  }
  &:last-child {
    border: none !important;
  }
  @media (max-width: ${breakpoints.tablets}) {
    border: none !important;
  }
`;

export const PieChartCarTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
  width: 100%;
  align-items: center;
  /* text-align: left !important; */
`;
export const PieChartCarTitle = styled.div`
  display: flex;
  width: 100%;

  text-align: left !important;

  &:dir(ltr) {
    padding-left: 2.5rem;
  }
  &:dir(rtl) {
    padding-right: 2.5rem;
  }
  @media (max-width: ${breakpoints.tablets}) {
    text-align: center !important;
    justify-content: center;
    padding-right: 6.5vw;
  }
`;
export const PieChartCarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  @media (max-width: ${breakpoints.tablets}) {
    align-items: center;
    padding-right: 6.5vw;
    gap: 1.15rem;
    margin-bottom: 1.5rem;
  }
`;

export const PieChartCarDates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:dir(ltr) {
    padding-left: 2.5rem;
  }
  &:dir(rtl) {
    padding-right: 2.5rem;
  }
  @media (max-width: ${breakpoints.tablets}) {
    align-items: center;
  }
`;
