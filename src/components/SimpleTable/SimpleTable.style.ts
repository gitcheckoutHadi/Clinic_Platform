import styled from "styled-components";

export const SimpleTableMainContainer = styled.div`
  border-radius: 0.9375rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 0.9375rem;

  padding-bottom: 0.5rem;
  /* align-items: flex-start; */
`;
export const SimpleTableTitleCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.25rem;
  align-items: center;
`;
export const SimpleTableHeaderRow = styled.div`
  display: flex;
  /* flex: 1; */
  border-radius: 0.3125rem;
  background: #d6bcfa;
  /* border-radius: 0.9375rem 0.9375rem 0 0; */
`;

export const SimpleTableActionCell = styled.div`
  height: 100%;
  width: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 0;
  /* background: red; */
`;

export const SimpleTableActions = styled.div`
  position: absolute;
`;

export const SimpleTableBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 15rem;
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
export const SimpleTableBodyRow = styled.div`
  display: flex;
  /* flex: 1; */
  border-radius: 0.3125rem;
  background: rgba(244, 243, 242, 0.5);
  align-items: center;
  height: fit-content;

  &:nth-child(even) {
    background: rgba(214, 188, 250, 0.25);
  }
  &:last-child {
    /* border-radius: 0 0 0.9375rem 0.9375rem; */
  }
`;
export const SimpleTableCell = styled.div<{
  flexWidth: number;
  minWidth: string;
}>`
  display: flex;
  /* flex: 1; */
  padding: 1.125rem 0.3rem 1.125rem 0;
  flex: ${({ flexWidth }) => flexWidth};
  min-width: ${({ minWidth }) => minWidth};
  &:first-child {
    /* background: green; */
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:dir(ltr) {
      padding: 1.125rem 0.3rem 1.125rem 1.125rem;
    }
    &:dir(rtl) {
      padding: 1.125rem 1.125rem 1.125rem 0.3rem;
    }
  }
  /* &:nth-child(2) {
    background: yellow;
  }
  &:nth-child(3) {
    background: green;
  }
  &:nth-child(4) {
    background: yellow;
  }
  &:nth-child(5) {
    background: green;
  }
  &:nth-child(6) {
    background: yellow;
  }
  &:nth-child(7) {
    background: green;
  } */
`;

export const EyeColumnArrayShow = styled.div<{ EyeShow?: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (props.EyeShow ? "pointer" : "default")};

  /* Hover effect when EyeShow is true */
  ${(props) =>
    props.EyeShow &&
    `
    &:hover {
      transform: scale(1.05); /* Example of hover effect */
      transition: transform 0.3s ease;
    }
  `}
`;

export const EyeRowShow = styled.div<{ EyeShow?: boolean; index: number }>`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;
  /* Hover effect when EyeShow is true */
  &:first-child {
    /* background: aqua; */
    cursor: ${(props) =>
      props.EyeShow && props.index === 0 ? "pointer" : "default"};
    ${(props) =>
      props.EyeShow &&
      props.index === 0 &&
      `
    &:hover {
      transform: scale(1.05); /* Example of hover effect */
      transition: transform 0.3s ease;
    }
  `}
  }
`;
