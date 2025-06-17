import styled from "styled-components";

export const MainCycleOverContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;

  width: 100%;
`;

export const BoxCycleOverViewShadow = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.9375rem;
  background: rgba(244, 241, 254, 0.35);
  justify-content: space-between;
`;

export const BoxCycleOverProfile = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;

export const CycleOverPaginatedContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;
interface Style {
  disable: boolean;
  dir?: string;
}

interface CircleStyle {
  background: string;
}

export const CycleOverPaginatedBox = styled.div<Style>`
  display: flex;
  fill: #d9d9d9;
  opacity: ${(props) => (props.disable ? "0.5" : "1")};
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disable ? "#D9D9D9" : "#D9D9D9")};
  border-radius: 0.3rem;
  transition: transform 0.3s ease, background-color 0.3s ease, fill 0.3s ease;
  .icon-stylePev {
    fill: ${(props) => (props.disable ? "#fff" : "#fff")};
    transform: rotate(${(props) => (props.dir === "rtl" ? "180deg " : "-0")});
    /* transform: rotate(90deg); */
  }
  .icon-styleNext {
    fill: ${(props) => (props.disable ? "#fff" : "#fff")};

    transform: rotate(${(props) => (props.dir === "rtl" ? " " : "180deg")});
  }

  &:hover {
    background-color: ${(props) => (props.disable ? "#231D4680" : "#231D46")};
    fill: ${(props) => (props.disable ? "#d9d9d9" : "#FFFFFF")};
    transform: ${(props) => (props.disable ? "none" : "scale(1.2)")};
  }

  &:active {
    background-color: ${(props) => (props.disable ? "transparent" : "#502bb3")};
    fill: ${(props) => (props.disable ? "#d9d9d9" : "#FFFFFF")};
    transform: ${(props) => (props.disable ? "none" : "scale(1.1)")};
    box-shadow: ${(props) =>
      props.disable ? "none" : "0 4px 10px rgba(104, 55, 244, 0.5)"};
  }
`;

export const CycleOverFreezingContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const CycleOverFreezingParentDetails = styled.div`
  display: flex;

  flex: 1;
  &:first-child {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const CycleOverFreezingDetails = styled.div`
  display: flex;
  flex: 1;
  &:first-child {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const CycleOverFreezingData = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.62rem;

  align-items: center;
`;

export const CycleOverFreezingCircle = styled.div<CircleStyle>`
  width: 0.625rem;
  height: 0.625rem;
  background: ${(props) => props.background};
  border-radius: 50%;
`;
