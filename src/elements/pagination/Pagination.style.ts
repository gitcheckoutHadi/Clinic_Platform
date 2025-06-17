import styled from "styled-components";
import { StyleThemeInterface } from "../../Interface/StyleThemeInterface";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  gap: 0.3rem;
  /* background: green; */
`;
export const PaginationRender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
export const PageButton = styled.button<{
  active: number;
  color?: string;
  borderColor?: string;
}>`
  /* margin: 0 5px; */
  padding: 3px 7px;
  /* width: 1rem;
  height: 1rem; */
  border-radius: 0.3125rem;
  /* border: ${({ active, borderColor }) =>
    active ? "1px solid #231d46" : `1px solid ${borderColor}`}; */
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Primary Font";
  font-size: 12px;
  color: ${({ active, color }) => (active ? color : "#A6A6A6")};
  border: 1px solid transparent;

  /* background: ${({ active }) => (active ? "#231d46" : "transparent")}; */

  &:hover {
    border: 1px solid #231d46;
  }
`;

export const ArrowButton = styled.button`
  /* margin: 0 5px; */
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: transparent;
`;

export const PaginationBox = styled.div<StyleThemeInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  /* width: 2.375rem;
  height: 2.375rem; */
  /* margin: 0 5px; */
  background-color: transparent;
  border-radius: 0.3125rem;
  /* border: 1px solid ${(props) => props.bordercolor}; */
  opacity: ${({ opacity }) => opacity || ""};
  cursor: ${({ cursor }) => cursor || ""};
  padding: 7px;
  /* width: 1rem;
  height: 1rem; */
  border-radius: 0.3125rem;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #231d46;
  }
`;
