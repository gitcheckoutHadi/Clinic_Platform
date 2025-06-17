import styled from "styled-components";

export const StyleOfBarChart = styled.div`
  width: 100%;
  position: relative;
  .apexcharts-series {
    max-width: 1.2rem !important;
    width: 1.2rem !important;
    min-width: 1.2rem !important;
    border-radius: 2rem;
  }
  .apexcharts-grid .apexcharts-gridline {
    display: none;
  }

  /* .apexcharts-grid .apexcharts-gridline:first-child {
    display: block;
  } */
  .apexcharts-gridlines-horizontal {
    display: none !important;
  }
  .apexcharts-grid .apexcharts-gridline:nth-of-type(1) {
    display: none;
  }
  .apexcharts-bar-area {
    width: 10px !important; /* Adjust to your desired width */
  }
  .apexcharts-series {
    width: 1rem !important;
  }
  .apexcharts-legend {
    display: none;
  }
  .apexcharts-ycrosshairs {
    display: none !important;
  }
  .apexcharts-title-text {
    color: var(--black, #000);

    font-family: "Primary Font";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.35rem */
  }
  .apexcharts-xaxis-texts-g {
    display: none;
  }
  .apexcharts-gridline {
    display: none !important;
    opacity: 0 !important;
  }

  .apexcharts-inner :nth-child(4) line {
    display: none !important;
    opacity: 0 !important;
  }

  /* global.css or App.css */
  .apexcharts-yaxis-label {
    fill: #a6a6a6 !important; /* ApexCharts uses 'fill' for SVG text color */
    font-family: "Primary Font", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .apexcharts-bar-series {
    background: yellow !important;
    fill: rgba(0, 255, 128, 0.2) !important;
  }
  .apexcharts-canvas {
    /* background: green; */
    position: relative;
  }
`;

export const HeaderBarChartInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 3rem;
  margin-bottom: -3rem; */
  position: absolute;
  z-index: 2;
  top: 2.5rem;
  left: 0;
  padding-left: 0.7rem;
`;
export const TextHeaderBarChartInfo = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  &:last-child {
    gap: 0.62rem;
  }
`;
