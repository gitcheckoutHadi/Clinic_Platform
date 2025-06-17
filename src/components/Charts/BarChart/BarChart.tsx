import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  HeaderBarChartInfo,
  StyleOfBarChart,
  TextHeaderBarChartInfo,
} from "./BarChartStyle";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

interface BarChartProps {
  series: { name: string; data: number[] }[];
  categories: string[];
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ series, categories, title }) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: "100%",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 5,
            style: {
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#898DDA",
              fontFamily: "Primary Font",
            },
            formatter: function (val?: string): string {
              const num = Number(val);
              return `Total: ${isNaN(num) ? 0 : num}`;
            },
          },
        },
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: title ?? "Bar Chart",
    },
    colors: ["#29ACAE", "#A15FE4", "#FFC7BB"],
    xaxis: {
      categories: categories,
      position: "top",
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: (val: string | number) => `${val}`,
        style: {
          fontSize: "12px",
          fontFamily: "Primary Font",
          fontWeight: 400,
          colors: ["#A6A6A6"],
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}K`,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };
  const total = series
    .flatMap((s) => s.data)
    .reduce((sum, val) => sum + val, 0);

  return (
    <StyleOfBarChart>
      <HeaderBarChartInfo>
        <TextHeaderBarChartInfo>
          <MediumTypography text={"X: Count of gametes"} color="#A6A6A6" />
          <MediumTypography text={"Y: Type of gametess"} color="#A6A6A6" />
        </TextHeaderBarChartInfo>
        <TextHeaderBarChartInfo>
          <MediumTypography
            text={"Daily total gametes"}
            color="#898DDA"
            fontWeight="700"
          />
          <MediumTypography
            text={total}
            color="#231D46"
            fontWeight="700"
            lineHeight="120%"
            fontSize="1.75rem"
          />
        </TextHeaderBarChartInfo>
      </HeaderBarChartInfo>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={400}
        />
      </div>
    </StyleOfBarChart>
  );
};

export default BarChart;
