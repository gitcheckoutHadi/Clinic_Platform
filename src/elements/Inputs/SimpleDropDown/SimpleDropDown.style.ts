import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
`;

export const DropdownHeader = styled.div`
  padding: 8px;
  border: 1px solid #d3d3d3;
  border-radius: 0.9375rem;
  background: #f9f9f9;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 0.9375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownListItem = styled.li`
  padding: 8px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  &:first-child {
    border-radius: 0.9375rem 0.9375rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.9375rem 0.9375rem;
  }
  &:hover {
    background: #231d46;
    color: #fff;
  }
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  font-size: 0.75rem;
  color: #333;
  transform: rotate(${(props) => (props.isOpen ? "90deg" : "-90deg")});
  transition: transform 0.2s ease;
  .icon-style {
    fill: #333 !important;
  }
`;
