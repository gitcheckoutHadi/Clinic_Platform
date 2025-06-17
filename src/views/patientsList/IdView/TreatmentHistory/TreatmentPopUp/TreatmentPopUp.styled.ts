import styled from "styled-components";

export const MainTreatmentPopUpContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const TableTreatmentPopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TreatmentPopUpTableHeader = styled.div`
  display: flex;
  padding: 0.625rem 1.25rem;
  align-items: center;
  align-self: stretch;
  border-radius: 0.3125rem;
  background: rgba(171, 174, 229, 0.1);
`;
export const TreatmentPopUpTableCell = styled.div`
  display: flex;

  flex: 2;
  /* word-wrap: wrap; */
  max-width: 10rem;
  padding: 0 0 0 0.5rem;

  &:last-child {
    width: 3rem;
    flex: 0.3 !important;
    justify-content: center;
  }
  .ptext {
    color: var(--black, #000);
    font-family: "Primary Font";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const TreatmentPopUpBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TreatmentPopUpBodyRow = styled.div`
  display: flex;
  flex: 1;
  padding: 0.625rem 1.25rem;
  align-items: center;
  /* align-self: stretch; */
`;
