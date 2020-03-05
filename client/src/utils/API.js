const axios = require("axios");

export default {


  getAllUsers: () => {
    return axios.get("/api/user");
  },

getOneUser: id => {
    return axios.get(`/api/user/${id}`);
  },
  getLoggedUser: data => {
    console.log(data);
    return axios.put(`/api/user/login`, data);
  },

  getUserHash: email => {
    console.log(email)
    return axios.get(`/api/user/login/${email}`);
  },

  createUser: userObj => {
    console.log(userObj);
    return axios.post(`/api/user`, userObj);
  },

  logout: user => {
    return axios.get("/logout")
  },

  getAllFavorites: (userId) => {
    return axios.get(`/api/favorites/${userId}`);
  },
  getFavorite: (userId, url) => {
 return axios.put(`/api/user/${userId}`,url);
  },
remove: (url)=> {
    return axios.delete(`/api/favorites/${url}`);
     }
  
  };