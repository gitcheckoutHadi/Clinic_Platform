import styled from "styled-components";
import { breakpoints } from "../../../theme";

export const ClinicProfileDataStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  @media (max-width: calc(${breakpoints.tablets} + 53px)) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const EditProfileHeader = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  /* @media (max-width:  calc(${breakpoints.mobile} + 53px)) {
     flex  
  } */
`;

export const MainColumnClinicProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
`;

export const ClinicProfileView = styled.div`
  display: flex;
  height: 7rem;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.625rem;
  background: rgba(244, 243, 242, 0.5);
  img {
  }
`;

export const NormalColumnClinicProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
export const SepLine = styled.div`
  background: var(--grey-box, #f4f3f2);
  height: 0.0625rem;
  width: 100%;
`;
export const DayRowClinicProfile = styled.div`
  display: flex;

  gap: 0.38rem;
`;
export const TimeColumnClinicProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;
