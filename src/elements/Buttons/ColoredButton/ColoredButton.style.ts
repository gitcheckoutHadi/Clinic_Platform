import styled from "styled-components";

interface Style {
  borderRadius?: string;
}

export const ColoredButtonContainer = styled.button<Style>`
  display: flex;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
  padding: 0.625rem 1.25rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  background-color: #6a0dad;
  border-radius: ${(props) => props.borderRadius || "0.325rem"};

  .icon-style {
    fill: #fff;
    stroke: #fff;
    width: 1rem;
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
  }

  &:hover {
    color: #6a0dad;
    border: 1px solid #6a0dad;
    background-color: #fff;

    .icon-style {
      animation: scale-bold 0.6s ease-in-out infinite; /* Scale and bold animation */
      fill: #6a0dad;
      stroke: #6a0dad;
    }
  }

  &:active {
    transform: scale(0.95); /* Adds a pressed effect */
  }

  /* Keyframes for the scale and bold animation */
  @keyframes scale-bold {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2); /* Bold scaling effect */
    }
    100% {
      transform: scale(1);
    }
  }
`;
