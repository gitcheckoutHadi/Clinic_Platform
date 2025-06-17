import styled from "styled-components";

export const MainClinicProfileCircle = styled.div`
  border-radius: 3.125rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(217, 217, 217, 0.25);
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  position: relative;
  border-radius: 50%;
  background: #fff;
`;

export const PropProfileCircle = styled.div<{ bgcolor?: string }>`
  width: 0.625rem;
  height: 0.625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: ${(props) => props.bgcolor || "#B771F2"};
`;

export const ImageCircularLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  object-fit: cover;
`;
