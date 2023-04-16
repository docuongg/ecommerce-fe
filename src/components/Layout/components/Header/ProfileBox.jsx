import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from "styled-components"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const Container = styled.div`
  width: 96px;
  display:flex;
  justify-content: space-between;
  border-radius: 24px;
  padding: 0 12px;
  float: right;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
    background-color:#aaa;
  };
  background-color: #EDE7F6;
`

const ProfileIconDiv = styled.div`
  width: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const LogoImg = styled.img`
  max-width: 100%; 
  max-height: 100%;
  position: absolute;
`

const IconDiv = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center; 
`
export default function ToolBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Container onClick={handleClick}>
      
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        {/* <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} */}
          
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            
        <ProfileIconDiv>
          <LogoImg src="https://logodix.com/logo/1931274.png"/>
        </ProfileIconDiv>
        <IconDiv>
          <SettingsOutlinedIcon/>
        </IconDiv>
     
          {/* </IconButton>
        </Tooltip> */}
      
      </Container>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
           Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/dashboard/income">
          <ListItemIcon>
            <WidgetsOutlinedIcon /> 
          </ListItemIcon>
          Manager
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}