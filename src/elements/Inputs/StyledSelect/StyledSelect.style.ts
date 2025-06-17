import styled from "styled-components";
interface Styles {
  stophoveraction?: string;
  showborder?: string;
}

export const FileInputButtonIcon = styled.i``;

export const FileInputButton = styled.label<Styles>`
  display: inline-block;
  cursor: pointer;
  padding: ${({ showborder }) =>
    showborder === "true" ? " 0.4rem 1.25rem" : " 0rem 1rem"};
  border: ${({ showborder }) =>
    showborder === "true" ? "1px solid #231D46" : "none"};
  max-width: 11.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 6.25rem;
  background-color: transparent;
  color: #231d46;
  font-size: 0.75rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: "Primary font-Light";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Conditionally apply hover styles */
  ${(props) =>
    props.stophoveraction !== "true" &&
    `
    &:hover {
      box-shadow: 0 0 10px rgba(35, 29, 70, 0.24);
      transition: box-shadow 0.2s ease-in;
    }
  `}
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Primary font-Light";
`;
