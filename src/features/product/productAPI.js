import axios from '../api/axios'

export const index = (categoryId) => {
  return axios.get(`/categories/${categoryId}/products`);
};