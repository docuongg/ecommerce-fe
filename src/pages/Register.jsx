import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../features/api/authAPI"
import { useDispatch } from 'react-redux';
import { loginStart, loginFailure, loginSuccess } from '../features/slice/authSlice';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 15px 0;
  text-align: center;
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

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(fullname, username, password, passwordConfirmation, email)
      .then((response) => {
        login(email, password)
        .then((response) => {
          const { data } = response.data;
          dispatch(loginSuccess(data));
          localStorage.setItem("access-token", response.headers["access-token"]);
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
        })
        navigate("/")
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Titile>TẠO TÀI KHOẢN</Titile>
          <Form onSubmit={handleSubmit}>
            <Input placeholder="Họ tên" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Tên tài khoản" value={username} onChange={(e) => setUserName(e.target.value)}/>
            <Input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input type="password" placeholder="Xác nhận mật khẩu" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            <Agreement>
              Bằng việc đăng ký, bạn đã đồng ý với chúng tôi về{" "}
              <b>Điều khoản dịch vụ</b> & <b>Chính sách bảo mật</b>
            </Agreement>
            <Button type="submit">ĐĂNG KÝ</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
