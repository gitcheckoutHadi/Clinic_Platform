import styled from "styled-components";

export const MainPatientProfileContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;

  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.625rem;
  background: var(--white, #fff);
  width: 100%;
`;
export const MainRowPatientProfileContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap !important; */
  /* flex: 1; */
  gap: 1.25rem !important;
  /* justify-content: space-between; */
`;
export const RowInfoPatientProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap !important;
  flex: 1;
  gap: 1.25rem !important;
  justify-content: space-between;
  /* background: green; */
`;
export const ColumnPatientProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem !important;
  flex: 1;
  /* background: green; */
  height: fit-content;
`;

export const ColoredRowInfoPatientProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap !important;
  flex: 1;
  gap: 1.25rem !important;
  justify-content: space-between;
  padding: 1.25rem;
  border-radius: 0.625rem;
  background: rgba(171, 174, 229, 0.1);
  align-self: stretch;
`;

export const ButtonsRowPatientProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap !important;
  /* flex: 1; */
  gap: 1.25rem !important;
  /* justify-content: space-between; */
`;
