import styled from "styled-components";

export const EventInfoPopupContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 65%;
  transform: translate(-50%, -50%); /* Adjust for centering */
  z-index: 9999999;
  width: 23.75rem;
  padding: 1.25rem;
  background: var(--Ektolife-Web-App-white, #f9f9f9);
  border-radius: 0.5rem;
  /* box-shadow: 0px 4px 14px rgba(185, 185, 185, 0.25); */
  display: flex;
  flex-direction: column;
  gap: 1.56rem;
  text-align: left;
  user-select: text;
`;

export const EventHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const EventProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.62rem;
`;

export const EventContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const EventContactInfoRow = styled.div`
  display: flex;

  /* gap: 1.31rem; */
  gap: 1.56rem;
`;

export const EventContactCell = styled.div`
  display: flex;

  gap: 0.31rem;

  user-select: text;
`;

export const EventInfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 1.31rem; */
  gap: 0.56rem;
`;
export const EventInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const EventReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.9375rem;
  /* background: rgba(172, 174, 229, 0.1); */
  width: 100%;
  gap: 0.15rem;
  /* padding: 0.62rem; */
`;

export const ReminderBtnCell = styled.div`
  display: flex;
  height: 2.5rem;
  width: 100%;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
  border-radius: 6.25rem;
  background: var(--dark-blue, #231d46);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: var(
      --hover-dark-blue,
      #2c2554
    ); /* Change the background color on hover */
    transform: scale(1.05); /* Slightly enlarge the button */
  }
`;
