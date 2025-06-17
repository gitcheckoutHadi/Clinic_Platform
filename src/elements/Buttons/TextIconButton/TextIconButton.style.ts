import styled from "styled-components";

export const TextIconContainer = styled.button`
  display: flex;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
  padding: 0.62rem 1rem 0.62rem 0.75rem;
  background-color: transparent;
  border: none;
  color: #231d46;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 0.325rem;
  .icon-style {
    fill: #231d46;
    stroke: #231d46;
    width: 1rem;
  }
  &:hover {
    transform: scale(1.05); /* Slightly enlarges the button */
    background-color: #231d46; /* Adds a subtle background highlight */
    color: #fff; /* Changes the text/icon color */
    .icon-style {
      fill: #fff;
      stroke: #fff;
    }
  }

  &:active {
    transform: scale(0.95); /* Adds a pressed effect */
  }
`;
