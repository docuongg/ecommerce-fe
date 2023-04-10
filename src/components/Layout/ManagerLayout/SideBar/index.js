import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function SideBar() {

  return ( 
    <div style={{ display: 'flex', height: '90vh', maxWidth: '16vw'}}>
      <Sidebar backgroundColor="#fff">
        <Menu transitionDuration={700}>
          <SubMenu label="Dashboard" icon={<LineAxisOutlinedIcon/>}>
            <Link to = "/dashboard">
              <MenuItem icon={<MonetizationOnOutlinedIcon/>}>
                Income
              </MenuItem>
            </Link>
            <MenuItem> Product </MenuItem>
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