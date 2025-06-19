import styled from "styled-components";

export const TableHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.3125rem;
  background: #d6bcfa;
  min-width: 100%;
  width: fit-content;
  position: relative;

  /* gap: 1rem; */
`;
export const ResizeHandle = styled.div`
  position: absolute;
  right: -7.5px;
  top: 0;
  width: 15px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  /* background: green; */
  display: none;
  z-index: 10;
`;

export const TableHeaderCell = styled.div<{
  flexWidth: number;
  minWidth?: string;
}>`
  display: flex;
  flex: ${({ flexWidth }) => flexWidth};
  min-width: ${({ minWidth }) => minWidth || "9rem"};
  padding: 0.8rem 0.75rem;
  gap: 0.5rem;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease, background-color 0.2s ease;
  /* border-right: 1px solid transparent; */
  /* background: red; */
  /* &:hover {
    border-right: 0.5px solid rgb(95, 94, 94);
    ${ResizeHandle} {
      display: block;
    }
  } */
  &:hover {
    background: #d6bcfa80;
  }
`;

export const TableCellArray = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TableHeaderActionCell = styled.div`
  display: flex;

  width: 4rem;
  /* padding: 1.5rem 1.5rem 1.5rem 1.25rem; */
  position: relative;
  /* background: yellow; */
`;

export const TableDNd = styled.div`
  margin-right: 0.4rem;
`;

export const CellCust = styled.div`
  display: flex;
  gap: 0.4rem;
`;
