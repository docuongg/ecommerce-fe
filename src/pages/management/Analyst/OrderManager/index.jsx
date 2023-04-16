import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { useEffect, useState } from "react";
import styled from "styled-components"
import ReactApexChart from "react-apexcharts";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { index } from "~/features/api/analyst/orderAPI"
import { StatsBox } from '~/components/components/statistic'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const options = ['Day', 'Month', 'Year'];

const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 18px;
  height: 100%
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
const SelectDiv = styled.div`
  margin-bottom: 12px
`

const ButtonDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center
`
export default function OrderManager() {

  const [openBackDrop, setOpenBackDrop] = React.useState(true);

  const [dateRange, setDateRange] = React.useState([
    dayjs('2023-04-1'),
    dayjs('2023-04-21'),
  ]);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    console.info(`${options[selectedIndex]}`);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // data chart
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [],
        tickAmount: 10
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ]
  });

  const [statisticData, setStatisticData] = useState({
    totalIncome: 0,
    totalOrders: 0,
    averageIncome: 0
  })

  useEffect(() => {
    index(dateRange[0].$d, dateRange[1].$d)
    .then(response => {
      const newChartData = {
        options: {
          chart: {
            id: "basic-bar"
          },
          title: {
            text: "Total Income and Total Orders",
            align: "center",
            style: {
              fontSize: "18px",
            },
          },
          xaxis: {
            tickAmount: 10
          },
          stroke: {
            curve: 'smooth'
          },
          yaxis: [
            {
              title: {
                text: "Income",
              },
            },
            {
              opposite: true,
              title: {
                text: "Orders",
              },
            },
          ],
        },
        series: [
          {
            name: "Total Income",
            type: "line"
          },
          {
            name: "Total Orders",
            type: "column",
            yaxisIndex: 1,
          },
        ]
      };

      if (selectedIndex == 0) {
        newChartData.options.xaxis.categories = response.data.by_day.map(data => data.day)
        newChartData.series[0].data = response.data.by_day.map(data => data.total_income)
        newChartData.series[1].data = response.data.by_day.map(data => data.total_orders)
      } else if (selectedIndex == 1) {  
        newChartData.options.xaxis.categories = response.data.by_month.map(data => data.month)
        newChartData.series[0].data = response.data.by_month.map(data => data.total_income)
        newChartData.series[1].data = response.data.by_month.map(data => data.total_orders)
      } else {
        newChartData.options.xaxis.categories = response.data.by_year.map(data => data.year)
        newChartData.series[0].data = response.data.by_year.map(data => data.total_income)
        newChartData.series[1].data = response.data.by_year.map(data => data.total_orders)
      }
      setChartData(newChartData);
      setStatisticData({
        totalIncome: response.data.general.total_income,
        totalOrders: response.data.general.total_orders,
        averageIncome: response.data.general.average_income
      })

      setOpenBackDrop(false);
    });
  }, [selectedIndex, dateRange])

  return (
    <div>
      <RowContainer>
        <ColContainer>
          <Container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                <DemoItem component="DateRangePicker">
                  <DateRangePicker 
                    calendars={1}
                    format="DD/MM/YYYY"
                    value={dateRange}
                    onChange={(newValue) => setDateRange(newValue)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Container>
        </ColContainer>
        <ColContainer>
          <Container>       
            <ButtonDiv>  
              <Button variant="contained"  >Search</Button>
              <Button variant="contained" >Export</Button>
            </ButtonDiv>    
          </Container>
        </ColContainer>
      </RowContainer>

      <RowContainer>
        <ColContainer>
          <StatsBox title={"Total Income"} stats={statisticData.totalIncome} description={"Tong doanh thu"} Icon={<MonetizationOnOutlinedIcon sx={{ fontSize: 96 }}/>}/>
        </ColContainer>
        <ColContainer>
          <StatsBox title={"Total Orders"} stats={statisticData.totalOrders} description={"Don hang da ban"} Icon={<LocalMallOutlinedIcon sx={{ fontSize: 96 }}/>} />
        </ColContainer>
        <ColContainer>
          <StatsBox title={"Average Income"} stats={statisticData.averageIncome} description={"Doanh thu trung binh moi ngay"} Icon={<TrendingUpOutlinedIcon sx={{ fontSize: 96 }}/>} />
        </ColContainer>
      </RowContainer>

      <RowContainer>
        <ColContainer>
          <Container>
            <SelectDiv className="d-flex flex-row-reverse">
              <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 99,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </SelectDiv>
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={560} />
          </Container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackDrop}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </ColContainer>
      </RowContainer>
    </div>
  );
}