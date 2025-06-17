import styled from "styled-components";

interface StyledButtonProps {
  bgcolor: string;
}

export const ButtonStyled = styled.button<{ bgcolor: string }>`
  background-color:${props => props.bgcolor}; 
  color: white;
  border: none;
  border-radius:  0.9375rem; 
  cursor: pointer; 
  height:2.5rem;
  transition: background-color 0.3s ease;
  width:100%;
  padding:0.62rem 1.5rem;
  text-align:center;

  &:hover {
    background-color: ${props => `${props.bgcolor}98`};
 }

  &:focus {
    outline: none; 
  }
`;