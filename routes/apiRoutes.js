
const db = require("../models");
const axios = require("axios");


module.exports = function(app) {



    app.get("/api/user", (req, res) => {
        db.User.find({})
          .populate("favoritevideos")
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.send(err);
          });
      });
      app.get("/api/user/login/:email", (req, res) => {
        db.User.findOne({ email: req.params.email })
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.send(err);
          });
      });



      app.put("/api/users/:id", (req, res) => {
        console.log(req.body);
    
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: {
              favoritevideos: req.body
            },
          },
          { new: true })
          .then(dbUser => {
            res.json(dbUser);
            console.log(dbUser)
          }).catch(err => {
            res.json(err);
          });
      });
    
    
   
};