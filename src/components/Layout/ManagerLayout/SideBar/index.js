import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
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
  
  return ( 
    <div style={{ display: 'flex', height: '90vh', maxWidth: '16vw'}}>
      <Sidebar backgroundColor="#fff">
        <Menu transitionDuration={700}>
          <SubMenu label="Dashboard" icon={<LineAxisOutlinedIcon/>}>
            <ul>
              <Link to = "/dashboard/income">
                <MenuItem className={classes.active} icon={<MonetizationOnOutlinedIcon/>}>
                  Income
                </MenuItem>
              </Link>
              <Link to = "/dashboard/product">
                <MenuItem icon={<LeaderboardOutlinedIcon/>}>
                  Product
                </MenuItem>
              </Link>
            </ul>
          </SubMenu>
          <Link to = "/manager/category">
            <MenuItem icon={<CategoryOutlinedIcon/>}>
              Category
            </MenuItem>
          </Link>
          <Link to = "/manager/product">
            <MenuItem icon={<Inventory2OutlinedIcon/>}> 
              Product 
            </MenuItem>
          </Link>
          <MenuItem icon={<AccountCircleOutlinedIcon/>}> Employee </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar;