import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
  padding: 0.25rem 1.25rem;
  border: 2px solid;
  height: 3.5rem;
  width:100%;
  border-radius:1rem;
  border: 1px solid #D3D3D3;
`;

export const LabelStyle = styled.label`
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  background-color: white;
 padding:0rem 0.75rem;
`;

export const InputStyle = styled.input`
  border: none;
  height:100%;
  width: 100%;
  font-family:"Primary Font";
  &:focus {
    outline: none;
    }
    &::placeholder {
    color: #505355;  
    font-size: 1rem; 
    font-family: "Primary Font";  
    opacity: 0.3;  
  }
`;