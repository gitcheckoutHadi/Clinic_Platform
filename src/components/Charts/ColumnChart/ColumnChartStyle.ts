import styled from "styled-components";

export const StylesOfColumnChart = styled.div`
  position: relative;
  .apexcharts-yaxis {
    /* display: none; */
  }
  .apexcharts-gridlines-vertical {
    /* display: none; */
  }
  .apexcharts-grid .apexcharts-gridline {
    display: none;
  }

  .apexcharts-grid .apexcharts-gridline:first-child {
    display: block;
  }
  .apexcharts-menu-icon {
    /* display: none; */
  }
  .apexcharts-menu-icon {
    margin-top: -9rem;
  }
  .apexcharts-menu {
    margin-top: -4rem;
  }
  /* .apexcharts-toolbar {
    display: none;
  } */
  .apexcharts-legend {
    overflow-y: hidden;
  }
`;

export const InfOfColumnChart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const TotalInfOfColumnChart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`;
