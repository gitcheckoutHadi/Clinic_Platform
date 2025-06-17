import styled from "styled-components";
import { ResizeHandle } from "../TableHeader/TableHeader.style";

export const TableBodyColumnRender = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableBodyRow = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  width: fit-content;
  border-radius: 0.3125rem;
  /* gap: 1rem; */
  &:nth-child(even) {
    border-radius: 0.3125rem;
    background: rgba(244, 243, 242, 0.5);
  }
  &:hover {
    background: rgba(35, 29, 70, 0.05);

    transition: background 0.3s ease;
  }
`;

export const TableRowCell = styled.div<{
  flexWidth: number;
  minWidth: string;
  EyeShow?: boolean;
}>`
  display: flex;
  flex: ${({ flexWidth }) => flexWidth};
  min-width: ${({ minWidth }) => minWidth};
  padding: 0.75rem;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-right: 1px solid transparent;
  /* background: green; */
  &:first-child {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${({ EyeShow }) =>
      EyeShow &&
      `
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }
    `}
  }
  &:first-child {
    /* background: aqua; */
    cursor: ${(props) => (props.EyeShow ? "pointer" : "default")};
    ${(props) =>
      props.EyeShow &&
      `
    &:hover {
      transform: scale(1.05); /* Example of hover effect */
      transition: transform 0.3s ease;
    }
  `}
  }

  /* &:hover {
    border-right: 0.5px solid rgb(95, 94, 94);
    ${ResizeHandle} {
      display: block;
    }
  } */
`;

export const TableRowActionCell = styled.div`
  display: flex;
  width: 4rem;
  /* max-width: 7rem; */

  display: flex;

  justify-content: flex-end;
  position: relative;
`;

export const PointerDotsContainer = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 1.25rem;
  cursor: pointer;
`;

export const PointerDotsContainerAnimated = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 1.25rem;
  cursor: pointer;
  display: inline-block; /* Ensure the container behaves like an inline element */

  svg {
    transition: transform 0.2s ease, filter 0.2s ease; /* Transition for SVG */
  }

  &:hover svg {
    transform: scale(1.05); /* Slightly scale the SVG */
    filter: drop-shadow(
      0px 4px 8px rgba(0, 0, 0, 0.2)
    ); /* Apply shadow to the SVG */
  }
`;
