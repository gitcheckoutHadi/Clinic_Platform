import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "../../theme";

interface ScrollLeftAndRightLineInterface {
  justifyContent?: string;
  paddingRight?: string;
  BigContainerWidth?: string;
  MarginTop?: string;
  LineWidth?: string;
  AlignSelf?: string;
  SmallAdditionalValue?: any;
  SmallAdditionalWidth?: string;
  TabletAdditionalValue?: any;
  TabletAdditionalWidth?: string;
  position?: string;
}

export const ScrollLeftAndRightContainer = styled.div<ScrollLeftAndRightLineInterface>`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 1.5rem;
  width: ${(props) => props.BigContainerWidth || "100%"};
  /* @media (max-width: ${breakpoints.tablets}) { } */
  @media (max-width: calc(${breakpoints.small} + ${({ SmallAdditionalValue }) =>
      SmallAdditionalValue || "105px"})) {
    width: ${(props) => props.SmallAdditionalWidth || props.BigContainerWidth};
  }

  @media (max-width: calc(${breakpoints.tablets} + ${({
      TabletAdditionalValue,
    }) => TabletAdditionalValue || "105px"})) {
    width: ${(props) =>
      props.TabletAdditionalWidth || props.SmallAdditionalWidth};
  }
`;
export const ScrollLeftAndRightBody = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-ms-overflow-style {
    display: none;
  }
`;

export const ScrollLeftAndRightLine = styled.div<ScrollLeftAndRightLineInterface>`
  display: flex;
  /* width: 3rem; */
  justify-content: ${(props) => props.justifyContent || "left"};
  /* padding-right: ${(props) => props.paddingRight || "10rem"}; */
  margin-top: ${(props) => props.MarginTop || "0.5rem"};
  /* background-color: blue; */
  /* width: ${(props) => props.LineWidth || "100%"}; */
  align-self: ${(props) => props.AlignSelf || "start"};
  position: ${(props) => props.position || "absolute"};
  z-index: 2;
  bottom: 0.5rem;
  /* background: green; */
  position: absolute;

  /* padding-left: 1rem; */
  /* border-radius: 1.5625rem; */
  /* background: var(--Background, #384450); */

  &:dir(ltr) {
    right: 1.25rem;
  }
  &:dir(rtl) {
    left: 1.25rem;
  }
`;

export const SRLDivArrowsWrapper = styled.div`
  width: 2.625rem;
  height: 1.25rem;
  border-radius: 1.5625rem;

  background: #231d46;
  /* background: yellow; */
  /* position: absolute; */
  bottom: 1.25rem;
  /* left: 38.255rem; */

  left: 48%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  & > :first-child {
    cursor: pointer;
    &:hover {
      transition: color 0.2s ease-in-out;
      color: #5dd3b3;
    }
  }
  & > :last-child {
    cursor: pointer;
    &:hover {
      transition: color 0.2s ease-in-out;
      color: #5dd3b3;
    }
  }
  svg {
    /* color: red !important; */
    stroke: #fff !important;
  }
`;
