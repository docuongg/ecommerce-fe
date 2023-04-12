import axios from '../axios'

export const index = (from, to) => {

  const params = {
    from: from,
    to: to
  }
  return axios.get(`/analyst/orders?${new URLSearchParams(params)}`);
};
