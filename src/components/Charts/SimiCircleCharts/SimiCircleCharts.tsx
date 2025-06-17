import React from "react";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const StyledChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface RadialBarChartProps {
  series: number[]; // Array of numbers to display in the chart
  labels?: string[]; // Labels for the chart (optional)
}

const SemiCircleCharts: React.FC<RadialBarChartProps> = ({
  series,
  labels = ["Complete"],
}) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#E19DFF",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            // color: "#444",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "0.875rem",
            fontFamily: "Primary Font",
            fontWeight: "400",
            color: "#505355",
            offsetY: 1,
          },
          value: {
            offsetY: -40,
            fontSize: "22px",
            fontFamily: "Primary Font",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      colors: ["#9F75FF"], // Solid fill color
      type: "solid", // Ensures no gradient
      opacity: 1,
    },
    labels,
  };

  return (
    <StyledChartContainer>
      <ApexCharts
        options={options}
        series={series}
        type="radialBar"
        height="350"
      />
    </StyledChartContainer>
  );
};

export default SemiCircleCharts;
