import styled from "styled-components";

export const RowCheck = styled.div<{ $isUnchecked: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
  gap: 0.62rem;
  cursor: pointer;
  transition: stroke 0.2s ease-in-out;
  min-width: 6.1rem;

  ${({ $isUnchecked }) =>
    $isUnchecked &&
    `
    &:hover {
      svg circle {
        stroke: #231D46; /* Change stroke color on hover */
      }
    }
  `}

  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
