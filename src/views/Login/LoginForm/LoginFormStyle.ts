import styled from "styled-components";

export const MainLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: fit-content;
  position: absolute;
  /* top: 10; */
`;
export const TitleLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const InputsLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const RowSpaceLoginFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AskCreateText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  .new-to-ektolife {
    color: var(--dark-blue, #231d46);
    font-family: Nunito, sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 0.9rem */
    leading-trim: both;
    text-edge: cap;
  }

  .create-account {
    font-weight: 700;
  }
`;

export const SingInBtn = styled.div`
  border-radius: 6.25rem;
  background: var(--dark-blue, #6a0dad);
  display: flex;
  height: 2.4375rem;
  padding: 0.625rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: rgb(74, 12, 117); /* updated hover color */
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  }
`;
