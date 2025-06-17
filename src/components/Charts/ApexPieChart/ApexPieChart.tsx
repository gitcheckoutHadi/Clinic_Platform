import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { SvgPie } from "../../../elements/Icons";
import "./ApexPieChart.css";

export interface CircularProgressProps {
  progress: number; // Progress percentage (0-100)
}
const ApexPieChart: React.FC<CircularProgressProps> = ({ progress }) => {
  const [state, setState] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [progress],
    options: {
      chart: {
        height: 370,
        type: "radialBar",
        offsetY: -20,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 15,
            size: "70%",
          },
          dataLabels: {
            name: {
              fontSize: " 0.875rem",
              color: "#505355",
              offsetY: 15,
              fontFamily: "Primary Font",
              fontWeight: "400",
            },
            value: {
              show: true,
              color: "#505355",
              offsetY: -25,
              fontSize: "1.375rem",
              fontFamily: "Primary Font",
            },
          },
        },
      },
      fill: {
        type: "solid", // Use solid fill type
        colors: ["#231D46"], // Fill with desired color
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Complete"],
    },
  });

  useEffect(() => {}, [progress]);

  return (
    <div style={{ position: "relative" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={270}
      />
      {/* Custom SVG inside the chart */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          pointerEvents: "none", // Ensures it doesn't block interactions with the chart
        }}
      >
        <SvgPie />
      </div>
    </div>
  );
};

export default ApexPieChart;
