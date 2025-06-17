import styled from "styled-components";

export const MainViewContentContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 0.62rem;
  padding-bottom: rem;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-x: auto !important;
  /* padding-bottom:1.25rem; */
  background: linear-gradient(
    0deg,
    rgba(171, 174, 229, 0.1) 0%,
    rgba(171, 174, 229, 0.1) 100%
  );
  row-gap: 1.25rem;

  padding: 0 1.88rem;
  padding-bottom: 1.5rem;
`;
export const MainContainer = styled.div`
  padding-top: 0.62rem;
  display: flex;
  column-gap: 1.25rem;
  /* background: red; */
  /* overflow-x: auto !important; */
`;
export const SidebarContainer = styled.div`
  height: 100%;
  /* background: red; */
  position: relative;
  /* width: 5.3rem; */
`;
export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: auto !important;
`;

export const MainSignUpContentContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const MainSignUpContainer = styled.div`
  height: 100%;
  display: flex;
`;
export const SignUpSidebarContainer = styled.div`
  height: 100% !important;
  width: 25%;
`;
export const ContentSignUpContainer = styled.div`
  height: 100%;
  width: 100%;
`;
