import styled from "styled-components"
import { index } from "~/features/api/analyst/categoryAPI"
import { index as indexAnalystProduct } from "~/features/api/analyst/productAPI"
import { useEffect, useState } from "react";
import ReactApexChart  from 'react-apexcharts';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import PopularProducts from "./PopularProducts"
import ColumnChartProduct from "./ColumnChartProduct";

const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 18px;
  margin-bottom: 24px;
`
const RowContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 24px;
`

const ColContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
`

function ProductManager() {

  const [open, setOpen] = React.useState(true);

  const [columnChartData, setColumnChartData] = useState({
    popular_product: []
  })

  const [donusDataL, setDonusDataL] = useState({
    series: [],
    options: {
      chart: {
        id: "basic-donut-l",
      },
      labels: [],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
    },
  })

  const [donusDataR, setDonusDataR] = useState({
    series: [],
    options: {
      chart: {
        id: "basic-donut-r",
      },
      labels: [],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
    },
  })

  useEffect(() => {
    
    index()
    .then(response => {
      setDonusDataL({
        series: response.data.statistic_category.map(data => data.total_products),
        options: {
          chart: {
            id: "basic-donut-l",
          },
          labels: response.data.statistic_category.map(data => data.name),
          dataLabels: {
            enabled: true,
          },
          legend: {
            show: false // tắt legend
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '24px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    offsetY: 16
                  },
                  total: {
                    show: true,
                    label: 'Total Products',
                    color: '#888',
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  }
                }
              }
            },
          },
        },
      })

      setDonusDataR({
        series: response.data.statistic_category.map(data => data.total_income),
        options: {
          chart: {
            id: "basic-donut-l",
          },
          labels: response.data.statistic_category.map(data => data.name),
          dataLabels: {
            enabled: true,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '24px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    offsetY: 16
                  },
                  total: {
                    show: true,
                    label: 'Total Income',
                    color: '#888',
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  }
                }
              }
            },
          },
        },
      })
      return indexAnalystProduct();
    })
    .then(response => {
      console.log(response.data)
      // Thực hiện resolve Promise với dữ liệu response.data
      return new Promise((resolve) => resolve(response.data));
    })
    .then(data => {
      setColumnChartData(data);
      setOpen(false);
    })
    .catch(error => {
      console.log(error)
    })

  }, [])

  return (  
    <RowContainer>
      <ColContainer style={{flex: 2}}>
        <Container>
          <h6 style={{fontWeight: "700", marginLeft: "28px"}}>Product vs Total Income</h6>
          <RowContainer>
            <ColContainer >
              <ReactApexChart
                options={donusDataL.options}
                series={donusDataL.series}
                type="donut"
                width={350}
              />
            </ColContainer>
            <ColContainer>
              <ReactApexChart
                options={donusDataR.options}
                series={donusDataR.series}
                type="donut"
                width={475}
              />
            </ColContainer>
          </RowContainer>
        </Container>

        <Container>
          <RowContainer>
            <ColContainer >
              <ColumnChartProduct data={columnChartData} />
            </ColContainer>
          </RowContainer>
        </Container>
      </ColContainer>
      <ColContainer>
        <Container style={{flexGrow: 1}}>
          <PopularProducts />
        </Container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
      </ColContainer>
    </RowContainer>
  );
}

export default ProductManager;