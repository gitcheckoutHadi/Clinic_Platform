import styled from "styled-components";
import { breakpoints } from "../../../theme";

export const TitleAndSearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.25rem;
  align-items: center;
  /* background: red; */
  @media (max-width: ${breakpoints.tablets}) {
    flex-wrap: wrap;
  }
`;

export const TitleAndSearchAndRefresh = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  /* background: blue; */
  @media (max-width: ${breakpoints.tablets}) {
    margin-top: 0.5rem;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const TitleAndSearchRefreshContainer = styled.div`
  display: flex;
  width: 2.5rem;
  height: 3rem;
  padding: 0rem 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;

  fill: #cccccc;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  z-index: 0;
  &:hover {
    transform: scale(1.1); /* Slight scale effect */
    /* box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25); */
    .IconTable {
      fill: #231d46;
    }
    .IconStrokeTable {
      stroke: #231d46;
    }
  }

  &:active {
    transform: scale(1); /* Reset scaling for active state */
    box-shadow: 0px 4px 10px rgba(80, 80, 80, 0.4); /* Active shadow */
  }
  .IconTable {
    fill: #cccccc;
  }
  .IconStrokeTable {
    stroke: #cccccc;
  }
`;

export const TitleAndSearchFilterContainer = styled.div`
  display: flex;
  width: 2.5rem;
  height: 3rem;
  padding: 0rem 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  /* background: var(--Ektolife-Web-App-white, #fff); */
  position: relative;
  fill: #cccccc;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  z-index: 222;
  &:hover {
    transform: scale(1.1); /* Slight scale effect */
    /* box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25); */
    .IconTable {
      fill: #231d46;
    }
    .IconStrokeTable {
      stroke: #231d46;
    }
  }

  &:active {
    transform: scale(1); /* Reset scaling for active state */
    box-shadow: 0px 4px 10px rgba(80, 80, 80, 0.4); /* Active shadow */
  }
  .IconTable {
    fill: #cccccc;
  }
  .IconStrokeTable {
    stroke: #cccccc;
  }
`;
