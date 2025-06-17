import styled from "styled-components";

export const ShadowBoxContainer = styled.div<{
  background: string;
  boxShadow: string;
  gap?: string;
  padding?: string;
  flexdirection?: string;
}>`
  width: 100%;
  border-radius: 0.9375rem;
  gap: ${(props) => props.gap ?? "1.25rem"};
  padding: ${(props) => props.padding ?? "1.25rem"};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "column"};
  flex-wrap: wrap; /* Ensures child elements wrap when overflowing */
  align-items: flex-start; /* Optional: Adjusts alignment for wrapping */
  justify-content: flex-start; /* Optional: Adjusts alignment for wrapping */
`;
