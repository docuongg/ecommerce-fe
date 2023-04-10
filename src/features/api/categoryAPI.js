import axios from '../api/axios'

export const index = () => {
  return axios.get('/categories');
};

export const create = (name) => {
  return axios.post('/categories', {
    name: name
  });
}

export const update = (id, name) => {
  return axios.put(`/categories/${id}`, {
    name: name
  });
}

export const destroy = (id) => {
  return axios.delete(`/categories/${id}`);
}