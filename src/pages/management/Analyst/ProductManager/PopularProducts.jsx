import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from "styled-components"
import { index } from "~/features/api/analyst/productAPI"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'lightgray',
      cursor: 'pointer'
    }
  },
  active: {
    backgroundColor: 'lightgray',
  }
});

const PopularProducts = () => {

  const classes = useStyles();

  const [activeIndex, setActiveIndex] = useState(1);
  const [products, setProducts] = useState([])

  const [chartData, setChartData] = useState({
    options : {
      chart: {
        id: 'area-time-series-chart',
        type: 'area',
        height: 350
      },
      xaxis: {
        categories: [],
        tickAmount: 5
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value.toFixed(2)}`
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    },
    series : [{
      name: 'Series A',
      data: []
    }]
  })

  useEffect(() => {
    index()
      .then(response => {
        setChartData({
          options : {
            chart: {
              id: 'area-time-series-chart',
              type: 'area',
              height: 350
            },
            title: {
              text: `Income of ${response.data.popular_product[1].name}`,
              style: {
                fontSize: "16px",
              },
            },
            xaxis: {
              tickAmount: 5,
              categories: response.data.popular_product[1].by_day.map(data => data.day)
            },
            yaxis: {
              labels: {
                formatter: (value) => `${value.toFixed(2)}`
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            }
          },
          series : [{
            name: 'Series A',
            data: response.data.popular_product[1].by_day.map(data => data.total_income)
          }]
        })

        setProducts(response.data.popular_product)
      })
  }, [])

  const handleClickProduct = (product, index) => {
    setChartData({
      options : {
        chart: {
          id: 'area-time-series-chart',
          type: 'area',
          height: 350
        },
        title: {
          text: `Income of ${product.name}`,
          align: "center",
          style: {
            fontSize: "12px",
          },
        },
        xaxis: {
          tickAmount: 5,
          categories: product.by_day.map(data => data.day)
        },
        yaxis: {
          labels: {
            formatter: (value) => `${value.toFixed(2)}`
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      },
      series : [{
        name: 'Series A',
        data: product.by_day.map(data => data.total_income)
      }]
    })

    setActiveIndex(index)
  }

  return (
    <>
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" />
      <TableContainer component={Paper} style={{height: '440px'}}>
        <Table style={{height: '100%', overflow: 'scroll'}}>
          <TableBody>
            {
              products.map((product, index) => {
                return (
                  <TableRow className={`${classes.root} ${index == activeIndex ? classes.active : null}`} onClick={() => handleClickProduct(product, index)}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.total_income}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PopularProducts;