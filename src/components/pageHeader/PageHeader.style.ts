import styled from "styled-components";
interface PageheaderProps {
  // bgcolor: string;
  hovercolor: string;
}

export const PageHeaderStyle = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:dir(ltr) {
    padding: 2.5rem 0 1rem 0;
  }
  &:dir(rtl) {
    padding: 2.5rem 0 1em 0;
  }
`;
export const RightHeaderStyle = styled.div`
  display: flex;
  column-gap: 1.25rem;
`;

export const IconStyle = styled.div<PageheaderProps>`
  font-family: "Primary Font";
  font-size: 1.2rem;
  cursor: pointer !important;
  display: flex;
  width: 2.875rem;
  height: 2.875rem;
  align-items: center;
  justify-content: center;
  border-radius: 6.25rem;
  box-shadow: 0px 4px 14px 0px rgba(185, 185, 185, 0.25);
  color: ${(props) => props.hovercolor};

  .icon-style {
    height: 100%;
    stroke: transparent;
    fill: ${(props) => props.hovercolor};
  }
  &:hover {
    background-color: ${(props) => props.hovercolor};
    color: white;
    .icon-style {
      fill: white;
    }
  }
`;
export const RelativeLogo = styled.div`
  height: 2rem;
  position: relative;
  margin-top: 1rem;
`;
export const FixedLogo = styled.div`
  width: 5rem;
  position: fixed;
  height: 2.375rem;
  /* background: red; */
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
