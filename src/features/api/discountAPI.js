import axios from '../api/axios'

export const index = () => {
  return axios.get('/discounts');
};

export const create = (name, code, kind, value) => {
  return axios.post('/discounts', {
    name: name,
    code: code,
    kind: kind,
    value: value
  });
}

export const update = (id, name, code, kind, value) => {
  return axios.put(`/discounts/${id}`, {
    name: name,
    code: code,
    kind: kind,
    value: value
  });
}

export const destroy = (id) => {
  return axios.delete(`/discounts/${id}`);
}