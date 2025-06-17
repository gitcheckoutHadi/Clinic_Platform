import styled from "styled-components";

export const DayViewEventMainContainer = styled.div`
  display: flex;
  flex: 1;
  /* height: 100%; */
  padding: 0.63rem;

  justify-content: space-between;
  border-radius: 6.25rem;
  background: rgba(244, 243, 242);
  align-items: center;
  /* background: yellow; */

  /* width: fit-content; */
  /* &:nth-child(1) {
    background: yellow;
  } */
`;

export const DayViewEventCell = styled.div`
  display: flex;
  flex-direction: row;

  /* height: 4rem; */
  gap: 0.625rem;
  /* align-items: center; */

  /* flex-wrap: wrap; */
  align-items: center;
  flex: 1;
  padding: 0.625rem;

  &:last-child {
    justify-content: flex-end;
    padding-right: 1.5rem;
    /* background: red; */
    flex: 0.55;
  }
`;
