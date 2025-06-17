import styled from "styled-components";

export const ButtonSaveStyle = styled.button`
  display: flex;
  width: 12.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.9375rem;
  background: #231d46;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 6.25rem;
  &:hover {
    /* background: linear-gradient(90deg, #231d46, rgb(114, 106, 250)); */
    transform: scale(1.05);
    box-shadow: 0px 4px 10pxrgba (35, 29, 70, 0.29);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
`;
