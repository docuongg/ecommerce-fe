import axios from '../api/axios'

export const all = () => {
  return axios.get('/products')
}

export const index = (categoryId) => {
  return axios.get(`/categories/${categoryId}/products`);
};

export const create = (categoryId, name, description, unit, price, avatar) => {
  const formData = new FormData();

  formData.append('product[name]', name);
  formData.append('product[description]', description);
  formData.append('product[unit]', unit);
  formData.append('product[price]', price);
  formData.append('product[category_id]', categoryId);
  formData.append('product[avatar]', avatar);

  return axios.post(`/products`, formData);
}

export const show = (id) => {
  return axios.get(`/products/${id}`);
}

export const update = (id, name, description, unit, price, categoryId, avatar) => {
  const formData = new FormData();

  formData.append('product[name]', name);
  formData.append('product[description]', description);
  formData.append('product[unit]', unit);
  formData.append('product[price]', price);
  formData.append('product[category_id]', categoryId);
  formData.append('product[avatar]', avatar);

  return axios.put(`/products/${id}`, formData);
}

export const destroy = (id) => {
  return axios.delete(`/products/${id}`);
}