import styled from "styled-components";

export const RenderContTimePaginated = styled.div`
  display: flex;

  /* justify-content: flex-end; */
  align-items: center;
  border-radius: 6.25rem;
  /* background: green; */
  /* gap: 0.625rem; */
  border-radius: 6.25rem;
  background: rgba(244, 243, 242, 0.5);
`;

export const ItemContTimePaginated = styled.div<{ active: boolean }>`
  display: flex;
  padding: 0.62rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  min-width: ${(props) => (props.active ? "5.5rem" : "4rem")};
  text-align: center;
  background: ${(props) =>
    props.active ? "rgba(171, 174, 229, 0.20)" : "transparent"};
  border-radius: ${(props) => (props.active ? "6.25rem" : "6.25rem")};
  color: ${(props) => (props.active ? "#898DDA" : "#ABAEE5B2")};
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Smooth animation */

  &:hover {
    background: rgba(171, 174, 229, 0.3); /* Slightly darker hover effect */
    transform: scale(1.05); /* Slight zoom effect */
  }
`;
