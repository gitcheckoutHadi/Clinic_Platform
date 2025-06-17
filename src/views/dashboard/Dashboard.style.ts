import styled from "styled-components";
import { breakpoints } from "../../theme";

export const DSEmptySpace = styled.div`
  display: flex;
  flex: 1;
  min-width: 28rem;

  @media (max-width: calc(${breakpoints.extraLarge} - 50px)) {
    min-width: 42rem !important;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    min-width: 46rem !important;
    /* padding: 4rem; */
  }

  @media (min-width: calc(${breakpoints.extraLarge} + 20px)) {
    min-width: 50rem !important;
    /* padding: 4rem; */
  }

  @media (min-width: calc(${breakpoints.TvScreen} - 50px)) {
    min-width: 52rem !important;
    /* padding: 4rem; */
  }
  @media (max-width: ${breakpoints.tablets}) {
    min-width: 22rem !important;
    /* background: yellow !important; */
  }
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 18rem !important;
  }
`;
