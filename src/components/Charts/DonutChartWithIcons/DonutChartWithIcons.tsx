import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ReactDOMServer from "react-dom/server";
import { SvgNavigatorArrow, SvgPie } from "../../../elements/Icons";
import CustomToolTip from "./CustomToolTip";
import { RecoilRoot } from "recoil";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import "./DonutChartWithIcons.css";
import useResponsive from "../../../hooks/useResponsive";

export interface DonutChartWithIconsInterface {
  data: {
    label: string;
    value: number;
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string;
  }[];
}

const DonutChartWithIcons: React.FC<DonutChartWithIconsInterface> = ({
  data,
}) => {
  const breakpoint = 800; // You can make this a prop too
  const isMobile = useResponsive(breakpoint);
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.label); // Ensure this contains ["OOC", "Zygotes", "Sperm Vails", "Embryos"]
  const colors = data.map((item) => item.color);
  const totalSum = data.reduce((sum, item) => sum + item.value, 0);

  const options: ApexOptions = {
    chart: {
      width: 200,
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%", // Adjust this value to make the donut thinner or thicker
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true, // Show the stroke
      width: 0, // Adjust the stroke width
      lineCap: "round", // Make the stroke edges rounded
      curve: "stepline",
    },
    colors: colors, // Set colors for the chart segments
    labels: labels, // Add labels here
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: isMobile ? "bottom" : "left",
      offsetY: isMobile ? 15 : 105,
      height: isMobile ? 100 : 200,
      horizontalAlign: "left",
      fontFamily: "Primary Font",
      formatter: function (legendName: string, opts: any) {
        const label = opts.w.globals.labels[opts.seriesIndex]; // Access the label correctly
        const value = opts.w.globals.series[opts.seriesIndex];

        return `<span style="font-size: 0.875rem; margin-left:0.3rem">${label}</span>  <span style="opacity: 0.4; font-size: 0.875rem; margin-right: 3rem"> | ${value}</span>`;
      },
      markers: {
        size: 6,
      },
    },
    tooltip: {
      custom: function ({ seriesIndex, w }) {
        const { label, svg, color } = data[seriesIndex];
        const seriesValue = series[seriesIndex];

        const tooltipHtml = ReactDOMServer.renderToStaticMarkup(
          <RecoilRoot>
            <CustomToolTip
              svgIcon={svg}
              label={label}
              series={seriesValue}
              background={color}
            />
          </RecoilRoot>
        );

        return `
          <div style="
            border: none !important;
            outline: none !important;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(209, 209, 209, 0.20) 100%);
            box-shadow: 0px 0px 4px 0px rgba(194, 203, 220, 0.20) inset;
            backdrop-filter: blur(10px);
            opacity:1
            
          ">
            ${tooltipHtml}
          </div>
        `;
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      {/* Data Info at Bottom Right */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "35%" : "48%",
          right: isMobile ? "8rem" : "2.5rem",
          // left: "68%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "0.38rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MediumTypography
          text={totalSum}
          fontSize="2.25rem"
          fontWeight="700"
          lineHeight="120%"
        />
        <MediumTypography
          text={"Total Gametes"}
          fontWeight="700"
          whiteSpace="nowrap"
        />
      </div>

      {/* Chart */}
      <div
        className="chart-wrap"
        style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={isMobile ? 460 : 490}
          />
        </div>
      </div>
    </div>
  );
};

export default DonutChartWithIcons;
