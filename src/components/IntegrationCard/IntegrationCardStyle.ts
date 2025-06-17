import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../theme";
const shapeTransition = keyframes`
  0% {
    width: 0;
    height: 0;
    border-radius: 0%;
    opacity: 0;
  }
  50% {
    width: 2rem;
    height: 2rem;
    border-radius: 20%;
    opacity: 0.5;
  }
  100% {
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    opacity: 1;
  }
`;
export const MainIntegrationCardContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  border-radius: 0.625rem;
  background: rgba(244, 243, 242, 0.5);
  min-width: 14rem !important;
  /* background: green; */
  @media (max-width: ${breakpoints.tablets}) {
    min-width: 12rem !important;
  }
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 10rem !important;
  }
`;
export const ColumnTextIntegrationCardContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  gap: 0.62rem;
`;
export const RowTextIntegrationCardContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
  height: fit-content;
`;

export const IconCirclesIntegrationCardContainer = styled.div<{
  bgcolor: string;
}>`
  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.bgcolor};
  border-radius: 50%;
  animation: ${shapeTransition} 0.6s ease-in-out;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
