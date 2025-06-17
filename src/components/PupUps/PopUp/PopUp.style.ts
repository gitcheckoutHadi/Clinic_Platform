import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const splitOpen = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`;
export const PopUpPageContainerAbs = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(35, 29, 70, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const PopUpPageBox = styled.div<{ minwidth?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.minwidth ? props.minwidth : "85%")};
  width: ${(props) => (props.width ? props.width : "fit-content")};
  max-height: 85%;
  min-width: 27rem;
  gap: 1.25rem;
  background: #fff;
  border-radius: 0.9375rem;
  padding: 20px 5px 20px 20px;
  box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25);

  transform-origin: center top;
  animation: ${splitOpen} 0.4s ease-out;
`;

export const PopUpPaBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px 0 0;
  /* background: green; */
`;

export const PopUpPaBoxHeaderTitle = styled.div`
  display: flex;
  gap: 0.62rem;
  width: fit-content;
`;

export const PopUpPaBoxContent = styled.div<{ minheight?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: ${(props) => (props.minheight ? props.minheight : "15rem")};
  padding: 0 1.25rem 0 1.25rem;
  overflow-y: auto !important;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    /* background-image: linear-gradient(
      180deg,
      #231d46 0%,
      rgba(58, 74, 90, 0.29) 100%
    ); */
    background: #f4f3f2;
    border-radius: 0.25rem;
    width: 0.25rem;
    /* width: 1rem; */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.25rem;
    width: 0.125rem;
    /* width: 0.125rem; */
  }
`;

export const PopUpPaBoxFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1.25rem 1.25rem 1.25rem;
`;

export const PopUpPaSaveBtn = styled.div<{
  btnwidth?: string;
  btnheight?: string;
}>`
  display: flex;
  /* padding: 0.625rem 1.5rem; */
  height: ${(props) => (props.btnheight ? props.btnheight : "2.5rem")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: ${(props) => (props.btnwidth ? props.btnwidth : "12.5rem")};
  align-self: stretch;
  background: #231d46;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  border-radius: 0.9375rem;
  background: #231d46;

  &:hover {
    background: #8b8dd1; /* Darker shade for hover */
    transform: scale(1.05); /* Slightly increase size */
  }
`;

export const ClosePopUp = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.2rem;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
