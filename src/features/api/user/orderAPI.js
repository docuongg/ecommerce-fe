import axios from '../axios'

export const index = async (id) => {
  try {
    const response = await axios.get(`/user/orders?${new URLSearchParams({id: id})}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
