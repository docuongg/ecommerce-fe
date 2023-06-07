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
import { useEffect, useState, useRef } from "react";
import styled from "styled-components"
import ReactApexChart from "react-apexcharts";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { index } from "~/features/api/analyst/orderAPI"
import { StatsBox } from '~/components/components/statistic'
import jsPDF from 'jspdf';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import FinancialReport from './FinancialReport';
import 'jspdf-autotable';
import { useSelector } from 'react-redux';

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
    dayjs('2023-04-30'),
  ]);

  const user = useSelector(state => state.auth.user)

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

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const chartRef = useRef(null);

  const exportPDF = () => {
  
    const chart = chartRef.current.chart;
    const pdf = new jsPDF();

    pdf.setFont('Times');
    const d = new Date()
    pdf.text('KFC Store', 10, 10);
    pdf.text('D/c: 10km, Tran Phu, Ha Dong', 10, 20);
    pdf.text('Cong hoa xa hoi chu nghia Viet Nam', 100, 10);
    pdf.text('Doc lap - Tu do - Hanh phuc', 110, 20);
    pdf.text(`Ha Noi, ngay ${d.getDate()} thang ${d.getMonth() + 1} nam ${d.getFullYear()}`, 120, 30);
    pdf.text('BAO CAO DOANH THU', 75, 45);
    pdf.text('BAO CAO DOANH THU', 75, 45);
    pdf.text('BAO CAO DOANH THU', 75, 45);


    pdf.text('Kinh gui: Giam doc chuoi cua hang KFC', 50, 55);
    pdf.text(`Toi la: ${user.full_name}`, 10, 65);
    pdf.text('Chuc vu: Quan li chi nhanh', 10, 75);
    pdf.text(`Hom nay toi lap bao cao doanh thu cua cua hang tu ${dateRange[0].$d.getDate()+ '/' + (dateRange[0].$d.getMonth() + 1) + '/' + dateRange[0].$d.getFullYear()} den ${dateRange[1].$d.getDate()+ '/' + (dateRange[1].$d.getMonth() + 1) + '/' + dateRange[1].$d.getFullYear()} .`, 10, 85);

    pdf.text('1. Thong ke hoat dong ban bang', 10, 95);
    pdf.autoTable({
      startY: 100,
      head: [['Type', 'Total Orders', 'Total Income', 'Extra Fee']], 
      body: [
        ['Success', `${statisticData.totalOrders}`, `${statisticData.totalIncome}`, '0'],
        ['Canceled', '0', '0', '0'],
        ['Total', `${statisticData.totalOrders}`, `${statisticData.totalIncome}`, '0']
      ]
    });

    pdf.text('2. Bieu do duong the hien doanh thu so voi so don hang', 10, 140);
    
    pdf.text('3. Nhan xet, danh gia', 10, 250);
    pdf.text('........................................................................................................................', 10, 260);
  
    pdf.text('Nguoi lap bao cao', 140, 270);
    pdf.text('(Ky, ghi ro ho ten)', 140, 280);

    chart.dataURI().then(({ imgURI, blob }) => {
      pdf.addImage(imgURI, 'PNG', 5, 145, 200, 100);
      pdf.save("pdf-chart.pdf");
    });
  };

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
              <Button variant="contained" onClick={exportPDF} >Export</Button>
              {/* <button onClick={exportPDF}>Export to PDF</button> */}
              {/* <App/> */}
              {/* <Chart/> */}
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
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={560} ref={chartRef} />
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