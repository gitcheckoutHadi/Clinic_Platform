import styled from "styled-components";

export const IdViewFirstPartMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.56rem;
`;

export const IdViewFirstPartRows = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  &:first-child {
    /* justify-content: space-between; */
  }
  &:last-child {
    padding-right: 10%;
  }
`;

export const IdViewFirstButtonsRows = styled.div`
  display: flex;
  gap: 0.62rem;
`;
