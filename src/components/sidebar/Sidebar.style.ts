import styled from "styled-components";
interface SidebarStyleProps {
  bgcolor?: string;
  isactive?: string;
  hovered?: string;
}

export const SidebarStyle = styled.div<SidebarStyleProps>`
  display: flex;
  /* padding: 0.9375rem 0rem; */
  align-items: ${(props) =>
    props.hovered === "true" ? "flex-start" : "center"};
  height: 42.5625rem;
  padding: 1.25rem 0rem;
  flex-direction: column;

  background: ${(props) => props.bgcolor};
  width: ${(props) => (props.hovered === "true" ? "18.12rem" : "5.25rem")};
  transition: width 0.3s ease, align-items 0.3s ease;
  /* max-width: 18.0625rem; */

  &:dir(ltr) {
    border-radius: 0rem 0.9375rem 0.9375rem 0rem;
  }
  &:dir(rtl) {
    border-radius: 0.9375rem 0rem 0rem 0.9375rem;
  }
  @media (max-width: 700px) {
    width: 5.25rem;
  }
`;

export const SidebarItem = styled.div<SidebarStyleProps>`
  cursor: pointer !important;
  position: relative;
  padding: 0.9375rem 1.5rem;
  width: 100%;
  background-color: ${(props) =>
    props.isactive === "true" ? "white" : "transparent"};
  color: ${(props) =>
    props.isactive === "true" ? "#231D46" : "white"} !important;
  .icon_styling {
    fill: ${(props) => (props.isactive === "true" ? "#231D46" : "white")};
  }
  display: flex;
  column-gap: 0.62rem;
  /* &:hover{
    
    background-color:white;
    .icon_styling{
    fill:#231D46;
}
} */
`;
export const ItemLabel = styled.div<SidebarStyleProps>`
  display: ${(props) => (props.hovered === "true" ? "block" : "none")};
  cursor: pointer !important;
  color: ${(props) =>
    props.isactive === "true" ? "#231D46" : "white"} !important;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Tooltip = styled.div`
  position: absolute;
  top: 47%;
  left: 110%;
  transform: translateY(-50%);
  background-color: #505355;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;

  @media (min-width: 700px) {
    display: none;
  }
`;
