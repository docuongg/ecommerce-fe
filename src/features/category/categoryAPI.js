import axios from '../api/axios'

export const index = () => {
  return axios.get('/categories');
};