import styled, { keyframes } from "styled-components";

// Define keyframes for animation effects
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lineExpand = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const TableLineContainer = styled.div`
  height: 1px;
  width: 100%;
  background: #a6a6a6;
  transition: background 0.3s ease-in-out, width 0.3s ease-in-out;
`;

export const TableButtonsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 0.07rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #a6a6a6;
  transition: color 0.3s ease-in-out;
  /* animation: ${fadeIn} 0.4s ease-in-out */

  &:hover {
    color: #6a0dad;
  }

  &:hover ${TableLineContainer} {
    background: #6a0dad;
    animation: ${lineExpand} 0.3s ease-in-out forwards;
  }
`;
