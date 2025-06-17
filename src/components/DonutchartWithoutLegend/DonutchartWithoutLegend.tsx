import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  MainDonutChComponent,
  PropertyChComponent,
  TitleDonut,
  TotalDonut,
} from "./DonutchartWithoutLegendStyle";
import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

type ChartData = {
  chartLabels: string;
  chartSeries: number;
  chartColor: string;
};

type DonutChartProps = {
  charts: ChartData[];
  title: string;
  titlebgcolor: string;
};

const DonutchartWithoutLegend: React.FC<DonutChartProps> = ({
  charts,
  title,
  titlebgcolor,
}) => {
  const chartLabels = charts.map((item) => item.chartLabels);
  const chartSeries = charts.map((item) => item.chartSeries);
  const chartColors = charts.map((item) => item.chartColor);

  const [state, setState] = React.useState({
    series: chartSeries,
    options: {
      chart: {
        width: 320,
        type: "donut" as const,
      },
      labels: chartLabels,
      colors: chartColors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      tooltip: {
        custom: function ({ series, seriesIndex }: any) {
          return `<div style="padding: 5px 10px;">${chartLabels[seriesIndex]}: ${series[seriesIndex]}</div>`;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        show: false,
      },
    },
  });

  return (
    <MainDonutChComponent>
      <TitleDonut background={titlebgcolor}>
        <MediumTypography text={title} fontWeight="700" color="#000" />
      </TitleDonut>
      <PropertyChComponent>
        <TotalDonut>
          <MediumTypography
            text={state.series.reduce((a, b) => a + b, 0).toString()}
            fontWeight="700"
            fontSize="1.125rem"
            lineHeight="120%"
          />
        </TotalDonut>

        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={310}
          />
        </div>
      </PropertyChComponent>
    </MainDonutChComponent>
  );
};

export default DonutchartWithoutLegend;
