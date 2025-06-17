import styled from "styled-components";
import { breakpoints } from "../../../theme";

interface Styles {
  focused: boolean;
  width?: string;
}

export const SearchInputContainer = styled.div<Styles>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-shrink: 0;
  border-radius: 6.25rem;
  background: rgba(244, 243, 242, 0.5);
  padding: 0.62rem 1.25rem;
  width: ${(props) => props.width || "100%"};
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  height: 2.125rem;

  &:focus-within {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: #231d46;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:focus-within::after {
    width: 100%;
    left: 0;
  }
`;

export const SearchInputText = styled.input`
  font-family: "Primary Font";
  border: none !important;
  outline: none;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  height: 2.125rem;
  line-height: 1.375rem;
  background: transparent;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }

  &:focus {
    color: #333;
    transform: translateY(-1px);
  }

  &:focus::placeholder {
    opacity: 0.3;
  }
`;
