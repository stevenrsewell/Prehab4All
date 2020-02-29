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
};


// import React from "react";

// import InstagramEmbed from 'react-instagram-embed';
// //import navbar

// function direct() {
//     return (
//         <div>
//             <Navbar />

//             <InstagramEmbed
//                 url='https://instagr.am/p/Zw9o4/'
//                 maxWidth={320}
//                 hideCaption={false}
//                 containerTagName='div'
//                 protocol=''
//                 injectScript
//                 onLoading={() => { }}
//                 onSuccess={() => { }}
//                 onAfterRender={() => { }}
//                 onFailure={() => { }}
//             />
//             {/* //videos & content */}
//             <Footer />

//         </div>
//     )
// }
