import styled from "styled-components";

interface ButtonContainerInterface {
  background?: string;
}
export const ButtonContainer = styled.button<ButtonContainerInterface>`
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.9375rem;
  border: 1px solid #ff6b6b;
  background: ${(props) => props.background};
  color: ${(props) => (props.background ? "#fff" : "#FF6B6B")};
  border: 1px solid ${(props) => (props.background ? "transparent" : "#FF6B6B")};
`;
