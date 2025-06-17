import styled, { keyframes } from "styled-components";

// Define keyframe animation for scaling effect
const scaleUp = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
`;

export const MainTextBoxsFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  align-items: flex-start;
  width: fit-content;
  border-radius: 0.625rem;
  background: var(--dark-blue, #6a0dad);
  transition: background 0.3s ease-in-out;
  z-index: 2 !important;
  position: relative;
  overflow-y: auto !important;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      180deg,
      rgb(246, 245, 250) 0%,
      rgb(85, 86, 87) 100%
    );
    border-radius: 0.25rem;
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.25rem;
    width: 0.125rem;
  }
`;

export const LabelTextBoxsFiltersContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.625rem;
  color: #fff;
  z-index: 2 !important;
  position: relative;
  border-radius: 0.625rem;
  background: var(--dark-blue, #6a0dad);
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: var(--white, #fff);
    color: var(--dark-blue, rgb(67, 15, 104));

    // Trigger icon animation on hover
    .icon-animation {
      animation: ${scaleUp} 0.3s ease-in-out forwards;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
`;
