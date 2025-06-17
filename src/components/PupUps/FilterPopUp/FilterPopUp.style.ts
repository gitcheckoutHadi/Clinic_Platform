import styled from "styled-components";

export const FilterLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  width: 38rem;
  /* padding-left: 2rem;
  padding-bottom: 2rem; */
  min-height: 12rem;
  align-items: center;
  position: relative;
  /* background: red; */
  padding-top: 3.125rem;
`;

export const SearchTab = styled.div`
  width: 95% !important;
  margin-bottom: 0.4rem;
  display: flex;
  height: 2rem;
  justify-content: center;
  position: absolute !important;
  top: 0;
`;
export const FilterMaps = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;

  &:dir(ltr) {
    padding-left: 1rem;
  }
  &:dir(rtl) {
    padding-right: 1rem;
  }
`;

export const FilterMapsLine = styled.div`
  /* display:flex;
gap:1.20rem; */
  flex: 0 0 50%; /* Each item should take up 50% of the container's width */
  min-width: 7rem;
  margin-bottom: 0.7rem;
  /* align-items: center; */
`;
