import { createGlobalStyle, styled } from "styled-components";
import { breakpoints } from "./theme";
interface StylesInterface {
  padding?: string;
  gap?: string;
}
const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color:#000;
  
  }
`;
export default GlobalStyle;

export const PointerContainer = styled.div<StylesInterface>`
  cursor: pointer;
  padding: ${(props) => props.padding};
`;

export const PageFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  /* background: yellow; */
`;

export const SpaceBetweenFlex = styled.div<StylesInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap || "1.25rem"};
  width: 100%;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
export const FormFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 100%;
`;

export const FormEmptySpace = styled.div`
  display: flex;
  flex: 1;
  min-width: 28rem;
`;
export const SubMainFlex = styled.div<StylesInterface>`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 1;
  width: 100%;
  /* align-self: stretch; */
  background: #fff;
  min-width: 28rem;
  border-radius: 0.625rem;
  background: var(--white, #fff);
  /* background: blue; */
  /* flex-wrap: wrap !important; */
  @media (max-width: ${breakpoints.tablets}) {
    min-width: 20rem !important;
  }
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 10rem !important;
  }
`;

export const NormalFlex = styled.div<StylesInterface>`
  display: flex;
  width: 100%;
  flex-wrap: wrap !important;
  gap: ${(props) => props.gap || "1.25rem"};
`;

export const FlexOneWidth = styled.div`
  display: flex;
  flex: 1;
  min-width: 28rem;
  /* background: red; */
`;
