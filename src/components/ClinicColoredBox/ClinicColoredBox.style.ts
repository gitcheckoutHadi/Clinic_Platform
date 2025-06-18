import styled from "styled-components";

export const ClinicColoredBoxMainCont = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 1 0 0;
  border-radius: 0.625rem;
  background: rgba(214, 188, 250, 0.25);
`;

export const ClinicColoredTitle = styled.div<{ background?: string }>`
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: ${(props) => props.background || "rgba(41, 172, 174, 0.2)"};
`;
