import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

const Titile = styled.h1`
  margin: 10px;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: 70%;
  margin: 15px 0;
  padding: 10px 15px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 30%;
  margin: 15px 0 10px 0;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  background: teal;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  margin: 10px 0;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Login() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Titile>ĐĂNG NHẬP</Titile>
          <Form>
            <Input placeholder="Email / Tài khoản" />
            <Input placeholder="Mật khẩu" />
            <Button>ĐĂNG NHẬP</Button>
            <StyledLink>Quên mật khẩu?</StyledLink>
            <StyledLink to="/register">Tạo tài khoản</StyledLink>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
