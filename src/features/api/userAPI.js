import axios from '../api/axios'

export const index = () => {
  return axios.get('/users');
};

export const create = (fullName, username, password, password_confirmation, email, address) => {
  return axios.post('/users', {
    full_name: fullName,
    username: username,
    password: password,
    password_confirmation: password_confirmation,
    email: email,
    address: address
  });
}

export const update = (id, fullName, username, email, address) => {
  return axios.put(`/users/${id}`, {
    full_name: fullName,
    username: username,
    email: email,
    address: address
  });
}

export const destroy = (id) => {
  return axios.delete(`/users/${id}`);
}