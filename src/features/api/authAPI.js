import axios from '../api/axios'

const API_URL = "http://localhost:3000/api/v1";

export const login = (email, password) => {
  return axios.post(`${API_URL}/auth/sign_in`, {
    email: email,
    password: password
  });
};

export const register = (fullname, username, password, passwordConfirmation, email) => {
  return axios.post(`${API_URL}/auth`, {
    full_name: fullname,
    email: email,
    user_name: username,
    password: password,
    password_confirmation: passwordConfirmation
  });
};

export const logout = () => {
  return axios.delete(`${API_URL}/auth/sign_out`);
};

export const changePassword = (email, newPassword, newPasswordConfirm) => {
  return axios.put(`${API_URL}/auth/password`, {
    email: email,
    password: newPassword,
    password_confirmation: newPasswordConfirm,
  })
}