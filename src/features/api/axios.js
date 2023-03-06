import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // URL của server
});

// Thêm interceptor để tự động thêm access-token vào các request
instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');
    if (accessToken && client && uid) {
      config.headers['access-token'] = accessToken;
      config.headers['client'] = client;
      config.headers['uid'] = uid;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;