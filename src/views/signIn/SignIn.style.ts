import styled from "styled-components";

export const SigninContainer = styled.div`
margin-top:6rem;
margin-bottom:6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  align-items:flex-start;
  width: 100%;

`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none; 
  margin-top:0.125rem;
  width: 1rem;
  height: 1rem;
  font-family:"Primary Font";
  border: 3px solid #d3d3d3;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.3s;

  &:checked {
    background-color: #d3d3d3;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: -0.5px;
    left: 2px;
    width: 0.25rem;
    height: 0.5rem;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`