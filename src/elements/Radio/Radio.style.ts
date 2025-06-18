import styled from "styled-components";
import { StyleThemeInterface } from "../../Interface/StyleThemeInterface";

export const RadioLabel = styled.label<StyleThemeInterface>`
  display: flex;
  align-items: center;
  cursor: pointer;
  &::before {
    content: "";
    width: 1em;
    min-width: 1em;
    max-width: 1em;
    height: 1em;
    min-height: 1em;
    max-height: 1em;
    border: 0.05em solid #505355;
    border-radius: 50%;
    margin-right: ${(props) => (props.dir === "ltr" ? "0.5em" : "0.5em")};
    margin-left: ${(props) => (props.dir === "rtl" ? "0.5em" : "0.5em")};

    /* background: ${(props) =>
      props.bgcolor ||
      "linear-gradient(to bottom,rgb(98, 104, 112), #6A0DAD)"}; */
  }
  &:hover:before {
    /* background-color:#35e07d; */
    /* border: .05em solid #5DD3B3; */
    background: #d6bcfa40;
    border: 0.05em solid #d6bcfa40;
    /*   background-color:red; */
  }
`;

export const SeletectOptinToogle = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border: 1px solid #fff;

  /* background-color: aqua; */
  /* color: black; */
  transition: background-color 0.3s ease;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);

  &:checked + ${RadioLabel}::before {
    background: #6a0dad;

    display: flex;
    justify-content: center;
    align-items: center;
    /* color: #fff;; */
    border: 0.05em solid #6a0dad;
  }
`;

export const RadioLine = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center !important;
  width: 100%;
`;
