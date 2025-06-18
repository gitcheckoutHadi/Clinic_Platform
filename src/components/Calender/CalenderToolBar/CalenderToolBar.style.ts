import styled from "styled-components";

export const CalenderToolBarMainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const CalenderToolBarSpaceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CalenderToolBarGapedRow = styled.div<{ gap?: string }>`
  display: flex;
  width: fit-content;
  gap: ${(props) => props.gap};
  align-items: center;
  button {
    border: none;
    background-color: transparent; /* Optional, for removing background */
    cursor: pointer;
    /* padding: 0.5rem;  */
    height: fit-content;
    width: fit-content;
    color: #231d46; /* Adjust text color */
    border-radius: 50%;
    fill: #231d46;
    &:hover {
      background-color: rgba(172, 174, 229, 0.26); /* Optional hover effect */
      color: #231d46; /* Optional hover text color */
    }

    &:active {
      background-color: #e0e0e0; /* Optional active effect */
    }

    &:focus {
      outline: 2px solid #231d46; /* Optional focus outline */
      /* outline-offset: 2px; */
    }
  }
`;

export const CalenderToolBarDayPagination = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  gap: 0.62rem;

  button {
    border: none;
    background-color: transparent; /* Optional, for removing background */
    cursor: pointer;
    border-radius: 6.25rem;
    background: var(--dark-blue,#690dac);
    color: #fff;
    padding: 0.25rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 700;
    &:hover {
      background: var(
        --dark-blue,
        rgba(35, 29, 70, 0.55)
      ); /* Optional hover effect */
    }

    &:active {
      background-color: #e0e0e0; 
    }
  }
`;
