import axios from '../api/axios'

export const index = () => {
  return axios.get('/categories');
};

export const create = (avatar, name) => {
  const formData = new FormData();

  formData.append('category[name]', name);
  formData.append('category[avatar]', avatar);

  return axios.post('/categories', formData);
}

export const update = (id, name, avatar) => {
  const formData = new FormData();

  formData.append('category[name]', name);
  formData.append('category[avatar]', avatar);

  return axios.put(`/categories/${id}`, formData);
}

export const destroy = (id) => {
  return axios.delete(`/categories/${id}`);
}