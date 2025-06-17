import styled from "styled-components";

interface Styles {
  active?: boolean;
}

export const ItemSettingViewModeItem = styled.div<Styles>`
  display: inline-flex;
  height: 2.5rem;
  padding: 0 0.3rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? "#898DDA" : "rgba(171, 174, 229, 0.70)")};
  cursor: pointer;
  border-radius: 0.9375rem;
  transition: color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    padding: 0 0.4rem;
    color: ${(props) =>
      props.active ? "#A6A9FF" : "#6A6DC7"}; /* Brighter text */

    transform: scale(1.05); /* Subtle zoom effect */
  }

  &:active {
    transform: scale(0.95); /* Click feedback */
    /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); */
  }
`;

export const MainContOfSetting = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* gap: 1.25rem; */
  /* align-self: stretch; */
  border-radius: 0.625rem;
  background: #fff;
  min-height: 70vh;
  height: fit-content;
`;
