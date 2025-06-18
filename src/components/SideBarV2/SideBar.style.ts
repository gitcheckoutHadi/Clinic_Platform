import styled, { keyframes } from "styled-components";

interface SidebarStyleProps {
  bgcolor?: string;
  isactive?: string;
  boxShadow?: string;
}
// export const SideBarLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: #231d46;
// `;

// export const SideBarItem = styled.div`
//   display: flex;
//   padding: 1.62em 1.19rem;
//   position: relative;
//   cursor: pointer;

//   &::after {
//     content: attr(data-tooltip);
//     position: absolute;
//     left: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//     background: rgba(0, 0, 0, 0.8);
//     color: #fff;
//     padding: 5px 10px;
//     border-radius: 4px;
//     font-size: 14px;
//     white-space: nowrap;
//     opacity: 0;
//     visibility: hidden;
//     transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
//   }

//   &:hover::after {
//     opacity: 1;
//     visibility: visible;
//   }
// `;
const revealAnimation = keyframes`
  from {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
`;

const hideAnimation = keyframes`
  from {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
  to {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
`;
export const SideBarLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: #6a0dad;
  padding: 1.3rem 0.8rem;
  border-radius: 1.2rem;
  gap: 0.8rem;
  /* position: fixed; */
  z-index: 5000;
  @media (max-height: 530px) {
    position: absolute;
  }
`;

export const SideBarItem = styled.div<SidebarStyleProps>`
  position: relative;
  display: flex;
  /* align-items: ${(props) => (props.isactive === "true" ? "" : "center")};
  justify-content: ${(props) => (props.isactive === "true" ? "" : "center")}; */
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  color: #fff;
  border: 1px solid transparent; // Start with a transparent border
  transition: border 0.3s ease-in-out; // Smooth border transition
  z-index: 1;
  width: 3.1rem;
  height: 3.1rem;
  border-radius: ${(props) => (props.isactive === "true" ? "50%" : " 1.2rem")};
  background: ${(props) => (props.isactive === "true" ? "#fff" : "")};
  /* border-radius: 50%; */
  margin-right: ${(props) => (props.isactive === "true" ? "-0.8rem" : "")};
  margin-left: ${(props) => (props.isactive === "true" ? "0.8rem" : "")};
  &:hover {
    border: 1px solid #fff;
  }
  .icon_styling {
    fill: ${(props) => (props.isactive === "true" ? "#231D46" : "white")};
  }
  &:nth-child(3) {
    .icon_styling {
      fill: ${(props) => (props.isactive === "true" ? "#231D46" : "#F4F3F2")};
    }
  }
  &:nth-child(4) {
    .icon_styling {
      fill: ${(props) => (props.isactive === "true" ? "#231D46" : "#F4F3F2")};
    }
  }
  &:nth-child(5) {
    .icon_styling {
      fill: ${(props) => (props.isactive === "true" ? "#231D46" : "#F4F3F2")};
    }
  }
`;

export const Tooltip = styled.div<{ isVisible: boolean; boxShadow?: string }>`
  width: fit-content;
  display: flex;
  position: absolute;
  left: 3.9rem;
  top: 50%;
  transform: translateY(-50%);
  background: #231d46;
  color: #fff;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: ${(props) => props.boxShadow};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  animation: ${(props) => (props.isVisible ? revealAnimation : hideAnimation)}
    0.4s ease-in-out;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  background: linear-gradient(
    180deg,
    rgba(214, 188, 250, 0.25) 0%,
    rgba(209, 209, 209, 0.2) 100%
  );
  box-shadow: 0px 0px 4px 0px rgba(194, 203, 220, 0.2) inset;
  backdrop-filter: blur(3px);
`;

export const SideBarActivePlace = styled.div`
  position: absolute;
  top: -1.2rem;
  z-index: -1;
  /* left: 0.5rem; */
`;
