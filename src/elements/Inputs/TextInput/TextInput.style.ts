import styled from "styled-components";
import { breakpoints } from "../../../theme";

interface Styles {
  errorValue?: string;
  disabled?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  min-width: 28rem;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    width: 5rem;
  }
`;

export const StyledInput = styled.input<Styles>`
  box-sizing: border-box;
  width: 100%;
  height: 3.5em;

  border: 1px solid ${(props) => (props.errorValue ? "#FF6B6B" : "#ccc")};
  border-radius: 0.3125rem !important;
  outline: none;
  background: ${(props) =>
    props.disabled ? "rgba(171, 174, 229, 0.10)" : "rgba(171, 174, 229, 0.10)"};
  color: ${(props) => (props.disabled ? "#505355" : "#505355")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  /* border-radius: 0.3125rem; */
  background: rgba(171, 174, 229, 0.1);
  &:dir(ltr) {
    padding: 0.5em 1.5em;
  }
  &:dir(rtl) {
    padding: 0.5em 1.75em;
  }
  &:focus {
    border-color: ${(props) => (props.disabled ? "#ccc" : "#231d46")};
    box-shadow: 0 0 4px #231d4670;
  }

  &:focus + label {
    color: #231d46;
  }

  &:not(:placeholder-shown) + label {
    transform: translate(0, -1.5em) scale(0.9);
    color: ${(props) => (props.disabled ? "#505355" : "#505355")};
  }
`;

export const PlaceholderLabel = styled.label<Styles>`
  position: absolute;

  top: 0.75em;
  color: ${(props) =>
    props.errorValue ? "#FF6B6B" : props.disabled ? "#505355" : "#ccc"};
  background: rgba(171, 174, 229, 0.1);
  padding: 0 4px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform-origin: left;
  transform: translate(0, 0);

  &:dir(ltr) {
    left: 0.75em;
  }
  &:dir(rtl) {
    right: 0.25em;
  }
`;
