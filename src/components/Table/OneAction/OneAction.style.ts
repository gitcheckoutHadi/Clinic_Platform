import styled from "styled-components";
interface StyleInterface {
  stroke?: boolean;
  fill?: boolean;
}
export const MainOneActionText = styled.div`
  display: none; /* Initially hidden */
  position: absolute;
  padding: 0.5rem;
  border-radius: 0.9375rem;
  background: #231d46;
  color: white;
  right: 2.2rem;
  top: 0.3rem;
  white-space: nowrap;
  min-width: 6.4rem;
  z-index: 5;
`;

export const MainOneActionContainer = styled.div<StyleInterface>`
  display: flex;
  position: relative;
  padding: 0.5rem;
  /* background: yellow; */
  align-self: center;
  white-space: nowrap;
  cursor: pointer;
  .icon-style {
    fill: ${(props) => (props.fill ? "#505355" : "")};
    stroke: ${(props) => (props.stroke ? "#505355" : "")};
    width: 1.6rem; /* or desired size */
    height: 1.6rem;
    /* background: black; */
  }
  &:hover ${MainOneActionText} {
    display: flex; /* Make the child visible on hover */
  }
`;
