import LogoutIcon from '@mui/icons-material/Logout';
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { mobile } from "~/responsive";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '~/features/api/authAPI'
import { logoutSuccess, logoutFailure } from "~/features/slice/authSlice";

const Container = styled.div`
  height: 60px;
  background-color: #d2d2d2;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SeacrhContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    marginLeft: '-10px'
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", margin: "0 5px 0 0", textAlign: 'center'})}
`;

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
}

export default function Navbar() {
  const selectorStatus = useSelector((state) => state.auth.isLoggedIn);
  const selectorUser = useSelector((state) => state.auth.user);
  const selectorAmount = useSelector((state) => state.order.amount);
  const [isLoggedIn, setIsLoggedIn] = useState(selectorStatus)
  const [user, setUser] = useState(selectorUser)
  const [amount, setAmount] = useState(selectorAmount)
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        localStorage.clear();
        navigate("/login");
      })
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VI</Language>
          <SeacrhContainer>
            <Input placeholder="Tìm kiếm" />
            <Search style={{ fontSize: 16, color: "gray" }} />
          </SeacrhContainer>
        </Left>
        <Center>
          <Logo><Link style={linkStyle} to='/'>FAST FOOD</Link></Logo>
        </Center>
        <Right>
          {isLoggedIn ? (
            <>
              <h4>{user.user_name || user.email}</h4>
              <MenuItem>
                <Badge badgeContent={amount} color="primary">
                  <Link to='/cart' style={linkStyle}>
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle} to="" onClick = {handleLogout}><LogoutIcon/></Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link style={linkStyle} to="/login">Đăng nhập</Link>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle} to="/register">Đăng ký</Link>
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}
