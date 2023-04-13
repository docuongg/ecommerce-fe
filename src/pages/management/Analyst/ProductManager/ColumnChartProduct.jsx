import ReactApexChart from 'react-apexcharts';
import styled from "styled-components"
import React, { useState } from 'react';

function ColumnChartProduct({ data }) {

  const options = {
    chart: {
      type: 'column',
      height: 350
    },
    title: {
      text: "Total Purchased of Product",
      style: {
        fontSize: "16px",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: (data.popular_product.map(data => data.name))
    },
    yaxis: {
      title: {
        text: 'Total Purchased'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " units";
        }
      }
    }
  }

  const series = [
    {
      name: 'Total',
      data: (data.popular_product.map(data => data.total_purchased))
    }
  ]

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={330}
    />
  );
}

export default ColumnChartProduct;