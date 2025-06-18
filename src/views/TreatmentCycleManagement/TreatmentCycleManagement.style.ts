import styled from "styled-components";

export const ManagementGradientBox = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;
  border-radius: 0.9375rem;
  background: rgba(214, 188, 250, 0.25);
`;

export const ManagementBoxGroup = styled.div`
  gap: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    /* background: gray !important; */
    flex: 1.6;
    /* min-height: 20rem; */
  }
  &:last-child {
    /* background: black !important; */
    justify-content: flex-end;
    flex: 1;
    /* min-height: 20rem; */
    /* background: aqua !important; */
  }
  @media (max-width: 850px) {
    &:first-child {
      /* background: gray !important; */
      flex: 3;
      /* min-height: 20rem; */
    }
  }
  @media (max-width: 680px) {
    &:first-child {
      flex-wrap: wrap;
    }
  }
`;

export const ManagementColumnBox = styled.div`
  display: flex;
  flex-direction: column !important;
  gap: 1.25rem;
`;
