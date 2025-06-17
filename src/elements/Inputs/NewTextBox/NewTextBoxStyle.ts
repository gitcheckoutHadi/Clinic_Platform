import styled from "styled-components";
import { breakpoints } from "../../../theme";
interface Styles {
  errorValue?: string;
  disabled?: boolean;
  background?: string;
}
export const NewTBMaiContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  gap: 0.25rem;
  min-width: 28rem;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    width: 5rem;
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

export const TextInputPlace = styled.div`
  margin: 0 1.25rem;
`;

export const FliedTextInput = styled.input<Styles>`
  display: flex;
  padding: 0.625rem 1.25rem;
  align-items: center;
  align-self: stretch;
  border-radius: 0.3125rem;
  background: ${(props) => props.background || "rgba(171, 174, 229, 0.1)"};
  outline: none;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  border: 1px solid ${(props) => (props.errorValue ? "#FF6B6B" : "transparent")};
  &::placeholder {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #a6a6a6;
  }
`;
