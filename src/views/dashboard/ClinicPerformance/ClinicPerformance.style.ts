import styled from "styled-components";

export const ClinicPerformanceMainContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.625rem;
  background: var(--white, #fff);
`;

export const ClinicPerformanceCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-self: stretch;

  & > div {
    flex: 1; /* Makes each child div take equal space */
    min-width: 200px; /* Prevents items from shrinking too much */
  }
`;
