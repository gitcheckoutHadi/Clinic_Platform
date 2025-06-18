import styled from "styled-components";
export const SlicerContainer = styled.div`
  display: flex;
  /* width: 8.5625rem; */
  height: 2.5rem;
  /* padding: 0rem 0.75rem; */
  align-items: center;
  gap: var(--Space-Extra-Small, 0.5rem);
  position: relative;
  border-radius: 0.5rem;
  /* border: 1px solid #d3d3d3; */
  background: var(--Ektolife-Web-App-white, #fff);
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const SliderAbsContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 5;
  width: 100%;
  width: 5.33rem;
  border-radius: 0.9375rem;
  left: 0rem;
  top: -10.3rem;
  box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25);
`;
export const SliderAbsContainerCells = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;

  &:hover {
    background: var(--Main-purple, #6a0dad);
    color: #fff !important;
  }
  &:first-child {
    border-radius: 0.9375rem 0.9375rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.9375rem 0.9375rem;
  }
`;

export const ChevronContainer = styled.div<{ isrotateddetected: boolean }>`
  display: inline-block;
  transform: ${({ isrotateddetected }) =>
    isrotateddetected ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out; /* Adjust duration and easing as needed */
  margin: 0 -0.4rem;
`;
