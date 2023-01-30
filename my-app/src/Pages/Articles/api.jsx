import axios from "axios";

export const getAddress = (params = {}) => {
  return axios.get(`https://kindmeal-db.onrender.com/address`, {
    params: {
      _page: params.page,
      _limit: params.limit,
        q:params.find || params.country}
    })
   
};

export const getMeal = (params = {}) => {
  return axios.get(`https://reduxapi.onrender.com/meal`, {
    params: {
      _page: params.page,
      _limit: params.limit,
        q:params.find || params.country}
    })
   
};
