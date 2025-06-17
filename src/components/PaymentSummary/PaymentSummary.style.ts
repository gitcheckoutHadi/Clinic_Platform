import styled from "styled-components";

interface Style {
  background: string;
}
export const GroupPaymentSummary = styled.div`
  display: flex;
  flex: 1;
  gap: 0.62rem;
`;

export const GroupPaymentSummaryLine = styled.div<Style>`
  width: 4px;
  height: 70px;
  background: ${(props) => props.background};
  border-radius: 3px;
`;

export const GroupPaymentSummaryInfo = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const GraphCenter = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  /* background: red; */
`;
