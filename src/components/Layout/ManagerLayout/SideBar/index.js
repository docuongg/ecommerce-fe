import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  active: {
    backgroundColor: 'lightgray',
  }
});

function SideBar() {
  
  const classes = useStyles();
  const url = window.location.href
  const parts = url.split('/');

  const currentPage = parts[parts.length - 1]
  console.log(currentPage)

  return ( 
    <div style={{ display: 'flex', height: '90vh', maxWidth: '16vw'}}>
      <Sidebar backgroundColor="#fff">
        <Menu transitionDuration={700}>
          <SubMenu label="Statistic" icon={<LineAxisOutlinedIcon/>}>
            <ul>
              <Link to = "/dashboard/income">
                <MenuItem className={`${currentPage == 'income' ? classes.active : null}`} icon={<MonetizationOnOutlinedIcon/>}>
                  Income
                </MenuItem>
              </Link>
              <Link to = "/dashboard/products">  
                <MenuItem className={`${currentPage == 'products' ? classes.active : null}`} icon={<LeaderboardOutlinedIcon/>}>
                  Product
                </MenuItem>
              </Link>
            </ul>
          </SubMenu>
          <Link to = "/manager/category">
            <MenuItem className={`${currentPage == 'category' ? classes.active : null}`} icon={<CategoryOutlinedIcon/>}>
              Category
            </MenuItem>
          </Link>
          <Link to = "/manager/product">
            <MenuItem className={`${currentPage == 'product' ? classes.active : null}`} icon={<Inventory2OutlinedIcon/>}> 
              Product 
            </MenuItem>
          </Link>
          <Link to = "/manager/order">
            <MenuItem className={`${currentPage == 'order' ? classes.active : null}`} icon={<ListAltOutlinedIcon/>}> 
              Order
            </MenuItem>
          </Link>
          <Link to = "/manager/user">
            <MenuItem className={`${currentPage == 'user' ? classes.active : null}`} icon={<AccountCircleOutlinedIcon/>}> 
              Users 
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar;