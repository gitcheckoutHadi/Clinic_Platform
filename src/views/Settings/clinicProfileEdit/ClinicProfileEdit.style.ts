import styled from "styled-components";
import { breakpoints } from "../../../theme";

export const IconStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  /* padding:1.25rem; */
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
`;

export const SchedulePickerStyle = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const TimePickerContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.medium}) {
  }
`;
