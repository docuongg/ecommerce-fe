import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, login } from '~/features/api/authAPI'
import { logoutSuccess, loginSuccess } from '~/features/slice/authSlice';
import { clearCart } from '~/features/slice/cartSlice';

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

  const selectorStatus = useSelector((state) => state.auth.isLoggedIn);
  const selectorUser = useSelector((state) => state.auth.user);
  const selectorAmount = useSelector((state) => state.cart.amount);
  const [isLoggedIn, setIsLoggedIn] = useState(selectorStatus)
  const [user, setUser] = useState(selectorUser)
  const [amount, setAmount] = useState(selectorAmount)
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('uid')
    const password = localStorage.getItem('password')
    login(email, password)
      .then((response) => {
        const { data } = response.data;
        dispatch(loginSuccess(data));
        localStorage.setItem('access-token', response.headers['access-token'])
        localStorage.setItem('client', response.headers['client'])
        localStorage.setItem('uid', response.headers['uid'])
      })
      .catch(error => {
        localStorage.clear();
        navigate("/login");
      })
  }, [])

  useEffect(() => {
    setIsLoggedIn(selectorStatus)
    setUser(selectorUser)
    setAmount(selectorAmount)
  }, [selectorStatus, selectorUser, selectorAmount]);

  const handleLogout = (event) => {
    event.preventDefault();
    logout()
      .then((response) => {
        dispatch(logoutSuccess());
        dispatch(clearCart());
        localStorage.clear();
        navigate("/login");
      })
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Container>
          <IconDiv>
            <Badge badgeContent={amount} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
              <Link to='/cart' >
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </IconDiv>
          <ProfileIconDiv onClick={handleClick}>
            <LogoImg src="https://logodix.com/logo/1931274.png"/>
          </ProfileIconDiv>
        </Container>
        ) : (
          <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<LoginIcon />} href="/login" >
            Login
          </Button>
          <Button variant="outlined" endIcon={<SendIcon />}  href="/register" >
            Signup
          </Button>
        </Stack>
          
        )
      }
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
        <MenuItem onClick={handleClose} component="a" href="/profile">
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
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}