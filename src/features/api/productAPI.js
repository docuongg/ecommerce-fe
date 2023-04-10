import axios from '../api/axios'

export const all = () => {
  return axios.get('/products')
}

export const index = (categoryId) => {
  return axios.get(`/categories/${categoryId}/products`);
};

export const create = (categoryId, name, description, unit, price) => {
  return axios.post(`/products`, {
    name: name,
    description: description,
    unit: unit,
    price: price,
    category_id: categoryId
  });
}

export const update = (id, name, description, unit, price, categoryId) => {
  return axios.put(`/products/${id}`, {
    name: name,
    description: description,
    unit: unit,
    price: price,
    category_id: categoryId
  });
}

export const destroy = (id) => {
  return axios.delete(`/products/${id}`);
}