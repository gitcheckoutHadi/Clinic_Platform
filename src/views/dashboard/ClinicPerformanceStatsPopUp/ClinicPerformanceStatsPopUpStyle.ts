import styled from "styled-components";

export const ColumnClinicPerformanceStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
  /* width: 50rem; */
`;

export const RowClinicPerformanceStatsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
`;

export const PaymentsRowClinicPerformanceStatsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  /* width: 100%; */
`;

export const PaymentsRowClinicPerformanceStatsBox = styled.div<{
  bgcolor: string;
}>`
  display: flex;
  padding: 0.25rem 0.625rem;

  gap: 0.625rem;
  border-radius: 6.25rem;
  background: ${(props) => props.bgcolor};
`;

export const ClinicPerformanceStatsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
`;
