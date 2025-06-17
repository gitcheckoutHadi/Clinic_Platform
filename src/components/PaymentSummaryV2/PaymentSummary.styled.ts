import styled from "styled-components";

export const PaymentSummaryMainContainer = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem 1.25rem 1.25rem;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.25rem;
  flex: 1;
  /* align-self: stretch; */
  border-radius: 0.625rem;
  background: var(--white, #fff);
  min-width: 29rem;
  @media (max-width: 700px) {
    min-width: 15rem;
  }
`;

export const PaymentSummaryRowContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content !important;
  justify-content: space-between;
  gap: 1.25rem;
  /* flex: 1 0 0; */
`;

export const BTNRowsPaymentSummary = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.25rem;
`;

export const ChartPaymentSummary = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 1.25rem;
  /* background: green; */
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const RenderChartsPaymentSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TotalMainContPaymentSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  /* width: 20rem; */
  align-items: flex-end;
  text-align: flex-start;
  /* justify-content: flex-end; */
  /* background: yellow; */
  @media (max-width: 800px) {
    align-self: flex-start;
  }
`;
export const TotalBoxPaymentSummary = styled.div`
  display: flex;
  /* padding: 0.35rem 0.625rem; */
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  /* background: var(--dark-blue, #231d46); */
  align-self: right;
  margin-right: 3.5rem;
`;
