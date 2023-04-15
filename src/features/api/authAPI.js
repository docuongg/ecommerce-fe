import axios from '../api/axios'

const API_URL = "http://localhost:3000/api/v1";

export const login = (email, password) => {
  return axios.post(`${API_URL}/auth/sign_in`, {
    email: email,
    password: password
  });
};

export const register = (fullname, username, password, passwordConfirmation, email, address) => {
  return axios.post(`${API_URL}/auth`, {
    full_name: fullname,
    email: email,
    user_name: username,
    password: password,
    password_confirmation: passwordConfirmation,
    address: address
  });
};

export const logout = () => {
  return axios.delete(`${API_URL}/auth/sign_out`);
};