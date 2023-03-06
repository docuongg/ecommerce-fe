import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { loginStart, loginFailure, loginSuccess } from '../features/auth/authSlice';
import { login } from '../features/auth/authAPI'

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
  ${mobile({width: '80%'})}
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
  ${mobile({width: '80%'})}
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
  ${mobile({width: '50%'})}
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("")

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginStart());
    login(email, password)
      .then((response) => {
        const { data } = response.data;
        dispatch(loginSuccess(data));
        localStorage.setItem('access-token', response.headers['access-token'])
        localStorage.setItem('client', response.headers['client'])
        localStorage.setItem('uid', response.headers['uid'])
        navigate("/");
      })
      .catch((response) => {
        dispatch(loginFailure(response.message))
        setError("Invalid email or password")
      })
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Titile>ĐĂNG NHẬP</Titile>
          {error &&
            <div className="alert alert-danger">
              {error}
            </div>
          }
          <Form onSubmit={handleLogin}>
            <Input type="email" placeholder="Email / Tài khoản" id="Login-email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Mật khẩu" type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" >ĐĂNG NHẬP</Button>
            <StyledLink>Quên mật khẩu?</StyledLink>
            <StyledLink to="/register">Tạo tài khoản</StyledLink>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
