const axios = require("axios");

export default {

getOneUser: id => {
    return axios.get(`/api/user/${id}`);
  },
  getLoggedUser: data => {
    return axios.put(`/api/user/login`, data);
  },

  getUserHash: email => {
    return axios.get(`/api/user/login/${email}`);
  },

  createUser: userObj => {
    return axios.post("/api/user", userObj);
  },
};