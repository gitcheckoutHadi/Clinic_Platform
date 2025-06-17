import styled from "styled-components";

export const PatientsListTopPartMainContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.3rem;
`;

export const PatientsListTopPartGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  &:first-child {
    flex: 1;
  }
  &:last-child {
    flex: 1.6;
  }
`;

export const PatientsListTopPartBoxesContainer = styled.div`
  display: flex;
  width: 100%;

  flex-wrap: wrap;
  gap: 1.25rem;
  & > div {
    display: flex;
    // Assuming ShadowBox is a div or similar element
    flex: 1 !important;
    min-width: 13rem; // Set the maximum width for each child

    /* margin: 0.5rem; // Optional: Add some margin for spacing */
    /* padding: 1rem; // Optional: Add some padding for content */
  }
`;
