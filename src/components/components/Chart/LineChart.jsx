import React, { useState } from "react";
import styled from "styled-components"
import ReactApexChart from "react-apexcharts";

const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 18px;
`

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
    <Container>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={480} />
    </Container>
  );
};

export default LineChart;