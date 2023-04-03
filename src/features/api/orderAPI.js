import axios from '../api/axios'

export const create = (user_id, products) => {
  return axios.post('/orders', {
    user_id: user_id,
    purchased_products_attributes: products.map((product) => {
      return {
        product_id: product.id,
        price: product.price,
        amount: product.amount
      }
    })
  });
}