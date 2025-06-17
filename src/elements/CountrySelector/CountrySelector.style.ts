import styled from "styled-components";
import { breakpoints } from "../../theme";
interface Styles {
  errorValue?: string;
  disabled?: boolean;
}
export const MainCountrySelectorContainer = styled.div<Styles>`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  min-width: 30rem;
  width: 100%; // Ensures the container spans the full width

  gap: 0.25rem;
  > div {
    width: 100%;
    height: 100%;
  }
  .css-kygujs-control {
    background: rgba(171, 174, 229, 0.1);
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.1rem 0 0.1rem 0.5rem;
    border: 1px solid
      ${(props) => (props.errorValue ? "#FF6B6B" : "transparent")};
  }
  .css-19bb58m {
    /* background: black; */

    font-size: 0.875rem !important;
    font-weight: 700 !important;
  }

  .css-1sz3fxr-control:focus {
    border-color: ${(props) =>
      props.disabled ? "#ccc" : "#231d46"} !important;
    box-shadow: 0 0 4px #231d4670;
  }
  @media (min-width: ${breakpoints.extraLarge}) {
    min-width: 50rem;
  }
  @media (min-width: ${breakpoints.BigMonitor}) {
    min-width: 32rem;
    /* padding: 3rem; */
  }

  @media (max-width: ${breakpoints.medium}) {
    min-width: 18rem;
  }
`;

export const TitleCountrySelector = styled.div`
  position: absolute;
  background: white;
  width: fit-content !important;
  height: fit-content !important;
  z-index: 3;
  padding: 0;
  top: -0.5rem;

  &:dir(ltr) {
    left: 0.94rem;
  }
  &:dir(rtl) {
    right: 0.94rem;
  }
`;
