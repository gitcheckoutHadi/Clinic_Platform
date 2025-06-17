import styled from "styled-components";
import { StyleTimePickerProps, TimePickerProps } from "./TimePickerInterface";
import { StyleThemeInterface } from "../../../Interface/StyleThemeInterface";
import { breakpoints } from "../../../theme";

export const Input = styled.input<StyleTimePickerProps>`
  width: ${(props) => (props.width ? props.width : "24.75rem")};
  height: ${(props) => props.height || "2.5rem"};
  /* padding: ${(props) => props.padding || "0.94rem 1.25rem"}; */
  margin: ${(props) => props.margin};

  /* background-color: aqua; */
  color: ${(props) => props.color};
  opacity: 0;
  /* margin-top: -2rem !important; */

  cursor: pointer;
  height: 1rem;
  &:focus {
    outline: none;
    caret-color: white;
  }
  @media (max-width: calc(${breakpoints.tablets}+53px)) {
    width: 5rem !important;
  }
`;
export const Dropdown = styled.div<StyleThemeInterface>`
  display: flex;
  position: absolute;
  z-index: 99999;
  width: 100%;
  /* flex: 1; */
  top: 3rem;
  background: ${(props) => props.bgcolor};
`;

export const TimePickerContainer = styled.div<StyleThemeInterface>`
  width: 100%;
  height: ${(props) => props.height || "fit-content"};
  border-radius: 0.3125rem;
  background: ${(props) => props.bgcolor};
  /* margin-top: -0.1rem; */
  background: #e4e4e4;
  padding: 0.94rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.boxshadow};
  gap: 1.88rem;
  /* padding:2rem 1.25rem !important; */
  margin-left: -0.5rem;
`;

export const TimePickerSet = styled.div<StyleThemeInterface>`
  /* width: 24.75rem; */
  height: 1.875rem;
  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  background: #5dd3b3;
  box-shadow: ${(props) => props.boxshadow};
  /* background: aqua !important; */
  text-align: center;
  cursor: pointer;
`;

export const InputCont = styled.div<StyleThemeInterface>`
  position: relative;
  /* background: yellow; */
  /* border: 1px solid ${(props) => props.bordercolor} !important; */

  border: 1px solid ${(props) => (props.errorValue ? "#FF6B6B" : "transparent")};
  /* border-radius: 0.3125rem; */
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.5rem;
  border-radius: 0.3125rem;
  gap: 0.625rem;
  flex: 1;
  height: 3rem;
  border-radius: 0.9375rem;
  background: rgba(171, 174, 229, 0.1);
  /* background: red !important; */
`;

export const InputContSvg = styled.div`
  /* position: absolute; */
  /* top: 50%;
right: 0.94rem;
transform: translateY(-50%); */
`;
export const DisplayedContainer = styled.div<StyleThemeInterface>`
  /* position: absolute; */
  width: 100%;

  background: ${(props) => props.bgcolor};
  /* background: GREEN; */
  /* padding: 0 0.94rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => props.boxshadow};
  /* margin-top: 0.35rem; */
  /* margin-left: 0.42rem; */
  padding-left: 0.2rem;
  font-size: 0.875rem;
  /* margin-top: -0.13rem; */
  z-index: 1;
  color: ${(props) => props.color};

  cursor: pointer;

  /* border-radius: 0.625rem; */
  /* color: #FFF; */

  font-family: "Primary Font-Light";
  font-size: 0.875rem;
  /* margin-bottom: -1.62rem; */

  /* gap: 1.88rem; */
  /* padding:2rem 1.25rem !important; */
  height: 100%;
  /* background: yellow !important; */
`;

export const NumInput = styled.input<StyleThemeInterface>`
  /* margin: 1em; */
  color: ${(props) => props.color};

  /* display: flex; */
  width: 2.25rem;
  height: 1.5625rem;
  /* padding: 1.31rem 0.62rem; */
  border: none;
  border-radius: 0.3125rem;
  background-color: ${(props) => props.bgcolor};
  /* justify-content: space-between;
  align-items: center;
  flex-direction: column; */
  transition: 0.3s;
  /* background: pink !important; */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    color: red !important;
  }

  font-size: 0.75rem;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const DivGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 0.31rem;

  /* background: purple !important; */
`;

export const TimeCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.88rem;

  /* background: green !important; */
`;

export const PrevHourMinute = styled.div<StyleThemeInterface>`
  font-size: 0.625rem;
  color: #364350;
  /* color: ${(props) => (props.theme === "light" ? "#364350" : "#fff")}; */
  opacity: 0.7;
  cursor: pointer;
  user-select: none;

  /* background: gray !important; */
`;

export const TimeTextContainer = styled.div`
  display: flex;
  width: fit-content;
  /* padding: 0.94rem 1.25rem; */
  background: white !important;
  padding: 0 0.2rem;
  /* margin-top: -1rem; */
  margin-bottom: -0.3rem;
`;
