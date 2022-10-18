import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import styled, { css } from "styled-components";
import { display } from "@mui/system";

const Container = styled.div`
  height: 60px;
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
  border: 0.5px solid lightgray;
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
          <Logo><Link style={linkStyle} to='/'>BILUXURY</Link></Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link style={linkStyle} to="/login">Đăng nhập</Link>
          </MenuItem>
          <MenuItem>
            <Link style={linkStyle} to="/register">Đăng ký</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <Link to='/cart' style={linkStyle}>
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
