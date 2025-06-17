import styled from "styled-components";

export const DropdownSearchableContainer = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */
  /* background: green !important; */
  min-width: 29rem !important;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const TitleDropdown = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.22rem;
`;

export const DropdownSearchableHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px;
  /* border: 1px solid #d3d3d3; */

  background: #f9f9f9;
  font-size: 1rem;
  /* color: #333; */
  cursor: pointer;
  background: #fff;
  /* padding: 0.625rem 1.25rem; */
  background: rgba(171, 174, 229, 0.1);
  border-radius: 0.3125rem;
  &:focus-within {
    border-color: #231d46 !important;
    box-shadow: 0 0 4px #231d4670;
  }
  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-family: "Primary Font";
    font-size: 0.875rem;
    /* color: red !important; */
    padding: 0;
  }
`;

export const DropdownSearchableList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 12rem;
  overflow-y: auto;
  top: 3.9rem;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(50deg, #231d46 3.83%, #231d46 95.8%);

    border-radius: 0.625rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.625rem;
  }
`;

export const DropdownSearchableListItem = styled.li<{ selected?: boolean }>`
  padding: 8px;
  font-size: 1rem;
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  background: ${(props) => (props.selected ? "#231d46" : "transparent")};
  cursor: pointer;

  &:first-child {
    border-radius: 0.3125rem 0.3125rem 0 0;
  }

  &:last-child {
    border-radius: 0 00.3125rem 0.3125rem;
  }

  &:hover {
    background: ${(props) => (props.selected ? "#231d4690" : "#231d4690")};
    color: #fff;
  }
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  /* font-size: 0.75rem; */
  /* background: green; */
  color: #333;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "")});
  transition: transform 0.2s ease;
  .icon-style {
    stroke: #a6a6a6;
  }
`;
