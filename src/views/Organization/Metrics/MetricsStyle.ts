import styled from "styled-components";

export const OrgSpace = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  padding: 0.625rem;
  gap: 0.62rem;
  justify-content: center;
  align-items: center;
  min-width: 10rem;
`;

export const ClinicsSpace = styled.div`
  display: flex;
  gap: 1.25rem;
  flex: 1.35;
  flex-wrap: wrap;
`;

export const ClinicItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  flex: 1;
  gap: 0.62rem;
  border-radius: 0.625rem;
  background: rgba(244, 243, 242, 0.5);
  justify-content: center;
  align-items: center;
  min-width: 10rem;
`;
