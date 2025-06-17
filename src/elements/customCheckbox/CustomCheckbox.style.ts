import styled from "styled-components";

export const CustomCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  /* column-gap: 1rem; */
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: ${({ checked }) => (checked ? "none" : "2px solid #D3D3D3")};
  border-radius: 0.25rem;
  background-color: ${({ checked }) => (checked ? "#231d46" : "transparent")};
  /* display: flex;
    align-items: center; */
  /* justify-content: center; */

  cursor: pointer;
  &:hover {
    border-color: #231d46;
  }

  svg {
    display: ${({ checked }) => (checked ? "block" : "none")};
    fill: white;
    width: 2rem;
    height: 2rem;
    transform: translate(-0.1rem, -0.25rem);
  }
`;
