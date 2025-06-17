import styled from "styled-components";

export const MainDonutChComponent = styled.div`
  flex: 1;
  min-width: 14rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  background: rgba(244, 243, 242, 0.5);
  /* gap: 1.25rem; */
  /* padding: 1.25rem; */
  /* background: green; */
  height: fit-content !important;
  position: relative;
  overflow: hidden;
`;
export const PropertyChComponent = styled.div`
  /* flex: 1 0 0; */
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* background: yellow; */

  position: relative;
`;
export const TitleDonut = styled.div<{ background: string }>`
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: ${(props) => props.background};
  margin: 1.25rem 0 0 1.25rem;
  width: fit-content;
  height: fit-content !important;
`;

export const TotalDonut = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
