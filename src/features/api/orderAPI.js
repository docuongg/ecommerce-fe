import axios from '../api/axios'

export const create = (user_id, totalPrice, products) => {
  return axios.post('/orders', {
    user_id: user_id,
    price: totalPrice,
    purchased_products_attributes: products.map((product) => {
      return {
        product_id: product.id,
        price: product.price,
        amount: product.amount
      }
    })
  });
}