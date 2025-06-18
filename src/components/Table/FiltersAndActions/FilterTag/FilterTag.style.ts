import styled from "styled-components";
import { tagButtonStyleInterface } from "./FilterTagInterface";

export const ClearFilter = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  /* opacity: 0; */
  /* transform: scale(0.8); */
  pointer-events: none;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 4;
  .iconClose {
    fill: #f8f8f8;
    transition: fill 0.3s ease;
  }

  &:hover {
    border-radius: 50%;
    background: #f8f8f8;
    padding: 0 0.2rem;

    .iconClose {
      fill: #6a0dad;
    }
  }
`;

export const TagHolder = styled.div<tagButtonStyleInterface>`
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.color ? props.color : "#6a0dad")};
  border-radius: 6.25rem;
  border: ${(props) =>
    props.border === "false"
      ? "none"
      : "1px solid var(--Main-purple, #6a0dad)"};
  min-width: ${(props) => (props.width ? props.width : "4rem")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "2.5rem")};
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.color ? props.color : "var(--Main-purple, #6a0dad)"};
    color: ${(props) => (props.bgcolor ? props.bgcolor : "white")};
    border-color: transparent;

    ${ClearFilter} {
      display: ${(props) => (props.filteredText ? "inline-flex" : "none")};
      /* opacity: 1; */
      transform: scale(1);
      pointer-events: auto;
      z-index: 10 !important;
    }
  }
`;
