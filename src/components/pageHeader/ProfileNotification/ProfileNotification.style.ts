import styled from "styled-components";

export const ProfileNotificationMainContainer = styled.div`
  display: flex;
  width: 6.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 6.25rem;
  background: #fff;
  padding-left: 0.875rem;
`;

export const ProfileNotificationSVGContainer = styled.div`
  padding: 0.3rem;
  border-radius: 1.75rem;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transitions */
  &:hover {
    cursor: pointer;
    /* background: rgba(35, 29, 70, 0.21); */
    transform: scale(1.1) rotate(10deg); /* Slight scaling and rotation */
  }

  svg {
    fill: #231d46; /* Set the default fill color */
    transition: fill 0.3s ease; /* Smooth fill color change on hover */
  }

  /* &:hover svg {
    fill: #fff; 
  } */
`;
