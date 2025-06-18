import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  InfOfColumnChart,
  StylesOfColumnChart,
  TotalInfOfColumnChart,
} from "./ColumnChartStyle";
import CurrentMonth from "../../../elements/CurrentMonth/CurrentMonth";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import useResponsive from "../../../hooks/useResponsive";

interface ColumnChartProps {
  data: {
    series: ApexAxisChartSeries;
    categories: string[];
  };
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const isMobile = useResponsive(600);
  const isTablet = useResponsive(800);
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: ["#29ACAE", "#A15FE4", "#FF6F61"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: isMobile ? "35%" : isTablet ? "35%" : "30%",
        borderRadius: isMobile ? 4 : isTablet ? 6 : 6,
        borderRadiusApplication: "end",
      },
    },
    legend: {
      position: "top",
      offsetY: 5,
      height: 27,
      horizontalAlign: "left",
      fontFamily: "Primary Font",
      formatter: function (_legendName: string, opts: any) {
        const seriesName = opts.w.config.series[opts.seriesIndex].name;
        return `<span style="font-family:Primary Font; font-size: 0.875rem; margin:0 0.5rem">${seriesName}</span>`;
      },
      markers: {
        size: 8,
        shape: "circle",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: data.categories,
      axisBorder: {
        show: true,
        color: "#E0E0E0",
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        color: "#E0E0E0",
        height: 0,
      },
      labels: {
        style: {
          fontSize: "0.75rem",
          fontFamily: "Primary Font",
          fontWeight: 400,
          colors: "#A6A6A6",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "0.75rem",
          fontFamily: "Primary Font",
          fontWeight: 400,
          colors: "#A6A6A6",
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
      },
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    fill: {
      opacity: 1,
    },
    annotations: {
      xaxis: [
        {
          x: 0,
          strokeDashArray: 0,
          borderColor: "#E0E0E0",
        },
      ],
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "" + val;
        },
      },
    },
  };

  return (
    <StylesOfColumnChart>
      <InfOfColumnChart>
        <CurrentMonth />
        <TotalInfOfColumnChart>
          <MediumTypography
            fontWeight="700"
            text={"Total amount due"}
            color="#898DDA"
          />
          <MediumTypography
            fontWeight="700"
            fontSize="1.75rem"
            text={"$711,627"}
          />
        </TotalInfOfColumnChart>
      </InfOfColumnChart>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={data.series}
          type="bar"
          height={370}
        />
      </div>
    </StylesOfColumnChart>
  );
};

export default ColumnChart;
