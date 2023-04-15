import axios from '../api/axios'
export const index = (orderId) => {
  return axios.get(`orders/${orderId}/purchased_products`)
}