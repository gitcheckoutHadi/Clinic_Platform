import styled from "styled-components";
import { tagButtonStyleInterface } from "./FilterTagInterface";

export const TagHolder = styled.div<tagButtonStyleInterface>`
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => (props.color ? props.color : "#231d46")};
  border-radius: 6.25rem;
  border: ${(props) =>
    props.border === "false"
      ? "none"
      : " 1px solid var(--Main-purple, #231d46)"};
  min-width: ${(props) => (props.width ? props.width : "4rem")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "2.5rem")};
  transition: all 0.3s ease; // Smooth transition for hover effects
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.color ? props.color : "var(--Main-purple, #231d46)"};
    color: ${(props) => (props.bgcolor ? props.bgcolor : "white")};
    border-color: transparent; // Hides the border color
  }
`;
