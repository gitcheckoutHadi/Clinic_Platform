import styled from "styled-components";

export const DaysRenderColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 100%;
`;

export const TimesRowShows = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.65rem;
  /* background: green; */
  flex-wrap: wrap;
`;

export const TimesActionShows = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 0.625rem;
  transition: all 0.3s ease-in-out;

  .ClassFill {
    fill: #cccccc;
    transition: fill 0.3s ease-in-out;
  }

  .ClassStroke {
    stroke: #cccccc;
    transition: stroke 0.3s ease-in-out;
  }

  &:hover {
    .ClassFill {
      fill: red;
    }
    .ClassStroke {
      stroke: #231d46;
    }
  }
`;
