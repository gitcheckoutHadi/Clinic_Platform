import styled from "styled-components";

interface Style {
  borderRadius?: string;
  width?: string;
}

export const ReminderButtonContainer = styled.button<Style>`
  display: flex;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
  padding: 0.625rem 1.5rem;
  height: 2.5rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  background-color: #231d46;
  border-radius: ${(props) => props.borderRadius || "6.25rem"};
  width: ${(props) => props.width || "fit-content"};
  justify-content: center;
  .icon-style {
    fill: #fff;
    stroke: #fff;
    width: 1rem;
  }

  &:hover {
    color: #231d46;
    border: 1px solid #231d46;
    background-color: #fff;

    .icon-style {
      animation: vibrate 0.8s linear infinite; /* Slower vibration effect */
      fill: #231d46;
      stroke: #231d46;
    }
  }

  &:active {
    transform: scale(0.95); /* Adds a pressed effect */
  }

  /* Keyframes for the vibration animation */
  @keyframes vibrate {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    50% {
      transform: translateX(2px);
    }
    75% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
