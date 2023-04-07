import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';

function SideBar() {

  return ( 
    <div style={{ display: 'flex', height: '90vh', minHeight: '400px', maxWidth: '12vw'}}>
      <Sidebar backgroundColor="#fff">
        <Menu transitionDuration={700}>
          <SubMenu label="Dashboard" icon={<LineAxisOutlinedIcon/>}>
            <MenuItem> Income </MenuItem>
            <MenuItem> Product </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar;