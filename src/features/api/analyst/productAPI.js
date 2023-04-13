import axios from '../axios'

export const index = async () => {
  try {
    const response = await axios.get('/analyst/products');
    return response;
  } catch (error) {
    console.error(error);
  }
};
