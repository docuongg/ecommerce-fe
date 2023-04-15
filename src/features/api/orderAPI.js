import axios from '../api/axios'

export const index = () => {
  return axios.get('/orders');
};

export const create = (user_id, totalPrice, products) => {
  return axios.post('/orders', {
    user_id: user_id,
    total_price: totalPrice,
    purchased_products_attributes: products.map((product) => {
      return {
        product_id: product.id,
        price: product.price,
        amount: product.amount
      }
    })
  });
}

export const update = (id, status) => {
  return axios.put(`/orders/${id}`, {
    status: status
  });
}

export const destroy = (id) => {
  return axios.delete(`/orders/${id}`);
}