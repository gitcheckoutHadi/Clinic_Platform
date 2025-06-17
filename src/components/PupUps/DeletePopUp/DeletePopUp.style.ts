import styled from "styled-components";

export const DeletePopUpMainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff30;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeletePopUpContainer = styled.div`
  display: flex;
  /* width: 20rem; */
  padding: 1.25rem;
  flex-direction: column;
  background: #fff;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.9375rem;

  margin: auto auto;
  box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25);
`;

export const DeletePopUpRowButtons = styled.div`
  display: flex;
  gap: 0.62rem;
`;
