import React from "react";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const StyledChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */
`;

export interface ChartDataItem {
  label: string;
  value: number;
  color?: string;
}

interface RadialBarChartProps {
  data: ChartDataItem[];
  totalLabel?: string;
}

const MultiSeriesRadialBarChart: React.FC<RadialBarChartProps> = ({
  data,
  totalLabel = "Total",
}) => {
  // Extract `series`, `labels`, and `colors` dynamically from the data array
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.label);
  const colors = data.map((item) => item.color);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 200,
      type: "radialBar",

      offsetY: -20,
      // sparkline: {
      //   enabled: true,
      // },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            fontFamily: "Primary Font",
          },
          value: {
            fontFamily: "Primary Font",
            fontSize: "16px",
          },
          total: {
            show: true,
            fontFamily: "Primary Font",
            label: totalLabel,
            formatter: function (w: any): string {
              return `${totalValue.toFixed(2)} %`; // Display the calculated total value
            },
          },
        },
      },
    },
    labels,
    colors, // Apply the colors to the chart series
  };
  const totalValue =
    data.reduce((sum, item) => sum + item.value, 0) / data.length;

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

export default MultiSeriesRadialBarChart;

// const chartData = [
//     { label: "Apples", value: 44 },
//     { label: "Oranges", value: 55 },
//     { label: "Bananas", value: 67 },
//     { label: "Berries", value: 83 },
//   ];

//   <div style={{ width: "400px", height: "400px" }}>
//   <MultiSeriesRadialBarChart
//     data={chartData}
//     totalLabel="Total"
//     totalValue={(w) => chartData.reduce((sum, item) => sum + item.value, 0)} // Calculate total dynamically
//   />
// </div>
