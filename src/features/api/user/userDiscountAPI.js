import axios from '../axios'

export const index = (user_id) => {
  return axios.get(`/users/${user_id}/user_discounts`);
};

export const create = (user_id, discount_id) => {
  return axios.post(`/users/${user_id}/user_discounts`, {
    user_id: user_id,
    discount_id: discount_id
  });
}

export const update = (user_id, user_discount_id, order_id) => {
  return axios.put(`/users/${user_id}/user_discounts/${user_discount_id}`, {
    order_id: order_id
  });
}