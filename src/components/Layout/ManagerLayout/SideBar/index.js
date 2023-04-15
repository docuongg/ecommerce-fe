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
  const [index, setIndex] = useState(1)
  const classes = useStyles();
  
  return ( 
    <div style={{ display: 'flex', height: '90vh', maxWidth: '16vw'}}>
      <Sidebar backgroundColor="#fff">
        <Menu transitionDuration={700}>
          <SubMenu label="Dashboard" icon={<LineAxisOutlinedIcon/>}>
            <ul>
              <Link to = "/dashboard/income">
                <MenuItem className={`${index == 1 ? classes.active : null}`} onClick={() => setIndex(1)} icon={<MonetizationOnOutlinedIcon/>}>
                  Income
                </MenuItem>
              </Link>
              <Link to = "/dashboard/product">
                <MenuItem className={`${index == 2 ? classes.active : null}`} onClick={() => setIndex(2)} icon={<LeaderboardOutlinedIcon/>}>
                  Product
                </MenuItem>
              </Link>
            </ul>
          </SubMenu>
          <Link to = "/manager/category">
            <MenuItem className={`${index == 3 ? classes.active : null}`} onClick={() => setIndex(3)} icon={<CategoryOutlinedIcon/>}>
              Category
            </MenuItem>
          </Link>
          <Link to = "/manager/product">
            <MenuItem className={`${index == 4 ? classes.active : null}`} onClick={() => setIndex(4)} icon={<Inventory2OutlinedIcon/>}> 
              Product 
            </MenuItem>
          </Link>
          <Link to = "/manager/order">
            <MenuItem className={`${index == 5 ? classes.active : null}`} onClick={() => setIndex(5)} icon={<ListAltOutlinedIcon/>}> 
              Order
            </MenuItem>
          </Link>
          <Link to = "/manager/user">
            <MenuItem className={`${index == 6 ? classes.active : null}`} onClick={() => setIndex(6)} icon={<AccountCircleOutlinedIcon/>}> 
              Users 
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar;