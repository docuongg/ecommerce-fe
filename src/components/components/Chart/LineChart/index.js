import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function LineChart() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 250]
      }
    ]
  });

  return (
    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
  );
};

export default LineChart;